function countVeg(veg, type) {
  let matchedVeg = 0;
  for (let i = 0; i < veg.length; i++) {
    if (veg[i]["type"] === type) {
      matchedVeg += veg[i]["quantity"];
    }
  }
  return matchedVeg;
}

module.exports = countVeg;
