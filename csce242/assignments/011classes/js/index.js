class painting {
    constructor(title, artist, image, framed) {
        this.title = title;
        this.artist = artist;
        this.image = image;
        this.framed = framed;
    }

    get item() {
        const section = document.createElement("section");
        section.classList.add("gallery-node");

        //title
        const h2 = document.createElement("h2");
        h2.innerHTML = this.title;
        section.append(h2);

        //image
        const img = document.createElement("img");
        img.src = this.image;
        section.append(img);

        return section;
    }
}

const paintings = [];
paintings.push(new painting("Orchid in Blossom", "Vincent Van Gogh", "images/vangogh1.png", true));
paintings.push(new painting("Sunflower", "Vincent Van Gogh", "images/vangogh2.png", false));
paintings.push(new painting("Napoleon Crossing the Alps", "Jacques-Louis David", "images/napoleon1.png", true));
paintings.push(new painting("Vitruvian Man", "Leonardo da Vinci", "images/leonardo1.png", false));
paintings.push(new painting("Convergence", "Jackson Pollock", "images/pollock1.png", true));

const gallery = document.getElementById("gallery");

paintings.forEach((painting) => {
    gallery.append(painting.item);

})

const galleryNodes = document.querySelectorAll(".gallery-node");
galleryNodes.forEach((node, i) => {
    node.onclick = () => {
        const p = paintings[i];

        document.getElementById("popup-title").innerHTML = p.title;
        document.getElementById("popup-artist").innerHTML = `by ${p.artist}`;
        
        const popupImage = document.getElementById("popup-image");
        popupImage.src = p.image;

        if (p.framed) {
            popupImage.classList.add("framed");
        }
        else {
            popupImage.classList.remove("framed");
        }

        document.getElementById("popup").classList.remove("hidden");
    }
})

document.getElementById("btn-close").onclick = () => {
    document.getElementById("popup").classList.add("hidden");
};