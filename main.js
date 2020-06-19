const mobileNav = document.querySelector('.ham-btn');
const body = document.body;
const nav = document.querySelector('.navigation');

const bg1 = "url('./assets/gradient-backgrounds/01-g.png')"
const bg2 = "url('./assets/gradient-backgrounds/02-g.png')"
const bg3 = "url('./assets/gradient-backgrounds/03-g.png')"
const bg4 = "url('./assets/gradient-backgrounds/04-g.png')"
const bg5 = "url('./assets/gradient-backgrounds/05-g.png')"
const bg6 = "url('./assets/gradient-backgrounds/06-g.png')"

const bgArray = [bg1, bg2, bg3, bg4, bg5, bg6]

//-------------------- HELPER FUNCTIONS --------------------//
function randomBgSelector(bgs) {
  let randNum = Math.floor(Math.random() * bgs.length);
  return bgs[randNum]
}

function setBackground() {
  let currentBg = randomBgSelector(bgArray);

  if (!localStorage.background) {
    localStorage.setItem("background", currentBg)
    checkTimePast()
  } else {
    currentBg = localStorage.getItem("background")
  }

  body.style.backgroundImage = currentBg;
  nav.style.backgroundImage = currentBg;
}

function checkTimePast() {
  let now = new Date(),
      minTimePast,
      lsTime;

  if (!localStorage.time) {
    localStorage.setItem("time", now)
  } else {
    lsTime = localStorage.getItem("time")
    minTimePast = new Date(lsTime)
    minTimePast.setSeconds(minTimePast.getSeconds()+5)
    if (now.getTime() > minTimePast.getTime()) {
      localStorage.clear()
      console.log("CHANGED")
    }
  }
}

function setBackGround() {
  let currentBg = randomBgSelector(bgArray);
  let currentTime = new Date();

  if (!localStorage) {
    localStorage.setItem('background', currentBg);
    localStorage.setItem('time', currentTime)
  } else {
    
  }
}

//-------------------- EVENT LISTENERS --------------------//
mobileNav.addEventListener('click', () => {
  nav.classList.toggle('active');
  body.classList.toggle('active');
});


//-------------------- EXECUTING FUNCTIONS --------------------//
(function () {
  setBackground()
  checkTimePast()
  setBackground()
})();
