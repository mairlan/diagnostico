const answers = {};

function selectAnswer(questionNumber, answer) {
    answers['question' + questionNumber] = answer;

    // Remove selected class from both buttons
    document.getElementById('q' + questionNumber + '_sim').classList.remove('selected');
    document.getElementById('q' + questionNumber + '_nao').classList.remove('selected');

    // Add selected class to the chosen button
    document.getElementById('q' + questionNumber + '_' + answer).classList.add('selected');
}

function nextQuestion(currentQuestion) {
    if (answers['question' + currentQuestion]) {
        document.getElementById('question' + currentQuestion).style.display = 'none';
        document.getElementById('question' + (currentQuestion + 1)).style.display = 'block';
        markSelectedAnswer(currentQuestion + 1);
    } else {
        alert('Por favor, selecione uma resposta.');
    }
}

function previousQuestion(currentQuestion) {
    document.getElementById('question' + currentQuestion).style.display = 'none';
    document.getElementById('question' + (currentQuestion - 1)).style.display = 'block';
    markSelectedAnswer(currentQuestion - 1);
}

function markSelectedAnswer(questionNumber) {
    if (answers['question' + questionNumber]) {
        const answer = answers['question' + questionNumber];
        document.getElementById('q' + questionNumber + '_' + answer).classList.add('selected');
    }
}

function calculateResult() {
    if (!answers['question10']) {
        alert('Por favor, selecione uma resposta.');
        return;
    }

    let score = 0;

    if (answers.question1 === 'sim') score++;
    if (answers.question2 === 'sim') score++;
    if (answers.question3 === 'sim') score++;
    if (answers.question4 === 'sim') score++;
    if (answers.question5 === 'sim') score++;
    if (answers.question6 === 'sim') score++;
    if (answers.question7 === 'não') score++;
    if (answers.question8 === 'sim') score++;
    if (answers.question9 === 'sim') score++;
    if (answers.question10 === 'sim') score++;

    let resultText;

    if (score >= 0 && score <= 1) {
        resultText = "<h3>Risco Leve </h3> como indicado pelas suas respostas, levando em consideração sintomas e sinais, a probabilidade é pequena. Fique atento aos sinais!";
    } else if (score >= 2 && score <=4) {
        resultText = "<h3>Risco Moderado </h3> com base nos sintomas e sinais descritos em suas respostas, a probabilidade é mediana. Esteja atento aos sinais e consulte um especialista para uma avaliação!";
    } else if (score > 4){
        resultText = "<h3>Risco grave </h3> com base nos sinais e sintomas descritos em suas respostas, a probabilidade é alta. Recomendo procurar um especialista para uma avaliação";
    }

    document.getElementById('quizForm').style.display = 'none';
    document.getElementById('menu').style.display = 'flex';
    document.getElementById('menu').style.justifyContent = 'center';


    document.getElementById('result').innerHTML = resultText;
}
