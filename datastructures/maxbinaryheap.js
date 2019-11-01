class MaxBinaryHeap{
    constructor(){
      this.values = []
    }
    
    insert(value){
      this.values.push(value)
      this.bubbleUp()
    }
      
    bubbleUp(){
      let idx = this.values.length - 1
      let element = this.values[idx]
      while(idx > 0){
        let parentIdx = Math.floor((idx - 1)/ 2)
        let parent = this.values[parentIdx]
        if(element <= parent) break
        this.values[parentIdx] = element
        this.values[idx] = parent
        idx = parentIdx
      }
    }
    
    extractMax(){
      let max = this.values[0]
      let end = this.values.pop()
      if(this.values.length > 0){
        this.values[0] = end
        this.sinkDown() 
      }
      return max
    }
    
    
    sinkDown(){
      let current = 0
      let length = this.values.length
      let currentVal = this.values[0]
      while(true){
        let leftIdx = 2 * current + 1
        let rightIdx = 2 * current + 2
        let leftVal, rightVal
        let swap = null
        if(leftIdx < length) {
          leftVal = this.values[leftIdx]
          if(leftVal > currentVal){
            swap = leftIdx
          }
        }
        if(rightIdx < length) {
          rightVal = this.values[rightIdx]
          if(
            (swap === null && rightVal > currentVal) ||
            (swap !== null && rightVal > leftVal)
          ){
            swap = rightIdx
          }
        }
        if(swap === null) break
        this.values[current] = this.values[swap]
        this.values[swap] = currentVal
        current = swap
      }
    }
    
  }