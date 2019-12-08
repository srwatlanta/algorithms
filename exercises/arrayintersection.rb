def intersect(nums1, nums2)
  obj = {}
  arr = []

  nums2.each do |num|
    obj[num] = (obj[num] || 0) + 1
  end

  nums1.map do |num|
    if obj.include?(num) && obj[num] > 0
      arr << num
      obj[num] -= 1
    end
  end
  return arr
end
