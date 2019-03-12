



$("#takeSurvey").on("click", () =>{
  document.location.href="survey.html"
})


$("#submitSurvey").on("click", () => {
      let newAlien = {
        name: $("#name").val().trim(),
        image: $("#picture").val().trim(),
        scores: [parseInt($("#q1").val()), parseInt($("#q2").val()),parseInt($("#q3").val()),parseInt($("#q4").val()),parseInt($("#q5").val()),parseInt($("#q6").val()),parseInt($("#q7").val()),parseInt($("#q8").val()),parseInt($("#q9").val()),parseInt($("#q10").val())],
        description: "A human on a quest for new friends!"
        
      }
      
      $.post("/api/friends", newAlien)
        .then(function(data) {
          console.log(data)
          
    });
    
});









