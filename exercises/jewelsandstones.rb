def num_jewels_in_stones(j, s)
  s.chars.count { |stone| j.include?(stone) }
end

def num_jewels_in_stones(j, s)
  count = 0
  s.each_char do |stone|
    if j.include?(stone)
      count += 1
    end
  end
  count
end
