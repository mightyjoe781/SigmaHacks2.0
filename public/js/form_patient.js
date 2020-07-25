function addcab(h){
    firebase.database().ref('patient/' + h.id).set(h);
  }

  $(add_cabpool).click(function(){
    var cab = {
      id: $("#v1").val() + Date.now(),

      date: $("#v1").val(),
      time: $("#v2").val(),

      contact: $("#v5").val(),
      comments: $("#v6").val()
    };
  addcab(cab);
  alert("Created!");
    });

  var addcabref = firebase.database().ref().child("patient");
    addcabref.on("value", function(snapshot) {
        $("#show-cabs").empty();
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
      $("#show-cabs").html(cabHTMLitem);
    });

    $(document).on("click", ".delete-cab", function(){
      var cabID = $(this).attr('id');
      firebase.database().ref("patient/" + cabID).remove();
    }); 