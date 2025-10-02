const getShoes = async() => {
    const url = "https://portiaportia.github.io/json/shoes.json";


    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log("woopsies");
    }
};

const showShoes = async() => {
    const shoes = await getShoes();
    const shoeListDiv = document.getElementById("shoe-list");
    
    
    shoes.forEach((shoe) => {
        const shoeNode = document.createElement("div");  
        shoeNode.appendChild(document.createElement("h3")).innerText = shoe.name;
        shoeListDiv.appendChild(shoeNode);

        const reviews = document.createElement("ul");

        shoe.reviews.forEach((review) => {
            const li = document.createElement("li");
            li.innerText = review;
            reviews.appendChild(li);
        });

        shoeNode.appendChild(reviews);
    });
};

showShoes();