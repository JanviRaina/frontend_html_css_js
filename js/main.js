// console.log("I study in",2,"year")
// console.log("5*5 is",5*5)
// console.warn("This is a warning")
// console.error("Error 404")
// alert("This is how you put an alert")
// document.write("See where I appear")

// Function :

// function sum(a,b)
// {
//     return a+b;
// }

// s=sum(2,3);
// console.log(s);

// var num1=4
// var num2=3
// console.log(num1-num2)

// var str1="Janvi"
// var str2="Raina"
// console.log(str1+" "+str2)

// var food=
// {
//     breakfast:"jam",
//     lunch:"roti",
//     dinner:"sabzi"
// }

// console.log(food);

// this will show undefined
// var u
// console.log(u);

// this shows nulls
// var n=null
// console.log(n)

// Array

// var arr=["colgate",420,"basket"]
// console.log(arr)

// IF ELSE

// age=90
// if(age<17)
// {
//     console.log("You can't drive coz you are too small")
// }
// else if(age<90)
// {
//     console.log("You can drive")
// }
// else{
//     console.log("You can't drive,you are old")
// }

// FOR,WHILE,DO WHILE

// var arr=[1,2,3,4,5]
// console.log(arr)
// for(var i=0;i<arr.length;i++)
//     console.log(arr[i])

// Another method to access array elements :

// arr.forEach(function(element)
// {
// console.log(element);
// })

// let j=3;
// we cant change value of constant variable.
// const a=0;
// a++;
// console.log(a);

// let i=0;
// while(i<arr.length)
// {
//     if(i==2)
//         continue;
//     if(i==3)
//         break;
//     console.log(arr[i]*2);
//     i++;
// }

// Array Functions :

// var arr=[1,2,3,4,5]
// console.log(arr.length)
// arr.pop()
// arr.push("jen")
// arr.shift()
// console.log(arr)
// let len=arr.unshift("jen")
// console.log(len)
// console.log(arr);
// console.log(arr.toString())
// console.log(arr.sort())

// mystr="I have done homework.Have you done?"
// console.log(mystr.length)
// console.log(mystr.indexOf("done"))
// console.log(mystr.lastIndexOf("done"))
// console.log(mystr.slice(0,9))
// mystr=mystr.replace("have","haven't")
// console.log(mystr)

// Date and Time

// let date=new Date()
// console.log(date)

// document

/*
Console Statements in Inspect :
document
document.location
document.getElementById("click").click()
document.getElementById("click").style.border="1px solid green"

document.title
document.URL
document.links
document.scripts
document.images
document.domain
*/

// DOM MANIPULATION

let elem=document.getElementById("click")
// console.log(elem)
let elemClass=document.getElementsByClassName("container")
// console.log(elemClass)
elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-success")
// console.log(elem.innerHTML)
// console.log(elem.innerText)
// console.log(elemClass[0].innerHTML)
// console.log(elemClass[0].innerText)

// tn=document.getElementsByTagName('div')
// console.log(tn)
// createdElement=document.createElement('p');
// createdElement.innerText="This is created para"
// tn[0].appendChild(createdElement)
// createdElement2=document.createElement('b');
// createdElement2.innerText="This is bold text"
// tn[0].replaceChild(createdElement2,createdElement)

// removeChild(element)

// sel=document.querySelector('.container')
// console.log(sel)
// sel=document.querySelectorAll('.container')
// console.log(sel)

// Events :

// One way is :

/*
in html :
<button id="click" onclick="clicked()"> </button>

other methods :
mouse-hover
mouse out

in js :
function clicked()
{
    console.log('the button was clicked')
}
*/

// window.onload=function()
// {
//     console.log('the button was loadedd') 
// }

// firstContainer.addEventListener('click',function()
// {
//     document.querySelectorAll('.container')[1].innerHTML="<b> I changed the html</b>"
//     console.log("Clicked on container")
// })

// firstContainer.addEventListener('mouseover',function()
// {
//     console.log("Mouse on container")
// })

// firstContainer.addEventListener('mouseout',function()
// {
//     console.log("Mouse out of container")
// })

// let prevHTML=document.querySelectorAll('.container')[1].innerHTML;

// firstContainer.addEventListener('mouseup',function()
// {   
//     // // when we stop holding mouse
//     document.querySelectorAll('.container')[1].innerHTML=prevHTML;
//     console.log("Mouse up of container")
// })

// firstContainer.addEventListener('mousedown',function()
// {
//     // // when we press mouse 
//     document.querySelectorAll('.container')[1].innerHTML="<b> We have prev </b>"
//     console.log("Mouse down of container")
// })

// Arrow Functions 

// function multi(a,b)
// {
//     return a*b;
// }

// multi= (a,b) =>
// {
//     return a*b;
// }

// Set Timeout and set intervals

// for scheduling

// keeplog =() =>
// {
//     document.querySelectorAll('.container')[1].innerHTML="<b> Set Interval Fired </b>"
//     console.log("I am your log");
// }

// // 2 second
// setTimeout(keeplog,2000)

// clr=setInterval(keeplog,2000);
// //  Use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/settimeout

// LOCAL STORAGE AND SESSION STORAGE
// For saving data in user's computer as string

// localStorage.setItem('name','jen')
// localStorage.getItem('name')
// localStorage.clear()
// localStorage.removeItem('name')

// JSON

// used for data exchange by converting JSON into String and transport

obj={name:"janvi",length:5}
jso=JSON.stringify(obj);
// gets converted into JSON string
console.log(jso)
// typeof(obj)
// if sth gets converted into string,its very easy to export it
// in JSON only double quotes
// parsed=JSON.parse('{"name":"janvi","length":5}')
// console.log(parsed)

// Javascript Versions :

// ECMAScript

// template literals or bakticsc

// a=34
// console.log(`The number is ${a}`)