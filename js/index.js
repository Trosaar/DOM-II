// Your code goes here
// * [ ] `mouseover`
// * [ ] `keydown`
// * [ ] `wheel`
// * [ ] `drag / drop`
// * [ ] `load`
// * [ ] `focus`
// * [ ] `resize`
// * [ ] `scroll`
// * [ ] `select`
// * [ ] `dblclick`

headerH1 = document.querySelector(".logo-heading");
headerH1.addEventListener('mouseover', event => {
  headerH1.textContent = "The MOST Fun Bus EVER!";
});
console.log(headerH1);

funBusImg = document.querySelector('.intro img');
console.log(funBusImg);
funBusImg.addEventListener('wheel', event => {
    funBusImg.style.maxWidth = "20%";
});

document.body.addEventListener('dblclick', event => {
  event.target.style.border = "5px solid black";
});

signUpBtn = document.querySelectorAll('.btn')
signUpBtn[0].addEventListener('mousemove', event => {
  signUpBtn[0].style.position = "absolute"
  signUpBtn[0].style.top = `${event.clientY - 20}px`
  signUpBtn[0].style.left = `${event.clientX - 100}px`
  var x = event.clientX;
  var y = event.clientY;
  var coor = "X coords: " + x + ", Y coords: " + y;
  console.log(coor);
});

signUpBtn[1].addEventListener('mouseleave', event => {
  signUpBtn[1].style.position = "absolute"
  signUpBtn[1].style.top = "75px"
  signUpBtn[1].style.left = "0px"
  signUpBtn[1].style.width = "100%"
  signUpBtn[1].style.height = "100%"
});

signUpBtn[1].addEventListener('contextmenu', event => {
  signUpBtn[1].style['z-index'] = "-10";
});

signUpBtn[2].addEventListener('mouseover', event => {
  signUpBtn[2].style.visibility = "hidden";
});

navLinks = document.querySelectorAll('.nav-link');
navLinks[0].addEventListener('click', event => {
  event.preventDefault();
})
navLinks[1].addEventListener('click', event => {
  event.preventDefault();
})
navLinks[2].addEventListener('click', event => {
  event.preventDefault();
})
navLinks[3].addEventListener('click', event => {
  event.preventDefault();
})


headerBar = document.querySelector('.main-navigation');
headerBar.addEventListener('mouseover', event => {
  headerBar.style['background-color'] = `rgb(${event.clientX},${event.clientY}, 200)`;
  event.stopPropagation();
})
