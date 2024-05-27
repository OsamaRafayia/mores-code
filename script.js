const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", " "];
const morseCode = ["._ ", "_... ", "_._. ", "_.. ", ". ", ".._. ", "__. ", ".... ", ".. ", ".___ ", "_._ ", "._.. ", "__ ", "_. ", "___ ", ".__. ", "__._ ", "._. ", "... ", "_ ", ".._ ", "..._ ", ".__ ", "_.._ ", "_.__ ", "__.. ", ".____ ", "..___ ", "...__ ", "...._ ", "..... ", "_.... ", "__... ", "___.. ", "____. ", "_____ ", "/ "];

function encrypt() {
    var text = document.getElementById("normal-text").value.toLowerCase();
    var encryptingArray = text.split('');

    var encryptedArray = encryptingArray.map(function(char) {
        var index = letters.indexOf(char);
        return index !== -1 ? morseCode[index] : '';
    });

    var encryptedText = encryptedArray.join('');
    document.getElementById("encryption").value = encryptedText;
}

function decrypt() {
    var code = document.getElementById("code-text").value.trim();
    var decryptingArray = code.split(' ');

    var decryptedArray = decryptingArray.map(function(morse) {
        var index = morseCode.indexOf(morse + ' ');
        return index !== -1 ? letters[index] : '';
    });

    var decryptedText = decryptedArray.join('');
    document.getElementById("decryption").value = decryptedText;
}