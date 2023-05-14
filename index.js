let fs = require('fs');

function ReadDirSyncRecursive(path) {
    let files = [];
    fs.readdirSync(path).forEach(file => {
        if (file.includes('.')) {
            files.push(`${path}\\${file}`);
        } else{
            files = files.concat(ReadDirSyncRecursive(`${path}\\${file}`));
        }
    });
    return files;
}
console.log(ReadDirSyncRecursive('.'))
module.exports = {
    ReadDirSyncRecursive
}