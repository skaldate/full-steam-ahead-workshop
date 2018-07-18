// get canvas element we created in index.html
  let canvas=document.querySelector('canvas');
  // get 2d context of the canavs.
  // it provides function to draw 2d images on canvas
  let context=canvas.getContext('2d');
  
  //when button with id snap is clicked
  $("#snap").click(function(){
   //draw the image on canvas
   //image to draw is in element with id video
   
    context.drawImage(video,0,0,canvas.width,canvas.height);
  });
