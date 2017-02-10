$(document).ready (function (){

    // sliding images with specified time

   /* var myIndex = 0;
    slideThem();
     function slideThem() {
         var i ;
         var x = document.getElementById("slideshow");
         for (i = 0; i < x.length; i++){
            x[i].style.display = "none";
           }
	 
         myIndex++;
         if(myIndex > x.length) {myIndex = 1}
         x[myIndex-1].style.display = "block";
         setTimeout(slideThem, 4000);
         
      }  */

    // uploading image

   $("#upload_btn").click(function (){
      var imgd = $("#uploadin").val();
      if (imgd === ''){
         alert('null val');
       }else {

			//alert(document.getElementById("head_part_image").src)
         document.getElementById("head_part_image").src = imgd;//alert(imgd);
        $("#head_part_image").change(imgd);
       }
    });
 
     // status of uploading image
         $("#uploadin").change(function() {
           $("#changeImg").slideDown(1000);
            $("#changeImg").html("<b><i>Image uploaded succesfully:click submit button to change the image</i></b>");
              $("#upload_btn").click(function (){
               $("#changeImg").html("<b>Image has been changed successfully</b>");
                $("#changeImg").delay(2000).slideUp(1000);
             });

          });
    // slide down/up-nav
       $("#close_nav").click(function (){
         $(this).hide(); 
          $("#linkDown").slideUp();

       }); 
      $("#open_nav").click(function (){
        $("#linkDown").slideDown();
          $("#close_nav").show();
      });
   
    //slide left/right navigation.
     $("#open_side_nav").click(function (){
       $("#side_nav").animate({left:'0px'},1000);

      });
     $("#close_side_nav").click(function (){
        $("#side_nav").animate({left:'-420px'},1000);
     });

   // resizing window
   /*   function resizing(){
        var  window_width = $(window).width();
        
        var  window_height = $(window).height();
        var  head_part_width = $("#head_part").width();
        var  body_part_width = $("#body_part").width(); */
       // alert(head_part_width + "  " + window_width);  
        //  $("#head_part").css('width',(window_width - 949));
         // $("#body_part").css('width',(window_width - 270));
        /* if(window_width > 1132){
           head_part_width = window_width;
           body_part_width = window_width;
         alert("wow");
           }              
      }
     resizing();

         $(window).resize(function (){
           resizing();
         });   */


   // show hide update div
    $("#save_info").click(function (){
      $("#updateInfo").fadeOut(3000);
    });
    $("#updateInfoGallary").click(function (){
      $("#updateInfo").fadeIn(3000);
      // $("#updateInfo").css('opacity','0.5');
      // $("#bodyArea").css('opacity','0.2');

    });
    
    //slidin login details
    $("#log_in").click(function (){
      $("#log_in_details").slideDown(1000);
       $("#sign_in").attr('disabled','disabled');
     });
    $("#login-submission").click(function (){
      $("#log_in_details").slideUp(1000);
       $("#sign_in").removeAttr('disabled');
     });

    //slidin sign_in details
    $("#sign_in").click(function (){
      $("#sign_in_details").slideDown(1000);
       $("#log_in").attr('disabled','disabled');      
     });
    $("#sign-in-submission").click(function (){
      $("#sign_in_details").slideUp(1000);
       $("#log_in").removeAttr('disabled');
     });


});