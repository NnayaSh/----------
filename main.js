document.getElementById("Forma").addEventListener("submit", function(event) {
    event.preventDefault();
    let formData = new FormData(this);
    let data = {};
    for (let pair of formData.entries()) {
        data[pair[0]] = pair[1];
    }
    let resultsDiv = document.getElementById("results");
    let jsonOutput = JSON.stringify(data, null, 4);
    resultsDiv.innerHTML = textContent = jsonOutput;

    console.log(jsonOutput);
});


