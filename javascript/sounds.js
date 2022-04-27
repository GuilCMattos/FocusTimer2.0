export default function Sound() { 

  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true");
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");
  const bttnPressTree = new Audio ('../sounds/Floresta.wav')
  const bttnPressRain = new Audio ('../sounds/Chuva.wav')
  const bttnPressHouse = new Audio ('../sounds/Cafeteria.wav')
  const bttnPressFire = new Audio ('../sounds/Lareira.wav')

  function pressButton() { 
    buttonPressAudio.play()
  }
  
  function timeEnd() {
    kitchenTimer.play()
  }
  
  function stopSound(nowSound, stopOne, stopTwo, stopThree) { 
    nowSound.play()
    stopOne.pause()
    stopTwo.pause()
    stopThree.pause()
  }
  

  function pressTree() { 
    stopSound(bttnPressTree, bttnPressFire, bttnPressHouse, bttnPressRain)
  }

  function pressFire() { 
    stopSound(bttnPressFire, bttnPressTree, bttnPressHouse, bttnPressRain)
  }

  function pressHouse() { 
    stopSound(bttnPressHouse, bttnPressTree, bttnPressFire, bttnPressRain)
  }

  function pressRain() { 
    stopSound(bttnPressRain, bttnPressTree, bttnPressFire, bttnPressHouse )
  }


  return { 
    pressButton, 
    timeEnd,
    pressTree,
    pressFire,
    pressHouse,
    pressRain,
  }
}