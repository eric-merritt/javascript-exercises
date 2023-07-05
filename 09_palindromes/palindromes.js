const palindromes = function (string) {
    let forwardStr = string.toLowerCase().replace(/[^a-zA-Z0-9]/g,'');

    return forwardStr.split('').reverse().join('') == forwardStr;
    };

// Do not edit below this line
module.exports = palindromes;
