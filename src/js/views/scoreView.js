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
	elements.messageBox.innerHTML = `Your time - ${timerView.calcTime()}s`
	localStorage.setItem('Won', scoreForWins)
	let timesWon = localStorage.getItem('Won')

	if (localStorage.getItem('Lost') === null) {
		scoreForLoses = 0
	} else {
		scoreForLoses = localStorage.getItem('Lost')
	}

	if (scoreForWins === 1) {
		elements.winText.textContent = `Won - ${timesWon} time`
	} else {
		elements.winText.textContent = `Won - ${timesWon} times`
	}

	elements.loseText.textContent = `Lost - ${scoreForLoses} times`
	// View call controler, which passes timeView data to Score Model
	setScoreControler()
	getBestScores()
}

const getBestScores = () => {
	let easyLowScoreTime =
		localStorage.getItem('EasyBestTime') === null
			? 'No best time yet'
			: localStorage.getItem('EasyBestTime')
	let mediumLowScoreTime =
		localStorage.getItem('MediumBestTime') === null
			? 'No best time yet'
			: localStorage.getItem('MediumBestTime')
	let hardLowScoreTime =
		localStorage.getItem('HardBestTime') === null
			? 'No best time yet'
			: localStorage.getItem('HardBestTime')
	elements.bestEasyTime.textContent = `Best easy lvl score - ${easyLowScoreTime}s`
	elements.bestMediumTime.textContent = `Best easy lvl score - ${mediumLowScoreTime}s`
	elements.bestHardTime.textContent = `Best easy lvl score - ${hardLowScoreTime}s`
}

export const gameLostGetScores = () => {
	let scoreForLoses, scoreForWins

	if (localStorage.getItem('Lost') === null) {
		scoreForLoses = 0
		scoreForLoses++
		if (scoreForLoses == 1) {
			elements.loseText.textContent = `Lost - ${scoreForLoses} time`
		} else {
			elements.loseText.textContent = `Lost - ${scoreForLoses} times`
		}
		localStorage.setItem('Lost', scoreForLoses)
	} else {
		scoreForLoses = localStorage.getItem('Lost')
		scoreForLoses++
		elements.loseText.textContent = `Lost - ${scoreForLoses} times`
		localStorage.setItem('Lost', scoreForLoses)
	}

	if (localStorage.getItem('Won') === null) {
		scoreForWins = 0
	} else {
		scoreForWins = localStorage.getItem('Won')
	}

	if (scoreForWins == 1) {
		elements.winText.textContent = `Won - ${scoreForWins} time`
	} else {
		elements.winText.textContent = `Won - ${scoreForWins} times`
	}

	getBestScores()
}
