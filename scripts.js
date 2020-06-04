$(document).ready(function() {
  $("#celebrity").submit(function(event) {
  event.preventDefault();  
  const q1number = $(".number").val();
  
  if (q1number === "3") {
    console.log("true!");
  } else {
    console.log("false");
  }
  });
});