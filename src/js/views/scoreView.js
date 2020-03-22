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
	elements.bestEasyTime.textContent = `Best easy lvl time is - ${easyLowScoreTime} seconds`
	elements.bestMediumTime.textContent = `Best easy lvl time is - ${mediumLowScoreTime} seconds`
	elements.bestHardTime.textContent = `Best easy lvl time is - ${hardLowScoreTime} seconds`
}

export const gameLostGetScores = () => {
	let scoreForLoses
	//
	if (localStorage.getItem('Lost') === null) {
		scoreForLoses = 0
	} else {
		scoreForLoses = localStorage.getItem('Lost')
	}

	scoreForLoses++
	localStorage.setItem('Lost', scoreForLoses)

	let timesLost = localStorage.getItem('Lost')
	elements.loseText.textContent = `You have won - ${timesLost} times`
	let timesWon = localStorage.getItem('Won')
	elements.winText.textContent = `You have won - ${timesWon} times`
}
