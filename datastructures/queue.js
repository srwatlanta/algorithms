class Node{
    constructor(val){
      this.val = val
      this.next = null
    }
  }
  
  class Queue{
    constructor(){
      this.size = 0
      this.first = null
      this.last = null
    }
    
    enqueue(val){
      let node = new Node(val)
      if(!this.first){
        this.first = node
        this.last = node
      }else{
        this.last.next = node
        this.last = node
      }
      return ++this.size
    }
    
    dequeue(){
      if(!this.first) return undefined
      
      let temp = this.first
      
      if(this.size === 1){
        this.first = null
        this.last = null
      }else{
        this.first = temp.next
        temp.next = null
      }
  
      this.size--
      return temp.val
    }
  
  }