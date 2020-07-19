
const path = require('path');

const baseUrl = path.resolve(__filename).split('\\src')[1].replace(/\\/g, '/').split('.')[0]

module.exports = router => {
    router.get(`${baseUrl}/uuu`, function (req,res) {
        res.json({
            type: 0,
            data: 'uuu'
        })
    })
    router.get(`${baseUrl}/goods`, function (req,res) {
        res.json({
            type: 0,
            data: 'bbb'
        })
    })
    router.get(`${baseUrl}/aaa`, function (req,res) {
        res.json({
            type: 0,
            data: 'aaa'
        })
    })
}