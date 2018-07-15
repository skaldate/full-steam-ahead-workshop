$("#sepia").change(function(){
    let sepiaVal = $(this).val();
    let filterVal =  'sepia('+ sepiaVal + ')';
    let currentFilters = $("#video").css('filter');
    let filtersToApply = ""
    
    let sepialFilterApplied  = currentFilters.indexOf("sepia(") >= 0;
   
    if(sepialFilterApplied){
      filtersToApply = currentFilters.replace(/sepia\(\d.?\d?\)/g, filterVal);
    }
    else{
      filtersToApply = currentFilters == "none"? filterVal : currentFilters + filterVal;
    }
    
    $("#video").css('filter',filtersToApply)
               .css("-webkit-filter", filtersToApply);
  
     context.filter = filtersToApply;
  })
