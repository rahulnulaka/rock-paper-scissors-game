let images=document.querySelectorAll(".image");

let user_count=0;
let comp_count=0;

let choices=["rock","paper","scissors"];

let text=document.querySelector("#msg");
let user_score=document.querySelector("#user-score");
let comp_score=document.querySelector("#comp-score");

drawGame =()=>{
    text.innerText="The Game is a Draw";
    text.style.backgroundColor="#EF476F";
}

showWinner =(userWin)=>{
    if(userWin){
        user_count++;
        user_score.innerText=user_count;
        text.innerText="Congratulations! you won";
        text.style.backgroundColor="green";
    }
    else{
        comp_count++;
        comp_score.innerText=comp_count;
        text.innerText="You Loose";
        text.style.backgroundColor="red";
    }
}

displayScore =(user_choice,comp_choice)=>{
    if(user_choice===comp_choice){
        drawGame();
    }
    else{
        let userWin=true;
        if(user_choice==="rock"){
            userWin=(comp_choice==="paper")?false:true;
        }
        else if(user_choice==="paper"){
            userWin=(comp_choice==="scissors")?false:true;
        }
        else{
            userWin=(comp_choice==="rock")?false:true;
        }
        showWinner(userWin);
    }
}

playGame = (user_choice)=>{
    let ind=Math.floor(Math.random()*3);
    let comp_choice=choices[ind];
    displayScore(user_choice,comp_choice);
}
images.forEach((img)=>{
    img.addEventListener("click",()=>{
        let user_choice=img.getAttribute("id");
        playGame(user_choice);
    });
});