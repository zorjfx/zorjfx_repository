class API {
    constructor(ticker) {
        this.ticker = ticker;
    }

    getPrice() {

        fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${this.ticker}`)
            .then((response) => {

                return response.json();
            })
            .then((data) => {

                console.log(data['price'] + '$');

            });
    }

    // async getPriceAsync() {
    //     const response = await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${this.ticker}`);
    //     const data = await response.json();
    //     console.log(data["price"]);
    // }
}

let BTCApi = new API('BTCUSDT');
BTCApi.getPrice();