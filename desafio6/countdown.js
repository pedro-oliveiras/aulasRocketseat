// Set the date we're counting down to
var countDownDate = new Date("Oct 10, 2022 10:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);    
  // Output the result in an element with id="demo"    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("day").innerHTML = 00;
    document.getElementById("hour").innerHTML = 00;
    document.getElementById("minute").innerHTML = 00;
    document.getElementById("second").innerHTML = 00;
  }
  else {
    document.getElementById("day").innerHTML = days
    document.getElementById("hour").innerHTML = hours
    document.getElementById("minute").innerHTML = minutes
    document.getElementById("second").innerHTML = seconds
  }  

}, 1000);


var botao = document.getElementById('subscribe');
var closeModal = document.getElementById('close');

botao.addEventListener('click', function() {
    var modal = document.getElementById('modal');
    //modal.removeAttribute('hidden');
    modal.style.display = 'flex'
})

closeModal.addEventListener('click', function() {
    var modal = document.getElementById('modal');
    //modal.setAttribute('hidden', true);
    modal.style.display = 'none'
})