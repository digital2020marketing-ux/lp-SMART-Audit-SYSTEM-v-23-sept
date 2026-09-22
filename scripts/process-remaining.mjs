import fs from 'fs';
import path from 'path';
import https from 'https';
import sharp from 'sharp';

const publicImagesDir = path.join(process.cwd(), 'public', 'images');
const srcImagesDir = path.join(process.cwd(), 'src', 'assets', 'images');

// Ensure directories exist
if (!fs.existsSync(publicImagesDir)) fs.mkdirSync(publicImagesDir, { recursive: true });
if (!fs.existsSync(srcImagesDir)) fs.mkdirSync(srcImagesDir, { recursive: true });

const additionalImages = [
  {
    name: '5-AI-TOOLS-dan-SIMULASI.jpg',
    urls: [
      'https://smartbook.id/kumpulan-gambar/5-AI-TOOLS-dan%20-SIMULASI.jpg',
      'https://smartbook.id/kumpulan-gambar/5-AI-TOOLS-dan%20-SIMULASI.JPG',
      'https://smartbook.id/kumpulan-gambar/5-AI-TOOLS-dan-SIMULASI.jpg'
    ]
  },
  {
    name: 'CAPA.jpg',
    urls: [
      'https://smartbook.id/kumpulan-gambar/CAPA%20.jpg',
      'https://smartbook.id/kumpulan-gambar/CAPA%20.JPG',
      'https://smartbook.id/kumpulan-gambar/CAPA.jpg'
    ]
  }
];

function downloadUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadUrl(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status ${res.statusCode}`));
      }
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function processLocalOrDownload() {
  for (const item of additionalImages) {
    let buffer = null;
    for (const url of item.urls) {
      try {
        console.log(`Trying ${url}...`);
        buffer = await downloadUrl(url);
        console.log(`Success downloading ${item.name} (${Math.round(buffer.length / 1024)} KB)`);
        break;
      } catch (err) {
        console.log(`Failed ${url}: ${err.message}`);
      }
    }

    if (!buffer) {
      // Check if local file exists in public/images
      const localFile = path.join(publicImagesDir, item.name);
      if (fs.existsSync(localFile)) {
        const stats = fs.statSync(localFile);
        if (stats.size > 1000) {
          buffer = fs.readFileSync(localFile);
          console.log(`Using existing local file ${item.name} (${Math.round(buffer.length / 1024)} KB)`);
        }
      }
    }

    if (buffer && buffer.length > 1000) {
      try {
        const baseName = path.parse(item.name).name;
        // Optimize WebP
        const webpBuffer = await sharp(buffer)
          .resize({ width: 1200, withoutEnlargement: true })
          .webp({ quality: 80 })
          .toBuffer();

        // Optimized JPG
        const jpgBuffer = await sharp(buffer)
          .resize({ width: 1200, withoutEnlargement: true })
          .jpeg({ quality: 82, progressive: true })
          .toBuffer();

        fs.writeFileSync(path.join(publicImagesDir, `${baseName}.webp`), webpBuffer);
        fs.writeFileSync(path.join(publicImagesDir, `${baseName}.jpg`), jpgBuffer);
        fs.writeFileSync(path.join(srcImagesDir, `${baseName}.webp`), webpBuffer);
        fs.writeFileSync(path.join(srcImagesDir, `${baseName}.jpg`), jpgBuffer);

        console.log(`Saved WebP and JPG for ${item.name}`);
      } catch (e) {
        console.error(`Error processing sharp for ${item.name}: ${e.message}`);
      }
    }
  }
}

processLocalOrDownload();
