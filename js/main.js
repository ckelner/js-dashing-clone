$(document).ready(function() {
	$('#dashboard').shapeshift({
		// Features
		centerGrid: true,
		enableAnimation: true,
		enableAutoHeight: true,
		enableDrag: true,
		enableDragAnimation: true,
		enableRearrange: true,
		enableResize: true,
		paddingY: 0,
		paddingX: 0
	});
});
function Person(gender){
	this.gender = gender;
	alert('Person instantiated');
}
Person.prototype.sayHello = function(){
	alert ('hello');
};
