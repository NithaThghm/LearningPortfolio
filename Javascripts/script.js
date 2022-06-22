//Afficher le menu glissant au clique du bouton menu

const menuBtn = document.querySelector(".menuBtn")
const menuSlider = document.querySelector(".menuSlider")



//Afficher et masquer le menu glissant :

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

//Passer le header et le footer en display none et agrandir le main à 100% en hauteur :

const fsImg = document.querySelector(".fsImg");
const header = document.querySelector("header")
const footer = document.querySelector("footer")
const main = document.querySelector("main")

fsImg.addEventListener('click',() => {
    if(window.getComputedStyle(header).display !== "none"){
        header.style.display = 'none'
        footer.style.display = "none"
        main.style.height = "100%"
    }else{
        header.style.display = 'flex'
        footer.style.display = 'block'
        main.style.height = 'var(--contentHeight)'
    }
})