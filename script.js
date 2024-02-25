const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

checkBtn.addEventListener("click", () => {

    const inputText = textInput.value.trim().toLowerCase();
    if (textInput.value == '') {
        alert("Please input a value");
        return;
    }

    const isPalindrome = checkPalindrome(inputText);
    if (isPalindrome) {
        result.textContent = `${inputText} is a palindrome`;
    }
    else {
        result.textContent = `${inputText} is not a palindrome`;
    }
});

function checkPalindrome(text) {
    const cleanText = text.replace(/[^A-Z0-9]/ig, "").toLowerCase(); // Remove caracteres especiais e converte para minúsculas
    const reversedText = cleanText.split('').reverse().join(''); // Inverte o texto limpo
    return cleanText === reversedText;
}
