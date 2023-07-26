var darkMode = false;
var buttonLabel = "Switch to Bright mode";
//var linkTag = document.querySelector("link");
var linkTag = document.getElementById("cssLink");

function switchModes() {
    if(darkMode) {
        linkTag.href = "first-look-bright.css"
        darkMode = false;
        buttonLabel = "Switch to Dark mode"
    } else {
        linkTag.href = "first-look-dark.css"
        darkMode = true;
        buttonLabel = "Switch to Bright mode"
    }
    //document.querySelector("button").innerHTML = buttonLabel;
    document.getElementById("switchButton").innerHTML = buttonLabel;
}

//document.querySelector("button").onclick = switchModes;
document.getElementById("switchButton").onclick = switchModes;