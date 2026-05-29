// fci Web practical content 

document.getElementById("title").innerText="why";

console.log("Hi") // print on console

var k="k";
var k="c";

let x=6;// using let to definition variable 
console.log("x : ",x);

const y=7;// we use const to define const var we cant change value  typeof(Number)

console.log(5+7); // print add operation
let z = "6"; // var String
console.log(x==z) // print true becouse compare just value not type (loose equality)

console.log(x===z) // print false becouse compare  value and type (strict equality)
console.log(x!=z) // print false becouse compare just value not type (loose equality)
console.log(x!==z) // print true becouse compare  value and type (strict equality)


if(x>y){
    console.log("x>y");
}
else if(x<y){
    console.log("x<y");
}
else {
    console.log("x=y");
}


for (let i=0 ;i<10;i++){
    console.log(i);
}


// function 


function add(x,y){return x+y;} // dec function -> function funname(par){body of fun;}

function hello(name){
    return "hello "+ name;
}


// Dom Document  object model  

let maintitle = document.getElementsByClassName("title"); // access element by id and store int var
//maintitle.innerText="h1 using js"; // replace inner text
maintitle.innerHTML="<p>h1 using lllljs</p>";// replace html\
console.log(maintitle)


// event

let myButton=document.getElementById("Button");

//myButton.addEventListener("click",function(){alert("x")}); // alert print massage on window
//myButton.addEventListener("click",function(){maintitle.style.color="red;"}); // alert print massage on window
myButton.addEventListener("click", function(){

bim.src="../../HTML/exImgs/Screenshot From 2025-10-08 14-47-01.png"
});

/*myButton.addEventListener("input", function(){

bim.src="../../HTML/exImgs/Screenshot From 2025-10-08 14-47-01.png"
});*/


function turnon(){
bim.src="../../HTML/exImgs/Screenshot From 2025-10-08 14-47-01.png";
}
/*myButton.addEventListener("input", turnon){

});*/


// section 2

let arr =[1,2,5,8];

arr.push(5);// add element at end

arr.pop() // remove last element

console.log(arr[1]);// print by index


for(let i=0;i<arr.length;i++){
    console.log(arr[i]);// print by index

}


// Bom Browser object model

//prompt("Whats Your Name ?"); // take massage from browser
alert("hi");
//confirm("LLL"); // return bool type yes or no aas true or false

// DOM

/*
let u=document.getElementsByClassName("");//select by calss name 
let u=document.getElementsByTagName("h2");//select by calss name 
let u=document.querySelector("#id");//select by calss name 
*/