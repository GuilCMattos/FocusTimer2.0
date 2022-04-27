import Timer from './functions.js'
import Sounds from './sounds.js'

const bttnPlay = document.querySelector('.play')
const bttnPause = document.querySelector('.pause')
const bttnStop = document.querySelector('.stop')
const bttnUpTime = document.querySelector('.upTime')
const bttnDownTime = document.querySelector('.downTime')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const bttnTree = document.querySelector('.tree')
const bttnRain = document.querySelector('.rain')
const bttnHouse = document.querySelector('.house')
const bttnFire = document.querySelector('.fire')
let timerTimeOut;

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut
})

const sound = Sounds()

bttnUpTime.addEventListener('click', () => {
  minutesDisplay.textContent = String(++minutesDisplay.textContent).padStart(2, '0')
  sound.pressButton()

})

bttnDownTime.addEventListener('click', () => {
  minutesDisplay.textContent = String(--minutesDisplay.textContent).padStart(2, '0')
  sound.pressButton()
  
})

bttnPlay.addEventListener('click', function() {
  
  timer.countdown()
  
  bttnPlay.classList.add('hide')
  bttnPause.classList.remove('hide')
  sound.pressButton()
})

bttnStop.addEventListener('click', function() { 
  timer.resetTimer()
  sound.pressButton()
})

bttnPause.addEventListener('click', function() { 
  timer.hold()
  bttnPlay.classList.remove('hide')
  bttnPause.classList.add('hide')
  sound.pressButton()
})

bttnRain.addEventListener('click', function(){
  sound.pressRain()
  
})

bttnTree.addEventListener('click', function(){
  sound.pressTree()
  
})

bttnHouse.addEventListener('click', function(){
  sound.pressHouse()
  
})

bttnFire.addEventListener('click', function(){
  sound.pressFire()
  
})