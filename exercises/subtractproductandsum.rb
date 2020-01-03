def subtract_product_and_sum(n)
  arr = n.to_s.chars.map(&:to_i)
  product = arr.inject(:*)
  sum = arr.inject(:+)
  product - sum
end
