export const storeScoreByLvl = scoreTime => {
	let currentBestScore
	if (gameLvl === 'E') {
		currentBestScore = localStorage.getItem('EasyBestTime')
		if (currentBestScore === null) {
			localStorage.setItem('EasyBestTime', scoreTime)
			// need to add function to calc min and sec? Now time in sec is being shown
		} else if (scoreTime < parseInt(currentBestScore, 10)) {
			localStorage.setItem('EasyBestTime', scoreTime)
		} else {
			console.log('Best score is lower than current')
		}
	} else if (gameLvl === 'M') {
		currentBestScore = localStorage.getItem('MediumBestTime')

		if (currentBestScore === null) {
			localStorage.setItem('MediumBestTime', scoreTime)
			// need to add function to calc min and sec? Now time in sec is being shown
		} else if (scoreTime < parseInt(currentBestScore, 10)) {
			localStorage.setItem('MediumBestTime', scoreTime)
		} else {
			console.log('Best score is lower than current')
		}
	} else if (gameLvl === 'H') {
		currentBestScore = localStorage.getItem('HardBestTime')
		if (currentBestScore === null) {
			localStorage.setItem('HardBestTime', scoreTime)
			// need to add function to calc min and sec? Now time in sec is being shown
		} else if (scoreTime < parseInt(currentBestScore, 10)) {
			localStorage.setItem('HardBestTime', scoreTime)
		} else {
			console.log('Best score is lower than current')
		}
	} else {
		console.log("woops something wrong, level wasn't selected")
	}
}
