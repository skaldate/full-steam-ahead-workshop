$("#blur").change(function(){
    let blurVal = $(this).val();
    let filterVal =  'blur('+ blurVal + 'px)';
    let filters = $("#video").css('filter');
    
    console.log("Filters :"  +filters);
    let blurFilterApplied  = filters.indexOf("blur(") >= 0;
    if(filters == "none"){
      filters = ""
    }
    if(blurFilterApplied){
      filters = filters.replace(/blur\(\dpx\)/g, filterVal)
    }
    else{
      filters = filters+ filterVal;
    }
    console.log(filters);
    $("#video").css('filter',filters)
               .css("-webkit-filter", filters);
  
     context.filter = filters;
  })
