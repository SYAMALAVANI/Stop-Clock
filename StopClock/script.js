
  const hourRef = document.querySelector('.hour')
  const minRef = document.querySelector('.min')
  const secRef = document.querySelector('.sec')
  const stopRef = document.querySelector('.stop')
  const startRef = document.querySelector('.start')
  const resetRef = document.querySelector('.reset')

  let time = "00:00:00"
  let seconds = 0;
  let minutes = 0;
  let hours = 0;
  let t;

  function updateTime(){
    seconds++;
    if (seconds >= 60){
      seconds = 0;
      minutes++;
      
      if (minutes >= 60){
        minutes = 0;
        hours++;
      }
    }
    
    hourRef.textContent = (hours < 10 ? "0" :"") + hours.toString();
    minRef.textContent =     (minutes < 10 ? "0" : "") + minutes.toString();
    secRef.textContent = (seconds <10 ? "0" : "") + seconds.toString();

    // startTimer();
  }

  function startTimer(){
    clearInterval(t);
    t = setInterval(updateTime, 1000);

  }

  function stopTimer(){
    clearInterval(t);
  }

  function resetTimer(){
    time= "00:00:00";
    seconds = 0;
    minutes = 0;
    hours = 0;
    hourRef.textContent = "00";
    minRef.textContent = "00";
    secRef.textContent = "00";
    stopTimer();
  }

  startRef.addEventListener("click", startTimer);
  stopRef.addEventListener("click", stopTimer);
  resetRef.addEventListener("click", resetTimer);
  
 
  