function rotLeft(a, d) {
    let shift = (a.length - d) % a.length
    let p1 = a.slice(-shift)
    let p2 = a.slice(0, -shift)
    let newArr = p1.concat(p2)
    return newArr
  }