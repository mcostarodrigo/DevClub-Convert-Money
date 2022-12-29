const button = document.getElementById("convet-button")

const dolar = 5.2

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value /*Trás apenas o valor*/

    console.log(inputReais / dolar)
}

button.addEventListener('click', convertValues)