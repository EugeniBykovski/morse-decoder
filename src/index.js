const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    var newArr = expr.match(/.{1,10}/g);
    var newStr = newArr.join(' ');
    var newDot = newStr.replace(/10/g, ".");
    var newDash = newDot.replace(/11/g, "-");
    var deleteNil = newDash.replace(/0/g, "");
    var conversion = deleteNil.replace(/([.-]+[-.]*)/g, (_, x) => MORSE_TABLE[x]);
    var deleteSpaces = conversion.replace(/\s/g, '');
    var newSpaces = deleteSpaces.replace(/\*\*\*\*\*\*\*\*\*\*/g, " ");

    return newSpaces;
}

module.exports = {
    decode
}