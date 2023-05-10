let sec = 8;
let milisec = 0;
const appendseconds = document.getElementById("seconds");
const appendmilisec = document.getElementById("milisec");
const round = document.getElementById("round");
let counting = 1;
let Interval_timer;
let correct = 0;

function Start(){
    set_preview();
    Interval_timer = setInterval(TIMER,10);
    return;
}

let TIMER = function (){
    milisec--;
    if(milisec>9) appendmilisec.textContent=milisec;
    if(milisec<=9 && milisec>=0) appendmilisec.textContent = "0"+milisec;
    if(milisec<0) {
        sec--;
        appendseconds.textContent = "0"+sec;
        milisec=59; 
    }
    if(sec<0){
        appendmilisec.textContent = "00";
        appendseconds.textContent = "00";
        clearInterval(Interval_timer);
        alert(`round${counting}은(는) 실패입니다.`);
        Next_Round();
        return;
    }
}

function Next_Round(){
    clearInterval(Interval_timer);
    counting++;
    round.textContent = "round"+counting;
    if(counting>=4) {
        alert("모든 게임을 완료하였습니다.");
        round.textContent = "게임종료";
        alert(`당신의 점수는 ${correct}점 입니다.`);
        appendmilisec.textContent = "00";
        appendseconds.textContent = "00";
        document.getElementById("preview").value = "게임종료";
        document.getElementById("answer").value = "게임종료";
        return;
    }
    sec = 10-counting*2;
    appendseconds.textContent = "0" + sec;
    milisec = 0;
    appendmilisec.textContent = "0" + milisec;
    document.getElementById("preview").value = "";
    document.getElementById("answer").value = "";
}

function set_preview(){
    if(counting===1){
        document.getElementById("preview").value = "hello";
    }
    else if(counting===2){
        document.getElementById("preview").value = "hello My name";
    }
    else if(counting===3){
        document.getElementById("preview").value = "hello My name is jugminju";
    }
}

function check_Enter(event){
    if(counting<4){
         if (event.keyCode === 13) {
            answer = document.getElementById("answer").value;
            preview = document.getElementById("preview").value;
            if(answer===preview) {
              alert(`round${counting}은(는) 성공입니다.`);
              correct++;
              Next_Round();
        }
        else { alert("일치하지 않습니다.");}
        return;
      }
    }
}