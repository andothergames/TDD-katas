function max(numbers) {
  let maxNumber = numbers[0];

  if (numbers.length === 0) return 0;
  if (numbers.length === 1) return numbers[0];
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] < numbers[i + 1]) {
      maxNumber = numbers[i + 1];
    }
  }
  return maxNumber;
}

function min(numbers) {
    let minNumber = numbers[0];
  if (numbers.length === 0) return 0;
  if (numbers.length === 1) return numbers[0];
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] > numbers[i + 1]) {
        minNumber = numbers[i + 1]
    }
  }
  return minNumber;
}

module.exports = { max, min };
