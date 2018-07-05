## Create a filter

### Blur Filter Element
* Create a slider element with range of value from 0 to 9 

_File:index.html_

```html
<div class="slidecontainer">
  <label  class="kmx-typography--font-alt">blur
    <input  id="blur" type="range" min="0" max="9" value="0" class="slider">
  </label>
</div>
```
### Apply blur filter to video

* Add a blur filter to video when the slider is moved

_File:filters.js_

```javascript
//filters.js - step 1
$("#blur").change(function(){
    $("#video").css('filter','blur(5px)')
               .css("-webkit-filter", 'blur(5px)');
})
```

### Change blur intensity when slider changes

* There are two possible scenario when changing the blur filter value
    * There is no filter applied. In this case filter is set to 'none'. 
    * There is already blur filter applied. In this case we have to replace the existing blur filter value

* Replace code in step 1 with the following

_File:filters.js_

```javascript
//filters.js - step 
$("#blur").change(function(){
    let sliderVal = $(this).val(); //capture slider value
    let filterToApply =  'blur('+ blurVal + 'px)'; //store filter value we want to apply in variable
    let filters = $("#video").css('filter'); // store any filter that are currently applied to video element
    
    let isBlurFilterApplied  = filters.indexOf("blur(") >= 0; //is blur filter currently applied to video
    if(filters == "none"){ //if no filters have been applied
      filters = ""; //remove it, because none value doesn't allow any filter to work
    }
    if(isBlurFilterApplied){ //if there is already a blur filter 
      filters = filters.replace(/blur\(\dpx\)/g, filterToApply); //replace current blur with new filter value
    }
    else{ //if there is no blur filter
      filters = filters+ filterVal; // add new blur filter
    }
    $("#video").css('filter',filters) //apply filter to video
               .css("-webkit-filter", filters);
  
     context.filter = filters; //apply filter to snapshot canvas context
  })
```
### Add more filters
* You can apply more than one filter to an element any time
* Lets add two more filters.
* Add following code to add two more sliders for two new filters

_File:index.html_

```html
<div class="slidecontainer">
  <label  class="kmx-typography--font-alt">sepia
    <input  id="sepia" type="range" min="0.0" max="0.9" step = "0.1" value="0" class="slider">
  </label>
 </div>
 <div class="slidecontainer">
   <label  class="kmx-typography--font-alt">B/W
    <input  id="grayscale" type="range" min="0" max="100" step = "1" value="0" class="slider">
   </label>
 </div>
```

_File:filters.js_

```javascript
$("#sepia").change(function(){
    let sepiaVal = $(this).val();
    let filterVal =  'sepia('+ sepiaVal + ')';
    let filters = $("#video").css('filter');
    let isSepiaFilterApplied  = filters.indexOf("sepia(") >= 0;
    
    if(filters == "none"){
      filters = "";
    }
    if(isSepiaFilterApplied){
      filters = filters.replace(/sepia\(\d.?\d?\)/g, filterVal);
    }
    else{
      filters = filters+ filterVal;
    }
    $("#video").css('filter',filters)
               .css("-webkit-filter", filters);
  
     context.filter = filters;
  })

  $("#grayscale").change(function(){
    let grayscaleVal = $(this).val();
    let filterVal =  'grayscale('+ grayscaleVal + '%)';
    let filters = $("#video").css('filter');
    let grayscaleApplied  = filters.indexOf("grayscale(") >= 0;
    if(filters == "none"){
      filters = ""
    }
    if(grayscaleApplied){
      filters = filters.replace(/grayscale\(\d.?\d?\d?\)/g, filterVal)
    }
    else{
      filters = filters+ filterVal;
    }
    $("#video").css('filter',filters)
               .css("-webkit-filter", filters);
  
     context.filter = filters;
  })

```
