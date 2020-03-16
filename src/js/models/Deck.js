import { elements } from '../views/base'

export default class Deck {
	constructor() {
		this.cards = elements.cards
	}

	arrayOfPairedValues() {
		// need half of the arr so I'd get 12 paired values
		let halfTheLength = this.cards.length / 2
		let arr = []

		for (let i = 1; i <= halfTheLength; i++) {
			arr.push(i)
		}
		let finalArr = [...arr, ...arr]

		this.shuffleArrayValues(finalArr)

		return finalArr
	}

	shuffleArrayValues(array) {
		for (let i = array.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1))
			let temp = array[i]
			array[i] = array[j]
			array[j] = temp
		}
		return array
	}
}
