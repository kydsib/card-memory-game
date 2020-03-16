export const elements = {
	cards: Array.from(document.querySelectorAll('.card')),
	images: Array.from(document.querySelectorAll('.img-style')),
	startButton: document.getElementById('start'),
	resetButton: document.getElementById('reset'),
	timer: document.getElementById('time'),
	container: document.getElementById('container'),
	dialogBox: document.getElementById('myModal'),
	gameLvlBox: document.getElementById('gameTypeModal'),
	messageBox: document.getElementById('winText'),
	timeEasy: 90,
	timeMedium: 75,
	timeHard: 60,
	buttonEasy: document.getElementById('easy'),
	buttonMediun: document.getElementById('medium'),
	buttonHard: document.getElementById('hard')
}
