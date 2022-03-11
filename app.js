// import functions and grab DOM elements
import { makeStatsString } from './utils.js';

let firstImage = document.getElementById('image-one');
let secondImage = document.getElementById('image-two');
let thirdImage = document.getElementById('image-three');

let firstDropdown = document.getElementById('selector-one');
let secondDropdown = document.getElementById('selector-two');
let thirdDropdown = document.getElementById('selector-three');

let sloganInput = document.getElementById('slogan-input');
let sloganHolder = document.getElementById('slogan-holder');
let countsHolder = document.getElementById('counts-holder');

let sloganButton = document.getElementById('slogan-button');

// let state
let sloganArray = [];
let firstChanges = 0;
let secondChanges = 0;
let thirdChanges = 0;

// set event listeners 
firstDropdown.addEventListener('change', () => {
    let firstValue = firstDropdown.value;
    firstChanges++;
    let firstPath = './assets/' + firstValue.toLowerCase() + '.png';
    firstImage.src = firstPath;
    displayCountStats();
});

secondDropdown.addEventListener('change', () => {
    let secondValue = secondDropdown.value;
    secondChanges++;
    let secondPath = './assets/' + secondValue.toLowerCase() + '.png';
    secondImage.src = secondPath;
    displayCountStats();
});

thirdDropdown.addEventListener('change', () => {
    let thirdValue = thirdDropdown.value;
    thirdChanges++;
    let thirdPath = './assets/' + thirdValue.toLowerCase() + '.png';
    thirdImage.src = (thirdPath);
    displayCountStats();
});

sloganButton.addEventListener('click', () => {
    let sloganToAdd = sloganInput.value;
    sloganArray.push(sloganToAdd);
    displaySlogans();
});

function displayCountStats() {
    const statsString = makeStatsString(firstChanges, secondChanges, thirdChanges);
    countsHolder.innerHTML = statsString;
}

function displaySlogans() {
    sloganHolder.innerHTML = '';
    for (let slogan of sloganArray) {
        let newSlogan = document.createElement('p');
        newSlogan.innerText = slogan;
        sloganHolder.appendChild(newSlogan);
    }
}
