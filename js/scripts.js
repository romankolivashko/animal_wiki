
$(document).ready(function() {
  let animal = prompt("Lion, Zebra or Giraffe?");
  animal = animal.toLocaleLowerCase();

  if (animal === "lion") {
    $('#lion_text').show();
  } else if (animal === "zebra" ) {
    $('#zebra_text').show();
  } else if (animal === "giraffe") {
    $('#giraffe_text').show();
  }
});
