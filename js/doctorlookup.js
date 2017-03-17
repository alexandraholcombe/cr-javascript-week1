var apiKey = require('./../.env').apiKey;
var doctors = require('./../js/doctor.js').doctorModule;

var allDoctors = new Array();
var newDoctor;

Lookup = function(){
}

Lookup.prototype.getDoctors = function(medicalIssue, showDoctor) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=11&user_key=' + apiKey)
  .then(function(result) {
    var numOfObjects = result.data.length;
    for (j = 0; j < numOfObjects; j++) {
      var numOfPractices = result.data[j].practices.length;
      var physician = result.data[j].profile.first_name + " " + result.data[j].profile.last_name + ", " + result.data[j].profile.title;
      var doctorPractices = new Array();
      for (i = 0; i < numOfPractices; i++){
        var practiceName = result.data[j].practices[i].name;
        doctorPractices.push(practiceName);
      }
      var newDoctor = new Doctor();
      newDoctor.makeDoctor(physician, doctorPractices);
      allDoctors.push(newDoctor);
    }
    for(i = 0; i < allDoctors.length; i++){
      showDoctor(allDoctors[i].physician, allDoctors[i].practices, i);
    }
    allDoctors = [];
  })
  .fail(function(error){
    console.log("fail");
  });
};

exports.lookupModule = Lookup;
