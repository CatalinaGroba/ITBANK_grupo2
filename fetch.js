const currenciesAPI = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales'


const fetchCurrencies = (url, callback) => {
  fetch(url)
    .then((currencies) => currencies.json())
    .then((currencies) => {
      const currenciesFiltradas = callback(currencies);
      
      armar(currenciesFiltradas);
    })
};
const filterMainCurrencies = (currencies) => {
  return currencies.filter(
    (currencie) =>
      currencie.casa.nombre == "Dolar Oficial" ||
      currencie.casa.nombre == "Dolar Blue" ||
      currencie.casa.nombre == "Dolar turista"
  )
};

fetchCurrencies(currenciesAPI, filterMainCurrencies)

function armar(datos) {
  const contenedorToAppend = document.getElementById('cards-container')
  contenedorToAppend.innerHTML = ''

  datos.forEach(element => {

    const contenedor = document.createElement("div")
    const elemento1 = document.createElement("h2")
    const elemento2 = document.createElement("h3")
    const elemento3 = document.createElement("h3")
    const elemento4 = document.createElement("h3")
    elemento1.textContent = element.casa.nombre
    contenedor.appendChild(elemento1)

    elemento2.textContent = "Compra: " + "$" + element.casa.compra
    contenedor.appendChild(elemento2)

    elemento3.textContent = "Venta: " + "$" + element.casa.venta
    contenedor.appendChild(elemento3)

    elemento4.textContent = "Variación: " + "$" + element.casa.variacion
    contenedor.appendChild(elemento4)
    contenedorToAppend.appendChild(contenedor)

  });
}