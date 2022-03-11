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

// let state
let sloganArray = [];
let firstChanges = 0;
let secondChanges = 0;
let thirdChanges = 0;

// set event listeners 
firstDropdown.addEventListener('change', () => {
    let firstValue = firstDropdown.value;
    firstChanges++;
    let firstPath = 'url(./assets/' + firstValue.toLowerCase() + '.png)';
    firstImage.src = firstPath;
    displayCountStats();
});


secondDropdown.addEventListener('change', () => {
    let secondValue = secondDropdown.value;
    let secondPath = 'url(./assets/' + secondValue.toLowerCase() + 'png)';
    secondImage.src = secondPath;
    displayCountStats();
});


thirdDropdown.addEventListener('change', () => {
    let thirdValue = thirdDropdown.value;
    thirdChanges++;
    let thirdPath = 'url(./assets/' + thirdValue.toLowerCase() + '.png)';
    thirdImage.src = (thirdPath);
    displayCountStats();
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
        let newSlogan = document.createElement('div');
        newSlogan.innerText = slogan;
        sloganHolder.appendChild(newSlogan);
    }
}
