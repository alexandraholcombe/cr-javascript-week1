var apiKey = require('./../.env').apiKey;

Specialty = function(){
}

Lookup.prototype.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      var numOfPractices = result.data[0].practices.length
      for (i = 0; i < numOfPractices; i++){
        var practiceName = result.data[0].practices[i].name;
        var practiceId = result.data[0].practices[i].uid;
        var newPatients = result.data[0].practices[i].accepts_new_patients;

        newPractice = new Practice();
        newPractice.makePractice(practiceName, practiceId, newPatients);
        allPractices.push(newPractice);
      }
    })
   .fail(function(error){
      console.log("fail");
    });
