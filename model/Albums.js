var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var Songs=require('./Songs');
  
var albumSchema = Schema({
  _id:{type:Number,unique:true,required:true}, 
  title:{type:String,required:true,trim:true},
  url:{type:String,trim:true},
  year:Number,
  language:{type:String,trime:true},
  created: {
    type: Date,
    default: Date.now
  },
  songs : { type: Schema.Types.Number, ref: 'Songs' }
});

var songSchema = Schema({
    _id:{type:Number,unique:true,required:true},
    url:{type:String,required:true},
    title:{type:String,required:true,trim:true},
    artistName:{type:String,trim:true},
    albumArtistName:{type:String,trim:true},
    genre:{type:String,trim:true},
    mood:{type:String,trim:true},
    lyrice:String,
    length:Number,
    comments: String,
    rating:Number
});

var Albums = mongoose.model('Albums', albumSchema);
module.exports=Albums;

/*var mongoose = require('mongoose');

// Define our songs schema
var SongsSchema   = new mongoose.Schema({
	songId:{type:Number,unique:true,required:true},
	albumId:Number,
	src:{type:String,required:true},
	albumTitle:{type:String,required:true},
  	songTitle:{type:String,required:true},
  	artistName:String,
  	albumArtistName:String,
  	genre:String,
  	lyrice:String,
  	length:Number,
  	comments: String,
  	rating:Number
  });

// Export the Mongoose model
var Songs=mongoose.model('Songs', SongsSchema);
module.exports = Songs;*/