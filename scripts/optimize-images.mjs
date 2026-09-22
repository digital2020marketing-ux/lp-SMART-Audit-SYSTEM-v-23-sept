import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imgDir = path.resolve('src/assets/images');
const publicDir = path.resolve('public/images');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const files = fs.readdirSync(imgDir);

async function optimize() {
  console.log('Optimizing images...');
  for (const file of files) {
    const filePath = path.join(imgDir, file);
    const stat = fs.statSync(filePath);
    if (!stat.isFile()) continue;

    const ext = path.extname(file).toLowerCase();
    const baseName = path.basename(file, ext);

    console.log(`Processing ${file} (${Math.round(stat.size / 1024)} KB)...`);

    try {
      const image = sharp(filePath);
      const metadata = await image.metadata();

      // Resize if too large (e.g. > 1200px width)
      const targetWidth = metadata.width && metadata.width > 1200 ? 1200 : undefined;

      // 1. Generate optimized WebP
      const webpName = `${baseName}.webp`;
      const webpPath = path.join(imgDir, webpName);
      const publicWebpPath = path.join(publicDir, webpName);

      let pipelineWebp = sharp(filePath);
      if (targetWidth) {
        pipelineWebp = pipelineWebp.resize({ width: targetWidth, withoutEnlargement: true });
      }
      await pipelineWebp
        .webp({ quality: 80, effort: 6 })
        .toFile(webpPath);

      fs.copyFileSync(webpPath, publicWebpPath);

      // 2. Also re-compress original format for fallbacks
      const publicOrigPath = path.join(publicDir, file);
      let pipelineOrig = sharp(filePath);
      if (targetWidth) {
        pipelineOrig = pipelineOrig.resize({ width: targetWidth, withoutEnlargement: true });
      }

      if (ext === '.jpg' || ext === '.jpeg') {
        const tempPath = path.join(imgDir, `temp-${file}`);
        await pipelineOrig.jpeg({ quality: 80, mozjpeg: true }).toFile(tempPath);
        fs.renameSync(tempPath, filePath);
        fs.copyFileSync(filePath, publicOrigPath);
      } else if (ext === '.png') {
        const tempPath = path.join(imgDir, `temp-${file}`);
        await pipelineOrig.png({ quality: 80, compressionLevel: 9 }).toFile(tempPath);
        fs.renameSync(tempPath, filePath);
        fs.copyFileSync(filePath, publicOrigPath);
      }

      const newStat = fs.statSync(filePath);
      const webpStat = fs.statSync(webpPath);
      console.log(`  -> Original compressed: ${Math.round(newStat.size / 1024)} KB | WebP: ${Math.round(webpStat.size / 1024)} KB`);
    } catch (err) {
      console.error(`  Error processing ${file}:`, err);
    }
  }
  console.log('Image optimization complete!');
}

optimize();
