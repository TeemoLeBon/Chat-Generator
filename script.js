
function changeBase(filename) {
    document.getElementById('base').src = filename;
}
function changeAccessory(layerNum, filename) {
    const layer = document.getElementById('accessoire' + layerNum);
    if (filename === "none") {
        layer.style.display = "none";
    } else {
        layer.src = filename;
        layer.style.display = "block";
    }
}
