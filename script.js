const questions = [
    {
        question:"Which is largest animal in the world?",
        answers : [
            {text:"Shark",correct:false},
            {text:"Blue whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
        ]
    },
    {
        question:"Which is the largest State of India?",
        answers : [
            {text:"Haryana",correct:false},
            {text:"Kerala",correct:false},
            {text:"Rajasthan",correct:true},
            {text:"Gujarat",correct:false},
        ]
    },
    {
        question:"Which is the smallest Continent in the world?",
        answers : [
            {text:"Asia",correct:false},
            {text:"Arctic",correct:false},
            {text:"Australia",correct:true},
            {text:"Africa",correct:false},
        ]
    },
    {
        question:"In which year was Google launched?",
        answers : [
            {text:"1998",correct:true},
            {text:"2000",correct:false},
            {text:"1990",correct:false},
            {text:"2002",correct:false},
        ]
    },
    {
        question:"Who was the first Prime Minister of India?",
        answers : [
            {text:"Indira Gandhi",correct:false},
            {text:"Jawaharlal Nehru",correct:true},
            {text:"Dr Manmohan Singh",correct:false},
            {text:"Lal Bahadur Shastri",correct:false},
        ]
    },
    {
        question:"Which is the largest desert in the World?",
        answers : [
            {text:"Kalahari",correct:false},
            {text:"Gobi",correct:false},
            {text:"Sahara",correct:false},
            {text:"Antarctica",correct:true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer_buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+ 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);

    }); 
}
 function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
 }

 function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
}else{
    selectedBtn.classList.add("Incorrect");
}

Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled  = true;
});
nextButton.style.display = "block";
 }

 function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
 }

 function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    } else{
        showScore();
    }
 }



 nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    } else{
        startQuiz();
    }
 })
startQuiz();

