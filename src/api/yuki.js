const express = require('express');
const router = new express.Router();
router.get('./', async(req, res, next) => {
    res.json({
        a: 1
    });
})

module.exports = router;