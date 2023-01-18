const button = document.getElementById("convet-button")
const select = document.getElementById("currency-select")


const convertValues = async () => {
    const inputReais = document.getElementById('input-real').value /*Trás apenas o valor*/
    const realValueText = document.getElementById("real-value-text")
    const currencyValueText = document.getElementById("currency-value-text")

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bit = data.BTCBRL.high 


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

    if (select.value === "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            {
                style: 'currency',
                currency: 'EUR'
            }
        ).format(inputReais / euro)
    }


    if (select.value === "Bitcoin") {
        currencyValueText.innerHTML = (inputReais * bit)

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

    if (select.value === "Bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyimg.src = "./assets/bit.png"
    }


    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener("change", changeCurrency)