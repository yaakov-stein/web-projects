let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/web-picture.png') {
      myImage.setAttribute('src','images/web-picture-2.png');
    } else {
      myImage.setAttribute('src','images/web-picture.png');
    }
}