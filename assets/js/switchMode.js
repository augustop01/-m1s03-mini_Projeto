const main = document.getElementsByTagName("main")[0];
const footer = document.getElementsByTagName("footer")[0];
const carBackground = document.querySelector(".carousel-container")
const swtButton = document.createElement("button");
const nav = document.querySelector(".menu");

swtButton.addEventListener("click", SwitchMode);
swtButton.classList.add("btn", "btn-switch")

const darkMode = sessionStorage.getItem("darkMode");

if(darkMode){
  main.classList.add("nm")
  footer.classList.add("nm")
  swtButton.classList.add("b-nm")
}

function SwitchMode() {
  if(darkMode){
    main.classList.remove("nm");
    footer.classList.remove("nm");
    swtButton.classList.remove("b-nm")
    sessionStorage.removeItem("darkMode")
    return
  }
  main.classList.add("nm")
  footer.classList.add("nm")
  swtButton.classList.add("b-nm")
  sessionStorage.setItem("darkMode", "true")
}

nav.appendChild(swtButton);

export {SwitchMode};