function insertIfPossible() {
    try {
        let elem = document.getElementById("cameraPreview-0-1").childNodes[0].childNodes[0].childNodes[0].childNodes[0];
        elem.innerHTML = "<div style='background-image: none' class=\"x-tool\" onclick=\"document.getElementById('cameraPreview-0-1').childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].requestFullscreen();\">Maximize</div>" + elem.innerHTML;
    } catch (e) {
        setTimeout(insertIfPossible, 1000);
    }
}
insertIfPossible();
