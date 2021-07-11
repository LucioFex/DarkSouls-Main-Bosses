/* JS document */

const bossLore = document.getElementsByClassName("boss-lore");
const cubeBossOne = document.getElementsByClassName("face");
const bossIcons = document.getElementsByClassName("boss-icon");
const gameChanger = document.getElementById("change-game");
const cube3D = document.getElementById("cube");

const setUp = () => {
    bossIcons[0].addEventListener("click", () => cubeAnimations(`0deg`))
    bossIcons[1].addEventListener("click", () => cubeAnimations(`90deg`))
    bossIcons[2].addEventListener("click", () => cubeAnimations(`180deg`))
    bossIcons[3].addEventListener("click", () => cubeAnimations(`270deg`))
}

const cubeAnimations = (degrees) => {
    cube3D.style.transition = "ease-in-out 2.5s";
    cube3D.style.transform = `rotateY(${degrees})`;
    setTimeout(removeTransition, 5)
}

const removeTransition = () => {
    cube3D.style.transition = "all 0s";
}


window.addEventListener('load', setUp, false); // Starts the script
