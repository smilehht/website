var path = require('path');
const utils = require('../../utils/utils.js');

module.exports = {
    async saveBlog(params = {}) {
        let {
            title,
            tag,
            code,
            content
        } = params;

        let file_path = path.resolve(__dirname, '../../data/blog.json');
        let data;
        try {
            data = await utils.readFile({
                filename: file_path
            }).toString();
            !data && (data = []);
            data = JSON.parse(data);
        } catch (error) {
            data = [];
        }
        data.push({
            id: Date.now().toString(36),
            title,
            tag,
            date: (new Date()).toLocaleDateString()
        });
        
        let file = JSON.stringify(data, null, '\t');
        utils.writeFile({
            filename: file_path,
            content: file,
            code: 'utf-8'
        });

    }
}