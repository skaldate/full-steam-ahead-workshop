
 //get the video element created in index.html file
    const videoElement = document.getElementById("video"); 

     //get media on users device, select video
     //then get the video stream from device's video camera 
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } })
      .then(stream => {       
        //assign the stream to video html element's src object. 
        videoElement.srcObject = videoStream; 
        //play the video
        videoElement.play(); 
   })
