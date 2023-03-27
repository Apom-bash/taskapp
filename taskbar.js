var date = new Date();
var year = date.getFullYear();
document.getElementById("year").innerHTML = year;
//document.getElementById("topbtn").addEventListener("mouseover", function(){
//   alert("hover action")
//})
//document.getElementById("topbtn").onclick = function(){
//  alert("hover action")
//}
//function checkclick() {
 // alert("hover action");
//}





 //function handleClick(){
  // var textpattern = /[^abc][\d]/ //"/\d/"to search for digit expression/abc/ for letter expression d+means atleast; d*=0 or more;d?=optional;
  //var textpattern= /\d{5,9}/
   document.getElementById("taskBtn").onclick= function(){
      
  var text = document.getElementById("story").value;

  var date = document.getElementById("date").value;

  if(text === "" && date === ""){
     alert("input field cant be empty")}
 /* else if(text.match(textpattern)){
     alert("ok")
  }*/
  else{
     var div = document.createElement("div");
     div.setAttribute("class","taskind");
     
     var i = document.createElement("i");
     i.innerHTML =text;

     var small = document.createElement("small")
     small.innerHTML =date

     div.appendChild(i);
     div.appendChild(small)

     document.getElementById("taskArea").appendChild(div)

  }
}
   

let btnClick = true
function closeForm(){
   
   if(btnClick === true){
    document.getElementById("form").style.display = "none";
    document.getElementById("topbtn").innerHTML = "open";
    document.getElementById("topbtn").style.backgroundColor= "red";
    

     btnClick = false;
   }
   
   else{
      document.getElementById("form").style.display= "block"
      document.getElementById("topbtn").innerHTML = "close"
      document.getElementById("topbtn").style.backgroundColor= "rgb(4, 136, 4)";
    
      btnClick= true;
   }
   
    }

   let checkToggle =false
   document.getElementById("clrTask").onclick = function(){
      if(checkToggle===false){
         document.getElementById("taskArea").style.display="none";
         document.getElementById("clrTask").innerHTML = "unclear";

         checkToggle= true;
      }
   else{
      document.getElementById("taskArea").style.display="block"
      document.getElementById("clrTask").innerHTML = "clear"

      checkToggle=false

   }
   }

  //document.getElementById("topbtn").onclick= function(){
     // document.getElementById("form").style.display = "none";

   //}
   /*document.getElementById("topbtn").addEventListener("click", function()
   {alert("click")})*/

   






