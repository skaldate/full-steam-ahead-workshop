  $("#play").click(function(){
      navigator.mediaDevices.getUserMedia(
        { video: { facingMode: 'user' }
      })
      .then(stream => {
        videoElement.srcObject = stream;
        videoStream = stream;
        videoElement.play(); 
      });
  })

  $("#stop").click(function(){
    if(videoStream != undefined){
      videoStream.getTracks()[0].stop();
    }
  })
