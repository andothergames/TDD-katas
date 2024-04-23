function getCentury(year) {
	const roundedUpYear = Math.ceil(year/100)* 100;
	if (year < 1000) {
	yearString = roundedUpYear.toString();
	console.log(yearString[0]);
	}
	if (year > 1000 && year < 9899) {
		console.log(`${yearString[0]}${yearString[1]}`);
		}

}
console.log(getCentury(40));
getCentury(1140);
getCentury(2140);
getCentury(2240);
getCentury(9940);

module.exports = getCentury;
