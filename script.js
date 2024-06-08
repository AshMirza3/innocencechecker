document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const questions = Array.from(document.querySelectorAll('.question'));
    let answers = {};

    questions.forEach((question, index) => {
        const selectedAnswer = question.querySelector('input[type="radio"]:checked');
        if (selectedAnswer) {
            answers[`Q${index + 1}`] = selectedAnswer.value;
        }
    });

    saveResults(username, answers);
    clearForm();
});

function saveResults(username, answers) {
    let results = JSON.parse(localStorage.getItem('surveyResults')) || [];
    results.push({ username: username, answers: answers });
    localStorage.setItem('surveyResults', JSON.stringify(results));
}

function clearForm() {
    document.getElementById('surveyForm').reset();
}
