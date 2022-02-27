let count10=0
document.querySelectorAll(".smallreal>span")[0].addEventListener("click",()=>{
        count10++
        if(count10%2==0)
        {
                         
            document.querySelectorAll(".smallreal~div")[0].style.display="block"
            document.querySelectorAll(".smallreal>span")[0].innerHTML="--"
                         
        }
        else{
            document.querySelectorAll(".smallreal~div")[0].style.display="none"
                         document.querySelectorAll(".smallreal>span")[0].innerHTML="+"

        }
   })

let count11=0
document.querySelectorAll(".smallmain>div:nth-child(2)")[0].addEventListener("click",()=>{
  count11++
if(count11%2==0)
{
  document.getElementsByClassName("smalllist")[0].style.display="none"
  document.querySelectorAll(".smallmain>div:nth-child(2)")[0].innerHTML="+"
}
 else{

    document.getElementsByClassName("smalllist")[0].style.display="block"
    document.querySelectorAll(".smallmain>div:nth-child(2)")[0].innerHTML="--"


 }
})


let count12=0
document.querySelectorAll(".smallmain>div:nth-child(2)")[1].addEventListener("click",()=>{
  count12++
if(count12%2==0)
{
  document.getElementsByClassName("smalllist")[1].style.display="none"
  document.querySelectorAll(".smallmain>div:nth-child(2)")[1].innerHTML="+"
}
 else{

    document.getElementsByClassName("smalllist")[1].style.display="block"
    document.querySelectorAll(".smallmain>div:nth-child(2)")[1].innerHTML="--"


 }
})




let count13=0
document.querySelectorAll(".smallmain>div:nth-child(2)")[2].addEventListener("click",()=>{
  count13++
if(count13%2==0)
{
  document.getElementsByClassName("smalllist")[2].style.display="none"
  document.querySelectorAll(".smallmain>div:nth-child(2)")[2].innerHTML="+"
}
 else{

    document.getElementsByClassName("smalllist")[2].style.display="block"
    document.querySelectorAll(".smallmain>div:nth-child(2)")[2].innerHTML="--"


 }
})




let count14=0
document.querySelectorAll(".smallmain>div:nth-child(2)")[3].addEventListener("click",()=>{
  count14++
if(count14%2==0)
{
  document.getElementsByClassName("smalllist")[3].style.display="none"
  document.querySelectorAll(".smallmain>div:nth-child(2)")[3].innerHTML="+"
}
 else{

    document.getElementsByClassName("smalllist")[3].style.display="block"
    document.querySelectorAll(".smallmain>div:nth-child(2)")[3].innerHTML="--"


 }
})

// womennnn



let countwomen=0
document.querySelectorAll(".smallreal>span")[1].addEventListener("click",()=>{
        countwomen++
        if(countwomen%2==0)
        {
                         document.getElementsByClassName("outofname")[1].style.display="block"
                         document.querySelectorAll(".smallreal>span")[1].innerHTML="--"
        }
        else{
            document.getElementsByClassName("outofname")[1].style.display="none"
                         document.querySelectorAll(".smallreal>span")[1].innerHTML="+"

        }
   })

// women1

let countwomen1=0
document.querySelectorAll("#xwomen .smallmain>div:nth-child(2)")[0].addEventListener("click",()=>{
  countwomen1++
if(countwomen1%2==0)
{
  document.querySelectorAll("#xwomen .smalllist")[0].style.display="none"
  document.querySelectorAll("#xwomen .smallmain>div:nth-child(2)")[0].innerHTML="+"
}
 else{

    document.querySelectorAll("#xwomen .smalllist")[0].style.display="block"
    document.querySelectorAll("#xwomen .smallmain>div:nth-child(2)")[0].innerHTML="--"


 }
})

let countwomen2=0

document.querySelectorAll("#xwomen .smallmain>div:nth-child(2)")[1].addEventListener("click",()=>{
  countwomen2++
if(countwomen2%2==0)
{
  document.querySelectorAll("#xwomen .smalllist")[1].style.display="none"
  document.querySelectorAll("#xwomen .smallmain>div:nth-child(2)")[1].innerHTML="+"
}
 else{

    document.querySelectorAll("#xwomen .smalllist")[1].style.display="block"
    document.querySelectorAll("#xwomen .smallmain>div:nth-child(2)")[1].innerHTML="--"


 }
})

