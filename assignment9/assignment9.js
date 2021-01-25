const modal = document.getElementById("theModal");
const openBtn = document.querySelectorAll("button");
const closeBtn = document.getElementsByClassName("close");


const open = function () {
    modal.style.opacity = "1";
    modal.style.pointerEvents = "all";
}


const close = function () {
    modal.style.opacity = "0";
    modal.style.pointerEvents = "none";
}

for (let i = 0; i < openBtn.length; i++) {
    openBtn[i].addEventListener('click', open);
    closeBtn[0].addEventListener('click', close);
}