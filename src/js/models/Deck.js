export default class Deck {
	constructor(lvl) {
		this.lvl = lvl
	}

	shuffleArrayValues() {
		let array
		if (this.lvl === 'E') {
			array = [
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
		} else if (this.lvl === 'M') {
			// pagalvoti, kaip neperkopinti jau esamo kontento o tiesiog prideti nauja
			array = [
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
				'https://source.unsplash.com/oBTC7jviUxs/400x400',
				//end 24
				'https://source.unsplash.com/hNyNlOXVGt0/400x400',
				'https://source.unsplash.com/hNyNlOXVGt0/400x400',
				'https://source.unsplash.com/HoevDVvxInw/400x400',
				'https://source.unsplash.com/HoevDVvxInw/400x400',
				'https://source.unsplash.com/gtWi4FjSfhk/400x400',
				'https://source.unsplash.com/gtWi4FjSfhk/400x400'
				// end 30
			]
		} else if (this.lvl === 'H') {
			array = [
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
				'https://source.unsplash.com/oBTC7jviUxs/400x400',
				//end 24
				'https://source.unsplash.com/hNyNlOXVGt0/400x400',
				'https://source.unsplash.com/hNyNlOXVGt0/400x400',
				'https://source.unsplash.com/HoevDVvxInw/400x400',
				'https://source.unsplash.com/HoevDVvxInw/400x400',
				'https://source.unsplash.com/gtWi4FjSfhk/400x400',
				'https://source.unsplash.com/gtWi4FjSfhk/400x400',
				// end 30
				'https://source.unsplash.com/sCTLk6Rg5PE/400x400',
				'https://source.unsplash.com/sCTLk6Rg5PE/400x400',
				'https://source.unsplash.com/Rvn4K42KgWQ/400x400',
				'https://source.unsplash.com/Rvn4K42KgWQ/400x400',
				'https://source.unsplash.com/BP1X2k_p0p0/400x400',
				'https://source.unsplash.com/BP1X2k_p0p0/400x400'
				//end 36
			]
		}

		for (let i = array.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1))
			let temp = array[i]
			array[i] = array[j]
			array[j] = temp
		}

		return array
	}
}
