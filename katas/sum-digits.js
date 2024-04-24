function sumDigits(number) {
    if (number < 10 && number >= 0) return number;
    const stringNumber = number.toString().replace(/[^0-9]/g, "");
    const numberArray = stringNumber.split("").map(Number);
    const numbersSum = numberArray.reduce((accumulator, currentValue) => (accumulator + currentValue));
    return numbersSum;

}

module.exports = sumDigits;
