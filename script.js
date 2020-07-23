var min = 0;
var sec = 0;
var milisec = 0;
var minutes = document.getElementById("mins");
var seconds = document.getElementById("secs");
var miliseconds = document.getElementById("milis");
var interval;
function timer(){
    milisec++
    miliseconds.innerHTML = milisec;
    if(milisec >=100){
        sec++;
        seconds.innerHTML = sec;
        milisec = 0;
    }
    else if (sec >=60){
        min++;
        minutes.innerHTML = min;
        sec = 0;
    }
}
function start(){
    interval = setInterval(timer,10);
    var btn = document.getElementById("starts");
    btn.disabled = true;
}
function pause(){
     clearInterval(interval);
     var btn = document.getElementById("starts");
     btn.disabled = false;
   }
function reset(){
    min = 0;
    sec = 0;
    milisec = 0;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
    miliseconds.innerHTML = milisec;
    clearInterval(interval);
    var btn = document.getElementById("starts");
    btn.disabled = false;

}


