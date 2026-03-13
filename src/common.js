const os = require('node:os');
const paths = require('node:path');

const { ARCH_MAP, OS_MAP, BIN_DIR } = require('./consts.js');



const getPlatform = () => {
    const archName = ARCH_MAP[os.arch()] ?? 'unknown';
    const osName   = OS_MAP[os.platform()] ?? 'unknown';

    return `${ osName }-${ archName }`.toLowerCase();
};

const getPlatformBinDir = () => {
    return paths.join(BIN_DIR, getPlatform());
};



module.exports = {
    getPlatform,
    getPlatformBinDir,
};
