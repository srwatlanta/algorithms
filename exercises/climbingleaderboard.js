function climbingLeaderboard(scores, alice) {
    function findPosition(arr, s){
      let position = 1
      for(let i = 0; i < arr.length; i++){
        if(arr[i] !== arr[i+1] && s < arr[i]) position += 1
      }
      return position
    }
    let positionArray = []
    for(let i = 0; i < alice.length; i++){
      positionArray.push(findPosition(scores, alice[i]))
    }
    return positionArray
  }