//Afficher le menu glissant au clique du bouton menu

const menuBtn = document.querySelector(".menuBtn")
const menuSlider = document.querySelector(".menuSlider")

menuBtn.addEventListener('click',(e) =>{
    if(e.target.textContent === "Menu"){
        e.target.textContent = "Close"
        menuSlider.style.transform = "translateX(0)"
    }
    else{
        e.target.textContent = "Menu"
        menuSlider.style.transform = "translateX(-100vw)"
    } 
})