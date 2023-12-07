const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectConvert = document.querySelector(".currency-select-convert")


function convertFrom() {
    const selectFrom = document.querySelector(".currency-select-convert").value
    const valueFrom = document.querySelector(".currency-value-to-convert")
    const inputCurrencyValueFrom = document.querySelector("#input-from").value


    if (currencySelectConvert.value === "real") {
        valueFrom.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValueFrom)
    }

    if (currencySelectConvert.value === "dolar") {
        valueFrom.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValueFrom)
    }

    if (currencySelectConvert.value === "euro") {
        valueFrom.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValueFrom)
    }

    if (currencySelectConvert.value === "libra") {
        valueFrom.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValueFrom)

    }
    if (currencySelectConvert.value === "bitcoin") {
        valueFrom.innerHTML = new Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValueFrom)

    }
    

}


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") // Outras moedas


    const dolarToday = 4.9
    const euroToday = 5.3
    const libraToday = 6.2
    const realToday = 1.0
    const bitcoinToday = 216.9



    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }
    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)

    }
    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)

    }
    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)

    }


    
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")


    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/real.png"
    }


    
    convertValues()


}

function imageFrom() {

    const currencyNameFrom = document.getElementById("name-from")
    const currencyImageFrom = document.querySelector(".currency-from-img")


    if (currencySelectConvert.value == "dolar") {
        currencyNameFrom.innerHTML = "Dólar Americano"
        currencyImageFrom.src = "./assets/dolar.png"
    }

    if (currencySelectConvert.value == "euro") {
        currencyNameFrom.innerHTML = "Euro"
        currencyImageFrom.src = "./assets/euro.png"
    }

    if (currencySelectConvert.value == "libra") {
        currencyNameFrom.innerHTML = "Libra"
        currencyImageFrom.src = "./assets/libra.png"
    }

    if (currencySelectConvert.value == "bitcoin") {
        currencyNameFrom.innerHTML = "Bitcoin"
        currencyImageFrom.src = "./assets/bitcoin.png"
    }

    if (currencySelectConvert.value == "real") {
        currencyNameFrom.innerHTML = "Real"
        currencyImageFrom.src = "./assets/real.png"
    }



}



currencySelectConvert.addEventListener("change", imageFrom)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
currencySelectConvert.addEventListener("click", convertFrom)
currencySelectConvert.addEventListener("change", convertFrom)
