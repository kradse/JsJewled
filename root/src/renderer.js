import { getTarget } from "./target.js"

const canvas = document.getElementById('screen')
const ctx = canvas.getContext('2d')
const scaleValue = 4
const tileSize = 16 * scaleValue
const spriteSize = 64 * scaleValue

export const drawScreen = (spritesheet, lvl) => {
	ctx.clearRect(0, 0, canvas.clientWidth, canvas.height)
	ctx.beginPath()

	drawBackground()
	drawGems(spritesheet, lvl)
	drawTarget(getTarget())

	// ctx.drawImage(spritesheet, 64, 0, 32, 32, player.x, player.y, 128, 128)
	ctx.stroke()
}

const drawBackground = () => {
	for (let y = 0; y < 8; y++) {
		for (let x = 0; x < 8; x++) {
			if ((x+y) % 2 == 0) {
				ctx.fillStyle="rgb(125,135,150)"
			}else{
				ctx.fillStyle="rgb(232,235,239)"
			}
			ctx.fillRect(y * tileSize, x * tileSize, tileSize, tileSize)
		}
	}
}

const drawGems = (spritesheet, lvl) => {
	// console.log(lvl)
	
	for (let y = 0; y < 8; y++) {
		for (let x = 0; x < 8; x++) {
			const item = lvl[y][x]
			ctx.drawImage(spritesheet, item * 16, 0, 16, 16, x * tileSize, y * tileSize, tileSize, tileSize)
		}
	}
}

const drawTarget = (tile) => {
	if (tile == undefined) {
		return
	}
	ctx.lineWidth = "4"
	ctx.strokeStyle = "red"
	ctx.rect((tile.x * tileSize) + (ctx.lineWidth / 2), (tile.y * tileSize) + (ctx.lineWidth / 2), tileSize - ctx.lineWidth, tileSize - ctx.lineWidth)
	
}