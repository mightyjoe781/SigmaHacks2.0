function addcab(h){
    firebase.database().ref('donor/' + h.id).set(h);
  }

  $(add_donor).click(function(){
    var donor = {
      id: $("#v1").val() + Date.now(),

      date: $("#v1").val(),
      time: $("#v2").val(),

      contact: $("#v5").val(),
      comments: $("#v6").val()
    };
    addDonor(donor);
  alert("Created!");
    });

    var adddonorref = firebase.database().ref().child("donor");
    adddonorref.on("value", function(snapshot) {
        $("#show-donor").empty();
        var donorHTMLitem = "<h3> Donor List </h3>"

        snapshot.forEach(function(childsnapshot){
          var item = childsnapshot.val();
          donorHTMLitem += "<div class'donorHTMLitem'><hr><ul></div>";
          donorHTMLitem += "<li> Time : <span>"+ item.time + "</span></li>"
          donorHTMLitem += "<li> Date : <span>"+ item.date + "</span></li>"
          donorHTMLitem += "<li> Contact : <span>"+ item.contact + "</span></li>"
          donorHTMLitem += "</ul></div>";
          donorHTMLitem += "<button type='button' class='btn btn-primary delete-donor' id="+item.id+">Delete Donor</button>";

      });
      $("#show-donor").html(donorHTMLitem);
    });

    $(document).on("click", ".delete-donor", function(){
      var donorID = $(this).attr('id');
      firebase.database().ref("donor/" + donorID).remove();
    }); 