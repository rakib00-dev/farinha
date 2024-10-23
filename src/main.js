const fixedNav = document.getElementById('fixedNav');
const bar = document.getElementById('bar');
const cross = document.getElementById('cross');
const menuUl = document.getElementById('menuUl');
const body = document.getElementById('body');

let bodyWidth = body.clientWidth;
// let bodyWidthAdd = window.innerWidth - bodyWidth;
setInterval(() => {
  const width = window.innerWidth;
  fixedNav.style.width = `${width}px`;
}, 1000);

window.onload = () => {
  const width = window.innerWidth;
  // body.style.width = `${width}px`;
  // body.style.width = `${body.clientWidth + bodyWidthAdd}px`;
  fixedNav.style.width = `${width}px`;
};

window.addEventListener('resize', () => {
  const width = window.innerWidth;
  if (width <= 1024) {
    fixedNav.style.width = `${width}px`;
  }
});

bar.addEventListener('click', () => {
  cross.style.display = 'block';
  bar.style.display = 'none';
  menuUl.classList.toggle('navToggle');
});
cross.addEventListener('click', () => {
  cross.style.display = 'none';
  bar.style.display = 'block';
  menuUl.classList.toggle('navToggle');
});

// experience variable
const experienceClients = document.getElementById('experience-clients');
const experienceRepeatedClients = document.getElementById(
  'experience-repeated-clients'
);
const experienceProject = document.getElementById('experience-project');
const experienceInYear = document.getElementById('experienceInYear');
let since = 2018;
let latestDate = new Date().getFullYear();
let currentExperience = latestDate - since;
let exClintCounter = 0;
let exRepClintCounter = 0;
let exProjCounter = 0;
let exYrsCounter = 0;

let countingStarted = false;

const countFunction = () => {
  if (countingStarted) {
    return; // Prevent multiple calls
  }
  countingStarted = true;

  // exClintCounter
  setInterval(() => {
    if (exClintCounter === 37) {
      clearInterval();
      return;
    } else {
      exClintCounter += 1;
      experienceClients.innerHTML = exClintCounter;
    }
  }, 150);

  // exRepClintCounter
  setInterval(() => {
    if (exRepClintCounter === 19) {
      clearInterval();
      return;
    } else {
      exRepClintCounter += 1;
      experienceRepeatedClients.innerHTML = exRepClintCounter;
    }
  }, 350);

  // exProjCounter
  setInterval(() => {
    if (exProjCounter === 50) {
      clearInterval();
      return;
    } else {
      exProjCounter += 1;
      experienceProject.innerHTML = exProjCounter;
    }
  }, 100);

  // exYrsCounter
  setInterval(() => {
    if (exYrsCounter === currentExperience) {
      clearInterval();
      return;
    } else {
      exYrsCounter += 1;
      experienceInYear.innerHTML = exYrsCounter;
    }
  }, 800);
};

window.addEventListener('scroll', function () {
  const scrollCount = window.scrollY;
  if (scrollCount >= 82) {
    fixedNav.style.top = '-15px';
    fixedNav.style.boxShadow = '0px -14px 25px 2px #11111199';
    fixedNav.style.position = 'sticky';
  } else if (scrollCount >= 92) {
    fixedNav.style.top = '0px';
    fixedNav.style.position = 'sticky';
  } else {
    fixedNav.style.position = 'relative';
    fixedNav.style.top = '-5px';
    fixedNav.style.boxShadow = null;
  }

  if (window.scrollY >= 238) {
    countFunction();
  }

  // experience
});

// form functionality
const submitBtn = document.getElementById('submit-button');
const inputName = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

submitBtn.addEventListener('click', () => {
  setTimeout(() => {
    inputName.value = '';
    email.value = '';
    message.value = '';
  }, 1000);
});
