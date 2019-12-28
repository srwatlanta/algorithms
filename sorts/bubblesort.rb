def bubble_sort(arr)
  i = arr.length
  while (i > 0)
    no_swaps = true
    j = 0
    while (j < i - 1)
      k = j + 1
      if arr[j] > arr[k]
        temp = arr[j]
        arr[j] = arr[k]
        arr[k] = temp
        no_swaps = false
      end
      j += 1
    end
    i -= 1
    if no_swaps == true
      break
    end
  end
  arr
end

p bubble_sort([10, 4, 2, 1, 16, 12, 3])
