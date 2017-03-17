var lookup = require('./../js/doctorlookup.js').lookupModule;

$(function(){
  var newLookup = new Lookup();
  $('#symptom-form').submit(function(event){
    event.preventDefault();
    var medicalIssue = $('#symptom').val();

    function showPractice(input){
      $('#results').append('<li>' + input + '</li>');
    }

    newLookup.getDoctors(medicalIssue);
    newLookup.printDoctors(showPractice);
  })
})
