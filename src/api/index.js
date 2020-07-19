const fs = require('fs');

const filenames = fs.readdirSync(__dirname)
    .map(filename => filename.split('.')[0])
    .filter(filename =>
        filename !== 'index' &&
        filename !== 'ui' &&
        filename !== 'users' &&
        filename !== 'localtest'
    );

module.exports = app => {
    app.post('/api/home', (req, res) => {
        res.json({
            type: 1,
            data: []
        })
    })
    filenames.forEach(filename => {
        require(`./${filename}`)(app)
    });
};