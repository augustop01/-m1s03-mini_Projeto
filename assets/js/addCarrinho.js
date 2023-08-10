let listaCarrinho = [];

export function addCarinho(name) {
  const medName = name.innerText;
  let jaAdicionado = (item) => item === medName;
  let addCheck = listaCarrinho.some(jaAdicionado)
  listaCarrinho = [...listaCarrinho, medName];
  
  if (addCheck) {
  alert(`Mais uma unidade de ${medName} foi adicionada ao carrinho. \nItens no Carrinho: ${listaCarrinho}.`)
  console.clear();
  console.log(`Item adicionado: ${medName}`)
  console.log(listaCarrinho);
  return
  }
  alert(`O medicamento ${medName} foi adicionado ao carrinho. \nItens no Carrinho: ${listaCarrinho}.`)

console.clear();
console.log(`Item adicionado: ${medName}`)
console.log(listaCarrinho);
}