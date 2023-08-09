// LOGO IMAGE
  let header = document.getElementsByTagName('header')[0];
  let logoAnchor = header.querySelector('#logo-anchor')
  let logo = document.createElement('img');

  logo.setAttribute("src", "assets/img/logo.svg")
  logo.setAttribute("alt", "Logo da Farmácia S3")
  logo.classList.add("logo");
  logo.classList.add("mx-auto");

  logoAnchor.appendChild(logo);

// LOGO TITLE
let titleContainer = document.createElement('div')
let title = document.createElement('p')

titleContainer.classList.add("menu__title__text");
titleContainer.classList.add("text-center");
titleContainer.innerHTML = "FARMÁCIA";
titleContainer.appendChild(title)

title.innerHTML = "S3";

logoAnchor.appendChild(titleContainer);

// MENU
const navItems = [{
  texto: "INÍCIO",
  path: "/index.html"
},{
  texto: "TODOS OS REMÉDIOS",
  path: "/medicamentos.html"
},{
  texto: "SOBRE NÓS",
  path: "/sobreNos.html"
},{
  texto: "FALE CONOSCO",
  path: "/contato.html"
}]

// ["INÍCIO", "TODOS OS REMÉDIOS", "SOBRE NÓS", "FALE CONOSCO"]; 


let navBar = header.querySelector('.menu-nav');

navItems.forEach((item) => {
  let navItem = document.createElement('li');
  let navAnchor = document.createElement('a');

  navAnchor.setAttribute("href", item.path)
  navAnchor.innerText = item.texto;
  navAnchor.classList.add("menu-nav-item")

  navItem.appendChild(navAnchor);
  navBar.appendChild(navItem)
})

