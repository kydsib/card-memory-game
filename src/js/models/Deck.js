export default class Deck {
	constructor() {}

	shuffleArrayValues() {
		let array = [
			'https://source.unsplash.com/KZC7BJo0Cl0/400X400',
			'https://source.unsplash.com/KZC7BJo0Cl0/400X400',
			'https://source.unsplash.com/GfQEdpIkkuw/400x400',
			'https://source.unsplash.com/GfQEdpIkkuw/400x400',
			'https://source.unsplash.com/F6MkzlXsWTc/400x400',
			'https://source.unsplash.com/F6MkzlXsWTc/400x400',
			'https://source.unsplash.com/ZsA3DknVxRc/400x400',
			'https://source.unsplash.com/ZsA3DknVxRc/400x400',
			'https://source.unsplash.com/TjegK_z-0j8/400x400',
			'https://source.unsplash.com/TjegK_z-0j8/400x400',
			'https://source.unsplash.com/-cIsDqVGRyY/400x400',
			'https://source.unsplash.com/-cIsDqVGRyY/400x400',
			'https://source.unsplash.com/JRcVCHzjRxM/400x400',
			'https://source.unsplash.com/JRcVCHzjRxM/400x400',
			'https://source.unsplash.com/oPBl-R8bjww/400x400',
			'https://source.unsplash.com/oPBl-R8bjww/400x400',
			'https://source.unsplash.com/R4KydJd3l2k/400x400',
			'https://source.unsplash.com/R4KydJd3l2k/400x400',
			'https://source.unsplash.com/KZdqA5QtWFU/400x400',
			'https://source.unsplash.com/KZdqA5QtWFU/400x400',
			'https://source.unsplash.com/w-bPRl6xNPs/400x400',
			'https://source.unsplash.com/w-bPRl6xNPs/400x400',
			'https://source.unsplash.com/oBTC7jviUxs/400x400',
			'https://source.unsplash.com/oBTC7jviUxs/400x400'
		]

		for (let i = array.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1))
			let temp = array[i]
			array[i] = array[j]
			array[j] = temp
		}

		return array
	}
}
