import { respawnGems } from "./loaders/lvlLoader.js"
export const checkGems = (lvl) => {
	for (let y = 0; y < lvl.length; y++) {
		for (let x = 0; x < lvl[y].length; x++) {
			const pos = {
				y: y,
				x: x
			}
		
			const gem = lvl[pos.y][pos.x]
				
			let matches = {}
			matches.x = checkX(lvl, pos, gem)
			if (y < lvl.length) {
				matches.y = checkY(lvl, pos, gem)
			}
		
			if (matches.x >= 3) {
				destroyGems(pos, matches.x, 'x', lvl)
				// console.log(matches.x + ` matches on x `)
			}
		
			if (matches.y >= 3) {
				destroyGems(pos, matches.y, 'y', lvl)
				// console.log(matches.y + ` matches on y `)
			}
		}	
	}
}

const checkX = (lvl, pos, gem, match = 1) => {
	if (pos.x + match < lvl[0].length +1) {
		if (lvl[pos.y][pos.x + match] == gem && gem != 7) {
			return checkX(lvl, pos, gem, match+1)
		}else{
			return match
		}
	}
}

const checkY = (lvl, pos, gem, match = 1) => {
	if (pos.y + match < lvl.length) {
		if (lvl[pos.y + match][pos.x] == gem && gem != 7) {
			
			return checkY(lvl, pos, gem, match+1)
		}else{
			return match
		}
	}else{
		return match
	}
}

const destroyGems = (pos, matches, dir, lvl) => {
	for (let i = 0; i < matches; i++) {
		if (dir == 'x') {
			lvl[pos.y][pos.x+i] = 7
		}else{
			lvl[pos.y+i][pos.x] = 7
		}
	}
	
	resortLevel(lvl, matches, dir)
}

const resortLevel = (lvl, matches, dir, row = 0) => {
	if (dir == 'x') {
		for (let i = lvl.length; i > 0; i--) {
			if (lvl[i-1][row] == 7) {
				for (let j = i; j > 1; j--) {
					lvl[j-1][row] = lvl[j-2][row]
					if (j == 2) {
						lvl[j-2][row] = 7
					}
				}
			}
		}
	}else{
		for (let i = 7; i > 0; i--) {
			if (lvl[i][0] == 7) {
				if (i - matches > 0 && lvl[i - matches][0] != 7) {
					lvl[i][0] = lvl[i - matches][0]
				}
			}
		}
	}
	
	if (row < lvl[0].length-1) {
		resortLevel(lvl, matches, dir, ++row)
	}else{
		respawnGems()
	}
}