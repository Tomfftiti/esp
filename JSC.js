const char jscript[] PROGMEM={"
setInterval(\"temp1()\",500);
function temp1(){
 var some =\"/temp1\";
$.ajax({url: some, dataType: \"text\",
success: function(response){$(\"#temp\").html(\"temp=\"+response+\"C\");
},timeout: 1000})} 

setInterval(\"workshow()\",500);
function workshow(){
 var some =\"/worknew\";
$.ajax({url: some, dataType: \"text\",
success: function(response){$(\"#work\").html(response);},timeout: 1000})}

setInterval(\"workshow2()\",600);
function workshow2(){
 var some =\"/worknew2\"; $.ajax({url: some, dataType: \"text\",
 success: function(response){$(\"#work2\").html(response);},timeout: 1000})} 

function dooron() {
 var someUrl = \"/don\";
  $.ajax({ url: someUrl,timeout: 1000})}

function dooroff()
 { var someUrl = \"/dof\"; $.ajax({ url: someUrl, timeout: 1000}) }
"};
