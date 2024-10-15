const tries = 6;
let random = [];
let guesses = 1;

let userConsent = confirm(
  "Welcome to 'Guessing Game' click okay below to play!"
);

for (let i = 0; i < 1; i++) {
  random.push(Math.floor(Math.random() * 12) + 1);
}

let computerNumber = random[0];

if (userConsent && guesses !== tries) {


  function getNumber() {

    if (guesses !== tries) {
      let userGuessed = Number(window.prompt("Please enter a number from 1 to 12."));

      if (userGuessed) {
        checkGuess(userGuessed);
      } else {
        window.alert("Ok! May be some other time.");
        return;
      }
    } else {
      window.alert(
        `Sorry! only ${tries - 1} guesses allowed. The number was ${random[0]} Thank you for playing!`
      );

      let restart = confirm("Do you want to play again?");
      if (restart) {
        location.reload();
      } else {
        window.alert("Ok! May be some other time.");
      }
    }
    
  }

  function checkGuess(guessItem) {
    if (guesses < tries) {
      if (guessItem == computerNumber) {
        changeGuessColor(guessItem, "correct");
      } else if (guessItem > computerNumber && guessItem !== null) {
        guesses += 1; 
        changeGuessColor(guessItem, "lower");
      } else if (guessItem < computerNumber && guessItem !== null) {
        guesses += 1; 
        changeGuessColor(guessItem, "higher");
      } else {
        window.alert("Ok! May be some other time.");
        return;
      }
    } else if (guesses === tries) {
      window.alert(
        `Sorry! only ${tries} guesses allowed. The number was ${random[0]} Thank you for playing!`
      );

      let restart = confirm("Do you want to play again?");
      if (restart) {
        location.reload();
      } else {
        window.alert("Ok! May be some other time.");
      }
    }
  }

  function changeGuessColor(guess, guessPosition) {
    if (guess == 1) {
      if (guessPosition == "correct") {
        document.getElementById("item1").style.backgroundColor = "blue";
        setTimeout(() => {
          alert(`Congratulations! You win. The number is ${computerNumber}`);
        }, 400);
        return;
      } else {
        document.getElementById("item1").style.backgroundColor = "grey";

        alert(`Sorry! ${guess} is the wrong number. Guess ${guessPosition}. You have ${tries - guesses} guesses left`);
      }
      setTimeout(getNumber, 400);
    } else if (guess == 2) {
      if (guessPosition == "correct") {
        document.getElementById("item2").style.backgroundColor = "blue";
        setTimeout(() => {
          alert(`Congratulations! You win. The number is ${computerNumber}`);
        }, 400); 
        return;
      } else {
        document.getElementById("item2").style.backgroundColor = "grey";

        alert(`Sorry! ${guess} is the wrong number. Guess ${guessPosition}. You have ${tries - guesses} guesses left`);
      }
      setTimeout(getNumber, 400);
    } else if (guess == 3) {
      if (guessPosition == "correct") {
        document.getElementById("item3").style.backgroundColor = "blue";
        setTimeout(() => {
          alert(`Congratulations! You win. The number is ${computerNumber}`);
        }, 400);
     
        return;
      } else {
        document.getElementById("item3").style.backgroundColor = "grey";

        alert(`Sorry! ${guess} is the wrong number. Guess ${guessPosition}. You have ${tries - guesses} guesses left`);
      }
      setTimeout(getNumber, 400);
    } else if (guess == 4) {
      if (guessPosition == "correct") {
        document.getElementById("item4").style.backgroundColor = "blue";
        setTimeout(() => {
          alert(`Congratulations! You win. The number is ${computerNumber}`);
        }, 400);
        return;
      } else {
        document.getElementById("item4").style.backgroundColor = "grey";

        alert(`Sorry! ${guess} is the wrong number. Guess ${guessPosition}. You have ${tries - guesses} guesses left`);
      }
      setTimeout(getNumber, 400);
    } else if (guess == 5) {
      if (guessPosition == "correct") {
        document.getElementById("item5").style.backgroundColor = "blue";
        
        setTimeout(() => {
          alert(`Congratulations! You win. The number is ${computerNumber}`);
        }, 400);
        
        return;
      } else {
        document.getElementById("item5").style.backgroundColor = "grey";

        alert(`Sorry! ${guess} is the wrong number. Guess ${guessPosition}. You have ${tries - guesses} guesses left`);
      }
      setTimeout(getNumber, 400);
    } else if (guess == 6) {
      if (guessPosition == "correct") {
        document.getElementById("item6").style.backgroundColor = "blue";
        setTimeout(() => {
          alert(`Congratulations! You win. The number is ${computerNumber}`);
        }, 400);
        return; 
      } else {
        document.getElementById("item6").style.backgroundColor = "grey";

        alert(`Sorry! ${guess} is the wrong number. Guess ${guessPosition}. You have ${tries - guesses} guesses left`);
      }
      setTimeout(getNumber, 400);
    } else if (guess == 7) {
      if (guessPosition == "correct") {
        document.getElementById("item7").style.backgroundColor = "blue";
        setTimeout(() => {
          alert(`Congratulations! You win. The number is ${computerNumber}`);
        }, 400);
        return; 
      } else {
        document.getElementById("item7").style.backgroundColor = "grey";

        alert(`Sorry! ${guess} is the wrong number. Guess ${guessPosition}. You have ${tries - guesses} guesses left`);
      }
      setTimeout(getNumber, 400);
    } else if (guess == 8) {
      if (guessPosition == "correct") {
        document.getElementById("item8").style.backgroundColor = "blue";
        setTimeout(() => {
          alert(`Congratulations! You win. The number is ${computerNumber}`);
        }, 400); 
        return;
      } else {
        document.getElementById("item8").style.backgroundColor = "grey";

        alert(`Sorry! ${guess} is the wrong number. Guess ${guessPosition}. You have ${tries - guesses} guesses left`);
      }
      setTimeout(getNumber, 400);
    } else if (guess == 9) {
      if (guessPosition == "correct") {
        document.getElementById("item9").style.backgroundColor = "blue";
        setTimeout(() => {
          alert(`Congratulations! You win. The number is ${computerNumber}`);
        }, 400);
        return; 
      } else {
        document.getElementById("item9").style.backgroundColor = "grey";

        alert(`Sorry! ${guess} is the wrong number. Guess ${guessPosition}. You have ${tries - guesses} guesses left`);
      }
      setTimeout(getNumber, 400);
    } else if (guess == 10) {
      if (guessPosition == "correct") {
        document.getElementById("item10").style.backgroundColor = "blue";
        setTimeout(() => {
          alert(`Congratulations! You win. The number is ${computerNumber}`);
        }, 400); 
        return;
      } else {
        document.getElementById("item10").style.backgroundColor = "grey";

        alert(`Sorry! ${guess} is the wrong number. Guess ${guessPosition}. You have ${tries - guesses} guesses left`);
      }
      setTimeout(getNumber, 400);
    } else if (guess == 11) {
      if (guessPosition == "correct") {
        document.getElementById("item11").style.backgroundColor = "blue";
        setTimeout(() => {
          alert(`Congratulations! You win. The number is ${computerNumber}`);
        }, 400);
        return; 
      } else {
        document.getElementById("item11").style.backgroundColor = "grey";

        alert(`Sorry! ${guess} is the wrong number. Guess ${guessPosition}. You have ${tries - guesses} guesses left`);
      }
      setTimeout(getNumber, 400);
    } else if (guess == 12) {
      if (guessPosition == "correct") {
        document.getElementById("item12").style.backgroundColor = "blue";
        setTimeout(() => {
          alert(`Congratulations! You win. The number is ${computerNumber}`);
        }, 400);
        return;
      } else {
        document.getElementById("item12").style.backgroundColor = "grey";

        alert(`Sorry! ${guess} is the wrong number. Guess ${guessPosition}. You have ${tries - guesses} guesses left.`);
      }
      setTimeout(getNumber, 400);
    } else {
      setTimeout(getNumber, 400); 
      guesses += 1; 
    }
  }
 
  getNumber(); 

} 
 
