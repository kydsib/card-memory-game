import { elements } from './base'
import * as controler from '../index'

let intervalId, matchedCards, gameTime, timeByLvl, gameLvl

const getLvl = lvl => {
	// Seting value to storeScoreByLvl function
	gameLvl = lvl
	return gameLvl
}

export const calcTime = () => {
	// Default lvl starting time - time left
	return timeByLvl - gameTime
}

export const gameTimeEasy = () => {
	getLvl('E')
	timeByLvl = elements.timeEasy
	gameTime = elements.timeEasy
	calcAndShowTime(0)
	// hiding modal after lvl is selected
	elements.gameLvlBox.style.display = 'none'
	// elements.startButton.addEventListener('click', controler.controlTimer)
	return gameTime
}

export const gameTimeMedium = () => {
	getLvl('M')
	// time to use as default starting time in medium game
	timeByLvl = elements.timeMedium
	// Time that is used to store how mutch sec passed from start
	gameTime = elements.timeMedium

	calcAndShowTime(0)
	// hiding modal after lvl is selected
	elements.gameLvlBox.style.display = 'none'
	return gameTime
}
export const gameTimeHard = () => {
	getLvl('H')
	timeByLvl = elements.timeHard
	gameTime = elements.timeHard
	calcAndShowTime(0)
	// hiding modal after lvl is selected
	elements.gameLvlBox.style.display = 'none'
	return gameTime
}

const calcAndShowTime = delay => {
	// if function was called by start btn, time would be reduced in 1s so there would be no delay
	let newTimeInSec = gameTime - delay
	let min = parseInt(newTimeInSec / 60, 10)

	let sec = parseInt(newTimeInSec % 60, 10)

	min = min < 10 ? '0' + min : min
	sec = sec < 10 ? '0' + sec : sec

	elements.timer.innerHTML = `${min}:${sec}`
}

const timeLeft = () => {
	let scoreForLoses
	//
	if (localStorage.getItem('Lost') === null) {
		scoreForLoses = 0
	} else {
		scoreForLoses = localStorage.getItem('Lost')
	}

	matchedCards = 0
	calcAndShowTime(1)

	if (--gameTime < 0) {
		// not yet sure why timer goes below 0. Because of calcAndShowTime?
		// workaround fix for this problem
		elements.timer.innerHTML = '00:00'

		alert('Game Over')
		// Move this part out
		scoreForLoses++
		localStorage.setItem('Lost', scoreForLoses)

		let timesLost = localStorage.getItem('Lost')
		elements.loseText.textContent = `You have won - ${timesLost} times`
		let timesWon = localStorage.getItem('Won')
		elements.winText.textContent = `You have won - ${timesWon} times`
		// stoping timer
		stopTimer()

		// after time is finished player can't open any new cards
		cardFlipDisable()
	} else if (matchedCards === 12) {
		stopTimer()

		cardFlipDisable()
	}
}

// show game lvl options modal
export const showModal = () => {
	elements.gameLvlBox.style.display = 'block'
}

export const timeCounter = () => {
	//When you pass a method to setInterval() or any other function, it is invoked with the wrong this value.
	intervalId = setInterval(timeLeft, 1000)
}

export const stopTimer = () => {
	clearInterval(intervalId)
}
// Should I move this to deckView?
const cardFlipDisable = () => {
	elements.cards.map(card => (card.style.pointerEvents = 'none'))
}
// Should I move this to deckView?
export const cadFlipEnable = () => {
	elements.cards.map(card => (card.style.pointerEvents = ''))
}

export const reset = () => {
	// player is not allowed to flip cards before pressing START
	cardFlipDisable()
	elements.cards.map(card => card.classList.remove('is-flipped'))
	elements.startButton.disabled = false
	stopTimer()
	// Setting timer to 0:00
	calcAndShowTime(0)
	showModal()
	// elements.startButton.removeEventListener('click', controler.controlTimer) // this removes event listener but I wont be added again
	// reseting timer
	return (matchedCards = 0)
}
