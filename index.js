/* JS document */

const bossLore = document.getElementsByClassName("boss-lore");
const cubeBossOne = document.getElementsByClassName("face");
const bossIcons = document.getElementsByClassName("boss-icon");
const gameChanger = document.getElementById("change-game");
const cube3D = document.getElementById("cube");


const setUp = () => {
    let bosses = ["nito", "seath", "izalith", "gwyn"];
    for (index=0; index < 4; index++) {changeBossButton(index, bosses[index])}
}

const changeBossButton = (index, boss) => {
    bossIcons[index].addEventListener("click", () => changeBoss(boss));
}

const getBossData = async () => {
    const request = "json/dark-souls-1.json";
    const response = await fetch(request);
    const json = await response.json();
    return json
}

const changeBoss = async (boss) => {
    const data = await getBossData()
    cubeAnimation(data[boss].degrees);
}

const cubeAnimation = (degrees) => {
    cube3D.style.transition = "ease-in-out 2.5s";
    cube3D.style.transform = `rotateY(${degrees})`;
    setTimeout(() => cube3D.style.transition = "all 0s", 250); // No transition
}


window.addEventListener('load', setUp, false); // Starts the script
