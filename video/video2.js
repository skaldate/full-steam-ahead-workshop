$(document).ready(function(){
  //get the video element created in index.html file
  const videoElement = document.getElementById("video");
  
  //when button with id start is clicked
  $("#start").click(function(){
      startVideo(videoElement);
  });

  //when button with id stop is clicked
  $("#stop").click(function(){
      stopVideo(videoElement);
  });
  
  //Add the code to change facingMode

});

function startVideo(videoElement){
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
        //play the video
        videoElement.play(); 
        
      });
};

function stopVideo(videoElement, videoStream){
  //if the video is playing
    //i:e videoStream is not empty.
    let videoStream = videoElement.srcObject;
    if(videoStream != undefined){
      //stop the video
      videoStream.getTracks()[0].stop();
    }
};
