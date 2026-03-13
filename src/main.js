const os = require('node:os');
const { getPlatformBinDir } = require('./common.js');
const { joinPath } = require('./fs.js');



const PLATFORM_EXE_EXT = os.platform() === 'win32' ? '.exe' : '';

const FFMPEG_PATH  = joinPath(getPlatformBinDir(), 'ffmpeg' + PLATFORM_EXE_EXT);
const FFPROBE_PATH = joinPath(getPlatformBinDir(), 'ffprobe' + PLATFORM_EXE_EXT);



module.exports = {
    FFMPEG_PATH,
    FFPROBE_PATH
};