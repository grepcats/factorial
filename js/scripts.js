function factorial(max) {
  var total = 1;
  for (var i = 1; i <= max; i++) {
    total = total * i;
  }
  return total;
}

function rFactorial(max) {
  if (max === 1) {
    return 1;
  }
  return max * rFactorial(max - 1);
}


$(document).ready(function() {

  var max = parseInt(prompt("How high should we go?"));
  alert(rFactorial(max));

});
