
exports.min = function min(array) {
  var minValue = Number.POSITIVE_INFINITY;

  if ( array == undefined || array.length == 0) {
    minValue = 0;
  }

  else {
    for (var i = 0; i < array.length; i++)
      if (array[i] < minValue)
        minValue = array[i];
  }

  return minValue;
}

exports.max = function max(array) {
  var maxValue = Number.NEGATIVE_INFINITY;

  if (array == undefined || array.length == 0  ) {
    maxValue = 0;
  }

  else {
    for (var i = 0; i < array.length; i++)
      if (array[i] > maxValue)
        maxValue = array[i];
  }

  return maxValue;
}

exports.avg = function avg(array) {
  var avgValue = 0;

  if (array == undefined || array.length == 0  ) {
    avgValue = 0;
  }

  else {
    for (var i = 0; i < array.length; i++)
      avgValue = (avgValue + array[i]);
    return avgValue / array.length;
  }

  return avgValue;


}
