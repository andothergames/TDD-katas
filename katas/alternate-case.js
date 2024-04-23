function alternateCase(str) {
    if (str.length === 1) return str[0].toUpperCase();
    let spacer = 0;
    const regex = /[a-zA-Z]/;
    const arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
        if (!regex.test(arr[i])) {
            spacer++;
            continue;
        }
        if ((i + spacer) % 2 === 0) {
            arr[i] = arr[i].toUpperCase();
        }
    }
    
    return arr.join("");;
}

module.exports = alternateCase;
