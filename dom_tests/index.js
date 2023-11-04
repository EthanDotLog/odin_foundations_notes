const container = document.querySelector("#container")

const hiRed = "Hey I'm red!";
const hiBlue = "I'm a blue H3";
const divMessageH1 = "I'm a div";
const divMessageP = "ME TOO!";


const hiRedEl = document.createElement('p');
const hiBlueEl = document.createElement('h3');
const newDivEl = document.createElement('div');
const divMessageH1El = document.createElement('h1');
const divMessagePEl = document.createElement('p')


hiRedEl.setAttribute('style', 'color: red;');
hiBlueEl.setAttribute('style', 'color: blue;');
newDivEl.setAttribute('id', 'newDiv');
newDivEl.setAttribute('style', 'border: 3px solid black; background-color: pink;');


hiRedEl.textContent = hiRed;
hiBlueEl.textContent = hiBlue;
divMessageH1El.textContent = divMessageH1;
divMessagePEl.textContent = divMessageP;

newDivEl.appendChild(divMessageH1El);
newDivEl.appendChild(divMessagePEl);

container.appendChild(hiRedEl);
container.appendChild(hiBlueEl);
container.appendChild(newDivEl);

