const currenciesAPI = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales'

const fetchCurrencies = (url, callback) => {
  fetch(url)
  .then((currencies) => currencies.json())
  .then((currencies) => {
    /*console.log(currencies);*/
    console.log (callback(currencies))
   
    /* callback seria la funcion que filtra + la funcion que genera el html */
    /* hay que hacer el filtro y el html en otro archivo, asi separamos la logica para que no sea todo un quilombo */
  })
};
const filterMainCurrencies = (currencies) => {
  return currencies.filter(
    (currencie) =>
      currencie.casa.nombre == "Dolar Oficial" ||
      currencie.casa.nombre == "Dolar Blue" ||
      currencie.casa.nombre == "Dolar turista"
  )};
fetchCurrencies(currenciesAPI, filterMainCurrencies);
