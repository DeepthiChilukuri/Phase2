function submitData(){
  var career=document.querySelector("#career").value;

  var name=document.querySelector("#name").value;
  var fathername=document.querySelector("#fathername").value;
  var mobileno=document.querySelector("#mobileno").value;
  var email=document.querySelector("#email").value;

  var ginstitute=document.querySelector("#ginstitute").value;
  var gbranch=document.querySelector("#gbranch").value;
  var gyear=document.querySelector("#gyear").value;
  var percentage=document.querySelector("#percentage").value;

  var iinstitute=document.querySelector("#iinstitute").value;
  var ibranch=document.querySelector("#ibranch").value;
  var iyear=document.querySelector("#iyear").value;
  var ipercentage=document.querySelector("#ipercentage").value;

  var sinstitute=document.querySelector("#sinstitute").value;
  var sboard=document.querySelector("#sboard").value;
  var syear=document.querySelector("#syear").value;
  var spercentage=document.querySelector("#spercentage").value;

  var skills=document.querySelector("#skills").value;
  //indexedDB Implementation
var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB ;
if(!idb in window)
{
  console.log("indexedDB is not supported");
}
//indexedDB creation
var request;
var store;
var open=idb.open("storeData",1);
console.log("IndexedDb is created");
open.onupgradeneeded=function(e){
request=e.target.result;
store=request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
  console.log("store is created");
}
open.onerror=function(error){
  console.log("Error is occured");
}
open.onsuccess=function(e){
  request=e.target.result;
  var transaction=request.transaction("formdata","readwrite");
  store=transaction.objectStore("formdata");
  store.put({
    career:career,
    name:name,
    fathername:fathername,
    mobileno:mobileno,
    email:email,
    education:[
      {institute:ginstitute,
    branch:gbranch,
    year:gyear,
    percentage:percentage
  },
    {
      institute:iinstitute,
    branch:ibranch,
    year:iyear,
    percentage:ipercentage
  },
  {  institute:sinstitute,
    branch:sboard,
    year:syear,
    percentage:spercentage
  }
],
    skills:skills
  });
}
window.open("index.html");
}
