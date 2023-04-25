var numbers = [2, -26, 0, -30, 40];

function negativeNum(numbers) {
  var y = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
      y.push(numbers[i]);
    }
  }
  return y;
}

console.log(negativeNum(numbers));
