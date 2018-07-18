$(document).ready(function(){
  //get the video element created in index.html file
  const videoElement = document.getElementById("video");
  let videoStream;

  //when button with id start is clicked
  $("#start").click(function(){
      //get media on users device, select video
      navigator.mediaDevices.getUserMedia(
        //then get the video stream from device's video camera 
        { video: { facingMode: 'user' }
      })
      .then(stream => {
        //assign the stream to video html element's src object. 
        videoElement.srcObject = stream;
        //save the stream in variable videostream 
        //we want to save it so that we can close it later
        videoStream = stream;
        //play the video
        videoElement.play(); 
      });
  })

  //when button with id stop is clicked
  $("#stop").click(function(){
    //if the video is playing
    //i:e videoStream is not empty.
    if(videoStream != undefined){
      //stop the video
      videoStream.getTracks()[0].stop();
    }
  })

})
