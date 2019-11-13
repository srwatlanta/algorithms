function angryProfessor(k, a) {
    if(k > a.length) return "YES"
    let total = 0
    for(let i = 0; i < a.length; i++){
        let num = a[i]
        if(num <= 0) {
            total++
            if(total >= k) return "NO"
        }
    }
    return total >= k ? "NO" : "YES"
}