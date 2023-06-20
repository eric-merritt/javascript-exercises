const convertToCelsius = function(Number) {
  if (x = 32){
    y = 0;
    return y;
  } else {
    var x = Number;
    let ySub = x - 32;
    let yMult = ySub * 1.8;
  return yMult.toFixed(1);
}
}


const convertToFahrenheit = function(Number) {
    if (y = 0){
      x = 32;
      return x;
    } else {
      var y = Number;
      let xAdd = y + 32;
      let xDiv = xAdd / 1.8;
      return  xDiv.toFixed(1);

    }
}


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
