// Card-Memory-Game
// Tier: 2-Intermediate

// Card memory is a game where you have to click on a card to see what image is underneath it and try to find the matching image underneath the other cards.

// User Stories
//  User can see a grid with n x n cards (n is an integer). All the cards are faced down initially (hidden state)
//  User can click a button to start the game. When this button is clicked, a timer will start
//  User can click on any card to unveil the image that is underneath it (change it to visible state). The image will be displayed until the user clicks on a 2nd card
// When the User clicks on the 2nd card:

//  If there is a match, the 2 cards will be eliminated from the game (either hide/remove them or leave them in the visible state)
//  If there isn't a match, the 2 cards will flip back to their original state (hidden state)
//  When all the matches have been found, the User can see a dialog box showing a Congratulations message with a counter displaying the time it took to finish the game
// Bonus features
//  Use can choose between multiple levels of difficulty (Easy, Medium, Hard). Increased difficulty means: decreasing the time available to complete and/or increasing the number of cards
//  User can see the game statistics (nr. of times he won / he lost, best time for each level)

let cardsSelect = document.querySelectorAll('.card')
let cards = Array.from(cardsSelect)

let length = cards.length
let imgSelector = document.querySelectorAll('.img-style')
let images = Array.from(imgSelector)

// Function for random images

function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1))
		var temp = array[i]
		array[i] = array[j]
		array[j] = temp
	}
	// console.log(array)

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
	cards.map(item => {
		item.addEventListener('click', function() {
			item.classList.value === 'card is-flipped'
				? item.classList.remove('is-flipped')
				: item.classList.add('is-flipped')
		})
	})

	function getIndexOfContainer() {
		let container = document.body
		let arrOfIndexes = []
		let arrOfSrcValues = []

		// single event listener for all dynamically added elements
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

				arrOfIndexes = []
				arrOfSrcValues = []
			} else if (arrOfSrcValues[0] === arrOfSrcValues[1]) {
				// reseting arrays to use logic once again
				arrOfIndexes = []
				arrOfSrcValues = []

				console.log('Paintings matched')
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
	console.log(flipValues)
}

onClickClassChange(cards, images)

function addPhotos(containers, arrayForPhotos) {
	for (let i = 0; i < arrayForPhotos.length; i++) {
		// console.log(i)
		// console.log(containers[i])
		containers[i].src = `images/painting${arrayForPhotos[i]}.jpg`
	}
}

// there is 1s delay for a first call, so I reduce the time by 1s. How could I solve it the other way?
let timeInSeconds = 89
function startTimer() {
	let timer = document.getElementById('time')
	let startButton = document.getElementById('start')

	startButton.addEventListener('click', function() {
		intervalId = setInterval(timeLeft, 1000)
	})

	console.log('first call')

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
		}
	}

	function stopSubtraction() {
		clearInterval(intervalId)
	}
}
startTimer()
