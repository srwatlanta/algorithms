class Node{
    constructor(val){
      this.val = val
      this.next = null
    }
  }
  
  class SinglyLinkedList{
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
        this.tail.next = node
        this.tail = node
      }
      this.length++
      return this
    }
    
    pop(){
      if(!this.head) return undefined
      let current = this.head
      let newTail = current
      while(current.next){
        newTail = current
        current = current.next
      }
      this.tail = newTail
      this.tail.next = null
      this.length--
      return current
    }
    
    shift(){
      if(!this.head) return undefined
      let currentHead = this.head
      this.head = currentHead.next
      length--
      return currentHead
    }
    
    unshift(val){
      let node = new Node(val)
      if(!this.head){
        this.head = node
        this.tail = node
      }
      node.next = this.head
      this.head = node
      length++
      return this
    }
    
    get(index){
      if(index < 0 || index > this.length) return null
      let current = this.head
      let count = 0
      while(count !== index){
        current = current.next
        count++
      }
      return current
    }
    
    set(index, val){
      let node =  this.get(index)
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
      let node = this.get(index - 1)
      newNode.next = node.next
      node.next = newNode
      this.length++
      return this
    }
    
    remove(index){
      if(index < 0 || index > this.length) return null
      if (index === 0) this.shift
      if (index === this.length) this.pop
      let after = this.get(index + 1)
      let before = this.get(index - 1)
      before.next = after
      this.length --
    }
    
    reverse(){
      let node = this.head
      this.head = this.tail
      this.tail = node
      let next
      let prev = null
      for(let i = 0; i < this.length; i++){
        next = node.next
        node.next = prev
        prev = node
        node = next
      }
      return this
    }
  }