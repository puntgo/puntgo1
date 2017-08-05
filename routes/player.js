var express = require('express');
var router = express.Router();
var path = require('path');
var fs=require("fs");
var mediaserver = require('mediaserver');

router.get('/play', function(req, res, next) {
    console.log('url is--ok  '  + req.query.url);
    var filePath = "./"+req.query.url;
    console.log('path is '  + filePath);
   fs.exists(filePath, (exists) => {
        console.log(exists ? 'it\'s there' : 'no path !');
    });
   mediaserver.pipe(req, res, filePath);
});

router.get('/pause', function(req, res, next) {
    res.send("http://2016a.downloadming1.com/bollywood%20mp3/Jolly%20LLB%202%20(2017)/Jolly%20LLB%202%20(2017)%20(128%20Kbps)/01%20-%20Go%20Pagal%20-%20DownloadMing.SE.mp3");
});



module.exports = router;
