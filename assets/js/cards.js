let medicamentos = [
{
nome:"Dorflex",
preco:"R$XX,50",
img:"./assets/img/dorflex.png",
alt:"Representação da caixa do medicamento Dorflex.",
top: true
},
{
nome:"Benegripe",
preco:"R$XX,25",
img:"./assets/img/benegripe.jpg",
alt:"Representação da caixa do medicamento Benegripe.",
top: true
},
{
nome:"Dipirona",
preco:"R$XX,00",
img:"./assets/img/dipirona.jpg",
alt:"Representação da caixa do medicamento Dipirona.",
top: true
},
{
nome:"Doril",
preco:"R$XX,99",
img:"./assets/img/doril.jpg",
alt:"Representação da caixa do medicamento Doril.",
top: false
},
{
nome:"Lisador",
preco:"R$XX,15",
img:"./assets/img/lisador.jpg",
alt:"Representação da caixa do medicamento Lisador.",
top: false
},
{
nome:"Omeprazol",
preco:"R$XX,50",
img:"./assets/img/omeprazol.png",
alt:"Representação da caixa do medicamento Omeprazol.",
top: true
},
{
nome:"Sonrisal",
preco:"R$XX,99",
img:"./assets/img/sonrisal.jpg",
alt:"Representação da caixa do medicamento Sonrisal.",
top: false
}
]

const page = document.getElementsByTagName('title')[0];

if (page.innerText == "Farmácia S3 - Início"){
medicamentos = medicamentos.filter((item) => item.top == true);
}

let deckDiv = document.querySelector(".card-deck")

medicamentos.forEach((item) => {

  // Criação de variáveis
  let button = document.createElement("button");
  let divCard = document.createElement("div"); 
  let divIcon = document.createElement("div");
  let divAtt = document.createElement("div"); 
  let icon = document.createElement("i")
  let imgProduct = document.createElement("img");
  let pValue = document.createElement("p");
  let pTitle = document.createElement("p"); 

  //div do card
  divCard.classList.add("card");

  //Imagem do medicamento
  imgProduct.setAttribute("alt", item.alt);
  imgProduct.setAttribute("src", item.img);
  imgProduct.classList.add("card-img-top");

  //div ícone favoritar
  divIcon.classList.add("card-like");
  
  //ícone favoritar
  icon.classList.add("ri-heart-fill", "card-heart");

  //div da descrição do medicamento
  divAtt.classList.add("card-body", "text-center", "text-center");

  //nome do medicamento
  pTitle.classList.add("card-title", "font-weight-bold", "pb-3");
  pTitle.innerText = item.nome;

  //valor do medicamento
  pValue.classList.add("card-text", "pb-4");
  pValue.innerText = item.preco;

  //botão adicionar ao carrinho
  button.setAttribute("type", "button")
  button.classList.add("btn", "btn-lg", "btn-success");
  button.innerHTML = `<img src="assets/img/add_plus.svg" class="card-plus-sign" alt="Ícone do Adicionar ao carrinho" />` + " Adicionar";

  //montagem
  divAtt.appendChild(pTitle);
  divAtt.appendChild(pValue);
  divAtt.appendChild(button);
  divIcon.appendChild(icon);
  divCard.appendChild(imgProduct);
  divCard.appendChild(divIcon);
  divCard.appendChild(divAtt);
  deckDiv.appendChild(divCard);
})