document.getElementById("Forma").addEventListener("submit", function(event) {
    event.preventDefault();
    let formData = new FormData(this);
    let data = {};
    for (let pair of formData.entries()) {
        data[pair[0]] = pair[1];
    }
    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    let jsonOutput = JSON.stringify(data, null, 4);
    let jsonElement = document.createElement("pre");
    jsonElement.textContent = jsonOutput;
    resultsDiv.appendChild(jsonElement);

    console.log(jsonOutput);
});


