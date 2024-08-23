const scoreElement = document.getElementById("score");
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const submitElement = document.getElementById("submit");
const questionSet = ["9x7=?","45-28=?","8x7=?","35/5=?","6x7=?"];
const answerSet = [63,17,56,7,42];
let currentIndex = 0;
let userScore = 0;

function showQuestion(){
    questionElement.textContent = questionSet[currentIndex];
}
function checkAnswer() {
    const userAnswer = parseInt(answerElement.value);

    if (userAnswer === answerSet[currentIndex]) {
        userScore++;
        scoreElement.textContent = `Score: ${userScore}`;
    }

    currentIndex++;

    if (currentIndex < questionSet.length) {
        showQuestion();
        answerElement.value = '';
    } else {
        answerElement.value = '';
        questionElement.textContent = `Your score is ${userScore}`;
        answerElement.disabled = true;
        submitElement.disabled = true;
    }
}

submitElement.addEventListener('click', checkAnswer);

showQuestion();