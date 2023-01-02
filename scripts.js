const button = document.getElementById("convet-button")
const select = document.getElementById("currency-select")

const dolar = 5.2
const euro = 5.9

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value /*Trás apenas o valor*/
    const realValueText = document.getElementById("real-value-text")
    const currencyValueText = document.getElementById("currency-value-text")

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        {
            style: 'currency',
            currency: 'BRL'
        }
    ).format(inputReais);

    if (select.value === "US$ Dólar Americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
            {
                style: 'currency',
                currency: 'USD'
            }
        ).format(inputReais / dolar)

    }

if(select.value === "€ Euro") {
    currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
        {
            style: 'currency',
            currency: 'EUR'
        }
    ).format(inputReais / euro)

}

}

changeCurrency = () => {
    const currencyimg = document.getElementById("currency-img")
    const currencyName = document.getElementById("currency-name")

    if (select.value === "US$ Dólar Americano") {
        currencyName.innerHTML = "Dólar Americano"
        currencyimg.src = "./assets/Dolar.png"
    }

    if (select.value === "€ Euro") {
        currencyName.innerHTML = "Euro"
        currencyimg.src = "./assets/Euro.png"
    }
    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener("change", changeCurrency)