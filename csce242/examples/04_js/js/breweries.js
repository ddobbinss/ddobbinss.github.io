const getBreweries = async() => {
    const url = "https://api.openbrewerydb.org/v1/breweries";

    try {
        const response = await fetch(url);
        return response.json();
    }
    catch(error) {
        console.log("no beer");
    }
    
}

const showBreweries = async() => {
    const breweires = await getBreweries();
    const pubs = document.getElementById("breweries");

    breweries.foreach((pub) => {
        const section = document.createElement("section");
        pubs.append(section.classList.add("brewery"));

        const h3 = document.createElement("h3");
        section.appendChild(h3);
        const a = document.createElement("a");
        section.appendChild(a);
        a.innerHTML = pub.name;
        a.href = pub.website_url;
    })
    
}

showBreweries();