function getProductsOfAllIntsExceptAtIndexWithoutDivision(intArray) {

    // Make a list of the products
    if(intArray.length < 2) throw new Error("need at least two integers for a product")
    let product = 1
    let products = []
    for(let i = 0; i < intArray.length; i++){
      products[i] = product
      product *= intArray[i]
    }
    
    product = 1
    for(let j = intArray.length - 1; j >= 0; j--){
      products[j] *= product
      product *= intArray[j]
    }
  
    return products;
}

function getProductsOfAllIntsExceptAtIndex(array){
    let product = 1
    let products = []
    for(let i = 0; i < array.length; i++){
        product *= array[i]
    }

    for(let j = 0; j < array.length; j++){
        products[j] = product / array[j]
    }

    return products
}