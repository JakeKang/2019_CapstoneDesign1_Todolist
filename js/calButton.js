const exit = document.querySelector(".js-Exit");

function showDown(){
    close();
}

function init(){
    exit.addEventListener("click",showDown);
}
init();