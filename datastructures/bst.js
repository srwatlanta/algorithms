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

  breadthFirstSearch(){
    let queue = []
    let tree = []
    let current = this.root
    queue.push(this.root)
    while(queue.length){
      current = queue.shift()
      tree.push(current.value)
      if(current.left) queue.push(current.left)
      if(current.right) queue.push(current.right)
    }
    return tree
  }
  
  depthFirstSearchPreOrder(){
    let tree = []
    let current = this.root
    function traverse(node){
      tree.push(node.value)
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
    }
    traverse(current)
    return tree
  }
  
  depthFirstSearchPostOrder(){
    let tree = []
    let current = this.root
    function traverse(node){
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
      tree.push(node.value)
    }
    traverse(current)
    return tree
  }
  
  depthFirstSearchInOrder(){
    let tree = []
    let current = this.root
    function traverse(node){
      if(node.left) traverse(node.left)
      tree.push(node.value)
      if(node.right) traverse(node.right)
    }
    traverse(current)
    return tree
  }
  
}