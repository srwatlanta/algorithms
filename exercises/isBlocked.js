function is_blocked(required_tasks, task_from, task_to) {
  
    let finished = []
    for(let i = 0; i < task_from.length; i++){
      let current = task_from[i]
      if (required_tasks.includes(current)){
        if(!task_to.includes(current)){
          finished.push(current)
          finished.push(task_to[i])
        }else{
          if(finished.includes(current)) finished.push(task_to[i])
        }
      }
      let tasks = []
      finished.map(x => {
        if (required_tasks.includes(x)) tasks.push(x)
      })
      
      return (new Set(tasks).size === required_tasks.length)
    }
  }