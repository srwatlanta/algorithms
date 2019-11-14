var longestValidParentheses = function(s) {
    let counter = 0;
    let maxLength = 0;
    for (let i = 0; i < s.length; i++) {
        counter = 0;
        let j = i;
        while (j < s.length) {
                console.log(maxLength)

          let char = s[j]
            if (char === '(') {
                counter += 1;
                j += 1;
              
            }
            if (char === ')') {
                counter -= 1;
                if (counter < 0) {
                    break;
                }
                if (counter === 0) {
                    maxLength = Math.max(maxLength, j - i + 1);
                }
                j += 1;
            }
        }
    }
    return maxLength;
};