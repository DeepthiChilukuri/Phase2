var para;
var paravalue;
var query=window.location.search.substring(1).split("?");
for(var i in query){
  para=query[i].split("=");
  paravalue=parseInt(para[1]);
}
var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB ;
if(!idb in window)
{
  console.log("indexedDB is not supported");
}
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
  var info=store.get(paravalue);
  info.onsuccess=function(data){
    console.log(data);
    personalinfo(data.target.result);
  }
}
var left=document.querySelector(".left");
var right=document.querySelector(".right");
function personalinfo(pi){
  var image=document.createElement("img");
  image.src="images/add-user.svg";
  image.alt=pi.name;
  left.append(image);

var hh=document.createElement("h2");
hh.textContent=pi.name;
left.append(hh);
var hg=document.createElement("h2");
hg.textContent=pi.fathername;
 left.append(hg);
var hf=document.createElement("h2");
hf.textContent=pi.mobileno;
left.append(hf);
var he=document.createElement("h2");
he.textContent=pi.email;
left.append(he);
  var h7=document.createElement("h1");
  h7.textContent="Career";
  right.append(h7);
  var h8=document.createElement("hr");
  // h8.textContent="Education Details";
  right.append(h8);
  var h9=document.createElement("h2");
  h9.textContent=pi.career;
  right.append(h9);
  var h7=document.createElement("h1");
  h7.textContent="Education Details";
  right.append(h7);
  var hr=document.createElement("hr");
  right.append(hr);
  var table=document.createElement("table");
  table.border= "1";
  right.append(table);
  var tr1="<tr><th>Institute</th><th>Branch</th><th>Year Of Passing</th><th>Percentage</th></tr>";
  var tr2=" ";
  for(var i in pi.education)
  {
    tr2=tr2+"<tr><td>"+pi.education[i].institute+"</td><td>"+pi.education[i].branch+"</td><td>"+pi.education[i].year+"</td><td>"+pi.education[i].percentage+"</td></tr>"
  }
  table.innerHTML=tr1+tr2;
  right.append(table);
  var h1=document.createElement("h1");
  h1.textContent="Skills";
  right.append(h1);
  var hg=document.createElement("hr");
  right.append(hg);
   var hm=document.createElement("h2");
   hm.textContent=pi.skills;
   right.append(hm);
}
