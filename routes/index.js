var express = require('express');
var router = express.Router();
var path = require('path');

var IndexService = require('../services/index-service');

/* GET home page. */
/*router.get('/render', function(req, res, next) {
	console.log('1' + path.join(__dirname + '/index.html'));
	res.sendFile(path.join(__dirname + '/index.html'));
});*/

var indexService = new IndexService();

router.get('/', function(req, res, next) {
    res.send('index', { title: 'Express' });
});

router.get('/getAlbum', function(req, res, next) {
    indexService.getAlbumList().then(function(data) {
        res.json(data);
    }).catch(function(err) {
        console.log('Error getAlbumList While Fetching data :' + err);
        res.send(err);
    })
});

router.get('/getAlbumSongs', function(req, res, next) {
	console.log('req '   + req.query.albumName);
    indexService.getAlbumSongsList(req.query.albumName).then(function(data) {
        console.log('data is '+data);
        res.json(data);
    }).catch(function(err) {
        console.log('Error getAlbumSongsList While Fetching data :' + err);
        res.send(err);
    })
});

router.get('/ok', function(req, res, next) {
    res.send("http://2016a.downloadming1.com/bollywood%20mp3/Jolly%20LLB%202%20(2017)/Jolly%20LLB%202%20(2017)%20(128%20Kbps)/01%20-%20Go%20Pagal%20-%20DownloadMing.SE.mp3");
});

module.exports = router;
