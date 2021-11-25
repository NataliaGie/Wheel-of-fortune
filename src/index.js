import _ from "lodash";
import './style.css';

const wheelContainer = document.querySelector(".wheelparts-container");
const spinButton = document.getElementById("spin-button");

const degreesOfRotate = ['320', '655', '675', '1020', '1050', '1400', '1410', '1405', '1750'];
let randomDegrees = degreesOfRotate[Math.floor(Math.random() * degreesOfRotate.length)];

spinButton.onclick = function () {
    wheelContainer.style.transform = "rotate(" + randomDegrees + "deg";
    randomDegrees = degreesOfRotate[Math.floor(Math.random() * degreesOfRotate.length)];
}
