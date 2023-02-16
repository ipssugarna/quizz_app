const quizData=[
    {
      question:"In which HTML element do we put in JavaScript?",
      a:"<js>",
      b:"<script>",
      c:"<body>",
      d:"<link>",
      correct:"b"

      

    },
    {
        question:"Which HTML attribute is used to reference an external JavaScript?",
      a:"src",
      b:"rel",
      c:"type",
      d:"href",
      correct:"a"
    },
    
    {
        question:"How would you \"hello\" in an alert box?",
        a:"msg(\"hello\")",
        b:"alertBox(\"hello\")",
        c:"document.write(\"hello\")",
        d:"alert(\"hello\")",
        correct:"d"

    },

    {
        question:"JavaScript is directly related to the \"Java\" programing language?",
        a:"true",
        b:"false",
        correct:"b"

    } ,

    {
        question:"A variable in JavaScript must start with which special character",
        a:"@",
        b:"$",
        c:"#",
        d: "No speed character",
        correct:"b",

    },

 


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})

