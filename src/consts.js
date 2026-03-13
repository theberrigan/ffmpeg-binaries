const fs = require('node:fs');
const paths = require('node:path');



const ARCH_MAP = {
    'x64':   'x64',
    'arm64': 'arm64',
};

const OS_MAP = {
    'darwin':  'mac',
    'win32':   'win',
    'linux':   'linux',
    'freebsd': 'linux',
};

const AVAILABLE_PLATFORMS = [
    'linux-arm64',
    'linux-x64',
    'mac-x64',
    'win-arm64',
    'win-x64',
];

const ROOT_DIR = (() => {
    let currentDir = __dirname;

    while (true) {
        if (fs.existsSync(paths.join(currentDir, 'package.json'))) {
            return currentDir;
        }

        const parentDir = paths.dirname(currentDir);

        if (parentDir === currentDir) {
            break;
        }

        currentDir = parentDir;
    }

    throw new Error('Cannot find root directory');
})();

const BIN_DIR = paths.join(ROOT_DIR, 'bin');



module.exports = {
    ARCH_MAP,
    OS_MAP,
    AVAILABLE_PLATFORMS,
    ROOT_DIR,
    BIN_DIR,
};
