
    let output = document.getElementById('outputtext');
    let attempts = 3;
    let number = Math.floor(Math.random() * 10) + 1;

    function guessNumber() {
        let input = parseInt(document.getElementById('userInput').value);
      
        if (isNaN(input) || input < 1 || input > 10) {
            output.innerHTML = "Invalid input: Please input number between 1-10";
            return;
        }
      
        if (input === number) {
            output.innerHTML = `You guessed right! The number was ${number}`;
        } else if (input < number) {
            output.innerHTML = "You guessed too low!";
        } else if (input > number) {
            output.innerHTML = "You guessed too high!";
        }

        attempts--;
        output.innerHTML += `<br>Attempts left: ${attempts}`;

        if (attempts === 0) {
            output.innerHTML += `<br>Game over! The number was ${number}`;
            document.getElementById('btn').disabled = true;
        }
    }
