var a,b;
a=Math.floor(Math.random()*6)+1;
b=Math.floor(Math.random()*6)+1;
var randomImage1 = "images/dice" + a + ".png";
var randomImage2 = "images/dice" + b + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImage1);
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);
if(a>b){
    document.querySelector("h1").innerHTML="Player1 Wins";
}
else if(a<b){
    document.querySelector("h1").innerHTML="Player2 Wins";
}
else {
    document.querySelector("h1").innerHTML="Draw";
}

