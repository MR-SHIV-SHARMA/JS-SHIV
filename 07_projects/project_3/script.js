const clock = document.getElementById("clock"); //clock ko slect kiya hai
setInterval(function () {
  //bar bar chlane ke liy setInterval ka use kiya hai
  let date = new Date(); //new Date ko liya
  clock.innerHTML = date.toLocaleTimeString(); //web page per display krva diya
}, 1000); //1000 yani ke 1 secound
