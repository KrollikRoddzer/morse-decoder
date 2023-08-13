const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    let ans = '';
    for (let i = 0; i < expr.length; i += 10)
    {
        arr.push(expr.substr(i, 10));
    }
    arr.forEach(str => {
        let code = '';
        for (let i = 0; i < str.length; i += 2)
        {
            if (str[i] == '1' && str[i + 1] == '0')
            {
                code += '.';
            }
            if (str[i] == '1' && str[i + 1] == '1')
            {
                code += '-';
            }
            if (str[i] == '*')
            {
                code = '*';
                break;
            }
        }
        if (code == '*')
        {
            ans += ' ';
        }
        else
        {
            ans += MORSE_TABLE[code];
        }
    });
    
    return ans;
}

module.exports = {
    decode
}