const digits = ["1","2","3","4","5","6","7","8","9","0"];
var otp = "";
for(let i = 1;i <= 5;i++){
    otp += digits[Math.floor(Math.random()*9)];
}
console.log(otp);