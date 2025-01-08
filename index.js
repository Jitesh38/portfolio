let body = document.body;
let NavBar = document.getElementById("NavBar");
let SliDer = document.querySelector(".carousel");
let skill = document.getElementById("skills");
let contact = document.getElementById("contact");
let white = document.querySelector(".white");
let alertTrigger = document.getElementById("liveAlertBtn");

function change(checkboxElem) {
  if (checkboxElem.checked) {
    NavBar.classList.replace("bg-body-tertiary", "bg-dark");
    NavBar.classList.add("navbar-dark", "text-white");
    SliDer.classList.replace("carousel-dark", "bg-dark");
    body.classList.add("bg-dark", "text-white");
    skill.classList.add("text-white");
    alertTrigger.classList.add("btn-light");
    contact.classList.add("bg-secondary");
    contact.classList.add("text-white");
    white.classList.add("text-white");
  } else {
    NavBar.classList.replace("bg-dark", "bg-body-tertiary");
    NavBar.classList.remove("navbar-dark", "text-white");
    NavBar.classList.replace("bg-dark", "bg-body-tertiary");
    contact.classList.remove("bg-secondary", "text-white");
    white.classList.remove("text-white");
    SliDer.classList.replace("bg-dark", "carousel-dark");
    body.classList.remove("bg-dark", "text-white");
    skill.classList.remove("text-white");
  }
}

