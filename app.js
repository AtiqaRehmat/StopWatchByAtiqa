// var counter=0;
// var interval;

// function run(){
//     counter++;
//     document.write(counter+"<br>")
// }

// interval=setInterval(run,1000)


// function stop(){
//     clearInterval(interval)
// }
// setTimeout(stop,10000)






// var name;







// var hr=0;
// var min=0;
// var sec=0;
// var mili=0;


// var Hours=document.getElementById("hr");
// var Minutes=document.getElementById("min");
// var Seconds=document.getElementById("sec");
// var MiliSeconds=document.getElementById("mili");


// var interval;

// function timer()
// {
// mili++;
// MiliSeconds.innerHTML=mili;
// if(mili>=100)
// {
// sec++;
// Seconds.innerHTML=sec;
// mili=0;
// }
// else if(sec>=60)
// {
// min++;
// Minutes.innerHTML=min;
// sec=0;
// }
// else if(min>=60)
// {
//     hr++;
// Hours.innerHTML=hr;
// min=0;
// }
// }
// interval= setInterval(timer,10)

// var name;
// function GetName()
// {
// name=prompt("Enter name ");
// min=0;
// sec=0;
// mili=0;
// hr=0;
// Hours.innerHTML=hr;
// Minutes.innerHTML=min;
// Seconds.innerHTML=sec;
// MiliSeconds.innerHTML=mili;
// interval= setInterval(timer,10)
// }


// function start()
// {
//    GetName()
   


// }



// // var reply;

// function pause()
// {
//    //  prompt(name+" you stop the watch ");
//     clearInterval(interval);
// //    if(reply === "yes")
// //    {
// //        clearInterval(interval);
// //    }
// //    else
// //    {
// //        min=0;
// // sec=0;
// // mili=0;
// // hr=0;
// // Hours.innerHTML=hr;
// // Minutes.innerHTML=min;
// // Seconds.innerHTML=sec;
// // MiliSeconds.innerHTML=mili;
// // interval= setInterval(timer,10)
// //    }
    
// }







// var resetAns;
// function reset()
// {
//    resetAns=prompt(" you reset the watch");
//    if(resetAns === "yes")
//    {
// min=0;
// sec=0;
// mili=0;
// hr=0;
// Hours.innerHTML=hr;
// Minutes.innerHTML=min;
// Seconds.innerHTML=sec;
// MiliSeconds.innerHTML=mili;
// clearInterval(interval)
//    }
//    else
//    {
//     clearInterval(interval);  
//    }
// }









 




var min=0;
var sec=0;
var mili=0;
var Minutes=document.getElementById("min");
var Seconds=document.getElementById("sec");
var MiliSeconds=document.getElementById("mili");
var interval;

function timer()
{
mili++;
MiliSeconds.innerHTML=mili;
if(mili>=100)
{
sec++;
Seconds.innerHTML=sec;
mili=0;
}
else if(sec>=60)
{
min++;
Minutes.innerHTML=min;
sec=0;
}
}
interval= setInterval(timer,10)

var name;

function start()
{
interval= setInterval(timer,10)
name=prompt("Enter your name ");
}
function pause()
{
   
clearInterval(interval)
alert(name+" you stop the watch");
}
function reset()
{
   
min=0;
sec=0;
mili=0;
Minutes.innerHTML=min;
Seconds.innerHTML=sec;
MiliSeconds.innerHTML=mili;
clearInterval(interval)
}



