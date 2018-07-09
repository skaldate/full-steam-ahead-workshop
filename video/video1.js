//video.js - step 1
  const videoElement = document.getElementById("video"); //video element created in index.html file
  let videoStream;

//replace this code in step 3 
  navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } }) //get user media, select video
    .then(stream => { //then get the stream of the video
      videoStream = stream; //store the stream in videostream 
      videoElement.srcObject = videoStream; //assign the stream to video element's src object.
      videoElement.play();
   })
