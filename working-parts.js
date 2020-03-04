// Takes values, randomizes the array START

var cardsSelect = document.querySelectorAll('.container__item')
// let numCards = cards.length
let cards = Array.from(cardsSelect)
console.log(cards)
let length = cards.length
// const finalArr = []

// Function for random images

function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1))
		var temp = array[i]
		array[i] = array[j]
		array[j] = temp
	}
	console.log(array)

	addPhotos(images, array)
}

function letsMakeArr(item) {
	let halfTheLength = item / 2
	let arr = []

	for (let i = 1; i <= halfTheLength; i++) {
		arr.push(i)
	}
	let finalArr = [...arr, ...arr]
	console.log(finalArr)

	shuffleArray(finalArr)
}

letsMakeArr(length)

//// END of ARR RANDOMIZATION //

// ADDING CICK EVENT ROTATING CARD SIDES

function logIt(items) {
	items.map(item => {
		item.addEventListener('click', function() {
			console.log(item.classList)
			item.classList.value === 'container__item active'
				? item.classList.remove('active')
				: item.classList.add('active')
		})
	})
}

logIt(cards)

/// END OF ROTATION

// adding photos randomly

function addPhotos(containers, arrayForPhotos) {
	for (let i = 0; i < arrayForPhotos.length; i++) {
		console.log(i)
		console.log(containers[i])
		containers[i].src = `images/dog${arrayForPhotos[i]}.jpg`
	}
}

// Working timer, need to cancel setInterval

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
