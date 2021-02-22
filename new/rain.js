const pageWidth = window.innerWidth;
const pageHeight = window.innerHeight;
const defaultDropNum = 50;


function makeItRain (num) {

	let elements = document.getElementById("drops-section");

	while (elements.hasChildNodes()) {
		elements.removeChild(elements.lastChild);
	}


	for (let i = 0 ; i < num ; i ++) {
		let randomX = Math.floor(Math.random() * (pageWidth));
		let randomY = Math.floor(Math.random() * (pageHeight));
		//let dropSpeed = 2;
		let dropSpeed = Math.floor(Math.random() * 10) + 10;
		let dropWidth = 1;
		let dropHeight = 60;
		//let dropHeight = Math.floor(Math.random() * (dropSpeed*2 - 3)) + 3;
		let d = new Drop(randomX, randomY, dropSpeed, dropWidth, dropHeight);

		d.show();
		d.fall();

	}

}

function updateNumberInView (num) {
	let el = document.getElementById("dropsNum").firstChild;
	el.nodeValue = num;
}

function changeNumDrops (num) {
	updateNumberInView(num);
	makeItRain(num);
}

updateNumberInView(defaultDropNum);
makeItRain(defaultDropNum);