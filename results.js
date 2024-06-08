document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    if (password === 'yourSecretPassword') { // Change 'yourSecretPassword' to your desired password
        displayResults();
    } else {
        alert('Incorrect password');
    }
});

function displayResults() {
    const results = JSON.parse(localStorage.getItem('surveyResults')) || [];
    const resultsList = document.getElementById('resultsList');

    results.forEach(result => {
        const resultItem = document.createElement('li');
        resultItem.textContent = `Username: ${result.username}, Answers: ${JSON.stringify(result.answers)}`;
        resultsList.appendChild(resultItem);
    });

    document.getElementById('results').style.display = 'block';
    document.getElementById('passwordForm').style.display = 'none';
}
