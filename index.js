///  1  ///
/*var number= +prompt("enter number");
console.log(number)*/

///  2  ///
/*var num = +prompt("enter number");
if (num % 3 == 0 && num % 4 == 0) {
  console.log("yes");
} else {
  console.log("no");
}*/

///  3  ///
/*var x = +prompt("enter two numbers")
var y = +prompt("enter two numbers")
if (x>y){
    console.log(x)
}
else{
    console.log(y)
}*/

///  4  ///
/*var x = +prompt("enter numbers")
if (x<0){
    console.log("negative")
}
else{
    console.log("positive")
}*/

///  5  ///
/*var x = +prompt("enter number") //7 8 5
var y = +prompt("enter number")
var z = +prompt("enter number")
if(x>y && x>z){
   if(y<x && y<z){
    console.log("max:"+x,"min:"+y)
   }
   else{
    console.log("max:"+x,"min:"+z)
   }
}
else if(y>x && y>z){
    if(x<y && x<z){
        console.log("max:"+y,"min:"+x)
       }
       else{
        console.log("max:"+y,"min:"+z)
       }
}
else if(z>x && z>y){
    if(x<y && x<z){
        console.log("max:"+z,"min:"+x)
       }
       else{
        console.log("max:"+z,"min:"+y)
       }
}*/

///  6  ///
/*var x = +prompt("enter number")
if(x%2){
console.log("even")
}
else{
    console.log("odd")
}*/

///  8  ///
/*var x= prompt("enter character")
switch (x){
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("vowel")
        break;
        default:
            console.log("consonant")
}*/

///  9  ///
/*var x = +prompt("enter number")
for (var i = 1; i<=x; i++){
    console.log(i)
}*/

///  10  ///
/*var number = +prompt("enter number")
for (var i = 0; i<=12; i++){ 
    console.log(i*number);
}*/

///  11  ///
/*var number = +prompt("enter number")
for(var i=0; i<=number; i++){
    if(i%2==0){
        console.log(i);
    }
}*/

///  12  ///
/*var x=+prompt("enter first number")
var y=+prompt("enter second number")
x**=y;
console.log(x);*/

///  12  ///  
/*var a=+prompt("enter 1st number")
var b=+prompt("enter 2nd number")
var c=+prompt("enter 3rd number")    
var d=+prompt("enter 4th number")
var e=+prompt("enter 5th number")
var sum;
sum=a+b+c+d+e; //408
console.log("Total marks= "+sum);
var aveg=sum/5;  //81.6
console.log("Average Marks= "+aveg);
 sum= (sum/500)*100  //81.6                         
console.log("Percentage= "+aveg);*/

///  13  ///                               
/*var month=+prompt("Enter Month Number")
if (month==1){
console.log("Days in Month: 31")
}
else if (month==2){
    console.log("Days in Month: 28")
}
else if (month==3){
    console.log("Days in Month: 31")
}
else if (month==4){
    console.log("Days in Month: 30")
}
else if (month==5){
    console.log("Days in Month: 31")
}
else if (month==6){
    console.log("Days in Month: 30")
}
else if (month==7){
    console.log("Days in Month: 31")
}
else if (month==8){
    console.log("Days in Month: 31")
}
else if (month==9){
    console.log("Days in Month: 30")
}
else if (month==10){
    console.log("Days in Month: 31")
}
else if (month==11){
    console.log("Days in Month: 30")
}
else if (month==12){
    console.log("Days in Month: 31")
}*/

///  14  /// 
/*var x=+prompt("Enter physics")
var y=+prompt("Enter chemistry")
var z=+prompt("Enter biology")
var e=+prompt("Enter Mathematics")
var f=+prompt("Enter computer")
var result = ((x+y+z+e+f)/500)*100
if(result>=90){
    console.log("Presentage>= 90%: Grade A")
}
else if(result>=80){
    console.log("Presentage>= 80%: Grade B")
}
else if(result>=70){
    console.log("Presentage>= 70%: Grade C")
}
else if(result>=60){
    console.log("Presentage>= 60%: Grade D")
}
else if(result>=40){
    console.log("Presentage>= 40%: Grade E")
}
else if(result<40){
    console.log("Presentage>= 40%: Grade F")
}*/

           ///////   Using switch case    ///////
///  15  ///
/*var month=+prompt("Enter Month Number")
switch(month){
    case 1:
        console.log("Days in Month: 31")
        break;
    case 2:
        console.log("Days in Month: 28")
        break;
    case 3:
        console.log("Days in Month: 31")
        break;
    case 4:
        console.log("Days in Month: 30")
        break;
    case 5:
        console.log("Days in Month: 31")
        break;
    case 6:
        console.log("Days in Month: 30")
        break;
    case 7:
        console.log("Days in Month: 31")
        break;
    case 8:
        console.log("Days in Month: 31")
        break;
    case 9:
        console.log("Days in Month: 30")
        break;
    case 10:
        console.log("Days in Month: 31")
        break;
    case 11:
        console.log("Days in Month: 30")
        break;
    case 12:
        console.log("Days in Month: 31")
        break;
}*/

///  16  ///
/*var alphabet= prompt("Enter one charchter Alpahbet")
switch(alphabet){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("Vowel")
        break;
        default:
            console.log("consonant");
}*/

///  17  ///
/*var num1=+prompt("enter 1st number")
var num2=+prompt("enter 2nd number")
switch(true){
    case (num1>num2):
        console.log("num1 is max= "+ num1)
        break;
        default:
            console.log("num2 is max= "+num2)
}*/

///  18  ///
/*var number=+prompt("enter number")
switch(true){
    case (number%2==0):
        console.log("a number is Odd")
        break;
        default:
            console.log("a number is Even")
}*/

///  19  ///
/*var number=+prompt("enter number")
switch(true){
    case(number>0):
        console.log("Positve")
        break;
        case(number==0):
        console.log("Zero")
        break;
        case(number<0):
        console.log("Negative")
        break;
}*/

///  20  ///
/*var operator=prompt("enter operator(+,-,*,/)")
var num1=+prompt("enter 1st number")
var num2=+prompt("enter 2nd number")
switch(operator){
    case"+":
console.log(num1+num2)
    break;
    case"-":
    console.log(num1-num2)
    break;
    case"*":
    console.log(num1*num2)
    break;
    case"/":
    console.log(num1/num2)
    break;
}*/