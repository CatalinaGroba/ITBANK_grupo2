

fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
.then(data=>data.json())
.then(coti=>generarCads(coti))


function generarCads(cotizaciones){
    console.log(cotizaciones)


    const div = document.createElement('div')
    const p = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')
    const p4 = document.createElement('p')
    div.classList = 'bg-primary font-bold p-3'
    p.textContent = 'dolar'
    
    div.appendChild(p)

    div.appendChild(div)
}



document.body.classList = 'bg-primary font-bold p-3'
