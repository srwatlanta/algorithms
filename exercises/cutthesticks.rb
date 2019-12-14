def cutTheSticks(arr)
  lengths = []
  while arr.length > 0
    lengths << arr.length
    arr.delete(arr.min)
  end
  lengths
end
