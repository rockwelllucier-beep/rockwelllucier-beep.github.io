box = document.getElementsByClassName("box")[0]
pause_button = document.getElementById("pause")
document.getElementById("button").addEventListener("click", (e)=> {
    //document.getElementByClassName("box")[0].classList.toggle('move')
    box.style.animationPlayState = "running"
    console.log(box.style.animationPlayState)
})

document.getElementById("pause").addEventListener("click", (e)=> {
    //document.getElementByClassName("box")[0].classList.toggle('move')
    box.style.animationPlayState = "paused"
    console.log(box.style.animationPlayState)
})