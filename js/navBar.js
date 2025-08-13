const dropdownContainer = document.querySelector(".menu");
const menuTitle = document.getElementById("menu-btn");
const dropdownMenu = document.getElementById("menu");

menuTitle.addEventListener("click",()=> {
    if(document.getElementById("menu-btn").children[0].classList.contains("fa-bars")) {
        dropdownMenu.classList.replace("notVisible", "visible");
        document.getElementById("menu-btn").children[0].classList.replace("fa-bars", "fa-close");
    }else {
        dropdownMenu.classList.replace("visible","notVisible");
        document.getElementById("menu-btn").children[0].classList.replace("fa-close","fa-bars");
    }
})

window.addEventListener("click", (e) => {
    if (!dropdownContainer.contains(e.target)) {
        dropdownMenu.classList.replace("visible","notVisible");
        document.getElementById("menu-btn").children[0].classList.replace("fa-close","fa-bars");
    }
})

window.addEventListener('resize',sizing)
sizing ()

function sizing () {
    let lister = document.getElementsByClassName('list');
    for(let i = 0; i < 4; i++) {
        lister[i].style.paddingRight = window.innerWidth - 100 +"px"
    }
}

