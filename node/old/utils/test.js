const tag = "[utils/test.js_v0.0.3]";
const l = require('../../logger');
l.tag(tag + __dirname); 


const test = {
    v           : 'v0.0.1',
    author      : 'littleflute'
};

test.dbTest = function(){ 
    return "dbTest";
}

//npm install canvas
test.canvasTest = function (){
	const fs = require('fs')
	const { createCanvas, loadImage } = require('canvas')

	const width = 1200
	const height = 630

	const canvas = createCanvas(width, height)
	const context = canvas.getContext('2d')

	context.fillStyle = '#000'
	context.fillRect(0, 0, width, height)

	context.font = 'bold 70pt Menlo'
	context.textAlign = 'center'
	context.textBaseline = 'top'
	context.fillStyle = '#3574d4'

	const text = 'Hello, World!'

	const textWidth = context.measureText(text).width
	context.fillRect(600 - textWidth / 2 - 10, 170 - 5, textWidth + 20, 120)
	context.fillStyle = '#fff'
	context.fillText(text, 600, 170)

	context.fillStyle = '#fff'
	context.font = 'bold 30pt Menlo'
	context.fillText('flaviocopes.com', 600, 530)

	loadImage('./1.png').then(image => {
	  context.drawImage(image, 0, 0, 800, 1210)
	  const buffer = canvas.toBuffer('image/png')
	  fs.writeFileSync('./test.png', buffer)
	})
}


module.exports = test;