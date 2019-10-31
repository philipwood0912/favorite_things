const express = require('express');
const router = express.Router();

const sql = require('../utils/sql');

router.get('/', (req, res) => {
    console.log('at the main route');

    let query = "SELECT * FROM tbl_card";

    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }
        console.log(result);
        res.render('home', {});
    })
})

module.exports = router;