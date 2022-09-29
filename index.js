
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomImage1 = 'dice' + randomNumber1 + '.png';

let randomImageSrc = 'images/' + randomImage1;

let image1 = document.querySelectorAll('img')[0];

image1.setAttribute('src', randomImageSrc);

//second image

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImageSrc2 = 'images/dice' + randomNumber2 + '.png';

let image2 = document.querySelectorAll('img')[1].setAttribute('src', randomImageSrc2);

//conditionals to win

let number_One_wins = () => {
  if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = '🚩 Player one wins bro!';
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector('h1').innerHTML = '🚩 Player two wins dude!';
  } else {
    document.querySelector('h1').innerHTML = "It's a draw! Let's play again";
  }
};
number_One_wins();
