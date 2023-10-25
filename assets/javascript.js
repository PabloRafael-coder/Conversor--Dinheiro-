const buttonConvert = document.querySelector('.convert-button');
const selectMoney = document.querySelector('.select-type-money');



function convertValores() {
    const inputValue = document.querySelector(".declared-money").value;
    const valueReal = document.querySelector(".content-value-real");
    const valueDolar = document.querySelector(".content-value-dolar");
    const dolar = 4.99;
    const euro = 5.29

    console.log(selectMoney.value)



    if (selectMoney.value == 'dolar') {
        valueDolar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputValue / dolar);

    } else if (selectMoney.value == 'euro') {
        valueDolar.innerHTML = new Intl.NumberFormat("de-DE", {
            style: 'currency',
            currency: 'EUR',
        }).format(inputValue / euro);
    }

    valueReal.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(inputValue);




}

buttonConvert.addEventListener("click", convertValores);
selectMoney.addEventListener('change',)