
document.getElementById("hamburger-menu").onclick = () => {
    console.log("fart");
    const navMenu = document.querySelector("#main-nav ul.columns");
    navMenu.classList.toggle("hide-small");
};

//extract fish
const getFish = async () => {
    const url = "fish.json";
    try {
        const response = await fetch(url);
        return response.json();
    }
    catch (error) {
        console.log("no fish", error);
    }
};

//make fish nodes
const showFish = async () => {
    const fishList = await getFish();
    const fishDiv = document.getElementById("fish-div");

    fishList.forEach((fish) => {
        //make unique fish node
        const section = document.createElement("section");
        section.classList.add("fish-item");

        //make node clickable
        const a = document.createElement("a");
        a.href = "fishpreview.html";
        a.classList.add("a-fish-item");
        section.append(a);

        //add image
        const img = document.createElement("img");
        img.src = fish.image;
        a.append(img);

        //add fish + species 
        const h1 = document.createElement("h1");
        const h2 = document.createElement("h2");
        h1.innerHTML = fish.name;
        h2.innerHTML = fish.species
        a.append(h1);
        a.append(h2);

        //add region
        const region = document.createElement("p");
        region.classList.add("fish-region");
        region.innerHTML = fish.region;
        a.append(region);

        //add price
        const price = document.createElement("p");
        price.classList.add("fish-price");
        price.innerHTML = `$${fish.price}`;
        a.append(price);

        //add to cart btn 
        const btn = document.createElement("button");
        btn.classList.add("btn-cart");
        btn.innerHTML = "Add To Cart";
        section.append(btn);

        fishDiv.append(section);

    });
};

showFish();