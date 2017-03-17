var lookup = require('./../js/doctorlookup.js').lookupModule;

$(function(){
  var newLookup = new Lookup();
  function writePractices(practices, i){
    console.log(practices.length);
    for (j = 0; j < practices.length; j++){
      $('#phys' + i + '-practices').append('<li>' + practices[j] + '</li>');
    }
  }
  function showDoctor(physician, practices, i){
    $('#result-container').append('<div class="panel panel-default">' +
            '<div class="panel-heading" role="tab" id="heading' + i + '">' +
            '<h4 class="panel-title">' +
            '<a role="button" data-toggle="collapse" data-parent="#accordion"' +
            ' href="#collapse'+ i + '" aria-expanded="false" aria-controls="collapse' + i + '">' +
            physician +
            '</a></h4></div>' +
            '<div id="collapse'+ i + '" class="panel-collapse collapse" ' +
            'role="tabpanel" aria-labelledby="heading' + i + '">' +
            '<div class="panel-body">' +
            '<h3>Practices:</h3><ul id="phys' + i + '-practices"></ul></div></div></div>'
  );
  writePractices(practices, i);
}
$('#symptom-form').submit(function(event){
  event.preventDefault();
  var medicalIssue = $('#symptom').val();
  $('#symptom').val("");
  $('#results').empty();
  $('div.panel').remove();

  newLookup.getDoctors(medicalIssue, showDoctor);
})
})
