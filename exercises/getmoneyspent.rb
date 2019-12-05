def getMoneySpent(keyboards, drives, b)
  total = -1
  for k in keyboards
    for d in drives
      current = k + d
      if current <= b
        total = [current, total].max
      end
    end
  end
end
