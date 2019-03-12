import { changeStatus } from "./main.js"
import { setTarget } from "./target.js"

export const keyPress = (e) => {
	// console.log(e)
	let key_state = (e.type == 'keydown') ? true : false

	switch (e.code) {
		case 'KeyA':
			controller.left = key_state
			break;

		case 'Space':
			controller.up = key_state
			break;

		case 'KeyD':
			controller.right = key_state
			break;

		case 'Escape':
			changeStatus('ended')
			break;
	
		default:
			break;
	}
}

export const mouseClick = (e) => {
	// console.log({x: Math.floor(e.offsetX / 64), y: Math.floor(e.offsetY / 64)})
	setTarget(Math.floor(e.offsetX / 64), Math.floor(e.offsetY / 64))
}

// let controller = {
// 	left: false,
// 	up: false,
// 	right: false
// }

// export const getController = () => {
// 	return controller
// }