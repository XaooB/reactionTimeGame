(function(){
	function getTime() {
	return Math.floor(Math.random()*5000);
}

function getColors() {
	return Math.floor(Math.random()*255)+1;
}

function setColors(createdElement, colors) {
	createdElement.style.backgroundColor = 'rgb('+colors+','+colors+',100)';
}

function createDiv() {
	var container = document.querySelector('.container');
	var newElement = document.createElement('div');
	newElement.id = 'game';
	newElement.style.display = 'block';
	newElement.style.width = '100%';
	newElement.style.height = (document.documentElement.clientHeight-213)+'px';
	container.appendChild(newElement);
	return newElement;
}

function yourOutcome(element, time) {
	var seconds = (time<1) ? ' sekundy.' : ' sekund.';
	return element.innerHTML += time+seconds;
}

var _count = 0;
function reactionTime() {
	var createdTime = Date.now();
	_reactionTime = (createdTime - currentTime)/1000;
	if(_count===0) {
		yourOutcome(outcomeElement, _reactionTime);
		_count++;
	}
}

function init(div, setColors, time, getColors) {
	setTimeout(function(){
		var createdDiv = div();
		outcomeElement = document.querySelector('#outcome');

		setColors(createdDiv, getColors);

		currentTime = Date.now();
		createdDiv.addEventListener('click',reactionTime,false)
	},time)
};

function startGame() {
	init(createDiv, setColors, getTime(), getColors());
}

function resetGame() {
	var game = document.querySelector('#game');
	game.parentNode.removeChild(game);
	_reactionTime = 'null';
	_count = 0;
	outcomeElement.innerHTML = 'Twój czas reakcji wynosi: ';
}

var start = document.querySelector('#start'),
	reset = document.querySelector('#reset');

start.addEventListener('click',startGame,false);
reset.addEventListener('click',resetGame,false);
})();



