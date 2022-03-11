// import functions and grab DOM elements
import { makeStatsString } from './utils.js';
import { makeTitleString } from './utils.js';

let landImage = document.getElementById('image-one');
let timeImage = document.getElementById('image-two');
let peopleImage = document.getElementById('image-three');

let landDropdown = document.getElementById('land-selector');
let timeDropdown = document.getElementById('time-selector');
let peopleDropdown = document.getElementById('people-selector');

let sloganInput = document.getElementById('slogan-input');
let sloganHolder = document.getElementById('slogan-holder');
let countsHolder = document.getElementById('counts-holder');
let nameInput = document.getElementById('name-input');
let fullTitle = document.getElementById('city-title-text');

let sloganButton = document.getElementById('slogan-button');
let titleButton = document.getElementById('title-button');

// let state
let sloganArray = [];
let landChanges = 0;
let timeChanges = 0;
let peopleChanges = 0;

// set event listeners 
landDropdown.addEventListener('change', () => {
    let landValue = landDropdown.value;
    landChanges++;
    let landPath = './assets/' + landValue.toLowerCase() + '.png';
    landImage.src = landPath;
    displayCountStats();
});

timeDropdown.addEventListener('change', () => {
    let timeValue = timeDropdown.value;
    timeChanges++;
    let timePath = './assets/' + timeValue.toLowerCase() + '.png';
    timeImage.src = timePath;
    displayCountStats();
});

peopleDropdown.addEventListener('change', () => {
    let peopleValue = peopleDropdown.value;
    peopleChanges++;
    let peoplePath = './assets/' + peopleValue.toLowerCase() + '.png';
    peopleImage.src = (peoplePath);
    displayCountStats();
});

sloganButton.addEventListener('click', () => {
    let sloganToAdd = sloganInput.value;
    sloganArray.push(sloganToAdd);
    displaySlogans();
});

titleButton.addEventListener('click', () => {
    let cityTitle = makeTitleString(nameInput.value, landDropdown.value, timeDropdown.value, peopleDropdown.value);
    fullTitle.innerText = cityTitle;
});

function displayCountStats() {
    const statsString = makeStatsString(landChanges, timeChanges, peopleChanges);
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
