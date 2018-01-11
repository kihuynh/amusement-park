$(document).ready(function() {
  var height = parseInt(prompt("How tall are you?"));

  // if (height <= 24) {
  //   alert("You must be at least 45 inches");
  // } else if (height <= 45 && height >= 24) {
  //   $("#ride1").show();
  // } else if (height >= 45 && height < 60) {
  //   $("#ride2, #ride3").show();
  // } else if (height > 60) {
  //   $("#ride1, #ride2, #ride3").show();
  // }

      if (height <= 24) {
        alert("You must be at least 45 inches");
      } else if (height <= 45 && height >= 24) {
        $(".test").show();
      } else if (height >= 45 && height < 60) {
        $("#ride2, #ride3").show();
      } else if (height > 60) {
        $("#ride1, #ride2, #ride3").show();
      }

});
