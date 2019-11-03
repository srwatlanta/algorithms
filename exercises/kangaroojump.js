function kangaroo(x1, v1, x2, v2) {
    while(true){
      if(x1 === x2) return "YES"
      if(v1 === v2)return "NO"
      if(v2 > v1 && x2 > x1) return "NO"
      if(v1 > v2 && x1 > x2) return "NO"
      x1 += v1
      x2 += v2
    }
  }
  