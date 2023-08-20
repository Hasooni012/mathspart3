const player1 = {
    score: 0,
    answerInput: document.getElementById("answer1"),
    scoreDisplay: document.getElementById("score1"),
    submitButton: document.getElementById("submit1"),
};

const player2 = {
    score: 0,
    answerInput: document.getElementById("answer2"),
    scoreDisplay: document.getElementById("score2"),
    submitButton: document.getElementById("submit2"),
};

const questionElement = document.getElementById("question");

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operator = Math.random() < 0.5 ? "+" : "-";
    
    questionElement.textContent = `Player 1: ${num1} ${operator} ${num2}`;

    return operator === "+" ? num1 + num2 : num1 - num2;
}

function checkAnswer(player) {
    const answer = parseInt(player.answerInput.value);
    const correctAnswer = generateQuestion();

    if (answer === correctAnswer) {
        player.score++;
        player.scoreDisplay.textContent = player.score;
        player.answerInput.value = "";
    }
}

player1.submitButton.addEventListener("click", () => checkAnswer(player1));
player2.submitButton.addEventListener("click", () => checkAnswer(player2));
