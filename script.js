quizData = [
    {
        question: "Who invented Telephone ?",
        options:["Graham Bell","Kaif Siddiqui","Elon Musk","Charles Babbage"],
        correct:"Graham Bell"
    },
    {
        question: "Who founded Facebook ?",
        options:["Graham Bell","Kaif Siddiqui","Mark Zukerberg","Charles Babbage"],
        correct:"Mark Zukerberg"
    },
    {
        question: "Who is Knowns as the Father of the computer ?",
        options:["Florin Pop","Graham Bell","Kaif Siddiqui","Charles Babbage"],
        correct:"Charles Babbage"
    },
    {
        question: "Who founded America?",
        options:["Graham Bell","Christopher Columbus","Prasanna Jung","Charles Babbage"],
        correct:"Christopher Columbus"
    },
    {
        question: "Who is the CEO of google ?",
        options:["Graham Bell","Sundar Pichai","Prasanna Jung","Charles Babbage"],
        correct:"Sundar Pichai"
    }
]

const questionElem = document.querySelector('.question');
const buttonElem = document.querySelector('.btn button');
const labelA = document.querySelector("#label-a");
const labelB = document.querySelector("#label-b");
const labelC = document.querySelector("#label-c");
const labelD = document.querySelector("#label-d");
const radio = document.querySelectorAll(".radio-button")
const label = document.querySelectorAll(".option-label")
const scoreHeading = document.querySelector(".btn h4")


let currentQuestion = 0;
let score = 0;

function check(){
    radio.forEach((option) =>{
        if(option.checked && option.value == quizData[currentQuestion - 1].correct){
            console.log('here')
            score++;
        }
    })
}

function loadQuestion() {
        if (currentQuestion < quizData.length){
            questionElem.innerText = quizData[currentQuestion].question;
            for(let i = 0; i<4;i++){
                label[i].innerHTML = quizData[currentQuestion].options[i];
                radio[i].value = quizData[currentQuestion].options[i];
            }
            currentQuestion++; 
        }else{
            alert(`Your Score was ${score}`)
        }
    }

loadQuestion();

buttonElem.addEventListener('click', () =>{
    radio.forEach((option) =>{
        if (option.checked){
            check();
            loadQuestion()
            option.checked = false;
            scoreHeading.innerHTML = score;
        }
    })
});
