function appendText() {
    var textTag = document.createElement("p");
    var textVal = document.getElementById("textElem").value;
    var textNode = document.createTextNode(textVal);
    textTag.appendChild(textNode);
    document.getElementById('textBox').appendChild(textTag);
}

function appendTextClearOld() {
    document.getElementById("textBox").innerHTML = "";
    var textTag = document.createElement("p");
    var textVal = document.getElementById("textElem").value;
    var textNode = document.createTextNode(textVal);
    textTag.appendChild(textNode);
    document.getElementById('textBox').appendChild(textTag);
}

function loopTextClearOld() {
    document.getElementById("textBox").innerHTML = "";
    var textVal = document.getElementById("textElem").value;
    for (let index = 0; index < 20; index++) {
        var textTag = document.createElement("p");
        var textNode = document.createTextNode(textVal);
        textTag.appendChild(textNode);
        document.getElementById('textBox').appendChild(textTag);
    }
}