
$(document).ready(function(){
  //get the video element created in index.html file
  const videoElement = document.getElementById("video");
  let facingMode = 'user';

  //when button with id start is clicked
  $("#start").click(function(){
      startVideo(videoElement,facingMode);
  });

  //when button with id stop is clicked
  $("#stop").click(function(){
    stopVideo(videoElement);
  });
   
  //Add the code to change facingMode


});

function startVideo(videoElement,facingMode){
    //get media on users device, select video
      navigator.mediaDevices.getUserMedia(
        //then get the video stream from device's video camera 
        { video: { facingMode: facingMode}
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

function stopVideo(videoElement){
  //if the video is playing
    //i:e videoStream is not empty.
    let videoStream1 = videoElement.srcObject;
    if(videoStream1 != undefined){
      //stop the video
      videoStream1.getTracks()[0].stop();
    }
};
