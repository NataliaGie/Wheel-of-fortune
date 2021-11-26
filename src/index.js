import _ from "lodash";
import './style.css';

const wheelContainer = document.querySelector(".wheelparts-container");
const spinButton = document.getElementById("spin-button");
const modal = document.getElementById("modal");
const closeModalButton = document.querySelector(".close-button");

const degreesOfRotate = ['655', '675', '1020', '1050', '1400', '1410', '1405', '1750', '1755'];
let randomDegrees = degreesOfRotate[Math.floor(Math.random() * degreesOfRotate.length)];


spinButton.onclick = function () {
    wheelContainer.style.transform = "rotate(" + randomDegrees + "deg";
    randomDegrees = degreesOfRotate[Math.floor(Math.random() * degreesOfRotate.length)];
}

function closeModal () {
    modal.classList.remove("modal__open");
    modal.classList.add("modal__disable");
}

function openModal () {
    modal.classList.remove("modal__disable");
    modal.classList.add("modal__open");
}

closeModalButton.addEventListener('click', closeModal);

wheelContainer.addEventListener('transitionend', openModal);
