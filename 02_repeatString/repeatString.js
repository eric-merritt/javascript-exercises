function repeatString(string,number){
    if (number > 0){
        return string.repeat(number);
    } else if (number == 0){
        return '';
    } else {
        return 'ERROR';
    }
    }



// Do not edit below this line
module.exports = repeatString;
