export default class Deck {
	constructor(lvl) {
		this.lvl = lvl
	}
	// function to mix values of given array
	shufler(array) {
		for (let i = array.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1))
			let temp = array[i]
			array[i] = array[j]
			array[j] = temp
		}

		return array
	}
	// function that returns mixed array of src's
	shuffleArrayValues() {
		const arrEasy = [
			'https://source.unsplash.com/KZC7BJo0Cl0/400X400',
			'https://source.unsplash.com/KZC7BJo0Cl0/400X400',
			'https://source.unsplash.com/GfQEdpIkkuw/400x400',
			'https://source.unsplash.com/GfQEdpIkkuw/400x400',
			'https://source.unsplash.com/qgWUv52K6Fk/400x400',
			'https://source.unsplash.com/qgWUv52K6Fk/400x400',
			'https://source.unsplash.com/QPqD-w28ADc/400x400',
			'https://source.unsplash.com/QPqD-w28ADc/400x400',
			'https://source.unsplash.com/TjegK_z-0j8/400x400',
			'https://source.unsplash.com/TjegK_z-0j8/400x400',
			'https://source.unsplash.com/-cIsDqVGRyY/400x400',
			'https://source.unsplash.com/-cIsDqVGRyY/400x400',
			'https://source.unsplash.com/JRcVCHzjRxM/400x400',
			'https://source.unsplash.com/JRcVCHzjRxM/400x400',
			'https://source.unsplash.com/e4usjv5lmhE/400x400',
			'https://source.unsplash.com/e4usjv5lmhE/400x400',
			'https://source.unsplash.com/njgv9Lz_obc/400x400',
			'https://source.unsplash.com/njgv9Lz_obc/400x400',
			'https://source.unsplash.com/KZdqA5QtWFU/400x400',
			'https://source.unsplash.com/KZdqA5QtWFU/400x400',
			'https://source.unsplash.com/w-bPRl6xNPs/400x400',
			'https://source.unsplash.com/w-bPRl6xNPs/400x400',
			'https://source.unsplash.com/oBTC7jviUxs/400x400',
			'https://source.unsplash.com/oBTC7jviUxs/400x400'
		]

		const arrayMedium = [
			'https://source.unsplash.com/KvABIybtJgA/400x400',
			'https://source.unsplash.com/KvABIybtJgA/400x400',
			'https://source.unsplash.com/XYudmRuYKlw/400x400',
			'https://source.unsplash.com/XYudmRuYKlw/400x400',
			'https://source.unsplash.com/gtWi4FjSfhk/400x400',
			'https://source.unsplash.com/gtWi4FjSfhk/400x400'
		]

		const arrayHard = [
			'https://source.unsplash.com/AJ8xxudtzxw/400x400',
			'https://source.unsplash.com/AJ8xxudtzxw/400x400',
			'https://source.unsplash.com/rhHr3O3G0ZE/400x400',
			'https://source.unsplash.com/rhHr3O3G0ZE/400x400',
			'https://source.unsplash.com/Yrq_gtWf7pQ/400x400',
			'https://source.unsplash.com/Yrq_gtWf7pQ/400x400'
		]
		let array
		if (this.lvl === 'E') {
			array = [...arrEasy]
			this.shufler(array)

			return array
		} else if (this.lvl === 'M') {
			array = [...arrEasy, ...arrayMedium]
			this.shufler(array)

			return array
		} else if (this.lvl === 'H') {
			array = [...arrEasy, ...arrayMedium, ...arrayHard]
			this.shufler(array)

			return array
		}
	}
}
