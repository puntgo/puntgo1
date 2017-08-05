var mongoose=require('mongoose');
var Albums=require('../model/Albums');
var Promise = require('bluebird');
Promise.promisifyAll(mongoose);


var IndexDao=function(){};

IndexDao.prototype.getAlbumList=function(){
	return Albums.find({},{'songs':false}).exec();
};

IndexDao.prototype.getAlbumSongsList=function(albumName){
	console.log('Album Name  '   +albumName);
	return Albums.findOne({'title':albumName},'url songs _id title year director musicDir').lean().exec();
};

IndexDao.prototype.saveAlbums=function(){

	albums.save(function(err){
		if(err) {
			console.log('ERror '  + err);
			throw err;
		}
		console.log('save sucessful');

	});

};

module.exports = IndexDao;

var albums = new Albums({
  _id:2, 
  title:"Raees",
  url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeDO7yC9MHxwtS2qCRVuU3Nmn71c_yTgBUgtiA0DjMV1FvFuMfB0b3Ajc",
  year:2017,
  language:"Hindi",
  songs : [{
   		_id:1,
	    url:"http://2016a.downloadming1.com/bollywood%20mp3/Raees%20(2017)/Raees%20(2017)%20(320%20Kbps)/01%20-%20Laila%20Main%20Laila%20-%20DownloadMing.SE.mp3",
	    title:"Laila Main Laila",
	    artistName:"Pawni Pandey",
	    albumArtistName:"Ram Sampath",
	    genre:"Rock",
	    mood:"Good",
	    lyrice:"lyrice is on the way we need couple of days for done.",
	    length:4.30,
	    comments: "Okay we will check later.",
	    rating:3.5
	},
	{
		_id:2,
	    url:"http://2016a.downloadming1.com/bollywood%20mp3/Raees%20(2017)/Raees%20(2017)%20(320%20Kbps)/03%20-%20Udi%20Udi%20Jaye%20-%20DownloadMing.SE.mp3",
	    title:"Udi Udi Jaye",
	    artistName:"Sukhwinder Singh, Bhoomi Trivedi, Karsan Sagathia",
	    albumArtistName:"Ram Sampath",
	    genre:"Pop",
	    mood:"Rock",
	    lyrice:"lyrice is on the way we need couple of days for done.",
	    length:3.30,
	    comments: "Okay we will check later.",
	    rating:4.0
	}]
});