function timeConversion(s) {
    let nums = s.split(':')
    let h = nums[0]
    let ampm = nums[2][2]
    if(ampm === 'P'){
      if(h === '12'){
        return s.slice(0, -2)
      }else{
        let hour = (Number(h) + 12).toString()
        let time = hour + ':' + nums[1] + ':' + nums[2].slice(0, -2)
        return time
      }
    }else{
      if(h === '12'){
        let time = '00' + ":" + nums[1] + ":" + nums[2].slice(0, -2)
        return time
      }else{
        return s.slice(0, -2)
      }
    }
  }