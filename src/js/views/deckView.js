import { elements } from './base'
import * as timerView from './timerView'

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

export const addPhotos = arrForPhotos => {
	for (let i = 0; i < arrForPhotos.length; i++) {
		elements.images[i].src = `../../images/painting${arrForPhotos[i]}.jpg`
		// elements.images[i].id = elements.cards[i].id = uniqueID()
	}
}

// const toggle = () => {
// 	elements.cards.map(card => {
// 		card.classList.value === 'card'
// 			? card.classList.add('is-flipped')
// 			: card.classList.remove('is-flipped')

// 		if (card.classList.value === 'card is-flipped') {
// 			console.log('after reset')
// 			card.style.pointerEvents = 'none'
// 		}
// 	})
// }

export const toggleClassOnClick = () => {
	elements.cards.forEach(card => {
		card.addEventListener('click', function() {
			console.log('card class should have changed')
			card.classList.value === 'card'
				? card.classList.add('is-flipped')
				: card.classList.remove('is-flipped')

			// disabling ability to press on the opened card
			//
			if (card.classList.value === 'card is-flipped') {
				console.log('after reset')
				card.style.pointerEvents = 'none'
			}
		})
		// card.addEventListener('click', toggle, true)
	})
}

// need to fix this or use ID instead
let matchedCards = 0

export const getIndexOfContainer = () => {
	let arrOfIndexes = []
	let arrOfSrcValues = []
	let scoreForWins
	if (localStorage.getItem('Won') === null) {
		scoreForWins = 0
	} else {
		scoreForWins = localStorage.getItem('Won')
	}

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
			console.log(matchedCards)
			if (matchedCards === 11) {
				timerView.stopTimer()

				// Game won text + scores // move everything to separate function?
				console.log('You won the game')
				scoreForWins++
				elements.messageBox.innerHTML = `You finished the game in ${timerView.calcTime()} seconds`
				localStorage.setItem('Won', scoreForWins)
				let timesWon = localStorage.getItem('Won')
				// let timesLost = localStorage.getItem('Lost')

				let scoreForLoses
				//
				if (localStorage.getItem('Lost') === null) {
					scoreForLoses = 0
				} else {
					scoreForLoses = localStorage.getItem('Lost')
				}

				elements.winText.textContent = `You have won - ${timesWon} times`
				elements.loseText.textContent = `You have lost - ${scoreForLoses} times`
				// Trying to store best time by lvl to lS
				timerView.storeScoreByLvl(timerView.calcTime())

				let easyLowScoreTime =
					localStorage.getItem('EasyBestTime') === null
						? 'Currently there is no best time'
						: localStorage.getItem('EasyBestTime')
				let mediumLowScoreTime =
					localStorage.getItem('MediumBestTime') === null
						? 'Currently there is no best time'
						: localStorage.getItem('MediumBestTime')
				let hardLowScoreTime =
					localStorage.getItem('HardBestTime') === null
						? 'Currently there is no best time'
						: localStorage.getItem('HardBestTime')
				elements.bestEasyTime.textContent = `Best easy lvl time is - ${easyLowScoreTime} seconds`
				elements.bestMediumTime.textContent = `Best easy lvl time is - ${mediumLowScoreTime} seconds`
				elements.bestHardTime.textContent = `Best easy lvl time is - ${hardLowScoreTime} seconds`

				// How to send

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
