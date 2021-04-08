var typed_text = document.getElementById('typed_text');
var cursor = document.querySelector('.cursor');

var textArray = ['Shuvro.', 'a web designer.', 'a web developer.', 'a coder.', 'a CODE LOVER.'];
var typingDelay = 200;
var erasingDelay = 100;
var newTextDelay = 2000;

var textArrayIndex = 0;
var charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursor.classList.contains('typing')) {
            cursor.classList.add('typing');
        }
        typed_text.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursor.classList.remove('typing');
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex >= 0) {
        if (!cursor.classList.contains('typing')) {
            cursor.classList.add('typing');
        }
        typed_text.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
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
        setTimeout(type, typingDelay + 1100);
    }
})