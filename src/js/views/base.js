export const elements = {
	cards: Array.from(document.querySelectorAll('.card')),
	images: Array.from(document.querySelectorAll('.img-style')),
	// BUTTONS
	startButton: document.getElementById('start'),
	resetButton: document.getElementById('reset'),
	buttonEasy: document.getElementById('easy'),
	buttonMediun: document.getElementById('medium'),
	buttonHard: document.getElementById('hard'),
	closeModalBtn: document.querySelectorAll('.close'),
	closeLvlModal: document.getElementById('levelModal'),
	closeScoreModal: document.getElementById('scoreModal'),
	//
	timer: document.getElementById('time'),
	container: document.getElementById('container'),
	dialogBox: document.getElementById('myModal'),
	gameLvlBox: document.getElementById('gameTypeModal'),
	messageBox: document.getElementById('winText'),
	timeEasy: 60,
	timeMedium: 90,
	timeHard: 120,

	// SCORE
	winText: document.getElementById('winTimes'),
	loseText: document.getElementById('loseTimes'),
	bestEasyTime: document.getElementById('score-easy'),
	bestMediumTime: document.getElementById('score-medium'),
	bestHardTime: document.getElementById('score-hard')
}
