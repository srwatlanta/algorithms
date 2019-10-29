function maximumToys(prices, n) {
    let money = 0
       for(let i = 0; i < prices.length; i ++){
           for(let j = prices.length; j > i; j--){
               let k = j - 1
               if(prices[j] < prices[k]){
                 [prices[k], prices[j]] = [prices[j], prices[k]]
               }
           }
         money += prices[i]
         if(money > n){
           return i
         }
       }
   }