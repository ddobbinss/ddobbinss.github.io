//portions adopted from portiaportia
document.getElementById('faq-form').onsubmit = (event) => {
    event.preventDefault();

    const result = document.getElementById("contact-result");
    const formData = new FormData(event.currentTarget);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.innerHTML = "Sending...";

    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: json
    })
    .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
            result.innerHTML = "Sent.";
        } 
        else {
            console.log(response);
            result.innerHTML =  json.message;
        }
    })
    .catch((error) => {
        console.log(error);
        result.innerHTML = "Something went wrong.";
    })
    .then(function() {
        formData.reset();
        sestTimeout(() => {
            result.style.display = "none";
        }, 3000);
    });

};