$(document).ready(function() {
  $("form#word").submit(function(event) {
    event.preventDefault();
    var input = $("input#play").val();
    var input2 = input.split(" ")
    var newarray = [];
    input2.forEach(function(word) {
      if (word.length >= 3) {
        newarray.push(word)
      }
    })
    var input3 = newarray.reverse(" ")
    var input4 = input3.join(" ")
    $(".newword").text(input4)
  });
});
