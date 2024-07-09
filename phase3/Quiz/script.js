


let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let today = new Date().getDay();
let dayName = daysOfWeek[today];
document.getElementById("day").innerHTML = "Happy " + dayName;



const quizData = [
    {
        question: "What does the acronym SQL stand for?",
        a: "Structured Question Language",
        b: "Simple Query Language",
        c: "Structured Query Language",
        d: "Simple Question Language",
        correct: "c"
    },
    {
        question: "Which of the following is a version control system?",
        a: "Git",
        b: "JIRA",
        c: "Jenkins",
        d: "Docker",
        correct: "a"
    },
    {
        question: "What is the main purpose of Docker?",
        a: "Version control",
        b: "Continuous integration",
        c: "Containerization",
        d: "Testing",
        correct: "c"
    },
    {
        question: "Which of the following is a frontend JavaScript framework?",
        a: "Django",
        b: "Flask",
        c: "Ruby on Rails",
        d: "Angular",
        correct: "d"
    },
    {
        question: "What is the command to initialize a new Git repository?",
        a: "git start",
        b: "git init",
        c: "git new",
        d: "git create",
        correct: "b"
    },
    {
        question: "What does CSS stand for?",
        a: "Computer Style Sheets",
        b: "Creative Style Sheets",
        c: "Cascading Style Sheets",
        d: "Colorful Style Sheets",
        correct: "c"
    },
    {
        question: "Which of the following is used to style web pages?",
        a: "HTML",
        b: "CSS",
        c: "JavaScript",
        d: "SQL",
        correct: "b"
    },
    {
        question: "Which of the following is a task runner for JavaScript projects?",
        a: "React",
        b: "Vue.js",
        c: "Gulp",
        d: "Node.js",
        correct: "c"
    },
    {
        question: "What does the acronym API stand for?",
        a: "Application Programming Interface",
        b: "Application Protocol Interface",
        c: "Application Platform Interface",
        d: "Application Programming Interface",
        correct: "a"
    },
    {
        question: "What does the acronym JSON stand for?",
        a: "Java Standard Object Notation",
        b: "JavaScript Object Notation",
        c: "JavaScript Object Normalization",
        d: "Java Serialized Object Notation",
        correct: "b"
    }
];




const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

"use strict";
 currentQuiz = 0;
let score = 0;
let answerq = "";

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    if(currentQuiz > 0){
        document.getElementById("back").style.display = ""
    }
    else {
          document.getElementById("back").style.display = "none"
    }
    
    
}

function deselectAnswers() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const answerEls = document.querySelectorAll('.answer:checked');
    let answer = undefined;
    answerEls.forEach(answerEl => {
        answer = answerEl.id;
    });

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(quizData.length-1 == currentQuiz){
            document.getElementById("submit").innerHTML = " SUBMIT";
        }
       
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else  {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button> `;
        }
    }
});


function loadBack(){
   currentQuiz--;
   score--;
   loadQuiz();
}




function createBurst(){
    let animContainer = document.querySelector(".animation-container");
    let burst = document.querySelector(".burst");

    burst.style.top = Math.random() * innerHeight + "px";
    burst.style.left = Math.random() * innerWidth + "px";

    let burstClone = burst.cloneNode(true);
    animContainer.appendChild(burstClone);

    setTimeout(() => {
        burstClone.remove();
    }, 8000);
}
setInterval(createBurst, 200);


