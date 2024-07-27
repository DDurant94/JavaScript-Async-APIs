const timerDisplay = document.getElementById('timer-container');
const inputData = document.getElementById('date-form');
const daleyInput = document.getElementById('daley-form');

// current time
window.onload = setInterval(function() {
  const ticker = document.getElementById("current-time");
  const currentTime = new Date();
  const dateString = currentTime.getMonth()+1 + '/' + currentTime.getDate() +'/'+currentTime.getFullYear();
  const timerString = currentTime.getHours()+':'+currentTime.getMinutes()+':'+currentTime.getSeconds();
  ticker.textContent = 'Todays Date: '+ dateString + ' ' + timerString;
},1000)

// getting input for count down
inputData.addEventListener('submit', function(event){
  event.preventDefault();
  const enteredHrs = parseInt(document.getElementById('hrs').value);
  const enteredMin = parseInt(document.getElementById('min').value);
  const enteredSec = parseInt(document.getElementById('sec').value);
  const hourToMin = enteredHrs * 60;
  const minToSec = (hourToMin + enteredMin) * 60;
  const addingSec = minToSec + enteredSec;
  counterDisplay(addingSec);
  inputData.reset()
})

// turing secs back to hours/mins/sec
function mathCalc(timeInSec){
  const getSec = timeInSec % 60;
  const getMinHr = Math.trunc(timeInSec / 60);
  const getMin = getMinHr % 60;
  const getHr = Math.trunc(getMinHr/60);
  return [getHr,getMin,getSec]
}

// displaying timer
function counterDisplay(timeInSec){
  const countTimer = setInterval(function(){
    if (timeInSec-- > 0){
      const time = mathCalc(timeInSec);
      if(time[2]== 30){
        alert(`30 Sec Alarm`)
      }
      else if(time[2]== 0 && time[1]>=1){
        alert(`${time[1]} Minute Alarm`)
      }
      else {
        timerDisplay.innerHTML = `Count Down: ${time[0]}:${time[1]}:${time[2]}`;
      }
    }
    else {
      timerDisplay.innerHTML = `Count Down: 0:0:0`;
      clearInterval(countTimer)
      alert("Time is up!!")
    }
  },1000)
}

// daley timer
function daleyMessage(message,time){
  setTimeout(() => {
    alert(message)
  },time)
}

//setting daley
daleyInput.addEventListener('submit',function(event){
  event.preventDefault();
  const daley = parseInt(document.getElementById('daley').value);
  const message = document.getElementById('daley-message').value;
  const millSecDaley = daley * 1000;
  daleyMessage(message,millSecDaley)
  daleyInput.reset()
})

// alarmTimer
const alarm = setInterval(function(){
  alert(`One Minute Alarm (Click 'Stop Alarm' to stop)`)
},60000)

// Ending alarm
const alr = document.getElementById("repeat-form");
alr.addEventListener('submit', function(event){
  event.preventDefault();
  clearInterval(alarm)
})
