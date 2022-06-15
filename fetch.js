const fetchCurrencies = () => {
  fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
  .then((currencies) => currencies.json())
  .then((currencies) => {
    console.log(currencies);
    /* aca iria el la funcion que filtra y la funcion que genera el html */
  })
};

fetchCurrencies();
