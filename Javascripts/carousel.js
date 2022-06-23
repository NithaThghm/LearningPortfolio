//mettre les images côte à côte

const carouselCtn = document.querySelector(".carouselCtn");

console.log(carouselCtn);


/* .... SWITCH */

const checkbox = document.querySelector("button");

checkbox.addEventListener("click", (event) => {
  if (checkbox.classList.contains("on")) {
    checkbox.setAttribute("aria-checked", "false");
  } else {
    checkbox.setAttribute("aria-checked", "true");
  }
  checkbox.classList.toggle("on");
});


/* .... FONCTION POUR CREER L'ARRAY AVEC LES IMAGES DU DOSSIER CAROUSEL */



/* .... Fonction au click changer la source de l'image */


const carousselLeft = document.getElementById("carousselLeft");
const carousselRight = document.getElementById("carousselRight");

// carousselLeft.onClick = changeImg;

function changeImg(element){
    let carousselImg1 = document.getElementById("carousselImg1");
    let carousselImg2 = document.getElementById("carousselImg2");
    let carousselImg3 = document.getElementById("carousselImg3");
    let pointImg1 = document.getElementById("pointImg1");
    let pointImg2 = document.getElementById("pointImg2");
    let pointImg3 = document.getElementById("pointImg3");
    console.log(carousselImg1.src);
    let array = [window.getComputedStyle(carousselImg1).display, window.getComputedStyle(carousselImg2).display,window.getComputedStyle(carousselImg3).display]

        console.log(array);
        if(element.id == "carousselLeft"){
            console.log(element.id);
            carousselImg1.classList.toggle("moveLeft");
            // for (const img of array){
            //     if(img == "block"){
            //         if(array.indexOf(img) == 0){
            //             carousselImg2.style.display ="block";
            //             carousselImg1.style.display = "none";
            //             pointImg1.classList.toggle("red");
            //             pointImg2.classList.toggle("red");
            //             carousselImg3.style.display = "none";
            //         }
            //         else if(array.indexOf(img) == 1){
            //             carousselImg1.style.display = "none";
            //             carousselImg2.style.display = "none";
            //             carousselImg3.style.display ="block";
            //             pointImg2.classList.toggle("red");
            //             pointImg3.classList.toggle("red");
            //         }
            //         else{}
            //     }
            //     else{
            //     }
            // }
        }

        else{
            console.log(element.id);
            for (const img of array){
                if(img == "block"){
                    if(array.indexOf(img) == 2){
                        carousselImg1.style.display = "none";
                        carousselImg2.style.display ="block";
                        carousselImg3.style.display = "none";
                        pointImg2.classList.toggle("red");
                        pointImg3.classList.toggle("red");
                    }
                    else if(array.indexOf(img) == 1){
                        carousselImg1.style.display = "block";
                        carousselImg2.style.display = "none";
                        carousselImg3.style.display ="none";
                        pointImg1.classList.toggle("red");
                        pointImg2.classList.toggle("red");
                    }
                    else{}
                }
                else{
                }
            }
        }

}

//Faire glisser l'image vers la gauche au slide tactile

const carouselImgCtn = document.querySelector('.carouselImgCtn')
const carouselSlideToLeft = document.querySelector('.carouselSlideToLeft')
let xZero
let xPos
let xDec
const xLimit = 50

carouselImgCtn.addEventListener('touchstart',(e) =>{
    e.preventDefault()
    xZero = e.targetTouches[0].clientX
    console.log("xZero : "+xZero)
})

carouselImgCtn.addEventListener('touchmove',(e) =>{
    e.preventDefault()
    xPos = e.targetTouches[0].clientX
    console.log("xPos : "+xPos)
    xDec = xZero - xPos
    console.log("xDec : "+xDec)
    if(xPos<xZero){
        carouselSlideToLeft.style.transform = 'translateX(-'+xDec+'px)'
    }else if(xDec >= xLimit){
        carouselSlideToLeft.style.transform = 'translateX(100%)'
    }
})





