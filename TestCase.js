export const capitalize = (title) => {
    const letter = title.charAt(0).toUpperCase();
    return title.replace(title.charAt(0), letter)
}

export const reverseString = (text) => {
    let newString = "";

    for (let i = text.length - 1; i >= 0; i--) {
        newString += text[i];
    }

    return newString;
}

export const Calculator = {

    add: (a, b) => { return a + b },
    substract: (a, b) => { return a - b },
    divide: (a, b) => {
        let notZero = b === 0 ? "Division by Zero" : b;

        // Check if notZero is a string (error message)
        if (typeof notZero === "string") {
            return notZero; // Return the error message
        }

        return a / notZero;
    },
    multiply: (a, b) => {
        return a * b;
    }
}

export const caesarCipher = (str, shift, decrypt = false) => {
    const s = decrypt ? (26 - shift) % 26 : shift;
    const n = s > 0 ? s : 26 + (s % 26);
    return [...str]
        .map((l, i) => {
            const c = str.charCodeAt(i);
            if (c >= 65 && c <= 90)
                return String.fromCharCode(((c - 65 + n) % 26) + 65);
            if (c >= 97 && c <= 122)
                return String.fromCharCode(((c - 97 + n) % 26) + 97);
            return l;
        })
        .join('');
};

export const analyzeArray = (array) => {
    //min and max
    let min = array[0];
    let max = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }

        if (array[i] > max) {
            max = array[i];
        }
    }

    let length = array.length;

    let sum = 0;
    let average;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    average = sum / array.length
    const object = {
        average: average,
        min: min,
        max: max,
        length: length
    }

    return object
}

// Helper function to shift a single character
const shiftChar = (char, shift) => {
    // Check if the character is a letter
    if (/[a-zA-Z]/.test(char)) {
        const isUpperCase = char === char.toUpperCase();
        const charCode = char.charCodeAt(0);
        const shiftedCharCode = ((charCode - (isUpperCase ? 65 : 97) + shift) % 26 + 26) % 26 + (isUpperCase ? 65 : 97);
        return String.fromCharCode(shiftedCharCode);
    } else {
        // Non-alphabetic characters remain unchanged
        return char;
    }
};

// Caesar cipher function
const caesarCipher2 = (str, shift) => {
    return str.split('').map(char => shiftChar(char, shift)).join('');
};

// Example usage:
const originalText = "Hello, World!";
const shiftFactor = 3;

const encryptedText = caesarCipher2(originalText, shiftFactor);
console.log("Original text:", originalText);
console.log("Encrypted text:", encryptedText);
