var fs = require('fs');

module.exports = {

    writeFile({filename, content, code}) {
        if (!filename) {
            return;
        }
        return fs.writeFileSync(filename, content, {
            encoding: code
        });
    },
    readFile({filename}) {
        if (!filename) {
            return;
        }
        try {
            let data = fs.readFileSync(filename);
            return data;
        } catch (error) {
            return '';
        }
        
    },
    mkdir({path}) {
        if (!path) {
            return false;
        }
        try {
            let res = fs.mkdirSync(path);
            if (!res) {
                return true;
            }
            return false;
        } catch (error) {
            return false;
        }
    }
}