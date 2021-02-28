exports.min = function min (array) {
  if (array && array.length) {    
    array.sort((a,b) => a-b);
  const min = array[0];
  return min;
 } else { 
  return 0;
 } 
}

exports.max = function max (array) {
  if (array && array.length) {    
  array.sort((a,b) => a-b);
  const max = array[array.length-1];
  return max;
  } else { 
  return 0;
  } 
}

exports.avg = function avg (array) {
  if (array && array.length) {    
    return array.reduce((a, b) => (a + b)) / array.length;
  } else { 
    return 0;
  } 

}
