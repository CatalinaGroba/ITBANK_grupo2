const fetchCurrencies = () => {
  fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    .then((currencies) => currencies.json())
    .then((currencies) => {
  
      /* aca iria el la funcion que genera el html */
    const filteredCurrencies = filterMainCurrencies(currencies)
    });
};
const filterMainCurrencies = (currencies) => {
  return currencies.filter(
    (currencie) =>
      currencie.casa.nombre == "Dolar Oficial" ||
      currencie.casa.nombre == "Dolar Blue" ||
      currencie.casa.nombre == "Dolar turista"
  );
};
fetchCurrencies(); 
