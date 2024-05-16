const questions = [{
    'que':'which if the following markup language?',
    'a':'HTML',
    'b':'css',
    'c': 'js',
    'd':'php',
    'correct':'a'
},
{
'que':'which if the following markup language?',
    'a':'HTML',
    'b':'css',
    'c': 'js',
    'd':'php',
    'correct':'a'
},{
'que':'which if the following markup language?',
    'a':'HTML',
    'b':'css',
    'c': 'js',
    'd':'php',
    'correct':'a'
}
]
let index=0
let total= questions.length
let right=0;
let wrong=0;
const quesBox=document.getElementById("quesBox")
const optioninput=document.querySelectorAll('.options')
const loadquestion=()=>{
    if(index==total){
        return endQuiz()
    }
    const data=questions[index]
    quesBox.innerText=`${index+1}${data.que}`;
    optioninput[0].nextElementSibling.innerText=data.a
    optioninput[1].nextElementSibling.innerText=data.b
    optioninput[2].nextElementSibling.innerText=data.c
    optioninput[3].nextElementSibling.innerText=data.d



}
const submitquiz=()=>{
    data=questions[index];
    const ans=getanswer()
    if  (ans===data.correct){
        right++;
    }else{
        wrong++;
    }
    return;
    index++;
    loadquestion();
}
        const getAnswer=()=>{
        optioninput.forEach(
        (input)=>{
            if (input.checked){
                return input.value

            } 
            })
        }
        
        
    
const getanswer=()=>{
    optioninput.forEach(
        (input)=>{
            input.checked= false;
        }
    )
}
const endQuiz=()=>{
    document.getElementById("quesbox").innerHTML=
   `<h3>Thank you for playing the quiz</h3>
   <h2>${right}/${total}are correct</h2>`

}

loadquestion();