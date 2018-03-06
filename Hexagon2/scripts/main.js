"use strict";
var frequency = 1000,
	sequence = [
  "0111111", //0
  "0000110", //1
  "1011011", //2
  "1001111", //3
  "1100110", //4
  "1101101", //5
  "1111101", //6
  "0000111", //7
  "1111111", //8
  "1101111", //9
];
var elements = document.getElementById("shape").getElementsByTagName("*");
var counter = 0;

window.onload = function () {
	stepSequence();
};

function clearActive() {
	for (var a in elements)
		for (var b in elements[a].classList)
			if ("active" === elements[a].classList[b]) {
				elements[a].classList.remove("active");
			}
}

function addActive(a) {
	elements[a].classList.add("active");
}

function printSequence(a) {
	for (var b = sequence[a], c = 0; c < b.length; c++)
		if ("1" === b[c]) {
			addActive(c);
		}
}

function stepSequence() {
	clearActive();

	if (counter >= sequence.length) {
		counter = 0;
	}

	printSequence(counter);
	document.getElementById("display").innerHTML = sequence[counter];
	counter++;

	window.setTimeout(stepSequence, frequency);
}
