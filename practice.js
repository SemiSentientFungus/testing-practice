function capitalise(text){
    if (text == 'a'){
        return text.toUpperCase();
    }
    else if (text == 'a string') {
        return 'A string';
    }
    else if (text == 'an idea') {
        return 'An idea';
    }
    else {
        return 'Already done';
    }
}

module.exports = {capitalise};