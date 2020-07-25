//Common-pool or Plasma-form

var adddonorref = firebase.database().ref().child("donor");
adddonorref.on("value", function(snapshot) {
    $("#show-donor").empty();
    var donorHTMLitem = "<h1> Donor List </h1>"

    snapshot.forEach(function(childsnapshot){
      var item = childsnapshot.val();
      donorHTMLitem += "<div class'patientHTMLitem'><hr><ul></div>";
      //patientHTMLitem += "<li> Time : <span>"+ item.time + "</span></li>"
      donorHTMLitem += "<li><b> Date : </b><span>"+ item.date + "</span></li>"
      //patientHTMLitem += "<li> Contact : <span>"+ item.contact + "</span></li>"
      donorHTMLitem += "<li><b> Patient Name : </b><span>"+ item.patientName + "</span></li>"
      donorHTMLitem += "<li><b> Mobile Number : </b><span>"+ item.mobileNumber + "</span></li>"
      donorHTMLitem += "<li><b> Email : </b><span>"+ item.emailAddress + "</span></li>"
      donorHTMLitem += "<li><b> Age : </b><span>"+ item.age + "</span></li>"
      donorHTMLitem += "<li><b> Gender : </b><span>"+ item.gender + "</span></li>"
      donorHTMLitem += "<li><b> City : </b><span>"+ item.city + "</span></li>"
      donorHTMLitem += "<li><b> Country : </b><span>"+ item.country + "</span></li>"
      donorHTMLitem += "<li><b> Blood Group : </b><span>"+ item.bloodGroup + "</span></li>"
      donorHTMLitem += "<li><b> Diabetes : </b><span>"+ item.diabetes + "</span></li>"
      donorHTMLitem += "<li><b> Liver Disease : </b><span>"+ item.liver + "</span></li>"
      donorHTMLitem += "<li><b> Kidney Disease : </b><span>"+ item.kidney + "</span></li>"
      donorHTMLitem += "<li><b> Blood Pressure Problem : </b><span>"+ item.bloodPressure + "</span></li>"
      donorHTMLitem += "<li><b> Recovery Date : </b><span>"+ item.recoveryDate + "</span></li>"
      donorHTMLitem += "</ul></div>";

  });
  $("#show-donor").html(donorHTMLitem);
});

    snapshot.forEach(function(childsnapshot){
      var item = childsnapshot.val();
      cabHTMLitem += "<div class'cabHTMLitem'><hr><ul></div>";
      cabHTMLitem += "<li> Time : <span>"+ item.time + "</span></li>"
      cabHTMLitem += "<li> Date : <span>"+ item.date + "</span></li>"
      cabHTMLitem += "<li> Contact : <span>"+ item.contact + "</span></li>"
      cabHTMLitem += "</ul></div>";

  });
  $("#show-cabs").html(cabHTMLitem);
});

var addcabref2 = firebase.database().ref().child("patient");
    addcabref2.on("value", function(snapshot) {
        $("#show-patient").empty();
        var patientHTMLitem = "<h1> Patient List</h1>"

    snapshot.forEach(function(childsnapshot){
      var item = childsnapshot.val();
      patientHTMLitem += "<div class'patientHTMLitem'><hr><ul></div>";
      //patientHTMLitem += "<li> Time : <span>"+ item.time + "</span></li>"
      patientHTMLitem += "<li><b> Date : </b><span>"+ item.date + "</span></li>"
      //patientHTMLitem += "<li> Contact : <span>"+ item.contact + "</span></li>"
      patientHTMLitem += "<li><b> Patient Name : </b><span>"+ item.patientName + "</span></li>"
      patientHTMLitem += "<li><b> Mobile Number : </b><span>"+ item.mobileNumber + "</span></li>"
      patientHTMLitem += "<li><b> Email : </b><span>"+ item.emailAddress + "</span></li>"
      patientHTMLitem += "<li><b> Age : </b><span>"+ item.age + "</span></li>"
      patientHTMLitem += "<li><b> Gender : </b><span>"+ item.gender + "</span></li>"
      patientHTMLitem += "<li><b> Hospital Name : </b><span>"+ item.hospitalName + "</span></li>"
      patientHTMLitem += "<li><b> City : </b><span>"+ item.city + "</span></li>"
      patientHTMLitem += "<li><b> Country : </b><span>"+ item.country + "</span></li>"
      patientHTMLitem += "<li><b> Blood Group : </b><span>"+ item.bloodGroup + "</span></li>"
      patientHTMLitem += "</ul></div>";

  });
  $("#show-patient").html(patientHTMLitem);
});