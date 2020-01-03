def balanced_string_split(s)
  count = 0
  balance = 0
  s.each_char do |char|
    if balance == 0
      count += 1
    end
    if char == "R"
      balance += 1
    else
      balance -= 1
    end
  end
  count
end
