import _ from "lodash";
import './style.css';

const wheelContainer = document.querySelector(".wheelparts-container");
const spinButton = document.getElementById("spin-button");
const modal = document.getElementById("modal");
const modalWindow = document.querySelector(".modal-window");
const closeModalSign = document.querySelector(".cross-sign");

const degreesOfRotate = ['655', '675', '1020', '1050', '1400', '1410', '1405', '1750', '1755'];
let randomDegrees = degreesOfRotate[Math.floor(Math.random() * degreesOfRotate.length)];


spinButton.onclick = function () {
    wheelContainer.style.transform = "rotate(" + randomDegrees + "deg";
    randomDegrees = degreesOfRotate[Math.floor(Math.random() * degreesOfRotate.length)];
}

function closeModal () {
    modal.classList.remove("modal__open");
    modalWindow.classList.remove("open");
    modal.classList.add("modal__disable");
    modalWindow.classList.add("disabled");
}

function openModal () {
    modal.classList.remove("modal__disable");
    modalWindow.classList.remove("disabled");
    modal.classList.add("modal__open");
    modalWindow.classList.add("open");
}

wheelContainer.addEventListener('transitionend', openModal);
wheelContainer.addEventListener('transitionend', function (e) { party.confetti(this) } );
closeModalSign.addEventListener('click', closeModal);

