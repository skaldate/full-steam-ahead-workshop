## Take a snapshot

### Add element to display snapshot 
* Add canvas element to index.html. Canvas element let us draw graphics on the page.

_File: index.html_
```html
<div class="canvascontainer">
  <canvas id="canvas" ></canvas>
</div>
```

### Access canvas element
* Find the canavs element and store it in variable
* Since our image is going to be 2 dimensional get 2d context of the canvas. 
* <i> You can draw 3d images on canvas, however 3d context has been renamed to WebGL </i>

_File: snapshot.js_
```javascript
let canvas=document.querySelector('canvas');
let context=canvas.getContext('2d');
```

### Draw the image on canvas
* Snap button is already added to index.html file with id "snap"
* Access the snap button and create a function that will run when the button is clicked
* Using 2D context draw the image.

_File: snapshot.js_
```javascript
  $("#snap").click(function(){
    context.drawImage(video,0,0,canvas.width,canvas.height); //draw image of video covering whole canvas.
  });
```

