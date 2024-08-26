function capitalise(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function reverseString(text){
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

module.exports = {capitalise, reverseString, calculator};