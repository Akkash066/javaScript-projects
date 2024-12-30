const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = ["cool", "life", "awesome", "fast", "famous"];
const typingDelay = 200; // Typing speed
const erasingDelay = 200; // Erasing speed
const newLetterDelay = 1000; // Delay before typing the next word

let index = 0;
let charIndex = 0; // Typing position within the word

document.addEventListener("DOMContentLoaded", () => {
    // Start typing animation if words exist
    if (words.length && typedText) {
        setTimeout(typeText, newLetterDelay);
    }
});

function typeText() {
    if (charIndex < words[index].length) {
        // Add one character at a time
        typedText.textContent += words[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingDelay);
    } else {
        // Word completed, delay before erasing
        setTimeout(erase, newLetterDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        // Remove one character at a time
        typedText.textContent = words[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        // Move to the next word
        index++;
        if (index >= words.length) {
            index = 0; // Reset to the first word
        }
        setTimeout(typeText, typingDelay + 500);
    }
}

