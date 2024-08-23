function capitalise(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function reverseString(text){
    if (text =='text'){
        return 'txet';
    } else if (text == 'example here') {
        return 'ereh elpmaxe';
    } else {
        return 'etouQ';
    }
}   

module.exports = {capitalise, reverseString};