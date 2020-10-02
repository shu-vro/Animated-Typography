var Typed_text = document.getElementById('Typed_text');
var cursor = document.querySelector('.cursor');

var textArray = ['Shuvro.', 'A web designer.', 'a coder.', 'A Code Lover.'];
var typingDelay = 200;
var erasingDelay = 100;
var newTextDelay = 2000;
var textArrayIndex = 0;
var CharIndex = 0;

function type() {
    if (CharIndex < textArray[textArrayIndex].length) {
        if (!cursor.classList.contains('typing')) {
            cursor.classList.add('typing');
        }
        Typed_text.textContent += textArray[textArrayIndex].charAt(CharIndex);
        CharIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursor.classList.remove('typing');
        setTimeout(erase, newTextDelay);
    }
}
function erase() {
    if (CharIndex >= 0) {
        if (!cursor.classList.contains('typing')) {
            cursor.classList.add('typing');
        }
        Typed_text.textContent = textArray[textArrayIndex].substring(0, CharIndex - 1);
        CharIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursor.classList.remove('typing');
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) {
            textArrayIndex = 0;
        }
        setTimeout(type, newTextDelay + 250);
    }
}
document.addEventListener('DOMContentLoaded', function () {
    if (textArray.length) {
        setTimeout(type, newTextDelay + 1100);
    }
})