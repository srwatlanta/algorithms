function pageCount(n, p) {
    if(n === p || n === 2) return 0
    if(n === p + 1 && n % 2 === 0) return 1

    let fromZero = Math.floor(p / 2)
    let fromN = Math.floor((n - p) / 2)
    return Math.min(fromN, fromZero)
}