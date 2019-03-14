let isValid=false;
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          isValid=false
        }
        form.classList.add('was-validated');
        isValid=true;
      }, false);
    });
  }, false);
})();



$("#surveyForm").on("submit", function(event){
  event.preventDefault();
  if(isValid===true){
  let newAlien = {
    name: $("#name").val().trim(),
    image: $("#picture").val().trim(),
    scores: [parseInt($("#q1").val()), parseInt($("#q2").val()), parseInt($("#q3").val()), parseInt($("#q4").val()), parseInt($("#q5").val()), parseInt($("#q6").val()), parseInt($("#q7").val()), parseInt($("#q8").val()), parseInt($("#q9").val()), parseInt($("#q10").val())],
    description: "A human on a quest for new friends!"
   
  }
  $.post("/api/friends", newAlien)
    .then(function (data) {
      console.log(data)
      $("#newPalName").text(data.name);
      $("#newPal").attr("src", data.image);
      $("#newPalInfo").text(data.description);

    });
    $("#alienPal").modal("show")
    
  }
})


$("#takeSurvey").on("click", () => {
  document.location.href = "survey.html"
})