def majority_element(nums)
  answer = 0
  goal = (nums.length / 2) + 1
  obj = {}
  nums.each do |num|
    obj[num] = (obj[num] || 0) + 1
    if obj[num] == goal
      answer = num
    end
  end
  answer
end
