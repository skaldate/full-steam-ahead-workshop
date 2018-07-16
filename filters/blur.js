$("#blur").change(function(){
    let blurVal = $(this).val();
    console.log(blurVal);
    let filterVal =  'blur('+ blurVal + 'px)';
    let filters = $("#video").css('filter');
    
    console.log("Filters :"  +filters);
    let blurFilterApplied  = filters.indexOf("blur(") >= 0;
    if(filters == "none"){
      filters = ""
    }
    if(blurFilterApplied){
      console.log("Trying to replace with " + filterVal);
      filters = filters.replace(/blur\(\dpx\)/g, filterVal)
      console.log("replaced "+ filters);
    }
    else{
      filters = filters+ filterVal;
    }
    console.log(filters);
    $("#video").css('filter',filters)
               .css("-webkit-filter", filters);
  
     context.filter = filters;
  })
