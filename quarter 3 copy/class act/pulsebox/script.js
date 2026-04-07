const box = document.getElementById("box")
const box2 =document.getElementById("box2")

box.addEventListener("mouseover", function () {
    box.style.animationPlayState = "paused"
    box2.style.animationPlayState = "running"
});

box2.addEventListener("mouseover", function () {
    box2.style.animationPlayState = "paused"
    box.style.animationPlayState = "running"
});

