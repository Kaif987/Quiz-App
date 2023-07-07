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
        question: "Which is the biggest state in the USA ?",
        options:["Texas","California","Alaska","Arizona"],
        correct:"Alaska"
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
    },
    {
        question:"What is the capital of Turkey ?",
        options:["Ankara", "Kathmandu", "Turkey", "Istanbul"],
        correct: "Ankara"
    },
    
    {
        question:"How many legs a butterfly has ?",
        options:["2","4","6","8"],
        correct: "6"
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
var over=false;
function check(){
    radio.forEach((option) =>{
        if(option.checked && option.value == quizData[currentQuestion - 1].correct){
            console.log('here')
            score++;
        }
    })
}

function loadQuestion() {
    
        if (currentQuestion < quizData.length&& !over){
            questionElem.innerText = quizData[currentQuestion].question;
            for(let i = 0; i<4;i++){
                label[i].innerHTML = quizData[currentQuestion].options[i];
                radio[i].value = quizData[currentQuestion].options[i];
            }
            currentQuestion++; 
        }else{
            over=true;
            alert(`Your Score was ${score}`)

        }
    }
    

loadQuestion();

buttonElem.addEventListener('click', () =>{
    radio.forEach((option) =>{
        if (option.checked && !over){
            check();
            loadQuestion()
            option.checked = false;
            scoreHeading.innerHTML = score;
        }
        
    })
});
