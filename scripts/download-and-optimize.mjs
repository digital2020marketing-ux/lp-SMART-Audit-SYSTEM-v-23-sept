import https from 'https';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const urls = [
  { name: 'gambar-dashbord-SAS.jpg', url: 'https://smartbook.id/kumpulan-gambar/gambar-dashbord-SAS.jpg' },
  { name: '5-AI-TOOLS-dan-SIMULASI.jpg', url: 'https://smartbook.id/kumpulan-gambar/5-AI-TOOLS-dan-SIMULASI.jpg' },
  { name: '9-modul-dan-audio.jpg', url: 'https://smartbook.id/kumpulan-gambar/9-modul-dan-audio.jpg' },
  { name: '9-modul.jpg', url: 'https://smartbook.id/kumpulan-gambar/9-modul.jpg' },
  { name: 'CAPA.jpg', url: 'https://smartbook.id/kumpulan-gambar/CAPA.jpg' },
  { name: 'Cek-List-Audit-dan-Simulasi.jpg', url: 'https://smartbook.id/kumpulan-gambar/Cek-List-Audit-dan-Simulasi.jpg' },
  { name: 'EVALUASI-PRE-TEST-DAN-POST-TEST.jpg', url: 'https://smartbook.id/kumpulan-gambar/EVALUASI-PRE-TEST-DAN-POST-TEST.jpg' },
  { name: 'Generator-Laporan-Temuan-PLOR.jpg', url: 'https://smartbook.id/kumpulan-gambar/Generator-Laporan-Temuan-PLOR.jpg' },
  { name: 'ISO-19011.jpg', url: 'https://smartbook.id/kumpulan-gambar/ISO-19011.jpg' },
  { name: 'podcast-audio-ulasan-mendalam.jpg', url: 'https://smartbook.id/kumpulan-gambar/podcast-audio-ulasan-mendalam.jpg' },
  { name: 'worksheet-dan-formulir-AMI.jpg', url: 'https://smartbook.id/kumpulan-gambar/worksheet-dan-formulir-AMI.jpg' },
  { name: 'testi1.png', url: 'https://smartbook.id/kumpulan-gambar/testi1.png' },
  { name: 'testi2.png', url: 'https://smartbook.id/kumpulan-gambar/testi2.png' },
  { name: 'testi3.png', url: 'https://smartbook.id/kumpulan-gambar/testi3.png' },
  { name: 'testi4.png', url: 'https://smartbook.id/kumpulan-gambar/testi4.png' },
  { name: 'testi5.png', url: 'https://smartbook.id/kumpulan-gambar/testi5.png' },
  { name: 'testi6.png', url: 'https://smartbook.id/kumpulan-gambar/testi6.png' },
  { name: 'testi-wa-1.png', url: 'https://smartbook.id/kumpulan-gambar/testi-wa-1.png' },
  { name: 'testi-wa-2.png', url: 'https://smartbook.id/kumpulan-gambar/testi-wa-2.png' },
  { name: 'testi-wa-3.png', url: 'https://smartbook.id/kumpulan-gambar/testi-wa-3.png' },
  { name: 'testi-wa-4.png', url: 'https://smartbook.id/kumpulan-gambar/testi-wa-4.png' },
];

function download(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(download(res.headers.location));
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status ${res.statusCode}`));
      }
      const data = [];
      res.on('data', (chunk) => data.push(chunk));
      res.on('end', () => resolve(Buffer.concat(data)));
    }).on('error', reject);
  });
}

const assetsDir = path.resolve('src/assets/images');
const publicDir = path.resolve('public/images');

fs.mkdirSync(assetsDir, { recursive: true });
fs.mkdirSync(publicDir, { recursive: true });

async function run() {
  for (const item of urls) {
    console.log(`Downloading ${item.name} from ${item.url}...`);
    try {
      const buffer = await download(item.url);
      console.log(`Downloaded ${item.name} (${Math.round(buffer.length / 1024)} KB)`);

      const baseName = path.parse(item.name).name;
      const ext = path.parse(item.name).ext;

      // WebP optimized version
      const webpName = `${baseName}.webp`;
      const webpBuffer = await sharp(buffer)
        .resize({ width: 1200, withoutEnlargement: true })
        .webp({ quality: 80, effort: 6 })
        .toBuffer();

      fs.writeFileSync(path.join(assetsDir, webpName), webpBuffer);
      fs.writeFileSync(path.join(publicDir, webpName), webpBuffer);

      // Compressed JPG / PNG fallback
      let compBuffer;
      if (ext === '.png') {
        compBuffer = await sharp(buffer)
          .resize({ width: 1200, withoutEnlargement: true })
          .png({ quality: 80, compressionLevel: 9 })
          .toBuffer();
      } else {
        compBuffer = await sharp(buffer)
          .resize({ width: 1200, withoutEnlargement: true })
          .jpeg({ quality: 80, mozjpeg: true })
          .toBuffer();
      }

      fs.writeFileSync(path.join(assetsDir, item.name), compBuffer);
      fs.writeFileSync(path.join(publicDir, item.name), compBuffer);

      console.log(`  Saved WebP: ${Math.round(webpBuffer.length / 1024)} KB | Optimized ${ext}: ${Math.round(compBuffer.length / 1024)} KB`);
    } catch (err) {
      console.error(`  Error on ${item.name}:`, err.message);
    }
  }
  console.log('All images downloaded and optimized successfully!');
}

run();
