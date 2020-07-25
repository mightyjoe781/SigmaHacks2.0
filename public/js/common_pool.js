//Common-pool or Plasma-form

var addcabref = firebase.database().ref().child("donor");
addcabref.on("value", function(snapshot) {
    $("#show-cabs").empty();
    var cabHTMLitem = "<h3> Donor </h3>"

    snapshot.forEach(function(childsnapshot){
      var item = childsnapshot.val();
      cabHTMLitem += "<div class'cabHTMLitem'><hr><ul></div>";
      cabHTMLitem += "<li> Time : <span>"+ item.time + "</span></li>"
      cabHTMLitem += "<li> Date : <span>"+ item.date + "</span></li>"
      cabHTMLitem += "<li> Contact : <span>"+ item.contact + "</span></li>"
      cabHTMLitem += "</ul></div>";
      cabHTMLitem += "<button type='button' class='btn btn-primary delete-cab' id="+item.id+">Delete Cab</button>";

  });
  $("#show-cabs").html(cabHTMLitem);
});

var addcabref = firebase.database().ref().child("patient");
addcabref.on("value", function(snapshot) {
    $("#show-cabs-1").empty();
    var cabHTMLitem = "<h3> Patient </h3>"

    snapshot.forEach(function(childsnapshot){
      var item = childsnapshot.val();
      cabHTMLitem += "<div class'cabHTMLitem'><hr><ul></div>";
      cabHTMLitem += "<li> Time : <span>"+ item.time + "</span></li>"
      cabHTMLitem += "<li> Date : <span>"+ item.date + "</span></li>"
      cabHTMLitem += "<li> Contact : <span>"+ item.contact + "</span></li>"
      cabHTMLitem += "</ul></div>";
      cabHTMLitem += "<button type='button' class='btn btn-primary delete-cab' id="+item.id+">Delete Cab</button>";

  });
  $("#show-cabs-1").html(cabHTMLitem);
});