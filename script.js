// SMALL COUNTDOWN TIMER //
// Set the date we're counting down to
var countDownDate = new Date("Jul 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for months, days, hours, minutes, and seconds
  var months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30.44)); // approximate average days in a month
  var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in elements with class="countdown-text"
  document.getElementById("months-number").innerHTML = months;
  document.getElementById("months-unit").innerHTML = "mois";
  document.getElementById("days-number").innerHTML = days;
  document.getElementById("days-unit").innerHTML = "jours";
  document.getElementById("hours-number").innerHTML = hours;
  document.getElementById("hours-unit").innerHTML = "heures";
  document.getElementById("minutes-number").innerHTML = minutes;
  document.getElementById("minutes-unit").innerHTML = "minutes";
  document.getElementById("seconds-number").innerHTML = seconds;
  document.getElementById("seconds-unit").innerHTML = "secondes";

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("months-number").innerHTML = "0";
    document.getElementById("days-number").innerHTML = "0";
    document.getElementById("hours-number").innerHTML = "0";
    document.getElementById("minutes-number").innerHTML = "0";
    document.getElementById("seconds-number").innerHTML = "0";
    document.getElementById("months-unit").innerHTML = "";
    document.getElementById("days-unit").innerHTML = "";
    document.getElementById("hours-unit").innerHTML = "";
    document.getElementById("minutes-unit").innerHTML = "";
    document.getElementById("seconds-unit").innerHTML = "";
  }

  // Add classes to the generated HTML elements
  document.getElementById("months-number").classList.add("number");
  document.getElementById("months-unit").classList.add("unit");

  document.getElementById("days-number").classList.add("number");
  document.getElementById("days-unit").classList.add("unit");

  document.getElementById("hours-number").classList.add("number");
  document.getElementById("hours-unit").classList.add("unit");

  document.getElementById("minutes-number").classList.add("number");
  document.getElementById("minutes-unit").classList.add("unit");

  document.getElementById("seconds-number").classList.add("number");
  document.getElementById("seconds-unit").classList.add("unit");

}, 1000);



// BIG COUNTDOWN TIMER //
// Set the date we're counting down to
var countDownDate = new Date("Jul 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for months, days, hours, minutes, and seconds
  var months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30.44)); // approximate average days in a month
  var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in elements with class="countdown-text"
  document.getElementById("months-number-big").innerHTML = months;
  document.getElementById("months-unit-big").innerHTML = "mois";
  document.getElementById("days-number-big").innerHTML = days;
  document.getElementById("days-unit-big").innerHTML = "jours";
  document.getElementById("hours-number-big").innerHTML = hours;
  document.getElementById("hours-unit-big").innerHTML = "heures";
  document.getElementById("minutes-number-big").innerHTML = minutes;
  document.getElementById("minutes-unit-big").innerHTML = "minutes";
  document.getElementById("seconds-number-big").innerHTML = seconds;
  document.getElementById("seconds-unit-big").innerHTML = "secondes";

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("months-number-big").innerHTML = "0";
    document.getElementById("days-number-big").innerHTML = "0";
    document.getElementById("hours-number-big").innerHTML = "0";
    document.getElementById("minutes-number-big").innerHTML = "0";
    document.getElementById("seconds-number-big").innerHTML = "0";
    document.getElementById("months-unit-big").innerHTML = "";
    document.getElementById("days-unit-big").innerHTML = "";
    document.getElementById("hours-unit-big").innerHTML = "";
    document.getElementById("minutes-unit-big").innerHTML = "";
    document.getElementById("seconds-unit-big").innerHTML = "";
  }

  // Add classes to the generated HTML elements
  document.getElementById("months-number-big").classList.add("number-big");
  document.getElementById("months-unit-big").classList.add("unit-big");

  document.getElementById("days-number-big").classList.add("number-big");
  document.getElementById("days-unit-big").classList.add("unit-big");

  document.getElementById("hours-number-big").classList.add("number-big");
  document.getElementById("hours-unit-big").classList.add("unit-big");

  document.getElementById("minutes-number-big").classList.add("number-big");
  document.getElementById("minutes-unit-big").classList.add("unit-big");

  document.getElementById("seconds-number-big").classList.add("number-big");
  document.getElementById("seconds-unit-big").classList.add("unit-big");

}, 1000);