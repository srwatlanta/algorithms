def find_numbers(nums)
    count = 0
    nums.each do |num|
        length = Math.log10(num).to_i + 1
        if length % 2 == 0
            count += 1
        end
    end
    count
end