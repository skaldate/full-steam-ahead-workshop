//when input with id sepia changes
    $("#sepia").change(function() {
      //get the current value of the sepia slider
      let sepiaVal = $(this).val();
      //create the value we want to apply 
      let filterVal =  'sepia('+ sepiaVal + ')';
      //get the current filters applied to video
      let currentFilters = $("#video").css('filter');
      let filtersToApply = ""
      
      //determine is sepia filter is already applied
      
      //if it is not applied we want to create a filter
      let sepialFilterApplied  = currentFilters.indexOf("sepia(") >= 0;
    
      //if sepia filter is applied we want to replace it
      if(sepialFilterApplied){
        filtersToApply = currentFilters.replace(/sepia\(\d.?\d?\)/g, filterVal);
      }
      //if it is not applied we want to create a filter
      else{
        filtersToApply = currentFilters == "none"? filterVal : currentFilters + filterVal;
      }
      
      //apply the filter to the video
      $("#video").css('filter',filtersToApply)
                .css("-webkit-filter", filtersToApply);
    
      //apply the filter to the canvas
      context.filter = filtersToApply;
  })
