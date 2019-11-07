const express = require('express');
const router = express.Router();

const sql = require('../utils/sql');

router.get('/', (req, res) => {
    console.log('at the main route');

    let query = "SELECT * FROM tbl_things";

    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }
        console.log(result);
        res.render('home', { things: result });
    })
})

router.get('/:id', (req, res) => {
    console.log('at thing route');
    let query = `SELECT ItemImg, Items, Info FROM tbl_things WHERE ID = "${req.params.id}"`;
    
    sql.query(query, (err, result) => {
        if(err){ throw err; console.log(err); }

        result[0].Items = result[0].Items.split(',').map(function(item){item = item.trim();return item;});
        result[0].ItemImg = result[0].ItemImg.split(',').map(function(item){item = item.trim();return item;});
        console.log("after trim / conversion:", result[0]);

        res.json(result[0]);
    })
})

module.exports = router;