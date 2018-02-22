
var targetValue=0;
var playerScore=0;
var winCount=0;
var lossCount=0;
var button1;
var button2;
var button3;
var button4;


function getRandomInterval(min,max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function checkWin(target,value){
    if (target===value) {
        return true;
    }
    else {
        return false;
    }
}

function newGame() {
    playerScore=0;
    $("#playerScore").text("Your total jewels: " + playerScore);
    targetValue = getRandomInterval(19,120);
    $("#targetNumber").text("Your target: " + targetValue);
//set values for each of the four buttons
    // for (var i=1;i<=4;i++) {
    //     $("#button"+i).attr("value",getRandomInterval(1,12)); 
    //     var buttonval= $("#button"+i).val("value");
    //     console.log("button"+ i + "value: " + buttonval);
    // };
    $("#button1").attr("value",getRandomInterval(1,12));
    $("#button2").attr("value",getRandomInterval(1,12));
    $("#button3").attr("value",getRandomInterval(1,12));
    $("#button4").attr("value",getRandomInterval(1,12));
    
}

function reset() {
    winCount=0;
    lossCount=0;
    $("#winCount").text("Total Wins: " + winCount);
    $("#lossCount").text("Total Losses: " + lossCount);
    newGame();
}

function winGame() {
    winCount++;
    $("#winCount").text("Total Wins: " + winCount);
    newGame();
}

function loseGame() {
    lossCount++;
    $("#lossCount").text("Total Losses: " + lossCount);
    newGame();
}

