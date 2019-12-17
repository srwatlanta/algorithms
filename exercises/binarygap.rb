def binary_gap(num)
  max = 0
  i = 0
  while i < num.length
    if num[i] == "1"
      counter = 0
      j = i + 1
      while num[j] == "0"
        counter += 1
        j += 1
        max = [counter, max].max
      end
    end
    i += 1
  end
  p max
end


binary_gap("100010000010001")
