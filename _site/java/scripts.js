/* header loading animations */

function loadingLogo() {
    var elem = document.getElementById("headerContent");
    var pos = -100;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 10){
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos + "px";
        }
    }
}

