function sumArgs(...numbers) {
    if (numbers.length === 0) return 0;
    if (numbers.length === 1) return numbers[0];
    const summedArgs = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return summedArgs;
}

module.exports = sumArgs;
