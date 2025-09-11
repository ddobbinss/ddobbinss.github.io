/*

const sayHello = () => {
    console.log("hello world");
}


document.getElementById(btnClickMe).onclick = sayHello;

*/

document.getElementById("btn-sad").onclick = (event) => {
    document.getElementById("p-feeling").innerHTML = "Doom is Near";
    //document.getElementById("btn-click-me").classList.add("clicked");
    event.currentTarget.classList.add("sad-clicked"); //current target is thebutton that was pressed
    
};

document.getElementById("btn-happy").onclick = (event) => {
    document.getElementById("p-feeling").innerHTML = "SunShine and Rainbows!";
    event.currentTarget.classList.add("happy-clicked");
}

document.getElementById("btn-clear").onclick = (event) => {
    document.getElementById("p-feeling").innerHTML = "Cleared";
    
}

document.getElementById("txt-emotion").onkeyup = (event) => {
    const userInput = event.currentTarget.value;
    document.getElementById("p-emotion").innerHTML = `You are feeling ${userInput}`
    document.getElementById("img-emotion").classList.remove("hidden");
};