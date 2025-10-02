class dog {
    constructor(title, breed, color, age, size, pic) {
        this.title = title; 
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }

    get item() {
        const dogNode = document.createElement("div");
        dogNode.classList.add("dog-node");

        //header 
        const h3 = document.createElement("h3");
        h3.innerHTML = this.title + " " + this.age;
        dogNode.appendChild(h3);

        //image
        const img = document.createElement("img");
        img.src = this.pic;
        dogNode.appendChild(img);

        //list of everything else
        const detail = document.createElement("p");
        detail.innerHTML = `Breed: ${this.breed} Color: ${this.color} Size: ${this.size}`;
        dogNode.appendChild(detail);


        return dogNode;
    }
}

const dogs = [];
dogs.push(new dog("Fido", "Labrador", "Black", 3, "Large", "images/classes/pitt-bull.jpg"));
dogs.push(new dog("Rex", "German Shepherd", "Black and Tan", 5, "Large", "images/classes/yorkie.jpg"));
dogs.push(new dog("Spot", "Dalmatian", "White with Black Spots", 2, "Medium", "images/classes/golden-retriever.jpg"));

const dogListDiv = document.getElementById("dog-list");

dogs.forEach((dog) => {
    dogListDiv.appendChild(dog.item);
});