const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
let i = 1;

router.get('/token', (req, res) => {
    res.json({token: Date.now().toString()});
});

router.get('/:id', (req, res) => {
    const filePath = path.join(__dirname, `./files/${req.params.id}.xls`);
    const filename = encodeURI(req.params.id);
    const stats = fs.statSync(filePath);
    if(stats.isFile()) {
        res.set({
            'Content-Type': 'application/octet-stream',
            'Content-Disposition': `attachment; filename=${filename}.xls`,
            'Content-Length': stats.size
        });
        fs.createReadStream(filePath).pipe(res);
    } else
        res.end(404);
});

router.post('/', (req, res) => {
    i += 1;
    res.json({
        message: '上传成功',
        payload: [{
            fileName: `上传的附件名称${i}`,
            id: `22312d-dadasddasd-223${i}`
        }]
    });
});
module.exports = router;
