var table = document.querySelector("#tiles");
var score = document.querySelector("#num");
var start = document.querySelector("#start");
var currentScore = 0;
console.log("started");
table.addEventListener("click", checkId, false);
start.addEventListener("click", just, false);
var currentId = undefined;
score.innerText= "0";
function checkId(e){
    if(e.target !== e.currentTarget){
        var clicked = e.target.id;
        if(clicked === currentId){
            currentScore+=1;
            score.innerText = currentScore;
        }
    }
    e.stopPropagation();
}
function startGame(){
    
    currentId =""+ (Math.floor(Math.random()*15));
    var d = document.getElementById(currentId);
    d.style.background = "red";
    d.style.boxShadow = "2px 2px 0px 0px blue";
}
function just(){
    currentScore = 0;
    score.innerText = 0;
    var count = 0;
    setInterval(startGame,1000);
    setInterval(clearTile,2000);
    
    currentId = undefined;
}
function clearTile(){
    for(let j = 0; j<16; j++){
        document.getElementById(""+j).style.background = "white";
        document.getElementById(""+j).style.boxShadow = "2px 2px 0px 0px black";
        
    }
}


