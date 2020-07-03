const fs = require('fs');
const bodyParser = require('body-parser');
const reload = require('./reload');
const path = require('path');

const filenames = fs.readdirSync(__dirname)
    .map(filename => filename.split('.')[0])
    .filter(filename =>
        filename !== 'index' &&
        filename !== 'ui' &&
        filename !== 'users' &&
        filename !== 'localtest'
    );

module.exports = app => {
    // 本地联调代理
    // app.use([
    //     '/dms/afterSales/api/v1',
    // ], require('./localtest').localtest);

    // 远程服务器代理
    // app.use([
    //     '/dms/afterSales/api/v1',
    //     '/dms/parts/api/v1',
    //     '/afterSales/api/v1',
    //     '/static/config.json',
    //     '/login',
    //     '/imagePreview',
    //     '/api/v1/files',
    //     '/api/v1/login'
    // ], require('http-proxy-middleware')({
    //     target: 'https://dev.chery.sdt-int.com',
    //     changeOrigin: true,
    // }));

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use('/api/v1/files', require('./files'));
    // 禁止socket连接
    app.use('/api/v1/notifications', (req, res) => {
        res.sendStatus(403);
    });
    app.use('/api/v1/notifyChannel', (req, res) => {
        res.sendStatus(403);
    });
    app.use('/dms/afterSales/reports/:pageCode', (req, res) => {
        const {pageCode} = req.params;
        const {id} = req.query;
        res.send(`<p>Mock Print Page. PageCode: ${pageCode}, Id: ${id}.</p>`);
    });


    app.use('/afterSales/api/v1/commentLibraries', (req, res) => {
        res.json({
            payload: {
                content: [
                    {
                        id: '1',
                        code: '1',
                        comment: 'comment1',
                        remark: 'remark',
                        createTime: '2019-06-25T07:04:53.927Z',
                        rowVersion: 'string',
                        options: [
                            'update'
                        ]
                    },
                    {
                        id: '2',
                        code: '2',
                        comment: 'comment2',
                        remark: 'remark2',
                        createTime: '2019-06-25T07:04:53.927Z',
                        rowVersion: 'string',
                        options: [
                            'update'
                        ]
                    },
                    {
                        id: '3',
                        code: '3',
                        comment: 'comment3',
                        remark: 'remark3',
                        createTime: '2019-06-25T07:04:53.927Z',
                        rowVersion: 'string',
                        options: [
                            'update'
                        ]
                    }
                ]
            }
        });
    });

    app.use('/afterSales/api/v1/personnels/me', (req, res) => {
        res.json({
            payload: {
                departmentType: 1
            }
        });
    });

    filenames.forEach(filename => {
        const filePath = path.join(__dirname, `./${filename}.js`);
        app.use(`/dms/afterSales/api/v1/${filename}`, reload(filePath));
    });
};
