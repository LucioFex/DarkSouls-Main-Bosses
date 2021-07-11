/* JS document */

const bossLore = document.getElementsByClassName("boss-lore");
const cubeBossOne = document.getElementsByClassName("face");
const bossIcons = document.getElementsByClassName("boss-icon");
const gameChanger = document.getElementById("change-game");
const cube3D = document.getElementById("cube");

const setUp = () => {
    let bosses = ["nito", "izalith", "gwyn", "seath"];
    for (i=0; i < 4; i++) {changeBossButton(i, bosses[i])}
}

const changeBossButton = (index, boss) => {
    bossIcons[index].addEventListener("click", () => changeBoss(boss));
}

const changeBoss = (boss) => {
    const bosses = {
        nito: "0deg",
        izalith: "90deg",
        gwyn: "180deg",
        seath: "270deg"
    }

    cubeAnimation(bosses[boss]);
}

const cubeAnimation = (degrees) => {
    cube3D.style.transition = "ease-in-out 2.5s";
    cube3D.style.transform = `rotateY(${degrees})`;
    setTimeout(() => cube3D.style.transition = "all 0s", 5); // No transition
}


window.addEventListener('load', setUp, false); // Starts the script
