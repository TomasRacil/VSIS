console.log("Hello world");
var number = 5;
var myName= "Tomas"; //whole scope of program
myName="Tom";
let ourName="test" //local variable
const pi = 3.14; //shouldnt be change in whole code ; decimals
var a; //declaring variable
var b =2; //declaring annd assigning
a=7; //assigning variable
b=a; //value of a to b
console.log(b)
var CaseSensitive; //javascript is case sensitive 
var casesensitive; //not same

console.log(a-b);
console.log(a+b);
console.log(a*b);
console.log(a/b);
a++;
console.log(a);
b--;
console.log(b);
console.log(b*pi); // multiplication of decimal and integer is supported
console.log(a%b);
a+=12;
console.log(a);
b-=9;
console.log(b);
a*=2;
console.log(a);
b/=3;
console.log(b);

var firstName = "Tomas";
var lastName="Racil";
var stringInString="Quote: 'there goes a quote'";
console.log(stringInString);
stringInString="Quote \"there goes a quote\"";
console.log(stringInString);

var stringExample="First line \n\t\\Second line\n Third line";
console.log(stringExample);

console.log(firstName+" "+lastName);

var myName="Tomas";
myName+=" Racil";
console.log(myName);

console.log(myName.length);
console.log(myName[0]);
console.log(myName[myName.length-1]);

function wordBlanks (myNoun,myAdjective,myVerb,myAdverb){
    var result= "";
    result+= "The "+myAdjective+" "+myNoun+" "+myVerb+" to the store" + " "+myAdverb;
    return result;
}
console.log(wordBlanks("dog","big","ran","quickly"));

var arrayExample = ["Tomas",24,["nested array","example"]];
var numbers = [50,60,70];
console.log(arrayExample[2]);
numbers[1]=48;
console.log(numbers);
numbers.push([80,90]);
console.log(numbers);
console.log(numbers.pop());
console.log(numbers);
console.log(numbers.shift());
console.log(numbers);
numbers.unshift(50);
console.log(numbers);
var shoppingList = [["cereal",3],["milk",4],["egg",12]]

