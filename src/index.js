import _ from "lodash";
import './style.css';

const wheelContainer = document.querySelector(".wheelparts-container");
const spinButton = document.getElementById("spin-button");
const modal = document.getElementById("modal");
const modalWindow = document.querySelector(".modal-window");
const closeModalSign = document.querySelector(".cross-sign");


const degreesOfRotate = ['655', '675', '1020', '1050', '1400', '1410', '1405', '1750', '1755'];
let randomDegrees = degreesOfRotate[Math.floor(Math.random() * degreesOfRotate.length)];

spinButton.addEventListener('click', function () {
    spinButton.style.pointerEvents = "none";
    wheelContainer.style.transform = "rotate(" + randomDegrees + "deg)";
    randomDegrees = degreesOfRotate[Math.floor(Math.random() * degreesOfRotate.length)];
    setTimeout(() =>  {
        openModal();
        party.confetti(spinButton, {
            count: party.variation.range(40, 60),
        });
    }, 5200)
});

 function delayOfReturnWheel () {
     setTimeout(() => {
        return wheelContainer.style.transform = "none";
     }, 1000)
 }

function closeModal () {
    modal.classList.remove("modal__open");
    modalWindow.classList.remove("open");
    modal.classList.add("modal__disable");
    modalWindow.classList.add("disabled");
    spinButton.style.pointerEvents = "auto";
}

function openModal () {
    modal.classList.remove("modal__disable");
    modalWindow.classList.remove("disabled");
    modal.classList.add("modal__open");
    modalWindow.classList.add("open");
    delayOfReturnWheel();
}

closeModalSign.addEventListener('click', closeModal);