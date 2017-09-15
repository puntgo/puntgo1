var Puntgo=(function(){

return{
	fullMode:fullMode,
	openModal:openModal
}

function fullMode(){
	document.documentElement.webkitRequestFullscreen();
};

function openModal(){
	$("#myModal").modal('show');
}
})();