function caesarCipher(string, shift) {
    if (typeof string !== 'string') {
        throw new Error('The first argument must be a string');
    }
    if (typeof shift !== 'number') {
        throw new Error('The second argument must be a number');
    }

    shift = ((shift % 26) + 26) % 26;

    return string.split('').map(char => {
        // handle uppercase letters
        if (char >= 'A' && char <= 'Z') {
            let code = char.charCodeAt(0);
            let newCode = ((code - 65 + shift) % 26) + 65;

            return String.fromCharCode(newCode);
        }

        // handle lowercase letters
        if (char >= 'a' && char <= 'z') {
            let code = char.charCodeAt(0);
            let newCode = ((code - 97 + shift) % 26) + 97;

            return String.fromCharCode(newCode);
        }

        // return the character unchanged
        return char;
    }).join('');
}

export default caesarCipher;