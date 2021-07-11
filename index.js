/* JS document */

const setUp = () => {
    const bossLore = document.getElementsByClassName("boss-lore");
    const cubeBossOne = document.getElementsByClassName("face");
    const bossIcons = document.getElementsByClassName("boss-icon");
    const gameChanger = document.getElementById("change-game");
    const cube3D = document.getElementById("cube");
}

const cubeAnimations = () => {
    cube3D.style.transition = "all 2s";
    cube3D.style.transform = "rotateY(90deg)";
}



window.addEventListener('load', setUp, false); // Starts the script
