let navbar = document.querySelector(".navbar");
let menu = document.querySelector("#menu");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}

let theme = document.querySelector("#theme");

theme.onclick = () => {
    theme.classList.toggle("fa-sun");

    if(theme.classList.contains("fa-sun")) {
        document.body.classList.add("active");
    }else {
        document.body.classList.remove("active");
    }
}

window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
}