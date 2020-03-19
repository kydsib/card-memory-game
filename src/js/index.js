// Card-Memory-Game
// Tier: 2-Intermediate

// Card memory is a game where you have to click on a card to see what image is underneath it and try to find the matching image underneath the other cards.

// Bonus features
//  Add or remove number of cards depending on gameLvl
// gal butu geriau susikurti dinamini contenta?

import Deck from './models/Deck'
import * as deckView from './views/deckView'
import * as timerView from './views/timerView'

import { elements } from './views/base'

/// MODULE PATERN

// ******* GLOBAL STATE OF THE APP ************//
const state = {}

// DECK CONTROLER

const controlDeck = () => {
	deckView.shuffleArrayValues()
	// addling ability to flip card
	deckView.toggleClassOnClick()
	timerView.cadFlipEnable()

	deckView.getIndexOfContainer()
}

// TIMER CONTROLER

export const controlTimer = () => {
	// initiating new values for deck
	controlDeck()
	// Starting timer
	timerView.timeCounter()
	// disabling start buton until game reset
	elements.startButton.disabled = true
	// elements.startButton.removeEventListener('click')
}

const closeModal = () => {
	elements.gameLvlBox.style.display = 'none'
	elements.dialogBox.style.display = 'none'
}
// BUTTONS
window.onload = timerView.showModal
elements.startButton.addEventListener('click', controlTimer)
elements.resetButton.addEventListener('click', timerView.reset)
elements.buttonEasy.addEventListener('click', timerView.gameTimeEasy)
elements.buttonMediun.addEventListener('click', timerView.gameTimeMedium)
elements.buttonHard.addEventListener('click', timerView.gameTimeHard)
// elements.closeModalBtn.addEventListener('click', closeModal) // why this not working? because I'm trying to add event listener w/o maping?
elements.closeLvlModal.addEventListener('click', closeModal)
elements.closeScoreModal.addEventListener('click', closeModal)
