// Quiz questions and answers
const quizQuestions = [
    {
        question: "What does HTML stand for?",
        answers: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Tabular Markup Language"],
        correct: 0
    },
    {
        question: "What does CSS stand for?",
        answers: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"],
        correct: 0
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        answers: ["<break>", "<br>", "<lb>"],
        correct: 1
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        answers: ["style", "class", "font"],
        correct: 0
    },
    {
        question: "Which property is used to change the background color in CSS?",
        answers: ["bgcolor", "background-color", "color"],
        correct: 1
    },
    {
        question: "Which of these is a JavaScript data type?",
        answers: ["String", "Text", "Character"],
        correct: 0
    },
    {
        question: "What does 'DOM' stand for?",
        answers: ["Document Object Model", "Document Oriented Model", "Document Object Method"],
        correct: 0
    },
    {
        question: "Which JavaScript keyword is used to declare a variable?",
        answers: ["var", "let", "Both var and let"],
        correct: 2
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: ["function myFunction()", "function = myFunction()", "create myFunction()"],
        correct: 0
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        answers: ["//", "#", "--"],
        correct: 0
    }
];
LE@ ....., [4/11/2025 7:41 PM]
// Quiz questions and answers
const quizQuestions = [
    {
        question: "What does HTML stand for?",
        answers: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Tabular Markup Language"],
        correct: 0
    },
    {
        question: "What does CSS stand for?",
        answers: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"],
        correct: 0
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        answers: ["<break>", "<br>", "<lb>"],
        correct: 1
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        answers: ["style", "class", "font"],
        correct: 0
    },
    {
        question: "Which property is used to change the background color in CSS?",
        answers: ["bgcolor", "background-color", "color"],
        correct: 1
    },
    {
        question: "Which of these is a JavaScript data type?",
        answers: ["String", "Text", "Character"],
        correct: 0
    },
    {
        question: "What does 'DOM' stand for?",
        answers: ["Document Object Model", "Document Oriented Model", "Document Object Method"],
        correct: 0
    },
    {
        question: "Which JavaScript keyword is used to declare a variable?",
        answers: ["var", "let", "Both var and let"],
        correct: 2
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: ["function myFunction()", "function = myFunction()", "create myFunction()"],
        correct: 0
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        answers: ["//", "#", "--"],
        correct: 0
    }
];
// Function to display quiz questions
function loadQuiz() {
    const questionsContainer = document.getElementById('questions-container');
    
    quizQuestions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        
        questionElement.innerHTML = 
            <p>${index + 1}. ${q.question}</p>
            ${q.answers.map((answer, i) =>
                <label>
                    <input type="radio" name="question${index}" value="${i}" />
                    ${answer}
                </label><br>
            ).join('')};
        
        questionsContainer.appendChild(questionElement);
    });
}

// Function to calculate results
function calculateResults(event) {
    event.preventDefault(); // Prevent form submission
    
    let score = 0;
    
    quizQuestions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(input[name="question${index}"]:checked);
        
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correct) {
            score++;
        }
    });
    
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = You scored ${score} out of ${quizQuestions.length};
    resultDiv.classList.remove('hidden');
}

// Event listener for form submission
document.getElementById('quizForm').addEventListener('submit', calculateResults);

// Load quiz questions on page load
window.onload = loadQuiz;
// Function to

LE@ ....., [4/11/2025 8:44 PM]
// Function to display quiz questions
function loadQuiz() {
    const questionsContainer = document.getElementById('questions-container');
    
    quizQuestions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        
        questionElement.innerHTML = 
            <p>${index + 1}. ${q.question}</p>
            ${q.answers.map((answer, i) =>
                <label>
                    <input type="radio" name="question${index}" value="${i}" />
                    ${answer}
                </label><br>
            ).join('')};
        
        questionsContainer.appendChild(questionElement);
    });
}

// Function to calculate results
function calculateResults(event) {
    event.preventDefault(); // Prevent form submission
    
    let score = 0;
    
    quizQuestions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(input[name="question${index}"]:checked);
        
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correct) {
            score++;
        }
    });
    
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = You scored ${score} out of ${quizQuestions.length};
    resultDiv.classList.remove('hidden');
}

// Event listener for form submission
document.getElementById('quizForm').addEventListener('submit', calculateResults);

// Load quiz questions on page load
window.onload = loadQuiz;