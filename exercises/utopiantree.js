function utopianTree(n) {
    let total = 1
    for(let i = 0; i < n; i++){
        if(i % 2 === 0) total *= 2
        else total += 1
    }
    return total

}
