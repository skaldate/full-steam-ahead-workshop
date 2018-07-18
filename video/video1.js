
  //get the video element created in index.html file and store it in a variable
  const videoElement = document.getElementById("video"); 

  navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } }) //get media on users device, select video
    .then(stream => { //then get the video stream from device's video camera
      //assign the stream to video html element's src object. 
      //This will stream video from camera to the browser
      videoElement.srcObject = videoStream; 
      //play the video
      videoElement.play(); 
   })
