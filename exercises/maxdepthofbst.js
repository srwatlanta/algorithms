const maxDepth = root => {
   if(root === null) return 0
   let maxCount = 1
   let count = 1
   function traverse(node){
     maxCount = Math.max(count, maxCount)
     if(node.left !== null){
       count++
       traverse(node.left)
       count--
     }
     if(node.right !== null){
       count ++
       traverse(node.right)
       count --
     }
   }
   traverse(root)
   return maxCount
};