let api = ` https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`
const fromDropDown = document.getElementById("from-currency-select")
const toDropDown = documnent.getElementById("to-currency-select")

//Create dropdown from the currecies array
currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    fromDropDown.add(option);
});

//Repeat same thing for the other dropdown
currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    toDropDown.add(option);
});

fromDropDown.value = "USD";
toDropDown.value = "INR";

let convertCurrency = () => {
    const amount = document.querySelector("#amount").value
    const fromCurrency = fromDropDown.value;
    const toCurrency = toDropDown.value;

    if(amount.length != 0) {
        fetch(api).then((resp) => resp.json()).then((data) => {
            let fromExchangeRate = data.conversion_rates
            [fromCurrency];
            let toExchangeRate = data.conversion_rates[toCurrency];
            const convertAdmount = (amount / fromExchangeRate) * 
            toExchangeRate;
            result.innerHTML = `${amount} ${fromCurrency} = ${convertAdmount.toFixed(2)} ${toCurrency}`;
        });
    } else {
        alert("Please fill in amount");
    }
};

document
    .querySelector("#convert-button")
    .addEventListener("click", convertCurrency);
window.addEventListener("load", convertCurrency);