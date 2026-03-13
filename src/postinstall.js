const paths = require('node:path');

const { createWriteStream } = require('node:fs');
const { pipeline } = require('node:stream/promises');

const z7 = require('7zip-min');

const { AVAILABLE_PLATFORMS } = require('./consts.js');
const { createDirs, removePath } = require('./fs.js');
const { getPlatform, getPlatformBinDir } = require('./common.js');



const downloadFile = async (url, outputPath) => {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Failed to download file: ${ url }`);
    }

    const fileStream = createWriteStream(outputPath);

    await pipeline(response.body, fileStream);
};

const downloadBinaries = async () => {
    const platform = getPlatform();

    console.info('Platform:', platform);

    if (!AVAILABLE_PLATFORMS.includes(platform)) {
        throw new Error(`ffmpeg binaries are not available for platform ${ platform }`);
    }

    const url = `https://github.com/theberrigan/ffmpeg-binaries/releases/download/latest/master-${ platform }-gpl.7z`;

    const outputDir = getPlatformBinDir();
    const archivePath = paths.join(outputDir, '_tmp.7z');

    await removePath(outputDir);
    await createDirs(outputDir);

    console.info('Downloading', url, 'as', archivePath);

    await downloadFile(url, archivePath);

    console.info('Unpacking', archivePath, 'to', outputDir);

    await z7.unpack(archivePath, outputDir);

    await removePath(archivePath);
};

downloadBinaries();