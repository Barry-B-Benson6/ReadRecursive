let fs = require('fs');

function ReadDirSyncRecursive(path) {
    let files = [];
    fs.readdirSync(path).forEach(file => {
        if (file.includes('.')) {
            files.push(`${path}\\${file}`);
        } else if (file !== 'node_modules') {
            files = files.concat(ReadDirSyncRecursive(`${path}\\${file}`));
        }
    });
    return files;
}

module.exports = {
    ReadDirSyncRecursive
}