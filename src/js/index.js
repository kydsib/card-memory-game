// Card-Memory-Game
// Tier: 2-Intermediate

// Card memory is a game where you have to click on a card to see what image is underneath it and try to find the matching image underneath the other cards.

// Bonus features
//  Add or remove number of cards depending on gameLvl // DeckView should be responsible for this?
// gal butu geriau susikurti dinamini contenta?

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
	state.deck = new Deck()
	deckView.addPhotos(state.deck.shuffleArrayValues())
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

// CAN I REDO LOGIC TO THIS?
const lvlControler = lvl => {
	// toks butu geresnis variantas, bet kaip perduoti lvl necallinant pacios funkcijos iskarto?
	if (lvl === 'E') {
		// set game time
		timerView.gameTimeEasy()
		// set game lvl for score modal
		state.score = new Score('E')
	} else if (lvl === 'M') {
		timerView.gameTimeMedium()
		// set game lvl for score modal
		state.score = new Score('M')
	} else if (lvl === 'H') {
		timerView.gameTimeHard()
		// set game lvl for score modal
		state.score = new Score('H')
	} else {
		console.log('Woops lvlControler failed')
	}
}

const easyLvlControler = () => {
	// set game time
	timerView.gameTimeEasy()
	// set game lvl for score modal
	state.score = new Score('E')
	state.deck = new Deck('E')
}

const mediumLvlControler = () => {
	// set game time
	timerView.gameTimeMedium()
	// set game lvl for score modal
	state.score = new Score('M')
	state.deck = new Deck('M')
}

const hardLvlControler = () => {
	// set game time
	timerView.gameTimeHard()
	// set game lvl for score modal
	state.score = new Score('H')
	state.deck = new Deck('H')
}

export const setScoreControler = () => {
	state.score.storeScoreByLvl(timerView.calcTime())
	state.score.logLvl()
}

const closeModal = () => {
	elements.gameLvlBox.style.display = 'none'
	elements.dialogBox.style.display = 'none'
}
// BUTTONS
window.onload = timerView.showModal
elements.startButton.addEventListener('click', controlTimer)
elements.resetButton.addEventListener('click', timerView.reset)
// GAME LVL SETTINGS
elements.buttonEasy.addEventListener('click', easyLvlControler)
elements.buttonMediun.addEventListener('click', mediumLvlControler)
elements.buttonHard.addEventListener('click', hardLvlControler)
// elements.closeModalBtn.addEventListener('click', closeModal) // why this not working? because I'm trying to add event listener w/o maping?
elements.closeLvlModal.addEventListener('click', closeModal)
elements.closeScoreModal.addEventListener('click', closeModal)
