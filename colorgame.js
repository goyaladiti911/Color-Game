var num = 6;
var colors = generate(num);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisp = document.getElementById("colorDisp");
var reset = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");
for(var i=0;i<modeButtons.length;i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");		
		this.classList.add("selected");
		if(this.textContent === "Easy")
			num = 3;
		else
			num = 6;
		resetfunc(num);
	});
}
colorDisp.textContent = pickedColor;
for(var i =0;i< squares.length;i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		var clicked = this.style.backgroundColor;
		if(clicked === pickedColor){
			reset.textContent = "Play Again";
			document.querySelector("#status").textContent = "Correct!";
			for(var j=0; j<squares.length;j++){
				squares[j].style.backgroundColor = pickedColor;
			}
			document.querySelector("h1").style.backgroundColor = pickedColor;
		}
		else{
			document.querySelector("#status").textContent = "Try Again!";
			this.style.backgroundColor = "#232323";
		}
	});
}
reset.addEventListener("click", function(){
	resetfunc(num);
});
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generate(num){
	var arr = [];
	for(var i =0;i<num;i++){
		arr[i] = random();
	}
	return arr;
}
function random(){
var r = Math.floor(Math.random()*256);
var g = Math.floor(Math.random()*256);
var b = Math.floor(Math.random()*256);
return "rgb("+r+", "+g+", "+b+")";
}
function resetfunc(){
	colors = generate(num);
	pickedColor = pickColor();
	colorDisp.textContent = pickedColor;	
	reset.textContent = "New Colors";
	document.querySelector("#status").textContent = "";
	for(var i =0;i< squares.length;i++){
		if(colors[i]){
			squares[i].style.display = "block";		
		squares[i].style.backgroundColor = colors[i];}
		else
		squares[i].style.display = "none";
	}
	document.querySelector("h1").style.backgroundColor = "steelblue";
}
