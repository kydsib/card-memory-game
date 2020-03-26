import { elements } from './base'
import { setScoreControler } from '../index'
import * as timerView from './timerView'

export const scoresToLocalStorage = () => {
	let scoreForWins, scoreForLoses
	if (localStorage.getItem('Won') === null) {
		scoreForWins = 0
	} else {
		scoreForWins = localStorage.getItem('Won')
	}

	scoreForWins++
	elements.messageBox.innerHTML = `You finished the game in ${timerView.calcTime()} seconds`
	localStorage.setItem('Won', scoreForWins)
	let timesWon = localStorage.getItem('Won')

	if (localStorage.getItem('Lost') === null) {
		scoreForLoses = 0
	} else {
		scoreForLoses = localStorage.getItem('Lost')
	}

	elements.winText.textContent = `You have won - ${timesWon} times`
	elements.loseText.textContent = `You have lost - ${scoreForLoses} times`
	// View call controler, which passes timeView data to Score Model
	setScoreControler()
	getBestScores()
}

const getBestScores = () => {
	let easyLowScoreTime =
		localStorage.getItem('EasyBestTime') === null
			? 'Currently there is no best time'
			: localStorage.getItem('EasyBestTime')
	let mediumLowScoreTime =
		localStorage.getItem('MediumBestTime') === null
			? 'Currently there is no best time'
			: localStorage.getItem('MediumBestTime')
	let hardLowScoreTime =
		localStorage.getItem('HardBestTime') === null
			? 'Currently there is no best time'
			: localStorage.getItem('HardBestTime')
	elements.bestEasyTime.textContent = `Best easy lvl time in seconds is - ${easyLowScoreTime}`
	elements.bestMediumTime.textContent = `Best easy lvl time in seconds is - ${mediumLowScoreTime}`
	elements.bestHardTime.textContent = `Best easy lvl time in seconds is - ${hardLowScoreTime}`
}

export const gameLostGetScores = () => {
	console.log('Me was called I mean gameLOstGetScores')
	let scoreForLoses, scoreForWins

	if (localStorage.getItem('Lost') === null) {
		scoreForLoses = 0
		elements.loseText.textContent = `You have lost - ${scoreForLoses} times`
		scoreForLoses++
		localStorage.setItem('Lost', scoreForLoses)
	} else {
		scoreForLoses = localStorage.getItem('Lost')
		elements.loseText.textContent = `You have lost - ${scoreForLoses} times`
		scoreForLoses++
		localStorage.setItem('Lost', scoreForLoses)
	}

	if (localStorage.getItem('Won') === null) {
		scoreForWins = 0
	} else {
		scoreForWins = localStorage.getItem('Won')
	}

	elements.winText.textContent = `You have won - ${scoreForWins} times`

	getBestScores()
}
