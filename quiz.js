const selectedOption = document.querySelector('input[name="quiz"]:checked');

//Define the checkAnswer function
function checkAnswer() {
  // Identify the correct answer
  const correctAnswer = "4";

  // Retrieve the user’s selected answer
  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  // Handle the case where no option is selected
  if (!selectedOption) {
    document.getElementById("feedback").textContent = "Please select an answer before submitting.";
    return;
  }

  const userAnswer = selectedOption.value;

  //Compare the user’s answer with the correct one
  if (userAnswer === correctAnswer) {
    document.getElementById("feedback").textContent =  "Correct! Well done.";
  } else {
    document.getElementById("feedback").textContent = "That's incorrect. Try again!";
  }
}

//Add an event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
