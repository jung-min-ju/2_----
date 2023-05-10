const appendseconds = document.getElementById("seconds");
const appendmilisec = document.getElementById("milisec");
const round = document.getElementById("round");
let counting = 1;
let Interval_timer;
let correct = 0;
let sec=0;
let milisec = 0;

function Start(){
    if(counting===1){
        document.getElementById("preview").value = "hello";
    }
    else if(counting===2){
        document.getElementById("preview").value = "hello My name";
    }
    else if(counting===3){
        document.getElementById("preview").value = "hello My name is jugminju";
    }
    else {
        alert("모든 게임을 완료하였습니다.");  
        return;
    }
    if(sec===0) {
        alert("time을 입력해주세요.");
        return;
    }
    Interval_timer = setInterval(TIMER,10);
    return;
}

let TIMER = function (){ 
    milisec--;
    if(milisec>9) appendmilisec.textContent = milisec;
    if(milisec<=9 && milisec>=0) appendmilisec.textContent = "0" + milisec;
    if(milisec<0) {
        sec--;
        appendseconds.textContent = "0" + sec;
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
    sec=0;
    clearInterval(Interval_timer);
    counting++;
    if(counting>=4) {
        alert("모든 게임을 완료하였습니다.");
        round.textContent = "게임종료";
        alert(`당신의 점수는 ${correct}점 입니다.`);
        appendmilisec.textContent = "00";
        appendseconds.textContent = "00";
        document.getElementById("preview").value = "게임종료";
        document.getElementById("answer").value = "게임종료";
        document.getElementById("user_timer").value = "종료";
        return;
    }
    round.textContent = "round"+counting;
    appendseconds.textContent = "0" + sec;
    milisec = 0;
    appendmilisec.textContent = "0" + milisec;
    document.getElementById("preview").value = "";
    document.getElementById("answer").value = "";
    document.getElementById("user_timer").value = "";
}

function check_Enter(event){
    if (event.keyCode === 13 && counting<4) {
        const answer = document.getElementById("answer").value;
        const preview = document.getElementById("preview").value;
        if(answer===preview && answer.length>1) {
            alert(`round${counting}은(는) 성공입니다.`);
            correct++;
            Next_Round();
        }
        else alert("일치하지 않습니다.");
        return;
    }
}

function input_time(event){
    if (event.keyCode === 13 ){
        sec=document.getElementById("user_timer").value;
        document.getElementById("user_timer").value = "";
    }
}


//변수 줄이기 -> getter setter 활용!
//아! alert하면 시간 멈추는데 왜인지 이유 알아오기!
//내가 입력한 숫자로 타이머 돌려보기 