import { start } from "./src/main.js"
import { loadImage } from "./src/loaders/spriteLoader.js"
import { keyPress, mouseClick } from "./src/controller.js"

const canvas = document.getElementById('screen')
canvas.width = 1367
canvas.height = 768
canvas.style = "border:1px solid black;"

const fps = 16
const interval = 1000 / fps

const keyDown = (e) => {
	// keyPress(e)
}
const keyUp = (e) => {
	// console.log(e)
}

const init = () => {
	loadImage('../assets/spriteSheet.png')
	.then(image => {
		// image, cropX startm cropY start, cropX size, cropY size, xPos, yPos, imgWidth, imgHeight
		start(interval, image)
	})

	window.addEventListener('keydown', keyPress)
	window.addEventListener('keyup', keyPress)
	window.addEventListener('click', mouseClick)
	// document.addEventListener("keydown", function onPress(event) {
	// 	// keyDown(event)
	// })
	// document.addEventListener("keyup", function onPress(event) {
	// 	// keyUp(event)
	// })
}

init()
