import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = path.join(process.cwd(), 'public', 'images');
const MAX_WIDTH = 800;
const QUALITY = 80;

async function getFiles(dir) {
    const dirents = await fs.readdir(dir, { withFileTypes: true });
    const files = await Promise.all(dirents.map((dirent) => {
        const res = path.resolve(dir, dirent.name);
        return dirent.isDirectory() ? getFiles(res) : res;
    }));
    return Array.prototype.concat(...files);
}

async function optimizeImages() {
    console.log('Starting image optimization...');

    try {
        const files = await getFiles(PUBLIC_DIR);
        const imageFiles = files.filter(file => /\.(png|jpe?g)$/i.test(file));

        console.log(`Found ${imageFiles.length} images to check.`);

        for (const file of imageFiles) {
            try {
                const metadata = await sharp(file).metadata();

                // Skip if image is already small enough
                if (metadata.width <= MAX_WIDTH && metadata.format !== 'png') {
                    continue;
                }

                const buffer = await sharp(file)
                    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
                    .png({ quality: QUALITY, compressionLevel: 8, force: false }) // Optimize PNGs
                    .jpeg({ quality: QUALITY, mozjpeg: true, force: false }) // Optimize JPEGs
                    .toBuffer();

                await fs.writeFile(file, buffer);
                console.log(`Optimized: ${path.relative(process.cwd(), file)}`);
            } catch (err) {
                console.error(`Error optimizing ${file}:`, err.message);
            }
        }

        console.log('Image optimization complete.');
    } catch (err) {
        console.error('Error reading directory:', err);
    }
}

optimizeImages();
