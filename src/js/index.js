// Card-Memory-Game
// Tier: 2-Intermediate

// Card memory is a game where you have to click on a card to see what image is underneath it and try to find the matching image underneath the other cards.

// Bonus features
//  Add or remove number of cards depending on gameLvl
//  User can see the game statistics (nr. of times he won / he lost, best time for each level)

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
	state.deck = new Deck()
	// randomazing array and then adding photos to it
	deckView.addPhotos(state.deck.arrayOfPairedValues())
	// addling ability to flip card
	deckView.toggleClassOnClick()
	timerView.cadFlipEnable()
	deckView.getIndexOfContainer() //might need to leave this one here
	// perduoti eventa toggleCLassOnClick
}

// TIMER CONTROLER

const controlTimer = () => {
	// initiating new values for deck
	controlDeck()
	// Starting timer
	timerView.timeCounter()
	// disabling start buton until game reset
	elements.startButton.disabled = true
}

// BUTTONS
window.onload = timerView.showModal
elements.startButton.addEventListener('click', controlTimer)
elements.resetButton.addEventListener('click', timerView.reset)
elements.buttonEasy.addEventListener('click', timerView.gameTimeEasy)
elements.buttonMediun.addEventListener('click', timerView.gameTimeMedium)
elements.buttonHard.addEventListener('click', timerView.gameTimeHard)
