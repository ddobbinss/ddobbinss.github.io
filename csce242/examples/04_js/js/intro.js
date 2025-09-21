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

document.getElementById("btn-mood").onclick = () => {
    const color = document.getElementById("txt-mood").value.trim().toLowerCase();
    const p = document.getElementById("mood-output");
    document.getElementById("error-color").innerHTML = " "; //reset error message to none
    
    if(color == "") {
        document.getElementById("error-color").innerHTML = "* BLANK *";
        return;
    }
    else if (color == "red") {
        document.getElementById("mood-output").innerHTML = "You are feeling evil"
    }
    else if (color == "green") {
        document.getElementById("mood-output").innerHTML = "You are feeling fart"
    }
    else {
        p.innerHTML = "pick a real color";
    }
}
 /*counter */
    let counter = 0;
    let counterInterval;
    const countP = document.getElementById("p-count");
    document.getElementById("btn-count-start").onclick = () => {
        counterInterval = setInterval(()=>{
            counter++;
            countP.innerHTML = counter;
        }, 1000);
    }
    document.getElementById("btn-count-pause").onclick = () => {
        clearInterval(counterInterval);
    }


    /*donation*/
    const goal = 10000;
    document.getElementById("span-goal").innerHTML = goal;

    document.getElementById("btn-donate").onclick = () => {
        const donattion = document.getElementById("input-donation").value;
        const errorSpan = document.getElementById("error-donation");
    }