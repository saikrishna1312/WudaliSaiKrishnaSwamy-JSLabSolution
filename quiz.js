function Quiz(questions){
    this.score = 0;
    this.questions = questions;
    this.questionIndex = questionIndex;
}

Quiz.prototype.getQuestionByIndex = function(){
    return this.questions[this.questionIndex];
};

Quiz.prototype.checkOptionWIthAnswer = function(answer){
    if(this.getQuestionByIndex().isCorrectAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}

Quiz.prototype.isFinished = function(){
    return this.questionIndex === this.questions.length-1;

}

function Question(text, choices, answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Quiz.prototype.isCorrectAnswer = function(){
    return this.answer === choice;
}

function showScores(){
    var quizElement = document.getElementById("quiz");

    var result = `<h1> Result </h1>
                <h2 id = 'score'> Your scores : ${quiz.score} and the percentage is : ${quiz.score / quiz.length * 100} `;
    quizElement.innerHTML = result;
    
}

function loadQuestions(){
    if(quiz.isFinished()){
        showScores();
    }
    else{
        var questionElement = getElementById("question");
        var questionLoaded = quiz.getQuestionByIndex()
        questionElement.innerHTML = questionLoaded.text;

        var choices = questionLoaded.choices;
        for(let i = 0; i<choices.length; i++){
            var choiceElement = document.getElementById("choice"+i);
            choiceElement.innerHTML = choices[i];

            var btnElement = document.getElementById("btn"+i);
            btnElement.onclick = () => {
                quiz.checkOptionWIthAnswer(choices[i]);
                loadQuestions();
            }
            
        }

    showProgress();

    }
}

function showProgress(){
    var currentIndex = quiz.currentIndex+1;
    var progressElement = document.getElementById("progress");
    progressElement.innerHTML = `Question ${currentIndex} of ${quiz.questions.length}`;

}

var questions = [
    new Question = ("Who is the present Indian test cricket team captain?", ["Rohith", "Virat", "Rahul", "Bumrah"], "Rohith"),
    new Question = ("Russia is currently in war with ", ["USA", "UK", "Ukraine", "India"], "Rohith"),
    new Question = ("Who potrayed the role of batman in 2022 feature film 'The Batman'", ["Ben Affleck", "Robert Downey Jr.", "Chris Evans", "Robert Pattinson"], "Robert Pattinson"),
    new Question = ("Who was the highest paid indian player in IPL auction 2022?", ["Deepak Chahar", "Ishan Kishan", "Shreyas Iyer", "Shardul Thakur"], "Ishan Kishan"),
    new Question = ("Which programming language is used to write smart contracts?", ["Solidity", "Ethereum", "Python", "None of the above"], "Solidity"),
]


var quiz = new Quiz("questions");
loadQuestions();