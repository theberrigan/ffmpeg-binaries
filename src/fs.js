const fs = require('node:fs/promises');
const paths = require('node:path');


const joinPath = (...parts) => {
    return paths.join(...parts);
};

const getDirPath = (path) => {
    return paths.dirname(path);
};

const createDirs = async (dirPath) => {
    await fs.mkdir(dirPath, {
        recursive: true
    });
};

const createFileDirs = async (filePath) => {
    const dirPath = getDirPath(filePath);

    return createDirs(dirPath);
};

const removePath = async (path) => {
    try {
        await fs.rm(path, {
            force: true,
            recursive: true
        });
        return true;
    } catch (e) {
        return false;
    }
};



module.exports = {
    joinPath,
    getDirPath,
    createDirs,
    createFileDirs,
    removePath,
};
