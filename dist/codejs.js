$(document).ready(function(){
  $(".proud-carousel").owlCarousel({
    autoplay: true,
    autoplayTimeout:3000,
        rtl:true,
        dots:true,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true, 
                    
            },
            600:{
                items:2,
                nav:false,  
                   
            },
            1000:{
                items:3,
                nav:true,
                loop:true,  
            }
             
        }
        
    });
  });


// **************************************************************************
  $(function () {

  $("html").click(function(e){

  $(".sercel")
  .show().offset({
    left:e.pageX,
    top:e.pageY
  });

  });


  });
  

    

    