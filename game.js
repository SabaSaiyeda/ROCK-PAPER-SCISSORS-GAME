let userscore=0;
let compscore=0;
let userscorep=document.querySelector("#user-score");
let compscorep=document.querySelector("#comp-score");

const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
};
const drawgame=()=>{
    msg.innerText="game was draw";
    msg.style.backgroundColor="pink";
};
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin===true){
        userscore++;
        userscorep.innerText=userscore;
        msg.innerText=`you win!your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorep.innerText=compscore;
        msg.innerText=`you lost! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
};
const playgame=(userchoice)=>{
    const compchoice=gencompchoice();
    if (userchoice===compchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userwin=compchoice==="scissors"?false:true;
        }
        else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});