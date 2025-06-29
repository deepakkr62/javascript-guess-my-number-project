'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent=23;
document.querySelector('.score').textContent=10;

document.querySelector('.guess').value=34;
console.log(document.querySelector('.guess').value);
*/

let sercretNumber=Math.trunc(Math.random()*20)+1;
let heighscore=0;
let score=20;
const displayMessage=function(message){
    document.querySelector('.message').textContent=message;
}
document.querySelector('.check').addEventListener('click',
function (){
    const guess=Number(document.querySelector('.guess').value);
    if(!guess){
        displayMessage("🚫 No Number");
        // document.querySelector('.message').textContent="🚫 No Number";
    } else if (guess===sercretNumber){
        // document.querySelector('.message').textContent="congrats you won 🍾"
        displayMessage("congrats you won 🍾");
        document.querySelector('.number').textContent=sercretNumber;
        document.querySelector('body').style.backgroundColor="green";
        document.querySelector('.number').style.width='30rem';

        if(score>heighscore){
            heighscore=score;
            document.querySelector('.highscore').textContent=heighscore;
        }
    }
    else if(guess !==sercretNumber){
        if(score>1){
            //document.querySelector('.message').textContent=guess>sercretNumber ? "📈Too high":"📉Too Low";
            displayMessage(guess>sercretNumber ? "📈Too high":"📉Too Low");
            score--;
            document.querySelector('.score').textContent=score;
            } else{
                displayMessage("💣you loss the game");
                //document.querySelector('.message').textContent="💣you loss the game"
                document.querySelector('.score').textContent=0;
            }
    }
    /*
    else if(guess>sercretNumber){
        if(score>1){
        document.querySelector('.message').textContent="📈Too high"
        score--;
        document.querySelector('.score').textContent=score;
        } else{
            document.querySelector('.message').textContent="💣you loss the game"
            document.querySelector('.score').textContent=0;
        }   
    } else if(guess<sercretNumber){
        if(score>1){
            document.querySelector('.message').textContent="📉Too Low"
            score--;
            document.querySelector('.score').textContent=score;
            } else{
                document.querySelector('.message').textContent="💣you loss the game"
                document.querySelector('.score').textContent=0;
            } 
        
    }*/

    document.querySelector('.again').addEventListener('click',function (){
        score=20;
        sercretNumber=Math.trunc(Math.random()*20)+1;

        //document.querySelector('.message').textContent="Start guessing...";
        displayMessage("Start guessing...");
        document.querySelector('.score').textContent=score;
        document.querySelector('.guess').value="";
        document.querySelector('.number').textContent="?";

        document.querySelector('body').style.backgroundColor="black";
        document.querySelector('.number').style.width='15rem'
    })
    
}
)