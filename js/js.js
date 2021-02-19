// ### "HOME" & NAVIGATION ### //
window.addEventListener( 'load', function()
{
    MenuPunktAktiv();
});

function MenuPunktAktiv()
{
    var current ="" + window.location;
    var nav = document.querySelector( 'nav ul' );
    var anchor = nav.getElementsByTagName( 'a' );

    if( current.search(".html") == -1 )
    {
        current = current + "index.html";
    }

    for ( var i = 0; i < anchor.length; i++ )
    {
        if( current.toLowerCase() == anchor[i].href.toLowerCase() )
    {
        anchor[i].className = "menu-active";
    }
}
}

// ### "HOME" & NAVIGATION END ### //

// EXPANDABLE TABS / READ MORE //

const project = document.getElementsByClassName("expand");
var i;

for (i = 0; i < project.length; i++) {
  project[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
} 
// ### "MY WORK" END ### //

// ### BURGER MENU ### //

const menu=document.querySelector("header");

document.getElementById("burger").addEventListener("click", function() {
	if(menu.style.display!=="flex"){
		menu.style.display="flex";
	}else{
        menu.style.display="none";
    }
  });

// ### "ABOUT ME" ### //

//STAK ANIMATION (JQUERY)
$(function () {
  $('.card').on('click', function (e) {
      $(this).addClass('fade_out_anim').on('webkitAnimationEnd', function () {
          $(this).insertBefore('.card:first-child').removeClass('fade_out_anim');
      });
  })
});

// ### "ABOUT ME" END ### //