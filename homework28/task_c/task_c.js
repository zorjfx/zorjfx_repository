function calculateProfit() {
    let startPrice = document.getElementById('startPriceValue').value;
    let finalPrice = document.getElementById('finalPriceValue').value;
    let stocksAmount = document.getElementById('stocksAmount').value;
    totalProfit = document.getElementById('totalProfit');
    totalProfit.innerText = (stocksAmount * finalPrice) - (stocksAmount * startPrice);
    if (totalProfit.innerText < 1) {
        totalProfit.style.color = 'red';
    }
    else {
        totalProfit.style.color = 'green';
    }
}


