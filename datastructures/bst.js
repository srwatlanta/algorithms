class Node{
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST{
  constructor(){
    this.root = null
  }
  
  insert(value){
    let node = new Node(value)
    if(!this.root) {
      this.root = node
      return this
    }else{
      let current = this.root
      if(value === current.value) return undefined
      while(true){
        if(current.value > value){
          if(!current.left){
            current.left = node
            return this
          } 
          current = current.left
        }else{
          if(!current.right) {
            current.right = node
            return this
          }
          current = current.right
        }
      }
    }
  }
  
  find(value){
    if(!this.root) return false
    let current = this.root
    let found = false
    while(current && !found){
      if(value > current.value)current = current.right
      else if(value < current.value) current = current.left
      else found = true
    }
    if(!found) return false
    return current
  }
  
  contains(value){
    if(!this.root) return false
    let current = this.root
    let found = false
    while(current && !found){
      if(value > current.value)current = current.right
      else if(value < current.value) current = current.left
      else found = true
    }
    return found
  }
  
}