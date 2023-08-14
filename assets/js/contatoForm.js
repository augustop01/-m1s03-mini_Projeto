// Construçaõ "Assunto"

const dropdown = document.querySelector(".dropdown");

const label = document.createElement("label");
const input = document.createElement("select");
const optionBase = document.createElement("option");

const items = ["Comercial", "Dúvidas", "Revenda"];

//label
label.setAttribute("for", "assunto");
label.classList.add("label");
label.innerText = "Assunto";

//input - select
input.classList.add("form-control", "select-input");
input.setAttribute("id", "assunto");

//option - placeholder
optionBase.setAttribute("disabled", "");
optionBase.setAttribute("selected", "");
optionBase.setAttribute("value", "");
optionBase.setAttribute("hidden", "");
optionBase.innerText = "Escolha o assunto que quer tratar"

//Construção do dropdown
input.appendChild(optionBase);
for(let i = 0; i < 3; i++){
  const option = document.createElement("option");
  option.innerText = items[i];
  input.appendChild(option);
}
label.appendChild(input);
dropdown.appendChild(label);

// Evento de submit
let form = document.querySelector(".form-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let nome = document.querySelector("#nome").value;

  console.log(`Nome do usuário: ${nome}.`);
  alert("A mensagem foi enviada com sucesso.")
  form.reset();
})