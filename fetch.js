const currenciesAPI = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales'

const fetchCurrencies = (url, callback) => {
  fetch(url)
    .then((currencies) => currencies.json())
    .then((currencies) => {
      /console.log(currencies);/
      console.log(callback(currencies))

      var currenciesFiltradas = callback(currencies);
      console.log(currenciesFiltradas);

      function armar(datos) {
        const contenedor = document.getElementById("div")
        const elemento1 = document.createElement("h2")
        const elemento2 = document.createElement("h3")
        const elemento3 = document.createElement("h3")
        const elemento4 = document.createElement("h3")

        //----------------------------------------------------//

        const contenedor2 = document.getElementById("div2")
        const elemento11 = document.createElement("h2")
        const elemento22 = document.createElement("h3")
        const elemento33 = document.createElement("h3")
        const elemento44 = document.createElement("h3")

        //-----------------------------------------------------------/

        const contenedor3 = document.getElementById("div3")
        const elemento111 = document.createElement("h2")
        const elemento222 = document.createElement("h3")
        const elemento333 = document.createElement("h3")
        const elemento444 = document.createElement("h3")


        currenciesFiltradas.forEach(element => {

          elemento1.textContent = currenciesFiltradas[0].casa.nombre
          contenedor.appendChild(elemento1)

          elemento2.textContent = "Compra: " + "$" + currenciesFiltradas[0].casa.compra
          contenedor.appendChild(elemento2)

          elemento3.textContent = "Venta: " + "$" + currenciesFiltradas[0].casa.venta
          contenedor.appendChild(elemento3)

          elemento4.textContent = "Variación: " + "$" + currenciesFiltradas[0].casa.variacion
          contenedor.appendChild(elemento4)

          /* -----------------------------------------------------------*/

          elemento11.textContent = currenciesFiltradas[1].casa.nombre
          contenedor2.appendChild(elemento11)


          elemento22.textContent = "Compra: " + "$" + currenciesFiltradas[1].casa.compra
          contenedor2.appendChild(elemento22)


          elemento33.textContent = "Venta: " + "$" + currenciesFiltradas[1].casa.venta
          contenedor2.appendChild(elemento33)


          elemento44.textContent = "Variación: " + "$" + currenciesFiltradas[1].casa.variacion
          contenedor2.appendChild(elemento44)

          /* -----------------------------------------------------------*/

          elemento111.textContent = currenciesFiltradas[2].casa.nombre
          contenedor3.appendChild(elemento111)


          elemento222.textContent = "Compra: " + currenciesFiltradas[2].casa.compra
          contenedor3.appendChild(elemento222)


          elemento333.textContent = "Venta: " +"$" + currenciesFiltradas[2].casa.venta
          contenedor3.appendChild(elemento333)


          elemento444.textContent = "Variación: " + "$" + currenciesFiltradas[2].casa.variacion
          contenedor3.appendChild(elemento444)

        });
      }
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