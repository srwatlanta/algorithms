class Node{
    constructor(val){
      this.val = val
      this.next = null
      this.prev = null
    }
  }
  
  class DoublyLinkedList{
    constructor(){
      this.head = null
      this.tail = null
      this.length = 0
    }
    
    push(val){
      let node = new Node(val)
      
      if(!this.head){
        this.head = node
        this.tail = node
      }else{
        node.prev = this.tail
        this.tail.next = node
        this.tail = node
      }
      
      this.length++
      return this
    }
    
    pop(){
      if(!this.head) return undefined
      
      let oldTail = this.tail
      let newTail = this.tail.prev
      
      newTail.next = null
      oldTail.prev = null
      this.tail = newTail
      
      this.length--
      return oldTail
    }
    
    shift(){
      if(!this.head) return undefined
      
      let oldHead = this.head
      let newHead = oldHead.next
      
      this.head = newHead
      newHead.prev = null
      oldHead.next = null
      
      length--
      return oldHead
    }
    
    unshift(val){
      let node = new Node(val)
      if(!this.head){
        this.head = node
        this.tail = node
      }
      
      this.head.prev = node
      node.next = this.head
      this.head = node
      
      length++
      return this
    }
    
    get(index){
      if(index < 0 || index > this.length) return null
      
      let current
      let count
      
      if(index > this.length / 2){
        current = this.tail
        count = this.length - 1
        
        while(count !== index){
          current = current.prev
          count --
        }
      }else{
        current = this.head
        count = 0
        
        while(count !== index){
          current = current.next
          count++
        }
      }
      
      return current
    }
    
    set(index, val){
      let node = this.get(index)
      
      if(node){
        node.val = val
        return true
      }
      
      return false
    }
    
    insert(index, val){
      if(index < 0 || index > this.length) return null
      if (index === 0) this.unshift(val)
      if (index === this.length) this.push(val)
      
      let newNode = new Node(val)
      let prev = this.get(index - 1)
      let after = prev.next
      
      newNode.next = after
      newNode.prev = prev
      prev.next = newNode
      after.prev = newNode
      
      this.length++
      return this
    }
    
    remove(index){
      if(index < 0 || index > this.length) return null
      if (index === 0) this.shift
      if (index === this.length) this.pop
      
      let node = this.get(index)
      let before = node.prev
      let after = node.next
      
      before.next = after
      after.prev = before
      node.next = null
      node.prev =null
      
      this.length --
      return node
    }
    
    reverse(){
      let node = this.head
      this.head = this.tail
      this.tail = node
      
      for(let i = 0; i < this.length; i++){
        let temp = node.prev
        node.prev = node.next
        node.next = temp
        node = node.prev
      }
      
      return this
    }
  }
  