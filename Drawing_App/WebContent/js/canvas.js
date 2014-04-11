
function drawingCanvas(){
	
	this.name = "DrawingCanvas";
	this.object = document.getElementById(this.name);
	this.objectPropertiesDefault = [
		["width", "input", "number", this.initCanvas()[0]],
		["height", "input", "number", this.initCanvas()[1]],
		["show grid", "toggle", "button", true],
		["grid size", "input", "number", this.setCanvasGrid(5)],		
	];
	this.click = this.object.addEventListener("click", registerEvent, false);

};

	
drawingCanvas.prototype.initCanvas = function(){
	
	var c = this.object;
	//var context = c.getContext("2d");

	c.setAttribute("width", window.innerWidth - 2); // (Border Top + Bottom : 2) = 2                                           // - (((5 / 100) * window.innerWidth) * 2));
	c.setAttribute("height", window.innerHeight - 52 - 2); // (Border Top + Bottom : 2) + (Menu Combined Heights : 52) = 54    // - (((5 / 100) * window.innerHeight) * 2 - 55)); //580
	
	return [c.getAttribute("width"), c.getAttribute("height")];

};

drawingCanvas.prototype.setCanvasGrid = function(i){
	
	var c = this.object;
	var image = 'WebContent/images/Grid_' + i + 'x' + i + '_px.png';	
	c.style.backgroundImage = "url(" + image + ")"; 
	c.style.position = "top left";
	c.style.repeat = "repeat";
	c.style.attachment = "fixed";
	
	return i;
};

