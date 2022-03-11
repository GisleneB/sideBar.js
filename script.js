const menu = document.querySelector("#mySidebar");
const logo = document.querySelector(".logo");
const links_names = document.querySelectorAll(".texto");
const dashboadContent = document.querySelector(".dashboadContent");

menu.addEventListener('click', (e) => {
    links_names.forEach((element) => {
        if (element.style.display !== 'none') {
            element.style.display = 'none'
        } else{
            element.style.display = 'block'
        }
    })
})





