let hackerrank = {
    1.43 => "twenty",
    55 => 'Hello',
    "whatsup" => 44,
    21 => 42
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
    hash.any?{|k, v| k.is_a? Integer}
end

def func_all(hash)
    # Check and return true if all the values within the hash are Integers and are < 10
    # If not all values satisfy this, return false.
    hash.all?{|k, v| v.is_a?(Integer) && v < 10}
end

def func_none(hash)
    # Check and return true if none of the values within the hash are nil
    # If any value contains nil, return false.
    hash.none?{|k, v| v.nil?}
end

def func_find(hash)
    # Check and return the first object that satisfies either of the following properties:
    #   1. There is a [key, value] pair where the key and value are both Integers and the value is < 20 
    #   2. There is a [key, value] pair where the key and value are both Strings and the value starts with `a`.
    hash.find do |k, v|
        (k.is_a?(Integer) && v.is_a?(Integer) && v < 20) ||
        (k.is_a?(String) && v.is_a?(String) && v.start_with?('a'))
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