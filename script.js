function upload() {
    var textInput = document.getElementById("textInput").value;
    var fileInput = document.getElementById("fileInput").files[0];
    var formData = new FormData();

    formData.append("text", textInput);

    if (fileInput) {
        formData.append("file", fileInput);
    }

    fetch("upload.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        var wordList = document.getElementById("wordList");
        var listItem = document.createElement("li");
        listItem.textContent = data;
        wordList.appendChild(listItem);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
