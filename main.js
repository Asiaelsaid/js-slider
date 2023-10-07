let images = Array.from(document.images);
let slideNumber = document.querySelector(".slide-number");
let prevButton = document.querySelector(".prev");
let nextButton = document.querySelector(".next");
let containerLi = document.querySelector(".indicators");
let currentSlide = 1;
prevButton.onclick = prevSlide;
nextButton.onclick = nextSlide;
function prevSlide() {
	if (prevButton.classList.contains("disabled")) return;
	currentSlide--;
	theChecker();
}
function nextSlide() {
	if (nextButton.classList.contains("disabled")) return;
	currentSlide++;
	theChecker();
}
let ul = document.createElement("ul");
for (let i = 1; i <= images.length; i++) {
	let li = document.createElement("li");
	li.setAttribute("data-index", i);
	li.appendChild(document.createTextNode(i));
	ul.appendChild(li);
}
containerLi.appendChild(ul);
let numbers = document.querySelectorAll("ul li");
theChecker();
for (let i = 0; i < numbers.length; i++) {
	numbers[i].onclick = function () {
		currentSlide = parseInt(this.getAttribute("data-index"));
		theChecker();
	};
}
function theChecker() {
	slideNumber.textContent = ` Slide # ${currentSlide} of ${images.length}`;
	images.forEach((e) => e.classList.remove("active"));
	numbers.forEach((e) => e.classList.remove("active"));
	images[currentSlide - 1].classList.add("active");
	numbers[currentSlide - 1].classList.add("active");
	if (currentSlide == 1) {
		prevButton.classList.add("disabled");
	} else {
		prevButton.classList.remove("disabled");
	}
	if (currentSlide == images.length) {
		nextButton.classList.add("disabled");
	} else {
		nextButton.classList.remove("disabled");
	}
}
