class Node{
    constructor(val){
      this.val = val
      this.next = null
    }
  }
  
  class Stack{
    constructor(){
      this.size = 0
      this.first = null
      this.last = null
    }
    
    push(val){
      let node = new Node(val)
      
      if(!this.first){
        this.first = node
        this.last = node
      }else{
        let temp = this.first
        this.first = node
        node.next = temp
      }
      
      return ++this.size
    }
    
    pop(){
      if(this.size === 0)return undefined
      
      let temp = this.first
      
      if(this.size === 1){
        this.first = null
        this.last = null
      }else{
        this.first = temp.next
      }
      
      this.size--
      return temp.val
    }
    
  }