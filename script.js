// Mock exchange rates
const exchangeRates = {
    USD: { USD: 1, INR: 83.5, EUR: 0.92, GBP: 0.78 },
    INR: { USD: 0.012, INR: 1, EUR: 0.011, GBP: 0.0094 },
    EUR: { USD: 1.09, INR: 90.5, EUR: 1, GBP: 0.85 },
    GBP: { USD: 1.28, INR: 105.3, EUR: 1.18, GBP: 1 }
};

function convert() {
    const amount = parseFloat(document.getElementById("amount").value);
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;

    if (isNaN(amount)) {
        document.getElementById("result").innerText = "Please enter a valid amount.";
        return;
    }

    const rate = exchangeRates[from][to];
    const converted = (amount * rate).toFixed(2);

    document.getElementById("result").innerText = `${amount} ${from} = ${converted} ${to}`;
}
