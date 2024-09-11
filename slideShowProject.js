let divElement = document.querySelector(".slider-item")
let imgElement = document.querySelector(".img-slider")
let prevElement = document.querySelector(".prev")
let nextElement = document.querySelector(".next")
let imgList = ["image/1.jpg","image/2.png","image/3.jpg"]

let j = 0;
function nextPic () {
    j++
    if(j>imgList.length-1){
        j = 0
        imgElement.src = imgList[j]
    }else {
        imgElement.src = imgList[j]
    }
}

function prevPic () {
    j--
    if(j<0){
        j=imgList.length-1
        imgElement.src = imgList[j]
    }else {
        imgElement.src = imgList[j]
    }
}

nextElement.addEventListener("click",nextPic)
prevElement.addEventListener("click",prevPic)
setInterval(nextPic,2000)
