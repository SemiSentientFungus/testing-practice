function capitalise(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function reverseString(text){
    return text.split('').reverse().join('');
}   

const calculator = {
    
}

module.exports = {capitalise, reverseString, calculator};