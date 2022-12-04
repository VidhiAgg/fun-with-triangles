const quizForm = document.querySelector(".quiz-form")
const submitButton = document.querySelector("#submit-answer-button");
const quizOutput = document.querySelector("#quiz-output");
const correctAnswer = ["Acute", "Obtuse scalene","2 congurent triangls","180","Equilateral","Right","90"] 

function calculateScore(){
let score = 0;
let index = 0; //to iterate through the array
const formResults = new FormData(quizForm); 
 for (let formValue of formResults.values()) {
    if(formValue === correctAnswer[index]){
        score++;
        console.log(score);
        
    }
    index++;
 }
 quizOutput.innerText = "Your score is : " + score;
}
submitButton.addEventListener("click", calculateScore )