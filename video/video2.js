$(document).ready(function(){
  console.log("Video script loaded");
  const videoElement = document.getElementById("video");
  let videoStream;

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

})
