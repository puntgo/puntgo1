(function(){
'use strict';
 var app=angular.module('puntgo')
 .controller('playerController',playerController);
 
 playerController.$inject=['$scope','$rootScope','$http','homepageService'];

function playerController($scope,$rootScope,$http,homepageService){
 	console.log("playerController loaded");
 	$rootScope.player=new Audio();

    $rootScope.paused = $rootScope.player.paused;
    $rootScope.loadViaUrl=function(url){
    	console.log('url is ---'+url);
    	$rootScope.player.src= 'player/play?url='+url;
    	$rootScope.play();
    };

    $rootScope.loadViaSong=function(song){
    	$rootScope.player.src= 'player/play?url='+song.url;
    	$rootScope.play();
    };

	$rootScope.play=function(){
		console.log('play trigger');
		$rootScope.paused = $rootScope.player.paused;
		$rootScope.player.play();
		$rootScope.duration=$rootScope.player.duration;
	};

	 $rootScope.pause=function(){
	 	console.log('pause trigger');
	 	$rootScope.paused = $rootScope.player.paused;
	 	$rootScope.player.pause();
	 }; 


var duration = $rootScope.player.duration; // Duration of audio clip, calculated here for embedding purposes
var playhead = document.getElementById('playhead'); // playhead
var timeline = document.getElementById('timeline'); // timeline

// timeline width adjusted for playhead
var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;

// timeupdate event listener
$rootScope.player.addEventListener("timeupdate", timeUpdate, false);

// makes timeline clickable
timeline.addEventListener("click", function(event) {
    moveplayhead(event);
    $rootScope.player.currentTime = duration * clickPercent(event);
}, false);

// returns click as decimal (.77) of the total timelineWidth
function clickPercent(event) {
    return (event.clientX - getPosition(timeline)) / timelineWidth;
}

// makes playhead draggable
playhead.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);

// Boolean value so that audio position is updated only when the playhead is released
var onplayhead = false;

// mouseDown EventListener
function mouseDown() {
    onplayhead = true;
    window.addEventListener('mousemove', moveplayhead, true);
    $rootScope.player.removeEventListener('timeupdate', timeUpdate, false);
}

// mouseUp EventListener
// getting input from all mouse clicks
function mouseUp(event) {
    if (onplayhead == true) {
        moveplayhead(event);
        window.removeEventListener('mousemove', moveplayhead, true);
        // change current time
        $rootScope.player.currentTime = duration * clickPercent(event);
        $rootScope.player.addEventListener('timeupdate', timeUpdate, false);
    }
    onplayhead = false;
}
// mousemove EventListener
// Moves playhead as user drags
function moveplayhead(event) {
    var newMargLeft = event.clientX - getPosition(timeline);

    if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
        playhead.style.marginLeft = newMargLeft + "px";
    }
    if (newMargLeft < 0) {
        playhead.style.marginLeft = "0px";
    }
    if (newMargLeft > timelineWidth) {
        playhead.style.marginLeft = timelineWidth + "px";
    }
}

// timeUpdate
// Synchronizes playhead position with current point in audio
function timeUpdate() {
    var playPercent = timelineWidth * ($rootScope.player.currentTime / duration);
    playhead.style.marginLeft = playPercent + "px";
    if ($rootScope.player.currentTime == duration) {
    	alert('done');
        $rootScope.paused=false;
    }
}

// Gets audio file duration
$rootScope.player.addEventListener("canplaythrough", function() {
    duration = $rootScope.player.duration;
}, false);

// getPosition
// Returns elements left position relative to top-left of viewport
function getPosition(el) {
    return el.getBoundingClientRect().left;
}

 };
})();