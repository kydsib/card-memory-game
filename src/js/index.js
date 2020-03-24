// Card-Memory-Game

// Card memory is a game where you have to click on a card to see what image is underneath it and try to find the matching image underneath the other cards.

import Deck from './models/Deck'
import Score from './models/Score'
import * as deckView from './views/deckView'
import * as timerView from './views/timerView'

import { elements } from './views/base'

/// MODULE PATERN

// ******* GLOBAL STATE OF THE APP ************//
const state = {}

// DECK CONTROLER

const controlDeck = () => {
	deckView.addPhotos(state.deck.shuffleArrayValues())
	// addling ability to flip card
	deckView.toggleClassOnClick()
	timerView.cadFlipEnable()
}

// TIMER CONTROLER

export const controlTimer = () => {
	controlDeck()
	// Starting timer
	timerView.timeCounter()
	// disabling start buton until game reset
	elements.startButton.disabled = true
	// elements.startButton.removeEventListener('click')
}

const easyLvlControler = () => {
	deckView.deleteOldDeck()
	// set game time
	timerView.gameTimeEasy()
	// set game lvl for score modal
	state.score = new Score('E')
	state.deck = new Deck('E')
	deckView.createCard('E')
	//
	deckView.getIndexOfContainer('E')
	controlTimer()
}

const mediumLvlControler = () => {
	deckView.deleteOldDeck()
	timerView.gameTimeMedium()
	state.score = new Score('M')
	state.deck = new Deck('M')
	deckView.createCard('M')
	deckView.getIndexOfContainer('M')
	controlTimer()
}

const hardLvlControler = () => {
	deckView.deleteOldDeck()
	timerView.gameTimeHard()
	state.score = new Score('H')
	state.deck = new Deck('H')
	deckView.createCard('H')
	deckView.getIndexOfContainer('H')
	controlTimer()
}

export const setScoreControler = () => {
	state.score.storeScoreByLvl(timerView.calcTime())
}

const closeScoreModal = () => {
	elements.dialogBox.style.display = 'none'
	elements.gameLvlBox.style.display = 'block'
}

const closeModal = () => {
	elements.gameLvlBox.style.display = 'none'
	elements.dialogBox.style.display = 'none'
}
// Testing new functionality

// BUTTONS
window.onload = timerView.showModal
// GAME LVL SETTINGS
elements.buttonEasy.addEventListener('click', easyLvlControler)
elements.buttonMediun.addEventListener('click', mediumLvlControler)
elements.buttonHard.addEventListener('click', hardLvlControler)
// elements.closeModalBtn.addEventListener('click', closeModal) // why this not working? because I'm trying to add event listener w/o maping?
elements.closeLvlModal.addEventListener('click', closeModal)
elements.closeScoreModal.addEventListener('click', closeScoreModal)
