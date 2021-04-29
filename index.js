var randomNum1=Math.floor(Math.random() * 6)+1;
var randomNum2=Math.floor(Math.random() * 6)+1;

var randomdiceimage1 ="dice"+randomNum1+".png";
var randomdiceimage2 ="dice"+randomNum2+".png";

var randomdicesrc1  ="images\\"+randomdiceimage1;
var randomdicesrc2  ="images\\"+randomdiceimage2;

document.querySelector('.img1').setAttribute('src', randomdicesrc1);
document.querySelector('.img2').setAttribute('src', randomdicesrc2);

if(randomNum1 < randomNum2){
  document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else if(randomNum1===randomNum2){
  document.querySelector("h1").innerHTML = "Roll Again :)";

}
else{
  document.querySelector("h1").innerHTML = "Player 1 wins!";
}
