let lvl

export const getLvl = () => {
	return lvl
}

export const moveGems = (gemA, gemB) => {
	const placeholder = getGem(gemA.x, gemA.y)
	lvl[gemA.y][gemA.x] = getGem(gemB.x, gemB.y)
	lvl[gemB.y][gemB.x] = placeholder
}

const getGem = (x, y) => {
	return lvl[y][x]
}

export const generateFullMap = () => {
	if (lvl == undefined) {
		lvl = []
	}
	for (let y = 0; y < 8; y++) {
		if (lvl[y] == undefined) {
			lvl[y] = []
		}
		for (let x = 0; x < 8; x++) {
			lvl[y][x] = Math.round(Math.random()*6)
		}
	}

	return lvl
}

export const respawnGems = () => {
	// console.log(lvl)
	for (let y = 0; y < 8; y++) {
		for (let x = 0; x < 8; x++) {
			if (lvl[y][x] == 7) {
				lvl[y][x] = Math.round(Math.random()*6)
			}
		}
	}
}