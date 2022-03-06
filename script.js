var q1 = document.querySelector("#q1")
var q2 = document.querySelector("#q2")
var q3 = document.querySelector("#q3")
var q4 = document.querySelector("#q4")
var q5 = document.querySelector("#q5")

var btn = document.querySelector('#checkRes')

var answerList = ['процессор', '8', 'windows', 'видеокарта', 'жесткий диск'] 

var questionList = []

var rightAnswer = 0

btn.addEventListener('click', ClickBtn)

function ClickBtn(){
    questionList.push(q1.value)
    questionList.push(q2.value)
    questionList.push(q3.value)
    questionList.push(q4.value)
    questionList.push(q5.value)
    questionList.forEach(function(item, index){
        questionList[index] = item.toLowerCase()
     })
    console.log(questionList)
    for(var i = 0; i<answerList.length; i++){
        for(var j = 0; j<questionList.length; j++){
            if(answerList[i] == questionList[j]){
                console.log('ответ' +  questionList[j] + 'правильный')
                rightAnswer++
            }
            else{
                console.log('ответ' +  questionList[j] + 'не правильный')}
        }
    }
    alert("Количество правильных ответов - " + rightAnswer)
}