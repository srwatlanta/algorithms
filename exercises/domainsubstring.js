var subdomainVisits = function(cpdomains) {
    let obj = {}
    for(let i = 0; i < cpdomains.length; i++){
        let domain = cpdomains[i].split(" ")
        let domainNum = Number(domain[0])
        let domainName = domain [1]
        obj[domainName] = (obj[domainName] || 0) + domainNum
        for(let i = 0; i < domainName.length; i++){
            if(domainName[i] === "."){
                let cut = domainName.slice(i + 1)
                obj[cut] = (obj[cut] || 0) + domainNum
            }
        }
    }
    let array = []
    for(const key in obj){
        array.push(`${obj[key]} ${key}`)
    }
    return array
};