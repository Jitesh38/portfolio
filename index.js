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
    NavBar.classList.add("navbar-dark");
    NavBar.classList.add("text-white");
    SliDer.classList.replace("carousel-dark", "bg-dark");
    body.classList.add("bg-dark");
    body.classList.add("text-white");
    skill.classList.add("text-white");
    alertTrigger.classList.add("btn-light");
    NavBar.classList.replace("bg-body-tertiary", "bg-dark");
    NavBar.classList.add("navbar-dark");
    NavBar.classList.add("text-white");
    contact.classList.add("bg-secondary");
    contact.classList.add("text-white");
    white.classList.add("text-white");
  } else {
    NavBar.classList.replace("bg-dark", "bg-body-tertiary");
    NavBar.classList.remove("navbar-dark");
    NavBar.classList.remove("text-white");
    NavBar.classList.replace("bg-dark", "bg-body-tertiary");
    NavBar.classList.remove("navbar-dark");
    NavBar.classList.remove("text-white");
    contact.classList.remove("bg-secondary");
    contact.classList.remove("text-white");
    white.classList.remove("text-white");
    SliDer.classList.replace("bg-dark", "carousel-dark");
    body.classList.remove("bg-dark");
    body.classList.remove("text-white");
    skill.classList.remove("text-white");
  }
}
console.log(body);

const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}
