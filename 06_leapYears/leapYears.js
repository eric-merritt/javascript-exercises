const leapYears = function(Number) {

    const testYear = Number;
    const lastLeapYear = 2020;

        if ((testYear - lastLeapYear) % 4 == 0) {
            if ((testYear % 100 == 0) && (testYear % 400 !== 0)){
                return false;
            } else {
                return true;
        } 
    } else if (((testYear - lastLeapYear) < 0) && (((testYear - lastLeapYear) * -1) % 4 == 0)) {
                    return true;
        } else if (testYear === lastLeapYear) {
                return true;
        } else {
            return false;
                } 

    }
           
        
            
            
        
        

      

// Do not edit below this line
module.exports = leapYears;
