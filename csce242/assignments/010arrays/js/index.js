window.onload = () => {
    const dogBefore = [];
    dogBefore["Oner"] = "images/before1.png";
    dogBefore["Terresa"] = "images/before2.png";
    dogBefore["Threeador"] = "images/before3.png";
    dogBefore["Farley"]= "images/before4.png";

    const dogAfter = [];
    dogAfter["Oner"] = "images/after1.png";
    dogAfter["Terresa"] = "images/after2.png";
    dogAfter["Threeador"] = "images/after3.png";
    dogAfter["Farley"] = "images/after4.png";

    const gallery = document.getElementById("gallery");

    //loop and make the dog divs 
    for (let name in dogBefore) {
        let galleryNode = document.createElement("div");
        galleryNode.classList.add("gallery-node");

        let img = document.createElement("img");
        img.src = dogBefore[name];
        img.alt = name;

        let caption = document.createElement("p");
        caption.innerText = `You Should Adopt ${name}`;
        caption.classList.add("gallery-caption");

        //append content into the gallery node
        galleryNode.appendChild(img);
        galleryNode.appendChild(caption);

        //add the gallery node to the gallery div 
        gallery.appendChild(galleryNode);
        //when gallerynode clicked popup create
        galleryNode.onclick = () => {
            document.getElementById("popup-title").innerHTML = `${name} has been adopted. Hooray!`;
            document.getElementById("popup-image").src = dogAfter[name];
            document.getElementById("popup").classList.remove("hidden");
        };
    }

    //when close button 
    document.getElementById("btn-close").onclick = () => {
        document.getElementById("popup").classList.add("hidden");
    };
}