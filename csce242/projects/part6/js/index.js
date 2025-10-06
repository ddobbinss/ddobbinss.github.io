
document.getElementById("hamburger-menu").onclick = () => {
    console.log("fart");
    const navMenu = document.querySelector("#main-nav ul.columns");
    navMenu.classList.toggle("hide-small");
};

//extract fish
const getFish = async () => {
    const url = "https://ddobbinss.github.io/csce242/projects/part6/json/fish.json"
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

        //add image
        const img = document.createElement("img");
        img.src = `json/${fish.image}`;
        section.append(img);

        //add fish + species 
        const h1 = document.createElement("h1");
        const h2 = document.createElement("h2");
        h1.innerHTML = fish.name;
        h2.innerHTML = fish.species
        section.append(h1);
        section.append(h2);

        //add region
        const region = document.createElement("p");
        region.classList.add("fish-region");
        region.innerHTML = fish.region;
        section.append(region);

        //add price
        const price = document.createElement("p");
        price.classList.add("fish-price");
        price.innerHTML = `$${fish.price}`;
        section.append(price);

        //add to cart btn 
        const btn = document.createElement("button");
        btn.classList.add("btn-cart");
        btn.innerHTML = "Add To Cart";
        section.append(btn);

        fishDiv.append(section);

    });
};

//home page fish - random 3 
const showFeaturedFish = async () => {
    const featuredDiv = document.getElementById("featured-div");
    if (!featuredDiv) return; // abort if not home page

    try {
        const fishList = await getFish();

        // 3 random fish
        const randomFish = fishList.sort(() => 0.5 - Math.random()).slice(0, 3);

        randomFish.forEach((fish) => {
            //make unique fish node
            const section = document.createElement("section");
            section.classList.add("fish-item");

            // Image
            const img = document.createElement("img");
            img.src = `json/${fish.image}`;
        
            section.append(img);

            // Name and species
            const h1 = document.createElement("h1");
            h1.textContent = fish.name;
            section.append(h1);

            const h2 = document.createElement("h2");
            h2.textContent = fish.species;
            section.append(h2);

            // Region
            const region = document.createElement("p");
            region.classList.add("fish-region");
            region.textContent = fish.region;
            section.append(region);

            // Price
            const price = document.createElement("p");
            price.classList.add("fish-price");
            price.textContent = `$${fish.price}`;
            section.append(price);

            // Add to Cart button
            const btn = document.createElement("button");
            btn.classList.add("btn-cart");
            btn.textContent = "Add To Cart";
            section.append(btn);

            //unique onclick popup 
            section.onclick = () => showFishPopup(fish);
            // Add the section to featured div
            featuredDiv.append(section);

            

        });
    } catch (error) {
        console.error("fish error", error);
    }
};
//FISH POPUP SHOWS UP BOTTOM OF PAGE - FIX CSS TO MAKE POPUP WORK CORRECTLY 
const showFishPopup = (fish) => {
    document.getElementById("popup-img").src = `json/${fish.image}`;
    document.getElementById("popup-name").innerHTML = `${fish.name} ~ ${fish.species}`;
    document.getElementById("popup-species").innerHTML = fish.region;
    document.getElementById("popup-price").innerHTML = `$${fish.price}`;
    document.getElementById("popup-description").innerHTML = fish.info;

    document.getElementById("fish-popup").classList.add("hidden");
}

document.getElementById("close-popup").onclick = () => {
    document.getElementById("fish-popup").classList.add("hidden");
}

showFeaturedFish();
showFish();