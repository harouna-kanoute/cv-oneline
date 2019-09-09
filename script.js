var content = document.querySelector('#menu-content'); /* pour recuperer le contenus du menu*/
var sidebarBody = document.querySelector('#menu-sidebar-body');/* afficher les contenus du menu*/
var button = document.querySelector('#menu-button');
var overlay = document.querySelector('#menu-overlay');
var activatedClass = 'menu-activated';

sidebarBody.innerHTML = content.innerHTML;	
	
button.addEventListener('click', function(e) {
	e.preventDefault();

	this.parentNode.classList.add(activatedClass);
});

button.addEventListener('keydown', function(e) {
	if (this.parentNode.classList.contains(activatedClass))
	{
		if (e.repeat === false && e.which === 27)
			this.parentNode.classList.remove(activatedClass);
	}
});

overlay.addEventListener('click', function(e) {
  e.preventDefault();
  
  this.parentNode.classList.remove(activatedClass);
  
});

/*--------------------------------------------------ddddddddddd----------------------------------------*/


$(document).ready(function(){ 
  $(".secondsection").hide()
  $(".para").animate({left: '250px', opacity: '1.5',height: '200px',width: '500px'},"slow");

  $(".experience").click(function(){ 
    $("#content-block").load("experiences.html");
    $('.block-section').hide()
  });

  //onclick load parcours page
  $(".parcours").click(function(){ 
    $("#content-block").load("parcours.html"); 
    $('.block-home').hide()
  });

  //onclick load formation page
  $(".formation").click(function(){ 
    $("#content-block").load("formation.html"); 
    $('.block-home').hide()
  });
  
  //onclick load skills page
  $(".skills").click(function(){ 
      $("#content-block").load("skills.html"); 
      $('.block-home').hide()
  }); 

  //onclick load passion page
  $(".passion").click(function(){ 
    $("#content-block").load("passions.html"); 
    $('.block-home').hide()
  }); 

  //onclick load contact page
  $(".contact").click(function(){ 
    $("#content-block").load("contact.html"); 
    $('.block-home').hide()
  }); 
}); 

/*--------------------------------------------------------------------------------------------*/

// onclick hide or show section article

$(".firstfleche").click(function(){
    $(".secondsection").show()
    $(".firstsection").hide()

 })

$(".secondfleche").click(function(){
    $(".secondsection").hide()
    $(".firstsection").show()
})
/*------------------------------------------------------------------------------------------------*/

