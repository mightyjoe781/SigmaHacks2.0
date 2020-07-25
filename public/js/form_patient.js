function addpatient(h){
    firebase.database().ref('patient/' + h.id).set(h);
  }

  $(add_patient).click(function(){
    var patient = {
      id: $("#v1").val() + Date.now(),

      date: $("#v1").val(),
      time: $("#v2").val(),

      contact: $("#v5").val(),
      comments: $("#v6").val()
    };
    addpatient(patient);
  alert("Created!");
    });

    var addpatientref = firebase.database().ref().child("patient");
    addpatientref.on("value", function(snapshot) {
        $("#show-patient").empty();
        var patientHTMLitem = "<h3>Patient List</h3>"

        snapshot.forEach(function(childsnapshot){
          var item = childsnapshot.val();
          patientHTMLitem += "<div class'patientHTMLitem'><hr><ul></div>";
          patientHTMLitem += "<li> Time : <span>"+ item.time + "</span></li>"
          patientHTMLitem += "<li> Date : <span>"+ item.date + "</span></li>"
          patientHTMLitem += "<li> Contact : <span>"+ item.contact + "</span></li>"
          patientHTMLitem += "</ul></div>";
          patientHTMLitem += "<button type='button' class='btn btn-primary delete-patient' id="+item.id+">Delete Cab</button>";
      });
      $("#show-patient").html(patientHTMLitem);
    });

    $(document).on("click", ".delete-patient", function(){
      var patientID = $(this).attr('id');
      firebase.database().ref("patient/" + patientID).remove();
    }); 