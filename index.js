/* JS document */

const bossLore = document.getElementsByClassName("boss-lore");
const cubeBossOne = document.getElementsByClassName("face");
const bossIcons = document.getElementsByClassName("boss-icon");
const gameChanger = document.getElementById("change-game");
const cube3D = document.getElementById("cube");

const setUp = () => {
    bossIcons[0].addEventListener("click", () => cubeAnimations(`${0}deg`), false)  // Nito
    bossIcons[1].addEventListener("click", () => cubeAnimations(`${90}deg`), false)  // Izalith
    bossIcons[2].addEventListener("click", () => cubeAnimations(`${180}deg`), false)  // Gwyn
    bossIcons[3].addEventListener("click", () => cubeAnimations(`${270}deg`), false)  // Seath
}

const cubeAnimations = (degrees) => {
    cube3D.style.transition = "ease-in-out 2.5s";
    cube3D.style.transform = `rotateY(${degrees})`;
}


window.addEventListener('load', setUp, false); // Starts the script
