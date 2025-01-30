// Variable


let clicker = 0;

function toClick() {
    clicker = clicker + 0.0001;
    refresh();
}

function refresh() {
    document.getElementById("score").innerHTML = clicker.toFixed(4) ;
}