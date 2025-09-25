document.getElementById("toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};


document.getElementById("btn-count").onclick = () => {
    const error = document.getElementById("error-number");
    error.innerHTML = "";

    const startNum = parseInt(document.getElementById("txt-start").value);
    const endNum = parseInt(document.getElementById("txt-end").value);

    const resultDiv = document.getElementById("d-count");
    resultDiv.innerHTML = "";

    if(startNum > endNum) {
        error.innerHTML = "* The second number must be bigger than the first";
        return;
    }


    //loop the number

    for(let i =startNum; i <=endNum; i++) {
        const p = document.createElement("p");
        p.innerHTML = i;
        resultDiv.append(p);
        p.onclick = () => {
            console.log(`you clicked number ${i}`);
        };
    }
};

document.getElementById("btn-show-toys").onclick = () => {
    const toyList = document.getElementById("toy-list");
    toyList.innerHTML = "";

    const toys = ["ball", "doll", "plane", "car", "puzzle"];

    //iterate over toys add li to the ul 
    for(let i=0; i < toys.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = toys[i];
        toyList.append(li);
    }

    toys.forEach((toy) => {
        const li = document.createElement("li");
        li.innerHTML = toy;
        toyList.append(li);
    });
}


document.getElementById("btn-show-toy-prices").onclick = () => {
    const toys = [];
    toys["ball"] = 10;
    toys["doll"] = 45;
    toys["plane"] = 30;
    toys["car"] = 25;
    toys["puzzle"] = 15;

    const toyDiv = document.getElementById("toy-prices");
    toyDiv.innerHTML = "";

    for(let toy in toys) {
        const p = document.createElement("p");
        p.innerHTML = toy;
        toyDiv.append(p);

        //when i click the paragraph....... in a div below show the price 
    }
}