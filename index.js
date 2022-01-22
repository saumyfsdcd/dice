var ra=Math.random();
ra=ra*6;
ra=Math.floor(ra)+1;
console.log(ra);

var score1=0,score2=0;

var imaged="dice" +ra+".png";

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", imaged);

var r2=Math.random();
r2=r2*6;
r2=Math.floor(r2)+1;
console.log(r2);

var imaged2="dice" +r2+".png";
var i2=document.querySelectorAll("img")[1];
i2.setAttribute("src", imaged2);

if(r2>ra){
    score2++;
}
else if(r2<ra){
    score1++;
}
else{
    score1++;
    score2++;
}

if(r2>ra){
    var ans=document.getElementById("p");
    
    ans.textContent="Player 2 won the game!!";
}
else if(ra>r2){
    var ans=document.getElementById("p");
    ans.textContent="Player 1 won the game!!";
}
else{
    var ans=document.getElementById("p");
    ans.textContent="Nobody won the game"
}

var p1,p2;
p1=document.getElementById("para1");
p2=document.getElementById("para2");
p1.textContent="Score :"+score1;
p2.textContent="Score :"+score2;
