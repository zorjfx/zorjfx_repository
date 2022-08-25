document.addEventListener('DOMContentLoaded', () => {

    const priceApi = 'https://api.binance.com/api/v3/ticker/price?symbol=';

    function getPrice(ticker, priceElementId) {
        fetch(`${priceApi}${ticker}`).then((response) => {
            return response.json();
        }).then((data) => {
            document.getElementById(priceElementId).innerText = data['price'] + ' $';
        });
    }

    getPrice('BTCUSDT', 'btc');
    getPrice('ETHUSDT', 'eth');
    getPrice('BNBUSDT', 'bnb');

    setInterval(() => {
        getPrice('BTCUSDT', 'btc');
        getPrice('ETHUSDT', 'eth');
        getPrice('BNBUSDT', 'bnb');    
    }, 10000);
})