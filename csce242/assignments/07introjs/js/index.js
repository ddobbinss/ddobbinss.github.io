document.getElementById("btn-sun").onclick = () => {
    document.getElementById("sun-text").classList.toggle("hide");
}

document.getElementById("color-picker").oninput = () => {
    const pickedColor = document.getElementById("color-picker").value;
    const colorText = document.getElementById("color-text");

    colorText.style.color = pickedColor; //color in hexcoded color
    colorText.textContent = pickedColor; //show hexcode
    
};

document.getElementById("img-change").onclick = () => {
    document.getElementById("img-change").src = "images/sun.png";
}