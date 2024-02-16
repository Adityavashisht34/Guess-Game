let count = 20;
let ans = -1;
let highScore = 0;
function num(){
    let numb = Math.trunc(Math.random()*20)
    console.log(numb)
    ans = numb;
}
function guess(){
    if(count<1){
        let body_ = document.getElementById('body')
        body_.style.backgroundColor = "red"
        let message = document.getElementById('heading').innerHTML = "Game lost"
        let count_ = document.getElementById('score').innerHTML = count;
        return;
    }
    let guess = document.getElementById('guessed').value;
    if(guess<ans){
        let new_message = document.getElementById('message').innerHTML = "Guessed very low"
        --count;
        let count_ = document.getElementById('score').innerHTML = count;
        return
    }
    if(guess>ans){
        let new_message = document.getElementById('message').innerHTML = "Guessed very high"
        --count;
        let count_ = document.getElementById('score').innerHTML = count;
        return
    }
    else{
        let body_ = document.getElementById('body')
        body_.style.backgroundColor = "green"
        let new_message = document.getElementById('message').innerHTML = "Correct Guess"
        let message = document.getElementById('answer').innerHTML = ans;
        highScore = highScore+count;
        document.getElementById('highscore').innerHTML = highScore;
        return
    }
}
function reset(){
    let new_message = document.getElementById('message').innerHTML = "Start guessing..."
    let message = document.getElementById('answer').innerHTML = "?";
    let body_ = document.getElementById('body')
        body_.style.backgroundColor = "#222"
    count = 20;
    let count_ = document.getElementById('score').innerHTML = count;
    document.getElementById('guessed').value = " ";
    num();
}
num();
let click = document.getElementById('clicked').addEventListener('click',guess)
let again = document.getElementById('again').addEventListener('click',reset)
