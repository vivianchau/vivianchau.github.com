$(document).ready(function() {
 function replaceName() {
    var myNewName = window.prompt('Pick a new name!');
    //document.getElementById('user-name').innerHTML = myNewName;
    $("#user-name").html(myNewName);
    $("#user-name").css({color:"blue"});
  }
  
  function clickEvent() {
    $('#copyright').click( function(){
        $(this).css({'color': 'green', 'font-size':'20px'});
    }); 
  }    
        $('#user-name').click(replaceName);
        
        $('.section').hover(
            function(){ $(this).css({ 'background-color': 'black' }); },
            function(){ $(this).css({ 'background-color': 'orange' }); }
        );
      
  
  $('#copyright').click(function(){
    $(this).css({'color': 'green', 'font-size':'20px'});
    });

  replaceName();
  clickEvent();
    });

