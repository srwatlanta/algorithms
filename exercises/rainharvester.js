function rainHarvester(input) {
    let total = 0
    for(let i = 0; i < input.length - 1; i++){
        total += Math.min(input[i], input[i + 1])
    }
    return total
}