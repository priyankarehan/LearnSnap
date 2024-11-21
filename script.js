document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splashScreen');
    const mainHeader = document.getElementById('mainHeader');
    const mainContent = document.getElementById('mainContent');
    const homeOptions = document.getElementById('homeOptions');
    const topicContainer = document.getElementById('topicContainer');
    const lessonContainer = document.getElementById('lessonContainer');
    const lessonTitle = document.getElementById('lessonTitle');
    const lessonContent = document.getElementById('lessonContent');
    const backToHomeButtons = document.querySelectorAll('.backToHomeButton'); // Select all back buttons
    const testKnowledgeButton = document.getElementById('testKnowledgeButton');
    const puzzleContainer = document.getElementById('puzzleContainer');
    const puzzleFeedback = document.getElementById('puzzleFeedback');
    const userAnswer = document.getElementById('userAnswer');
    const submitPuzzleButton = document.getElementById('submitPuzzleButton');

    // Display the main content after the splash screen
    setTimeout(() => {
        splashScreen.style.display = 'none';
        mainHeader.style.display = 'block';
        mainContent.style.display = 'block';
    }, 2000); // 2 seconds splash screen

    // Show topic selection on clicking 'Explore Topics'
    document.getElementById('exploreTopicsButton').addEventListener('click', () => {
        homeOptions.style.display = 'none';
        topicContainer.style.display = 'block';
    });

    // Handle back to home functionality
    backToHomeButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Hide all containers
            topicContainer.style.display = 'none';
            lessonContainer.style.display = 'none';
            puzzleContainer.style.display = 'none';
            // Show home options
            homeOptions.style.display = 'flex';
        });
    });

    // Sample lesson data for each topic
    const lessons = [
        {
            title: "Mind Blowing Facts",
            content: "Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still perfectly edible."
        },
        // Add additional lessons here...
    ];

    // Handle topic button clicks
    document.querySelectorAll('.topicButton').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.dataset.index;
            lessonTitle.textContent = lessons[index].title;
            lessonContent.textContent = lessons[index].content;
            topicContainer.style.display = 'none';
            lessonContainer.style.display = 'block';
        });
    });

    // Test your knowledge button
    testKnowledgeButton.addEventListener('click', () => {
        lessonContainer.style.display = 'none';
        puzzleContainer.style.display = 'block';
    });

    // Handle puzzle submission
    submitPuzzleButton.addEventListener('click', () => {
        const answer = userAnswer.value.toLowerCase();
        if (answer === 'random') {
            puzzleFeedback.textContent = 'Correct! The word is "random."';
        } else {
            puzzleFeedback.textContent = 'Try again!';
        }
    });
});
