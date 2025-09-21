document.getElementById("btn-dropdown").onclick = () => {
    console.log("clinking");
    document.getElementById("div-btns").classList.toggle("hide-small");
}

document.getElementById("btn-exercise-1").onclick = () => {
    document.getElementById("div-planting").classList.remove("hide");
    document.getElementById("div-clock").classList.add("hide");
}
document.getElementById("btn-exercise-2").onclick = () => {
    document.getElementById("div-planting").classList.add("hide");
    document.getElementById("div-clock").classList.remove("hide");
}

document.getElementById("plant-slider").onchange = () => {
    let days = Number(document.getElementById("plant-slider").value);
    const plantImg = document.getElementById("plant-img");
    const daysSince = document.getElementById("txt-days-since-water");
    const plantStatus = document.getElementById("txt-plant-status");
    
    daysSince.innerHTML = `Its been ${days} since watering your plant`;
    if (days >= 0 && days <=2) {
        plantImg.src = "images/healthy.png";
        plantStatus.innerHTML = "Your plant is healthy and happy";
    }
    else if (days >=3 && days <=5) {
        plantImg.src = "images/parched.png";
        plantStatus.innerHTML = "Your plant needs watering";
    }
    else if (days >=6 && days <= 9) {
        plantImg.src = "images/thirsty.png";
        plantStatus.innerHTML = "Leaves are dropping the color is changing, water soon";
    }
    else {
        plantImg.src = "images/dehydration.png";
        plantStatus.innerHTML = "Sorry, your plant is no longer with us";
    }

}

const updateClock = () => {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm = "AM";
    if (hours >= 12) {
        ampm = "PM";
    }

    hours = hours % 12;

    if (hours === 0) {
        hours = 12;
    }

    let hh = hours;
    if (hours < 10) {
        hh = 0 + hours;
    }

    let mm = minutes;
    if (minutes < 10) {
        mm = "0" + minutes;
    }

    document.getElementById("time").innerHTML = `${hh}:${mm}${ampm}`;

}

updateClock();

setInterval(updateClock, 60000);

