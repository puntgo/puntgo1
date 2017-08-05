var IndexDao=require('../dao/index-dao.js');

var IndexService=function(){};

var indexDao= new IndexDao();

IndexService.prototype.getAlbumList=function(){	
	 return indexDao.getAlbumList();
};

IndexService.prototype.getAlbumSongsList=function(albumName){	
	 return indexDao.getAlbumSongsList(albumName);
};

module.exports=IndexService;
