$("#blur").change(function(){
      //get the current value of the blur slider
      let blurVal = $(this).val();
      //create the value we want to apply 
      let filterVal =  'blur('+ blurVal + 'px)';
      //get the current filters applied to video
      let currentFilters = $("#video").css('filter');
      let filtersToApply = ""
    
      //determine is blur  filter is already applied
      let blurFilterApplied  = currentFilters.indexOf("blur(") >= 0;
      if(currentFilters == "none"){
        currentFilters = "";
      }
      
      //if blur filter is already applied we want to replace it
      if(blurFilterApplied){
        filtersToApply = currentFilters.replace(/blur\(\d\d?px\)/g, filterVal)
      }
      //if it is not applied we want to create a filter
      else{
        filtersToApply = currentFilters+ filterVal;
      }
      
      //apply the filter to the video
      $("#video").css('filter',filtersToApply)
                .css("-webkit-filter", filtersToApply);
      
  })
