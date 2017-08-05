var mongoose = require('mongoose')
  , Schema = mongoose.Schema

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
var Songs  = mongoose.model('Songs', songSchema);

module.exports=Songs;
