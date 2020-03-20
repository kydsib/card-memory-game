import { elements } from './base'
import * as timerView from './timerView'
import * as scoreView from './scoreView'

// is it ok to import parts from Module files?

// I might not need this
// const uniqueID = () => {
// 	// Math.random should be unique because of its seeding algorithm.
// 	// Convert it to base 36 (numbers + letters), and grab the first 9 characters
// 	// after the decimal.
// 	return (
// 		'_' +
// 		Math.random()
// 			.toString(36)
// 			.substr(2, 9)
// 	)
// }

// Need to change this
export const addPhotos = arrForPhotos => {
	console.log(arrForPhotos)
	for (let i = 0; i < arrForPhotos.length; i++) {
		// elements.images[i].src = `../../images/painting${arrForPhotos[i]}.jpg`
		elements.images[i].src = `${arrForPhotos[i]}`
		// elements.images[i].id = elements.cards[i].id = uniqueID()
	}
	console.log('run')
}

export const toggleClassOnClick = () => {
	elements.cards.forEach(card => {
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

export const getIndexOfContainer = () => {
	let matchedCards = 0
	let arrOfIndexes = []
	let arrOfSrcValues = []

	elements.container.addEventListener('click', function(event) {
		if (event.target.classList.contains('card__item--back')) {
			show.call(event.target, event)
		}
		// geting src of image tag
		arrOfSrcValues.push(elements.images[show.call(event.target, event)].src)

		arrOfIndexes.push(show.call(event.target, event))

		// If player tires to open more that two cards ar a time, denie it
		if (arrOfIndexes.length > 2) {
			elements.cards[arrOfIndexes[0]].classList.remove('is-flipped')
			elements.cards[arrOfIndexes[1]].classList.remove('is-flipped')
			elements.cards[arrOfIndexes[2]].classList.remove('is-flipped')
			// dont like this part
			elements.cards[arrOfIndexes[0]].style.pointerEvents = 'auto'
			elements.cards[arrOfIndexes[1]].style.pointerEvents = 'auto'
			elements.cards[arrOfIndexes[2]].style.pointerEvents = 'auto'

			arrOfIndexes = []
			arrOfSrcValues = []
		} else if (arrOfSrcValues[0] === arrOfSrcValues[1]) {
			if (matchedCards === 11) {
				timerView.stopTimer()
				console.log('You won the game')
				// storing best scores to LS
				scoreView.scoresToLocalStorage()

				// Need to add a pop up table w/ time and score
				elements.dialogBox.style.display = 'block'
			}
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
				elements.cards[arrOfIndexes[0]].classList.remove('is-flipped')
				elements.cards[arrOfIndexes[1]].classList.remove('is-flipped')
				// enambling ability to press on a card
				elements.cards[arrOfIndexes[0]].style.pointerEvents = 'auto'
				elements.cards[arrOfIndexes[1]].style.pointerEvents = 'auto'
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
		// make 4X5 grid
	} else if (quantity === 'M') {
		// make 6x6 grid
	} else if (quantity === 'H') {
		// make 48 cards?
	} else {
		console.log("woops you haven't picked the lvl")
	}
}
