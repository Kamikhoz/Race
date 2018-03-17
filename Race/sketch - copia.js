let img
let x1 = 0
let y1 = 0
let vuelta1=0
function preload () {
	img = loadImage('img/vehicles.png')
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(60)
}

function draw() {
	background('')
	
	switch (vuelta1) {
		case 0:
			if(x1<windowWidth-32) {
				image(img,[sx=x1+=Math.floor(random(2,6))],[sy=y1],[sWidth=32],[sHeight=32],[dx=32*5],[dy=32*0],[32],[32])
			}else {
				vuelta1++
			}
			break
		case 1:
			image(img,[sx=x1],[sy=y1],[sWidth=32],[sHeight=32],[dx=32*6],[dy=32*0],[32],[32])
			vuelta1++
			break
		case 2:
			image(img,[sx=x1],[sy=y1+=3],[sWidth=32],[sHeight=32],[dx=32*7],[dy=32*0],[32],[32])
			if(y1===30)
				vuelta1++
			break
		case 3:
			image(img,[sx=x1],[sy=y1],[sWidth=32],[sHeight=32],[dx=32*0],[dy=32*0],[32],[32])
			vuelta1++
			break
		case 4:
			if(x1>0)
				image(img,[sx=x1-=Math.floor(random(2,6))],[sy=y1],[sWidth=32],[sHeight=32],[dx=32*1],[dy=32*0],[32],[32])
			break
	}
	
	
}