const exchangeRates = {
    USD: { INR: 82.3, EUR: 0.85, GBP: 0.76 },
    INR: { USD: 0.012, EUR: 0.010, GBP: 0.0092 },
    EUR: { USD: 1.18, INR: 100.6, GBP: 0.9 },
    GBP: { USD: 1.32, INR: 110.5, EUR: 1.11 }
  };
  function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
  
    if (amount === '' || isNaN(amount)) {
      alert('Please enter a valid amount');
      return;
    }
    if (fromCurrency === toCurrency) {
      document.getElementById('result').innerText = `1 ${fromCurrency} = 1 ${toCurrency}`;
      return;
    }
    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);
    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
  }
  