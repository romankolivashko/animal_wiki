
$(document).ready(function() {
  const animal = prompt("Lion, Zebra or Giraffe?");

  if (animal === "lion") {
    $('#lion_text').show();
  } else if (animal === "zebra" ) {
    $('#zebra_text').show();
  } else if (animal === "giraffe") {
    $('#giraffe_text').show();
  }
});
