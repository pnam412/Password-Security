// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = 8;
var lowercase = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
var uppercase = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,S,T,U,V,W,X,Y,Z";
var numbers = "0,1,2,3,4,5,6,7,8,9,";
var symbols = "!,@,#,$,%,&,*";

function generatePassword() {
window.prompt()
for (i = 0; i < password.length; i++) {
  var randomPassword = arr[Math.floor(Math.random() * password.length)];
  document.write(randomPassword);
}

if (passwordLength > 8 || passwordLength < 128) {

  passwordText.value = password;
}


return 

// Add event listener to generate button

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);

