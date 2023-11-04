const page = document.querySelector("body");

const button1El = document.createElement('button');
const button2El = document.createElement('button');
const button3El = document.createElement('button');

button1El.textContent = "Click Me";
button1El.setAttribute("onclick", "alert('Hello World')");

page.appendChild(button1El);

button2El.textContent = "Click Me 2";
button2El.setAttribute("id", "btn");
page.appendChild(button2El);


let btn2 = document.querySelector("#btn");
btn2.onclick = () => alert("Hello world 2");

button3El.textContent = "I am the ultimate button";
button3El.setAttribute('id', 'btn3')
page.appendChild(button3El)

let btn3 = document.querySelector("#btn3")
btn3.addEventListener('click', () => {
    alert('hello world in the best way')
});