$(function(){

    $("#toggler").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });

});
