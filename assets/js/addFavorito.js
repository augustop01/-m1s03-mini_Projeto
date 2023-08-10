let listaFavoritos = [];

export function addFavorito(name) {
  const medName = name.innerText;
  let jaAdicionado = (item) => item === medName;
  let addCheck = listaFavoritos.some(jaAdicionado)
  
  
  if (addCheck) {
    listaFavoritos = listaFavoritos.filter((item) => item != medName)
    alert(`O medicamento ${medName} foi removido dos Favoritos. \nFavoritos: ${listaFavoritos}`)

  console.clear();
  console.log(`Item retirado: ${medName}`)
  console.log(listaFavoritos);

  return
  }

  listaFavoritos = [...listaFavoritos, medName];
  alert(`O medicamento ${medName} foi adicionado aos Favoritos. \nFavoritos: ${listaFavoritos}`)

  console.clear();
  console.log(`Item adicionado: ${medName}`)
  console.log(listaFavoritos);
}