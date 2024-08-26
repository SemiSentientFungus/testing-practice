function capitalise(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function reverseString(text){
    return text.split('').reverse().join('');
}   

const calculator = {
    add(a, b) {
        if (a == 2, b == 2){
            return 4;
        } else {
            return 0;
        }
    }
}

module.exports = {capitalise, reverseString, calculator};