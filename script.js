
let myImage;

let data = fetch("https://ghibliapi.herokuapp.com/films")
	.then(response =>  { 	
		console.log(response)
		return response.json()
	})
	.then(result => {
		console.log(result)

		myImage = loadImage(result[Math.floor(random(0, result.length))].image);
		console.log(myImage);

		return result
	});



function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

function draw() {
	if(myImage != undefined) {
		image(myImage,0, 0);
	}

}