var displayNumber = 1500;
var shouldTimerRun = false;
var shouldBreakTimeRun = false;

function main() {
    document.getElementById("time").innerHTML = prettifyNumber(displayNumber);
    $("#startTimer").on("click", function(){
        whichCountDown();
    });
	$("#stopTimer").on("click", stopTimer);
    $("#resetTimer").on("click", resetTimer);

  }


function whichCountDown() {
    if (shouldBreakTimeRun) {
        breakTimeCountdown();
    }
    else {
        countDown();
    }
}

function breakTimeCountdown() {

        displayNumber = 300;
        $('body').css("background-color", "#AFEEEE");
        var breakInterval = setInterval(function(){
            document.getElementById("time").innerHTML = prettifyNumber(displayNumber);
            if (shouldBreakTimeRun) {
                 if (displayNumber === 0) {
                    clearInterval(breakInterval );
                    $('body').css("background-color", "#F7786B");
                    shouldBreakTimeRun = false;
                    displayNumber = 1500;
                    whichCountDown();



                 }
                 else {
                    displayNumber--;
                }}
            else {
                clearInterval(breakInterval );
            }
            }


        , 1000);
}

function addZero(number){
    if (number < 10){
        return "0" + number;
    }
    else {
        return number;
    }

}

function stopTimer() {
    $('body').css("background-color", "#F7786B");
    shouldTimerRun = false;
    shouldBreakTimeRun = false;
}

function resetTimer(){
    shouldBreakTimeRun = false;
    shouldTimerRun = true;
    displayNumber = 1500;
    document.getElementById("time").innerHTML = prettifyNumber(displayNumber);
    countDown();
}

function prettifyNumber(seconds) {
    var minutes = Math.floor(seconds / 60);
    var displaySecs = Math.floor(seconds % 60);
    return addZero(minutes) + ":" + addZero(displaySecs);
}


function countDown() {

        clearInterval(myInterval );
        shouldTimerRun = true;
        $('body').css("background-color", "#BCF5A9");
        //var printedNumber = addZero();
        var myInterval = setInterval(function(){
            document.getElementById("time").innerHTML = prettifyNumber(displayNumber);
            if (shouldTimerRun) {
                 if (displayNumber === 0) {
                    clearInterval(myInterval );
                    $('body').css("background-color", "#F7786B");


                    shouldBreakTimeRun = true;
                    breakTimeCountdown();

                 }
                 else {
                    displayNumber--;
                }}
            else {
                clearInterval(myInterval );
            }
            }


        , 1000);
}
$(document).ready(main);