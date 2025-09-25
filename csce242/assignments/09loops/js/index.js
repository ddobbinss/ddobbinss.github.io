document.getElementById("btn-draw").onclick = () => {
    const sky = document.getElementById("sky");
    const ground = document.getElementById("ground");
    sky.innerHTML = ""; //clear scene 
    ground.innerHTML = ""; //clear scene



    //figure whether it is night or day 
    const hour = new Date().getHours();
    const sunMoon = document.createElement("div");

    //find day or night 
    if (hour >= 6 && hour < 18) {
        sunMoon.className = "sun";
        document.getElementById("body").classList.remove("night");
    }
    else {
        sunMoon.className = "moon";
        document.getElementById("body").classList.add("night");
    }

    sky.appendChild(sunMoon)


    //clouds
    for (let i = 0; i < 6; i++) {
        const cloud = document.createElement("div");
        cloud.className = "cloud";
        sky.appendChild(cloud);
    }
    //trees 
    for (let i = 0; i < 6; i++) {
        const tree = document.createElement("div");
        tree.className = "tree";
        ground.appendChild(tree);
    }
}