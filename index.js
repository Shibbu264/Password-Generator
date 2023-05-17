let kiki1=document.getElementById("kiki1")
let kiki2=document.getElementById("kiki2")
let bttn=document.getElementById("gnrt")


 function pswd() {
     
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password1 = "";
    var password2="";
 for (var i = 0; i <= passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * chars.length);
   password1 += chars.substring(randomNumber, randomNumber +1);}
   for (var i = 0; i <= passwordLength; i++) {
  var randomNumber1 = Math.floor(Math.random() * chars.length);
   password2 += chars.substring(randomNumber1, randomNumber1 +1);
  }
  kiki1.textContent=password1
  kiki2.textContent=password2
 }