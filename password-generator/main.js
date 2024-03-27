const password = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", 
    "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const passwordEl = document.getElementById("password-el")

function passwordGenerator(){
    let generatedPassword = '';
    for (let i = 0; i < 10; i++){
        const passwordGen = Math.floor(Math.random() * password.length)
        generatedPassword += password[passwordGen]
        passwordEl.textContent = generatedPassword
        
    }

}


