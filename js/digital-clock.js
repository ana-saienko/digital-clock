setTime();

this.setInterval(function(){
  setTime();
},1000);

function setTime(){
  var date = new Date();
  var h = ''+date.getHours();
  var m = ''+date.getMinutes();
  var s = ''+date.getSeconds();
  
  if(h.length === 1){
    document.getElementById('h0').innerHTML = '0';
    document.getElementById('h1').innerHTML = h;
  }else{
    document.getElementById('h0').innerHTML = h.charAt(0);
    document.getElementById('h1').innerHTML = h.charAt(1);
  }
  if(m.length === 1){
    document.getElementById('m0').innerHTML = '0';
    document.getElementById('m1').innerHTML = m;
  }else{
    document.getElementById('m0').innerHTML = m.charAt(0);
    document.getElementById('m1').innerHTML = m.charAt(1);
  }
}

// --------------------------------------------------------------
function updateBg() {
  var now = new Date();
  var hours = now.getHours();
  var ft = now.toLocaleString("en-US", {
     hour: "numeric",
     minute: "numeric",
     hour12: true
  });
  var currentTimeZoneOffsetInHours = now.getTimezoneOffset() / 60;
  if (6 <= hours && hours < 10) {//Morning
     document.write('<body style="background-image: url(images/bg-day.jpg)">');
     var svgIcon = "#sun";
     var type = "Good Morning";
  }
  if (10 <= hours && hours < 16) {//Day
     document.write('<body style="background-image: url(images/bg-day.jpg)">');
     var svgIcon = "#sun";
     var type = "Good day";
  }
  if (16 <= hours && hours < 22) {//Evening
     document.write('<body style="background-image: url(images/bg-night.jpg)">');
     var svgIcon = "#moon";
     var type = "Good Evening";
  }
  if (22 <= hours && hours < 6) {//Night
     document.write('<body style="background-image: url(images/bg-night.jpg)">');
     var svgIcon = "#moon";
     var type = "Good night";
  }
  document.getElementById("main-clock__title").innerHTML = `<svg class="icon"><use xlink:href="sprite.svg${svgIcon}"></use></svg> ${type}, IT’S CURRENTLY`;
  
  document.getElementById("timezone").innerHTML = `UTC${currentTimeZoneOffsetInHours}`;
}

updateBg();



//CSS gradient backgrounds from https://uigradients.com
// https://write.corbpie.com/change-background-and-text-based-on-time-with-javascript/


// var x = new Date();
// var currentTimeZoneOffsetInHours = x.getTimezoneOffset() / 60;