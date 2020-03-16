const compareSrcValyes = () => {
	let arrOfId = []
	let arrOfSrc = []

	getIdOfContainer()
}

const getIdOfContainer = () => {
	elements.cards.map(card =>
		card.addEventListener('click', function() {
			let id = card.id
			arrOfId.push(id)
		})
	)
}

function getIndexOfContainer() {
	// Change this part w/ using ID
	console.log('me was called!')
	// const container = document.getElementById('container')
	let arrOfIndexes = []

	let arrOfSrcValues = []

	elements.container.addEventListener('click', function(event) {
		if (event.target.classList.contains('card__item--back')) {
			show.call(event.target, event)
		}
		// geting src of image tag

		arrOfSrcValues.push(elements.images[show.call(event.target, event)].src)
		console.log(arrOfSrcValues)
		// getting index value of cicked element
		arrOfIndexes.push(show.call(event.target, event))
		console.log(arrOfIndexes)

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
				elements.cards[arrOfIndexes[0]].classList.remove('is-flipped')
				elements.cards[arrOfIndexes[1]].classList.remove('is-flipped')
				// enambling ability to press on a card
				// SHOULD I USE ID INSTEAD OF INDEX?
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
