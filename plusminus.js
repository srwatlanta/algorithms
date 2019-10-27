function plusMinus(arr) {
    let pos = 0
    let neg = 0
    let zero = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            zero += 1
        }else if(arr[i] > 0){
            pos += 1
        }else{
            neg += 1
        }
    }
    let posRatio = (pos/arr.length).toFixed(6)
    let negRatio = (neg/arr.length).toFixed(6)
    let zRatio = (zero/arr.length).toFixed(6)
    console.log(posRatio)
    console.log(negRatio)
    console.log(zRatio)
}