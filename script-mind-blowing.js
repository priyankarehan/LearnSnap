document.addEventListener('DOMContentLoaded', () => {
    const testKnowledgeButton = document.getElementById('testKnowledgeButton');
    const backToHomeButton = document.getElementById('backToHomeButton');
    const puzzleContainer = document.getElementById('puzzleContainer');
    const puzzleFeedback = document.getElementById('puzzleFeedback');
    const userAnswer = document.getElementById('userAnswer');
    const submitPuzzleButton = document.getElementById('submitPuzzleButton');
    const backToLessonButton = document.getElementById('backToLessonButton');

    // Show puzzle container when the Test Your Knowledge button is clicked
    testKnowledgeButton.addEventListener('click', () => {
        puzzleContainer.style.display = 'block';
        document.getElementById('mainContent').style.display = 'none'; // Hide main content
    });

    // Back to Home button functionality
    backToHomeButton.addEventListener('click', () => {
        window.location.href = 'index.html'; // Navigate back to the main page
    });

    // Puzzle logic and submission
    submitPuzzleButton.addEventListener('click', () => {
        const answer = userAnswer.value.toLowerCase();
        if (answer === 'random') {
            puzzleFeedback.textContent = "Correct! Well done!";
        } else {
            puzzleFeedback.textContent = "Try again!";
        }
    });

    // Back to Lesson button functionality
    backToLessonButton.addEventListener('click', () => {
        puzzleContainer.style.display = 'none';
        document.getElementById('mainContent').style.display = 'block'; // Show main content again
    });
});
