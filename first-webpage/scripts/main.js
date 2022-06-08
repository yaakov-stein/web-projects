let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/web-picture.png') {
      myImage.setAttribute('src','images/web-picture-2.png');
    } else {
      myImage.setAttribute('src','images/web-picture.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h3');

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome, ' + myName;
  }
}