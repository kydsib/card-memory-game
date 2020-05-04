import { elements } from './base'
import * as timerView from './timerView'
import * as scoreView from './scoreView'

let matchedCards = 0

export const resetMatchedCards = () => {
	matchedCards = 0
	return matchedCards
}

export const addPhotos = arrForPhotos => {
	let imgContainers = elements.images
	for (let i = 0; i < arrForPhotos.length; i++) {
		imgContainers[i].src = `${arrForPhotos[i]}`
	}
}

export const toggleClassOnClick = () => {
	let cards = Array.from(elements.cards)

	cards.forEach(card => {
		card.addEventListener('click', function() {
			card.classList.value === 'card'
				? card.classList.add('is-flipped')
				: card.classList.remove('is-flipped')

			// disabling ability to press on the opened card
			if (card.classList.value === 'card is-flipped') {
				card.style.pointerEvents = 'none'
			}
		})
	})
}

// adding aditional functionality for lvls
export const getIndexOfContainer = lvl => {
	let arrOfIndexes = []
	let arrOfSrcValues = []
	let imgContainers = Array.from(elements.images)

	let cards = Array.from(elements.cards)

	cards.map(card =>
		card.addEventListener('click', function(event) {
			if (event.target.classList.contains('card__item--back')) {
				show.call(event.target, event)
			}

			arrOfSrcValues.push(
				imgContainers[show.call(event.target, event)].src
			)

			arrOfIndexes.push(show.call(event.target, event))
			// console.log(arrOfSrcValues)
			if (arrOfSrcValues.length === 24) {
				timerView.stopTimer()
				// show score modal
				elements.dialogBox.style.display = 'block'
				// storing best scores to LS
				scoreView.scoresToLocalStorage()
				// reseting matched cards
				resetMatchedCards()
			}

			if (
				// checking if src values match
				arrOfSrcValues[0] !== arrOfSrcValues[1] &&
				// skipping undefined cases
				arrOfIndexes[0] !== undefined &&
				arrOfIndexes[1] !== undefined
			) {
				// disabling ability to open any more cards, to fix undefined bug when
				// third card is opened before first two closes
				cards.map(card => (card.style.pointerEvents = 'none'))
				setTimeout(function() {
					cards[arrOfIndexes[0]].classList.remove('is-flipped')
					cards[arrOfIndexes[1]].classList.remove('is-flipped')
					// enambling ability to press on a card
					cards[arrOfIndexes[0]].style.pointerEvents = 'auto'
					cards[arrOfIndexes[1]].style.pointerEvents = 'auto'
					// enabling cards to flip again
					cards.map(card => (card.style.pointerEvents = 'auto'))
					return (
						(arrOfIndexes.length = 0), (arrOfSrcValues.length = 0)
					)
				}, 300)
			} else if (arrOfSrcValues[0] === arrOfSrcValues[1]) {
				matchedCards++
				cards[arrOfIndexes[0]].style.pointerEvents = 'none'
				cards[arrOfIndexes[1]].style.pointerEvents = 'none'
				console.log(matchedCards)
				if (matchedCards === 12 && lvl === 'E') {
					timerView.stopTimer()
					// show score modal
					elements.dialogBox.style.display = 'block'
					// storing best scores to LS
					scoreView.scoresToLocalStorage()
					// reseting matched cards
					resetMatchedCards()
				} else if (matchedCards === 15 && lvl === 'M') {
					timerView.stopTimer()
					elements.dialogBox.style.display = 'block'
					scoreView.scoresToLocalStorage()
					resetMatchedCards()
				} else if (matchedCards === 18 && lvl === 'H') {
					timerView.stopTimer()
					elements.dialogBox.style.display = 'block'
					scoreView.scoresToLocalStorage()
					resetMatchedCards()
				}
				// returninu values jei matchino, kad galeciau pradeti is naujo
				arrOfIndexes = []
				arrOfSrcValues = []
			}
		})
	)

	// get live collection so you only need to call this once
	let liveCollection = elements.container.getElementsByClassName(
		'card__item--back'
	)

	function show(event) {
		// convert liveCollection to array for `.indexOf()`
		var shows = [...liveCollection]
		// this === event.target
		var index = shows.indexOf(this)

		return index
	}
}

// Dynamicly creating deck
export const createCard = quantity => {
	const markup = `
	<li class="card">
	<div class="card__item card__item--front">
		<img alt="painting" class="img-style" src="" />
	</div>
	<div class="card__item card__item--back"></div>
	</li>
	`

	if (quantity === 'E') {
		for (let i = 0; i < 24; i++) {
			elements.container.insertAdjacentHTML('afterbegin', markup)
		}
	} else if (quantity === 'M') {
		for (let i = 0; i < 30; i++) {
			elements.container.insertAdjacentHTML('afterbegin', markup)
		}
	} else if (quantity === 'H') {
		for (let i = 0; i < 36; i++) {
			elements.container.insertAdjacentHTML('afterbegin', markup)
		}
	} else {
		console.log('createCads havent recieved lvl')
	}
}

export const deleteOldDeck = () => {
	let cards = Array.from(elements.cards)
	if (cards.length > 0) {
		let parent, card
		for (card in cards) {
			parent = cards[card].parentNode
			parent.removeChild(cards[card])
		}
	}
}
