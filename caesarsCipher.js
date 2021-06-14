function rot13(str) {
    const newStr = str.toUpperCase();
	const letters =   "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let string = "";
    
    for (const letter of newStr) {
        const index = letters.indexOf(letter);

        if(index >= 0 && index <= 12){
            string = string + letters[index + 13]
        }
       
        else if (index > 0 && index > 12) {
            string = string + letters[index - 13];
		}

        else {
            string = string + letter;
        }
	}
	return string;
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
