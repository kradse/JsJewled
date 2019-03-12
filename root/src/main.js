import { drawScreen } from "./renderer.js"
import { generateFullMap, getLvl } from "./loaders/lvlLoader.js"
import { checkGems } from "./calculator.js";

let level = generateFullMap()

export const start = (fps, image) => {
	level = getLvl()
	return loop(fps, image)
}

var gameStatus = 'running'

const loop = (fps, image) => {
	drawScreen(image, level)
	checkGems(level)
	// console.log(level)

	// console.log(gameStatus)
	if (gameStatus === 'running') {
		setTimeout(() => { 
			return loop(fps, image)
		}, fps)
	}else{
		console.log('Game Ended')
	}
}

export var changeStatus = (newStatus) => {
	gameStatus = newStatus
	return
}