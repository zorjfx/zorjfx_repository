document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT').then((response) => {
        return response.json();
    })
        .then((data) => {
            document.getElementById('btc').innerText = data['price'] + ' $'
        })
    fetch('https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT').then((response) => {
        return response.json();
    })
        .then((data) => {
            document.getElementById('eth').innerText = data['price'] + ' $'
        })
    fetch('https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT').then((response) => {
        return response.json();
    })
        .then((data) => {
            document.getElementById('bnb').innerText = data['price'] + ' $'
        })
    setInterval(() => {
        fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT').then((response) => {
            return response.json();
        })
            .then((data) => {
                document.getElementById('btc').innerText = data['price'] + ' $'
            })
        fetch('https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT').then((response) => {
            return response.json();
        })
            .then((data) => {
                document.getElementById('eth').innerText = data['price'] + ' $'
            })
        fetch('https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT').then((response) => {
            return response.json();
        })
            .then((data) => {
                document.getElementById('bnb').innerText = data['price'] + ' $'
            })
    }, 10000);
})