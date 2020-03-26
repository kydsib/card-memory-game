import { elements } from './base'
import * as scoreVIew from './scoreView'
import * as deckView from './deckView'

let intervalId, gameTime, timeByLvl

export const calcTime = () => {
	// Default lvl starting time - time left
	return timeByLvl - gameTime
}

export const gameTimeEasy = () => {
	timeByLvl = elements.timeEasy
	gameTime = elements.timeEasy
	calcAndShowTime()
	// hiding modal after lvl is selected
	elements.gameLvlBox.style.display = 'none'
	return gameTime
}

export const gameTimeMedium = () => {
	// time to use as default starting time in medium game
	timeByLvl = elements.timeMedium
	// Time that is used to store how mutch sec passed from start
	gameTime = elements.timeMedium

	calcAndShowTime()
	// hiding modal after lvl is selected
	elements.gameLvlBox.style.display = 'none'
	return gameTime
}
export const gameTimeHard = () => {
	timeByLvl = elements.timeHard
	gameTime = elements.timeHard
	calcAndShowTime()
	// hiding modal after lvl is selected
	elements.gameLvlBox.style.display = 'none'
	return gameTime
}

const calcAndShowTime = () => {
	// start width from 0, otherwise it start from 100%, and jumps back to 0% w/ timmer
	elements.timer.style.width = '0%'
	let time = parseInt(timeByLvl)
	let widthPerSecond = 100 / time

	elements.timer.style.width = `${100 - widthPerSecond * parseInt(gameTime)}%`
	elements.timer.style.background = '#3ba3cc'
}

const timeLeft = () => {
	calcAndShowTime()

	if (--gameTime < 0) {
		elements.messageBox.innerHTML = "Time's over, better call Saul!"
		scoreVIew.gameLostGetScores()
		elements.dialogBox.style.display = 'block'
		// stoping timer
		stopTimer()
		// after time is finished player can't open any new cards
		cardFlipDisable()
		deckView.resetMatchedCards()
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

const cardFlipDisable = () => {
	elements.cards.map(card => (card.style.pointerEvents = 'none'))
}

export const cadFlipEnable = () => {
	elements.cards.map(card => (card.style.pointerEvents = ''))
}
