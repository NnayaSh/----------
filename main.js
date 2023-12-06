document.getElementById("Forma").addEventListener("submit", function(event) {
    event.preventDefault();
    let formData = new FormData(this);
    let data = {};
    for (let pair of formData.entries()) {
        data[pair[0]] = pair[1];
    }
    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    for (let key in data) {
        let p = document.createElement("p");
        p.textContent = key.charAt(0).toUpperCase() + key.slice(1) + ": " + data[key];
        resultsDiv.appendChild(p);
    }

    console.log(JSON.stringify(data));
});

