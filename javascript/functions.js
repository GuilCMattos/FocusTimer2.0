import Sound from './sounds.js'

export default function Timer({ 
  minutesDisplay,
  secondsDisplay,
  timerTimeOut
}) { 
  function resetTimer() { 
    Sound().timeEnd()
    minutesDisplay.textContent = 25
    secondsDisplay.textContent = '00'
    clearTimeout(timerTimeOut)
    
  }
  
  function countdown() {
   timerTimeOut = setTimeout(function(){
  
    
    
    if (Number(secondsDisplay.textContent) <=0 && Number(minutesDisplay.textContent) <= 0) { 
  
      resetTimer()
      return
    }
     
      if (Number(secondsDisplay.textContent) <= 0) { 
        secondsDisplay.textContent = 60
        minutesDisplay.textContent = String(--minutesDisplay.textContent).padStart(2, '0')
      }
      
      secondsDisplay.textContent = String(--secondsDisplay.textContent).padStart(2,'0')
  
      countdown()
     
    }, 1000)
  }
  
  function hold() { 
    clearTimeout(timerTimeOut)
  }

  return { 
    resetTimer,
    countdown,
    hold
  }
}

