let body = document.body;
let NavBar = document.getElementById("NavBar");
let card = document.querySelectorAll(".card");
let button = document.querySelectorAll(".btn");

function change(checkboxElem) {
    if (checkboxElem.checked) {
        NavBar.classList.replace("bg-body-tertiary", "bg-dark");
        NavBar.classList.add("navbar-dark", "text-white");
        body.classList.add("bg-dark", "text-white");
        card.forEach((item) => {
            item.classList.add("bg-dark", "text-white", "card-border");
        });
        button.forEach((item) => {
            item.classList.remove("btn-dark");
            item.classList.add("btn-light", "text-black");
        });
    } else {
        NavBar.classList.replace("bg-dark", "bg-body-tertiary");
        NavBar.classList.remove("navbar-dark", "text-white");
        body.classList.remove("bg-dark", "text-white");
        card.forEach((item) => {
            item.classList.remove("bg-dark", "text-white", "card-border");
        });
        button.forEach((item) => {
            item.classList.add("btn-dark");
            item.classList.remove("btn-light", "text-black");
        });
    }
}
