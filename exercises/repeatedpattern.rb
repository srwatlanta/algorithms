def repeatedPattern(str)
    substr = ""
    i = 0
    length = 0
    while(i < (str.length / 2))
        substr.concat(str[i])
        length += 1
        j = i + 1
        while(j < str.length)
            temp = str.slice(j, j + length)
            if temp != substr
                break
            end
            j += length
        end
        i += 1
        if j == str.length 
            return true
        end
    end
    false
end