let countwomen3=0

document.querySelectorAll("#xwomen .smallmain>div:nth-child(2)")[2].addEventListener("click",()=>{
  countwomen3++
if(countwomen3%2==0)
{
  document.querySelectorAll("#xwomen .smalllist")[2].style.display="none"
  document.querySelectorAll("#xwomen .smallmain>div:nth-child(2)")[2].innerHTML="+"
}
 else{

    document.querySelectorAll("#xwomen .smalllist")[2].style.display="block"
    document.querySelectorAll("#xwomen .smallmain>div:nth-child(2)")[2].innerHTML="--"


 }
})

let countwomen4=0

document.querySelectorAll("#xwomen .smallmain>div:nth-child(2)")[3].addEventListener("click",()=>{
  countwomen4++
if(countwomen4%2==0)
{
  document.querySelectorAll("#xwomen .smalllist")[3].style.display="none"
  document.querySelectorAll("#xwomen .smallmain>div:nth-child(2)")[3].innerHTML="+"
}
 else{

    document.querySelectorAll("#xwomen .smalllist")[3].style.display="block"
    document.querySelectorAll("#xwomen .smallmain>div:nth-child(2)")[3].innerHTML="--"


 }
})
let countarrivals=0
document.querySelectorAll("#xnewarrivals .smallreal>span")[0].addEventListener("click",()=>{
countarrivals++
if(countarrivals%2==0)
{
    document.querySelectorAll("#xnewarrivals>div:nth-child(2)")[0].style.display="block"
document.querySelectorAll("#xnewarrivals .smallreal>span")[0].innerHTML="--"
}
else{
    document.querySelectorAll("#xnewarrivals>div:nth-child(2)")[0].style.display="none"
document.querySelectorAll("#xnewarrivals .smallreal>span")[0].innerHTML="+"
}


})


let countcollection=0
document.querySelectorAll("#xcollections .smallreal>span")[0].addEventListener("click",()=>{
countcollection++
if(countcollection%2==0)
{
    document.querySelectorAll("#xcollections>div:nth-child(2)")[0].style.display="block"
document.querySelectorAll("#xcollections .smallreal>span")[0].innerHTML="--"
}
else{
    document.querySelectorAll("#xcollections>div:nth-child(2)")[0].style.display="none"
document.querySelectorAll("#xcollections .smallreal>span")[0].innerHTML="+"
}


})



let countsale=0
document.querySelectorAll("#xsale .smallreal>span")[0].addEventListener("click",()=>{
countsale++
if(countsale%2==0)
{
    document.querySelectorAll("#xsale>div:nth-child(2)")[0].style.display="block"
document.querySelectorAll("#xsale .smallreal>span")[0].innerHTML="--"
}
else{
    document.querySelectorAll("#xsale>div:nth-child(2)")[0].style.display="none"
document.querySelectorAll("#xsale .smallreal>span")[0].innerHTML="+"
}


})
let iconclick=0
document.getElementById("xthreeicon").addEventListener("click",()=>{
iconclick++
 if(iconclick%2==1)
 {
    document.getElementById("small_sidebar").style.backgroundColor="#333"

    document.getElementById("small_sidebar").style.visibility="visible"
 document.getElementById("small_sidebar").style.width="160%"


 }
 else{
      document.getElementById("small_sidebar").style.width="0"
    document.getElementById("small_sidebar").style.visibility="collapse"
    document.getElementById("small_sidebar").style.backgroundColor="white"



 }
 


})

document.getElementById("xsearch").addEventListener("click",()=>{

document.getElementById("Small_header").innerHTML=`<div><input type="text"></div>
<div id="xcancel">cancel</div>`

document.getElementById("xcancel").addEventListener("click",()=>{
document.getElementById("Small_header").innerHTML=` <div id="xthreeicon"><i class="fa fa-bars" aria-hidden="true"></i></div>
    <div class="logo-image"><a href="./index.html"><img src="https://www.levi.in/on/demandware.static/-/Sites-LeviIN-Library/en_IN/dw96cbad45/images/homepage/logo.jpg" alt=""></a></div>
    <div>
        <span id="xsearch"><i class="fas fa-search"></i></span>
        <span><i class="fas fa-shopping-cart"></i></span>
    </div> `
})


})


