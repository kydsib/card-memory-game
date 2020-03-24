import { elements } from './base'
import * as timerView from './timerView'
import * as scoreView from './scoreView'

export const addPhotos = arrForPhotos => {
	let imgContainers = Array.from(document.querySelectorAll('.img-style'))
	for (let i = 0; i < arrForPhotos.length; i++) {
		imgContainers[i].src = `${arrForPhotos[i]}`
		// elements.images[i].id = cards[i].id = uniqueID()
	}
}

export const toggleClassOnClick = () => {
	let cards = Array.from(document.querySelectorAll('.card'))
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
	let matchedCards = 0
	let arrOfIndexes = []
	let arrOfSrcValues = []
	let imgContainers = Array.from(document.querySelectorAll('.img-style'))
	let cards = Array.from(document.querySelectorAll('.card'))

	elements.container.addEventListener('click', function(event) {
		if (event.target.classList.contains('card__item--back')) {
			show.call(event.target, event)
		}

		arrOfSrcValues.push(imgContainers[show.call(event.target, event)].src)

		arrOfIndexes.push(show.call(event.target, event))

		// If player tires to open more that two cards ar a time, denie it
		if (arrOfIndexes.length > 2) {
			cards[arrOfIndexes[0]].classList.remove('is-flipped')
			cards[arrOfIndexes[1]].classList.remove('is-flipped')
			cards[arrOfIndexes[2]].classList.remove('is-flipped')
			// dont like this part
			cards[arrOfIndexes[0]].style.pointerEvents = 'auto'
			cards[arrOfIndexes[1]].style.pointerEvents = 'auto'
			cards[arrOfIndexes[2]].style.pointerEvents = 'auto'

			arrOfIndexes = []
			arrOfSrcValues = []
		} else if (arrOfSrcValues[0] === arrOfSrcValues[1]) {
			if (matchedCards === 11 && lvl === 'E') {
				timerView.stopTimer()
				// show score modal
				elements.dialogBox.style.display = 'block'
				// storing best scores to LS
				scoreView.scoresToLocalStorage()
			} else if (matchedCards === 14 && lvl === 'M') {
				timerView.stopTimer()
				elements.dialogBox.style.display = 'block'
				scoreView.scoresToLocalStorage()
			} else if (matchedCards === 17 && lvl === 'H') {
				timerView.stopTimer()
				elements.dialogBox.style.display = 'block'
				scoreView.scoresToLocalStorage()
			}
			// returninu values jei matchino, kad galeciau pradeti is naujo
			arrOfIndexes = []
			arrOfSrcValues = []

			return matchedCards++
		} else if (
			// checking if src values match
			arrOfSrcValues[0] !== arrOfSrcValues[1] &&
			// skipping undefined cases
			arrOfIndexes[0] !== undefined &&
			arrOfIndexes[1] !== undefined
		) {
			setTimeout(function() {
				cards[arrOfIndexes[0]].classList.remove('is-flipped')
				cards[arrOfIndexes[1]].classList.remove('is-flipped')
				// enambling ability to press on a card
				cards[arrOfIndexes[0]].style.pointerEvents = 'auto'
				cards[arrOfIndexes[1]].style.pointerEvents = 'auto'
				return (arrOfIndexes = [])
			}, 1000)
			return (arrOfSrcValues = [])
		}
	})

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
		for (let i = 0; i < 23; i++) {
			elements.container.insertAdjacentHTML('afterbegin', markup)
		}
	} else if (quantity === 'M') {
		for (let i = 0; i < 29; i++) {
			elements.container.insertAdjacentHTML('afterbegin', markup)
		}
	} else if (quantity === 'H') {
		for (let i = 0; i < 35; i++) {
			elements.container.insertAdjacentHTML('afterbegin', markup)
		}
	} else {
		console.log('createCads havent recieved lvl')
	}
	// why do I need this?
	elements.container.insertAdjacentHTML('afterbegin', markup)
}

export const deleteOldDeck = () => {
	if (document.querySelectorAll('.card').length > 0) {
		let parent, card
		let cards = Array.from(document.querySelectorAll('.card'))
		for (card in cards) {
			parent = cards[card].parentNode
			parent.removeChild(cards[card])
		}
	}
}
