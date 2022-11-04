//file for the GUI or popup in this case.
//will use chrome extension functions to access 

window.onload = function () {
    function updateLabel() { 
        var enabled = chrome.extension.getBackgroundPage().enabled;
        document.getElementsById('toggle_button').onclick = function () {
            var background = chrome.extension.getBackgroundPage();
            background.enabled = !background.enabled;
            updateLabel(); 

        };
        updateLabel();
    }
}