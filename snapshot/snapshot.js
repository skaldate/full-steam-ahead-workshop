// get canvas element we created in index.html
  let canvas=document.querySelector('canvas');
  // get 2d context of the canavs.
  // it provides function to draw 2d images on canvas
  let context=canvas.getContext('2d');
  
  
  //when button with id snap is clicked
  $("#snap").click(function(){
    //set the width of canvas to be same as width of video
    canvas.width = $("#video").width();
    
    //set the height of canvas to be same as height of video
    canvas.height = $("#video").height();

    //apply same height and width to the canvas container div
    $(".canvascontainer").width(canvas.width).height(canvas.height);
    
    //apply same filter applied to video to canvas element
    context.filter = $("#video").css('filter');
    
    //draw the image on canvas
    //image to draw is in element with id video
    context.drawImage(video,0,0,canvas.width,canvas.height);
     
  });
