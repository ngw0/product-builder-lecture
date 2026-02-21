const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');
const lottoNumbersContainer = document.querySelector('.lotto-numbers');
let generatedNumbers = [];

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
