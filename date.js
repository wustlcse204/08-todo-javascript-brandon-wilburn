var x = setInterval(function() {
  var date = new Date();
  var day = String(date.getDate()).padStart(2, '0');
  var month = String(date.getMonth()).padStart(2, '0');
  var year = date.getFullYear();
  var hour = String(date.getHours()).padStart(2, '0');
  var minutes = String(date.getMinutes()).padStart(2, '0');
  var seconds = String(date.getSeconds()).padStart(2, '0');
  var milli = String(date.getMilliseconds()).padStart(3, '00');

  var monthS="";
  if (month==0) {
    monthS="January";
    } else if (month==1) {
      monthS="February";
    } else if (month==2) {
      monthS="March";
    } else if (month==3) {
      monthS="April";
    } else if (month==4) {
      monthS="May";
    } else if (month==5) {
      monthS="June";
    } else if (month==6) {
      monthS="July";
    } else if (month==7) {
      monthS="August";
    } else if (month==8) {
      monthS="September";
    } else if (month==9) {
      monthS="October";
    } else if (month==10) {
      monthS="November";
    } else {
      monthS="December";
    }

  var hourR = hour;
  var am="AM"
  if (hour>12) {
    hourR = String(hour-12).padStart(2, '0');
    am = "PM";
  }

  today = day +" "+ monthS +" "+ year;
  time = hourR+":"+minutes+":"+seconds+":"+milli+" "+am;

  document.getElementById("date").innerHTML = today;
  document.getElementById("time").innerHTML = time;
}, 100)
