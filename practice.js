function capitalise(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function reverseString(text) {
    return text.split('').reverse().join('');
}   

const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    divide(a, b) {
        return a / b;
    },
    multiply(a, b) {
        return a * b;
    }
}

function caesarCipher(text, val) {
    const cipher = [];
    
    const lowerAlph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let rotatedLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const upperCaseAlp = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let rotatedUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    rotatedLower = rotatedLower.splice(val).concat(rotatedLower.splice(0, val));
    rotatedUpper = rotatedUpper.splice(val).concat(rotatedUpper.splice(0, val));

    const textArr = text.split('');

    textArr.forEach((element) => {
        if(lowerAlph.includes(element)){
            cipher.push(rotatedLower[lowerAlph.indexOf(element)]);
        } else if (upperCaseAlp.includes(element)){
            cipher.push(rotatedUpper[upperCaseAlp.indexOf(element)])
        } else {
            cipher.push(element)
        }
    });
    
    return cipher.join('');
}

function analyzeArray(array){
    let object = {};

    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    object.average = sum / array.length;
    object.min = array.reduce((a,b) => Math.min(a, b));
    object.max = array.reduce((a,b) => Math.max(a, b));
    object.length = array.length;

    return object
}

module.exports = {capitalise, reverseString, calculator, caesarCipher, analyzeArray};