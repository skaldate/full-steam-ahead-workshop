  $("#rotate").click(function(){
    if(facingMode == 'user'){
      facingMode = 'environment';
    }else{
      facingMode = 'user';
    }
   // stopVideo(videoElement);
    startVideo(videoElement,facingMode);
  });
