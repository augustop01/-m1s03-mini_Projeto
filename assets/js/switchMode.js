const main = document.getElementsByTagName("main")[0];
const footer = document.getElementsByTagName("footer")[0];
const swtButton = document.createElement("button");

const nav = document.querySelector(".menu");
let darkMode = sessionStorage.getItem("darkMode");

if(darkMode){
  main.classList.add("nm")
  footer.classList.add("nm")
  swtButton.classList.add("b-nm")
}

function SwitchMode() {
  darkMode = sessionStorage.getItem("darkMode");

  if(darkMode){
    sessionStorage.removeItem("darkMode", "true")
    main.classList.remove("nm");
    footer.classList.remove("nm");
    swtButton.classList.remove("b-nm")
    return
  }
  sessionStorage.setItem("darkMode", "true")
  main.classList.add("nm")
  footer.classList.add("nm")
  swtButton.classList.add("b-nm")
  }
  
swtButton.classList.add("btn", "btn-switch")
swtButton.addEventListener("click", SwitchMode);
nav.appendChild(swtButton);



export {SwitchMode};