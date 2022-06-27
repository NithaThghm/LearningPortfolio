//mettre les images côte à côte

const carouselCtn = document.querySelector(".carouselCtn");
const carouselImgCtn = document.querySelector('.carouselImgCtn')


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


// .... Paramétrer un défilement infini au glissement, ou clic, vers la droite ou la gauche */

const arrayImg = Array.from(carouselImgCtn.children)
//const imgWidth = currentImg.getBoundingClientRect();   //Retourne zéro, étudier pourquoi

    //1. Aligner les images les une à côtés des autres au démarrage
    const alignerImg = (image, index) => {
        if(index === arrayImg.length-1){
            image.style.left = '-355px';
        }else{
            image.style.left = 355 * index + 'px';
        }
    };
    arrayImg.forEach(alignerImg);

    //2. Réaligner les images au clic ou au glissement tactile
    function reorganiserImg(){
        //2.1. Récupérer l'index de l'image affichée
        let currentImg
        arrayImg.forEach(image =>
            image.classList.forEach(el => {
                if(el === 'currentImg'){
                    currentImg = arrayImg.indexOf(image);
                }
            })
        )
        //2.2. Donner une valeur de 'Left' en fonction de l'index de l'image affichée
        arrayImg[currentImg-1].style.left = '-355px'
        arrayImg[currentImg].style.left = '0px'
        arrayImg[currentImg+1].style.left = 355 * currentImg + 'px'

    }



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
    let array = [window.getComputedStyle(carousselImg1).display, window.getComputedStyle(carousselImg2).display,window.getComputedStyle(carousselImg3).display]

        console.log(array);
        if(element.id == "carousselLeft"){
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

// .... Paramétrer le défilement automatique du carousel avec un tracker d'image



// .... Paramétrer le glissement tactile de l'image vers la gauche


const carouselTrackerCtn = document.querySelector('.carouselTrackerCtn')
const carouselTrackerCtnChilds = carouselTrackerCtn.children
const carouselSlideToLeft = document.querySelector('.carouselSlideToLeft')
const carouselTrackerActive = document.querySelector('.carouselTrackerActive')

let xZero
let xPos
let xDec
let xDir
let i = 0;

    //1_ Récupérer la position de départ

    carouselImgCtn.addEventListener('touchstart',(e) =>{
        e.preventDefault()
        xZero = e.changedTouches[0].clientX
    })

    //2_ Récupérer la dernière position

    carouselImgCtn.addEventListener('touchend',(e) =>{
        e.preventDefault()
        xPos = e.changedTouches[0].clientX
        xDec = xPos - xZero
        xDir = Math.sign(xDec)
    
        if(xPos<xZero){
            moveTracker()
            moveLeft()
            moveTracker()
        }
        else{
            moveTracker()
            moveRight()
            moveTracker()
        }
    })

    //3_ Déplacer l'image à gauche

    function moveLeft(){
        if(i<2){
            i++
            carouselSlideToLeft.style.transform = 'translateX(calc((100vw - 2 * var(--marginCtn))*'+i+'*(-1)))'
        }
        else{}
    }

    //4_ Déplacer l'image à droite

    function moveRight(){
        if(i>=1){
            i-- 
            carouselSlideToLeft.style.transform = 'translateX(calc((100vw - 2 * var(--marginCtn))*'+i+'*(-1)))'
        }
        else{}
    }

    //5_ Déplacer le tracker d'image

    function moveTracker(){
        carouselTrackerCtnChilds[i].classList.toggle('carouselTrackerActive')
    }


    









