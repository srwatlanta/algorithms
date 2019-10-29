function jumpingOnClouds(c) {
    let jumps = 0
    let i = 0
    while(i < c.length - 1){
        if(c[i + 2] === 0 && i !== c.length - 1){
            jumps += 1
            i += 2
        }else{
            jumps += 1
            i += 1
        }
    }
    return jumps
}
