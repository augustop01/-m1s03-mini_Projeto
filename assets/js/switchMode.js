const main = document.getElementsByTagName("main")[0];
const footer = document.getElementsByTagName("footer")[0];
const carBackground = document.querySelector(".carousel-container")
const swtButton = document.createElement("button");
const nav = document.querySelector(".menu");

swtButton.addEventListener("click", SwitchMode);
swtButton.classList.add("btn", "btn-switch")

function SwitchMode() {
  if(main.classList.contains("nm")){
    main.classList.remove("nm");
    footer.classList.remove("nm");
    swtButton.classList.remove("b-nm")
    return
  }
  main.classList.add("nm")
  footer.classList.add("nm")
  swtButton.classList.add("b-nm")
}

nav.appendChild(swtButton);

export {SwitchMode};