/* JS document */

const bossInformation = document.getElementsByClassName("boss-lore");
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
    let request = "json/dark-souls-1.json";
    let response = await fetch(request);
    let json = await response.json();
    return json
}

const changeBoss = async (boss) => {
    let data = await getBossData()

    cubeAnimation(data[boss].degrees);
    bossDescription(data[boss])
}

const cubeAnimation = (degrees) => {
    cube3D.style.transition = "ease-in-out 2.5s";
    cube3D.style.transform = `rotateY(${degrees})`;
    setTimeout(() => cube3D.style.transition = "all 0s", 250); // No transition
}

const bossDescription = (description) => {
    bossInformation[0].innerHTML = description.name;
    bossInformation[1].innerHTML = description.nickname;
    bossInformation[2].innerHTML = description.lore;
}


window.addEventListener('load', setUp, false); // Starts the script
