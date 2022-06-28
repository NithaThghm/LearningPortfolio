//.... Déclarer les variables utiles à tout le script
const carouselCtn = document.querySelector(".carouselCtn");
const carouselImgCtn = document.querySelector('.carouselImgCtn')
const carouselLeft = document.getElementById('carouselLeft');
const carouselRight = document.getElementById('carouselRight');
const testAnim = 1;

const carouselTrackerCtn = document.querySelector('.carouselTrackerCtn')
const carouselTrackerCtnChilds = carouselTrackerCtn.children
const carouselSlideToLeft = document.querySelector('.carouselSlideToLeft')
const carouselTrackerActive = document.querySelector('.carouselTrackerActive')

const arrayTracker = Array.from(carouselTrackerCtn.children)

let currentImg
let x

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
const arrayImgLength = arrayImg.length;
//const imgWidth = currentImg.getBoundingClientRect();   //Retourne zéro, étudier pourquoi

    //1. Aligner les images les une à côtés des autres au démarrage
    const alignerImg = (image, index) => {
        if(index === arrayImgLength-1){
            image.style.left = '-355px';
        }else{
            image.style.left = 355 * index + 'px';
        }
    };
    arrayImg.forEach(alignerImg);

    //2. Réaligner les images au clic ou au glissement tactile pour créer un défilement infini
    function reorganiserImg(){
        //2.1. Récupérer l'index de l'image affichée et supprimer la classe currentImg
        arrayImg.forEach(image =>
            image.classList.forEach(el => {
                if(el === 'currentImg'){
                    currentImg = arrayImg.indexOf(image);
                }
            })
        )
        console.log('currentImg : '+currentImg)

        //2.2. Donner une valeur de 'Left' en fonction de l'index de l'image affichée
        for(i=0;i<=arrayImgLength-1;i++){
            let x
            console.log('i: '+i);
            console.log('currentImg + i : '+parseInt(currentImg+i))
            if(currentImg+i>arrayImgLength-1){
                x = currentImg+i-arrayImgLength
            }else{
                x = currentImg+i
            }
            console.log('x: ' + x)
            arrayImg[x].style.left = -355+355*i+'px'
                console.log(-355+355*i+'px')
            x++
        }

        //2.3. Supprimer et ajouter la classe 'currentImg' aux bonnes images
        arrayImg[currentImg].classList.remove('currentImg')
        if(currentImg+1>arrayImgLength-1){
            arrayImg[0].classList.add('currentImg');
        }else{
            arrayImg[currentImg+1].classList.add('currentImg');
        }

        //2.3 Supprimer et ajouter la classe 'carouselTrackerActive' aux bons tracker
        arrayTracker[currentImg].classList.remove('carouselTrackerActive')
        if(currentImg+1>arrayImgLength-1){
            arrayTracker[0].classList.add('carouselTrackerActive');
        }else{
            arrayTracker[currentImg+1].classList.add('carouselTrackerActive');
        }
    }

   



    //3. Test
    carouselLeft.addEventListener('click', () => {
        if(testAnim === 1){
            reorganiserImg();
        }
    })



      



/* .... Fonction au click changer la source de l'image */


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


    









