import { moveGems } from "./loaders/lvlLoader.js"

let target

export const setTarget = (x, y) => {
	if (target == undefined) {
		target = {
			x: x,
			y: y
		}
	}else{
		if (x == target.x-1 && y == target.y || 
			x == target.x+1 && y == target.y) {
			// console.log(':D')
			moveGems(target, {x, y})
			clearTarget()
		}
		else if (y == target.y-1 && x == target.x || 
			y == target.y+1 && x == target.x) {
				// console.log(':D')
			moveGems(target, {x, y})
			clearTarget()
		}else{
			console.log('cant move there')
			target.x = x
			target.y = y
		}
	}
}

const clearTarget = () => {
	target = undefined
}

export const getTarget = () => {
	return target
}