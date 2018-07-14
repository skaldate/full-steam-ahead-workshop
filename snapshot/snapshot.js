 let canvas=document.querySelector('canvas');
 let context=canvas.getContext('2d');
 console.log("snapping script loaded");
  
  $("#snap").click(function(){
  
    context.drawImage(video,0,0,canvas.width,canvas.height);
  });
