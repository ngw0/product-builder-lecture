const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');
const lottoNumbersContainer = document.querySelector('.lotto-numbers');
const toggleThemeBtn = document.getElementById('toggle-theme-btn'); // Get the new button
let generatedNumbers = [];

// Function to set theme based on localStorage
function setTheme(theme) {
    document.body.classList.remove('light-mode', 'dark-mode'); // Remove existing theme classes
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
}

// Check for saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light-mode'; // Default to light mode
    setTheme(savedTheme);
});

function generateNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    generatedNumbers = Array.from(numbers);
    return generatedNumbers;
}

function displayNumbers(numbers) {
    lottoNumbersContainer.innerHTML = '';
    for (const number of numbers) {
        const numberElement = document.createElement('div');
        numberElement.classList.add('lotto-number');
        numberElement.textContent = number;
        lottoNumbersContainer.appendChild(numberElement);
    }
}

generateBtn.addEventListener('click', () => {
    const numbers = generateNumbers();
    displayNumbers(numbers);
});

// Add event listener for the new toggle theme button
toggleThemeBtn.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        setTheme('light-mode');
    } else {
        setTheme('dark-mode');
    }
});

copyBtn.addEventListener('click', () => {
    const numbersString = generatedNumbers.join(', ');
    navigator.clipboard.writeText(numbersString)
        .then(() => {
            copyBtn.textContent = 'Copied!';
            setTimeout(() => {
                copyBtn.textContent = 'Copy';
            }, 2000);
        })
        .catch(err => {
            console.error('Could not copy text: ', err);
        });
});
