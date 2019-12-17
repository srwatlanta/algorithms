let hackerrank = {
  1.43 => "twenty",
  55 => "Hello",
  "whatsup" => 44,
  21 => 42,
}

hackerrank.store(543121, 100)
hackerrank.keep_if do |k, v|
  k.is_a?(Integer)
end
hackerrank.delete_if do |k, v|
  k.even?
end

def func_any(hash)
  # Check and return true if any key object within the hash is of the type Integer
  # If not found, return false.
  hash.any? { |k, v| k.is_a? Integer }
end

def func_all(hash)
  # Check and return true if all the values within the hash are Integers and are < 10
  # If not all values satisfy this, return false.
  hash.all? { |k, v| v.is_a?(Integer) && v < 10 }
end

def func_none(hash)
  # Check and return true if none of the values within the hash are nil
  # If any value contains nil, return false.
  hash.none? { |k, v| v.nil? }
end

def func_find(hash)
  # Check and return the first object that satisfies either of the following properties:
  #   1. There is a [key, value] pair where the key and value are both Integers and the value is < 20
  #   2. There is a [key, value] pair where the key and value are both Strings and the value starts with `a`.
  hash.find do |k, v|
    (k.is_a?(Integer) && v.is_a?(Integer) && v < 20) ||
    (k.is_a?(String) && v.is_a?(String) && v.start_with?("a"))
  end
end

def group_by_marks(marks, pass_marks)
  # your code here
  marks.group_by do |k, v|
    v > pass_marks ? "Passed" : "Failed"
  end
end

def mask_article(string, word_list)
  word_list.each do |word|
    string.gsub!(/#{word}/, strike(word))
  end
  string
end

def strike(s)
  "<strike>#{s}</strike>"
end

def scoring(array)
  # iterate through each of the element in array using *each* and call update_score on it
  array.each do |user|
    user.update_score
  end
end

def scoring(array)
  # update_score of every user in the array unless the user is admin
  array.each do |user|
    if !user.is_admin?
      user.update_score
    end
  end
end

loop do
  coder.practice
  if coder.oh_one?
    break
  end
end

coder.practice until coder.oh_one?

def identify_class(obj)
  case obj
  when Hacker
    puts "It's a Hacker!"
  when Submission
    puts "It's a Submission!"
  when TestCase
    puts "It's a TestCase!"
  when Contest
    puts "It's a Contest!"
  else
    puts "It's an unknown model"
  end
end

def sum_terms(n)
  (1..n).reduce(0) { |sum, val| sum += ((val * val) + 1) }
end

def select_arr(arr)
  # select and return all odd numbers from the Array variable `arr`
  arr.select { |val| val.odd? }
end

def reject_arr(arr)
  # reject all elements which are divisible by 3
  arr.reject { |val| val % 3 == 0 }
end

def delete_arr(arr)
  # delete all negative elements
  arr.delete_if { |val| val < 0 }
end

def keep_arr(arr)
  # keep all non negative elements ( >= 0)
  arr.keep_if { |val| val >= 0 }
end
