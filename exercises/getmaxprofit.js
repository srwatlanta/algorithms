function getMaxProfit(stockPrices) {
    if (stockPrices.length <= 1) throw new Error('Getting a profit requires at least 2 prices')
    let minPrice = stockPrices[0]
    let maxProfit = stockPrices[1] - stockPrices[0]
    for(let i = 1; i < stockPrices.length; i++){
      let currentPrice = stockPrices[i]
      let potential = currentPrice - minPrice
      maxProfit = Math.max(maxProfit, potential)
  
      minPrice = Math.min(minPrice, currentPrice)
    }
    return maxProfit;
  }
  