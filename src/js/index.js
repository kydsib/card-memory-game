// Card-Memory-Game
// Tier: 2-Intermediate

// Card memory is a game where you have to click on a card to see what image is underneath it and try to find the matching image underneath the other cards.

//  When all the matches have been found, the User can see a dialog box showing a Congratulations message with a counter displaying the time it took to finish the game
// Bonus features
//  Use can choose between multiple levels of difficulty (Easy, Medium, Hard). Increased difficulty means: decreasing the time available to complete and/or increasing the number of cards
//  User can see the game statistics (nr. of times he won / he lost, best time for each level)

// gal butu geriau susikurti dinamini contenta?

import { elements } from '../../js/views/base'
console.log('loool')

let cardsSelect = document.querySelectorAll('.card')
let cards = Array.from(cardsSelect)
let matchedCards = 0
let length = cards.length
let imgSelector = document.querySelectorAll('.img-style')
let images = Array.from(imgSelector)

let startButton = document.getElementById('start')

// Function for random images
console.log(elements)

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1))
		let temp = array[i]
		array[i] = array[j]
		array[j] = temp
	}

	addPhotos(images, array)
}

function letsMakeArr(item) {
	let halfTheLength = item / 2
	let arr = []

	for (let i = 1; i <= halfTheLength; i++) {
		arr.push(i)
	}
	let finalArr = [...arr, ...arr]
	// console.log(finalArr)

	shuffleArray(finalArr)
}

letsMakeArr(length)

function onClickClassChange(cards) {
	getIndexOfContainer()
	cards.map(card => {
		card.addEventListener('click', function() {
			card.classList.value === 'card is-flipped'
				? card.classList.remove('is-flipped')
				: card.classList.add('is-flipped')
			// disabling ability to press on the opened card
			if (card.classList.value === 'card is-flipped') {
				card.style.pointerEvents = 'none'
			}
		})
	})

	function getIndexOfContainer() {
		const container = document.getElementById('container')
		let arrOfIndexes = []
		let arrOfSrcValues = []

		container.addEventListener('click', function(event) {
			if (event.target.classList.contains('card__item--back')) {
				show.call(event.target, event)
			}
			// geting src of image tag

			arrOfSrcValues.push(images[show.call(event.target, event)].src)

			// getting index value of cicked element
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
				console.log(matchedCards)
				if (matchedCards === 12) {
					console.log('You won the game')
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
				// reiketu iskart callinti timeri ir jo viduje resetinti is flipped jei nematchino
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
		let liveCollection = container.getElementsByClassName(
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
}

function matchTheImg(index) {
	let flipValues = []
	flipValues.push(images[index].src)
}

function addPhotos(containers, arrayForPhotos) {
	for (let i = 0; i < arrayForPhotos.length; i++) {
		containers[i].src = `images/painting${arrayForPhotos[i]}.jpg`
	}
}

// there is 1s delay for a first call, so I reduce the time by 1s. How could I solve it the other way?
let timeInSeconds = 200
function startTimer() {
	let timer = document.getElementById('time')

	startButton.addEventListener('click', startButon)

	function startButon() {
		onClickClassChange(cards, images)
		intervalId = setInterval(timeLeft, 1000)
		// disabling button so user can not call function once again
		startButton.disabled = true
	}

	let min, sec, intervalId
	function timeLeft() {
		min = parseInt(timeInSeconds / 60, 10)
		sec = parseInt(timeInSeconds % 60, 10)

		min = min < 10 ? '0' + min : min
		sec = sec < 10 ? '0' + sec : sec

		timer.innerHTML = `${min}:${sec}`

		if (--timeInSeconds < 0) {
			console.log('Game over')

			stopSubtraction()
			// after time is finished player can't open any new cards
			cards.map(card => {
				card.style.pointerEvents = 'none'
			})
		} else if (matchedCards === 12) {
			stopSubtraction()
			console.log(`You won. Time left ${timeInSeconds}`)
			cards.map(card => {
				card.style.pointerEvents = 'none'
			})
		}
	}

	function stopSubtraction() {
		clearInterval(intervalId)
	}
}
startTimer() // Do not like this part

function reset() {
	let resetButton = document.getElementById('reset')
	resetButton.addEventListener('click', function() {
		cards.map(card => {
			card.style.pointerEvents = 'auto'
		})
		onClickClassChange(cards, images)
		letsMakeArr(length)
		cards.map(card => {
			card.classList.value === 'card is-flipped'
				? card.classList.remove('is-flipped')
				: ''
		})

		//

		startButton.disabled = false
		timeInSeconds = 200
		return (matchedCards = 0)
	})
}

reset()
// labai daug besikartojancio kodo reiketu susideti i funckijas.

/// MODULE PATERN

// CONTROLER
