let img
let track
let ganador = 0
let x = []
let y = []
let vuelta = []
let meta = []
let lap = []
let primero = 0
function preload () {
	img = loadImage('img/vehicles.png')
	track = loadImage('img/track.png')
	for (let i = 0; i <4; i++) {
		x[i]=i*18
		y[i]=180+i*40
		vuelta[i]=3
		meta[i] = 0
		lap[i] = 0
	}
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(60)
	
}

function draw() {
	background('')
	image(track,[sx=0],[sy=0],[sWidth=400],[sHeight=400],[dx=0],[dy=0],[260],[210])
	for (let i = 0; i < 4; i++) {
			switch (vuelta[i]) {
			case 0:
				if(x[i]<windowWidth-(1020+i*15)) {
					if (x[i]<windowWidth-(1100+i*15)) {
						image(img,[sx=x[i]+=Math.floor(random(1,4))],[sy=y[i]],[sWidth=32],[sHeight=32],[dx=32*5],[dy=32*i],[32],[32])
					}else {
						image(img,[sx=x[i]+=Math.floor(random(1,4))],[sy=y[i]],[sWidth=32],[sHeight=32],[dx=32*6],[dy=32*i],[32],[32])
					}
				}else {
					vuelta[i]++
				}
				break
			case 1:
				if (y[i]+(i*15)>240) {
					image(img,[sx=x[i]],[sy=y[i]+=Math.floor(random(1,4))],[sWidth=32],[sHeight=32],[dx=32*0],[dy=32*i],[32],[32])
				}
				else{
					image(img,[sx=x[i]],[sy=y[i]+=Math.floor(random(1,4))],[sWidth=32],[sHeight=32],[dx=32*7],[dy=32*i],[32],[32])
				}
				if(y[i]+(i*15)>310)
					vuelta[i]++
				break
			case 2:
				if(x[i]>=15+i*15) {
					if (x[i]>=100+i*15) {
						image(img,[sx=x[i]-=Math.floor(random(1,4))],[sy=y[i]],[sWidth=32],[sHeight=32],[dx=32*1],[dy=32*i],[32],[32])

					}else {
						image(img,[sx=x[i]-=Math.floor(random(1,4))],[sy=y[i]],[sWidth=32],[sHeight=32],[dx=32*2],[dy=32*i],[32],[32])

					}
				}else{
					vuelta[i]++
					meta[i]=0
				}
				break
			case 3:
				if(y[i]<115+(i*15))	{
					image(img,[sx=x[i]],[sy=y[i]-=Math.floor(random(1,4))],[sWidth=32],[sHeight=32],[dx=32*4],[dy=32*i],[32],[32])
				}else {
					image(img,[sx=x[i]],[sy=y[i]-=Math.floor(random(1,4))],[sWidth=32],[sHeight=32],[dx=32*3],[dy=32*i],[32],[32])
				}
				
				if(meta[i]===0 && y[i]<180)
				{
					lap[i]++
					meta[i]++
				}
				if(y[i]<15+(i*15)){
					vuelta[i]=0
				}
				break
		}
	}
	textSize(30);
	text('Vuelta', 150, 150)
	for(let i = 0; i<4;i++)
	{
		if (primero<lap[i]) {
			primero=lap[i]
		}
	}
	if (primero>3) {
		primero=3
	}
	text(primero, 190, 200)
	primero=0

	for (let i = 1; i < 4; i++) {
		if (lap[i]==4 && ganador==0) {
			text('Ganador:'+(i+1), 400, 150)
			ganador=i+1
		}else {
			if (ganador!=0) {
				text('Ganador: '+ganador, 400, 150)
			}
			
		}
	}
	
	
}