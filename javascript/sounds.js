export default function Sound({ 
  sliderTree,
  sliderRain,
  sliderHouse,
  sliderFire,
  bttnTree,
  bttnRain,
  bttnHouse,
  bttnFire,
}) { 

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

  function backVolume(value1, value2, value3) { 

    value1.value = 0
    value2.value = 0
    value3.value = 0 
  }

  function backColor(value1, value2, value3) { 
    value1.style.background = 'var(--primary-color)'
    value2.style.background = 'var(--primary-color)'
    value3.style.background = 'var(--primary-color)'
  }
  

  function pressTree() { 
    bttnPressTree.loop = true
    bttnTree.style.background = 'var(--secundary-color)'
    stopSound(bttnPressTree, bttnPressFire, bttnPressHouse, bttnPressRain)
    backVolume(sliderFire, sliderHouse, sliderRain)
    backColor(bttnFire, bttnHouse, bttnRain)
    bttnPressTree.volume = sliderTree.value / 100
  }

  function pressFire() { 
    bttnPressFire.loop = true
    bttnFire.style.background = 'var(--secundary-color)'
    stopSound(bttnPressFire, bttnPressTree, bttnPressHouse, bttnPressRain)
    backVolume(sliderTree, sliderHouse, sliderRain)
    backColor(bttnTree, bttnHouse, bttnRain)
    bttnPressFire.volume = sliderFire.value / 100
  }

  function pressHouse() { 
    bttnPressHouse.loop = true
    bttnHouse.style.background = 'var(--secundary-color)'
    stopSound(bttnPressHouse, bttnPressTree, bttnPressFire, bttnPressRain)
    backVolume(sliderTree, sliderFire, sliderRain)
    backColor(bttnFire, bttnTree, bttnRain)
    bttnPressHouse.volume = sliderHouse.value / 100
  }

  function pressRain() { 
    bttnPressRain.loop = true
    bttnRain.style.background = 'var(--secundary-color)'
    stopSound(bttnPressRain, bttnPressTree, bttnPressFire, bttnPressHouse )
    backVolume(sliderTree, sliderHouse, sliderFire)
    backColor(bttnFire, bttnHouse, bttnTree)
    bttnPressRain.volume = sliderRain.value / 100
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