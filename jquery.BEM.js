// Check if element is active

	$.fn.hasActive = function(e) {
	  var hasActive = false;
	  if (typeof this.attr('class') !== typeof undefined && this.attr('class') !== false) {
	    var classNames = this.attr('class').split(' ');
	    $.each(classNames,function(index,value){
	      if(value.indexOf('-active') > -1){
	        hasActive = true;
	      }
	    });
	  }
	  return hasActive;
	};

// Remove active on active element

	$.fn.removeActive = function(e) {
	  if (typeof this.attr('class') !== typeof undefined && this.attr('class') !== false) {
	    var classNames = this.attr('class');
	    var classNamesArray = classNames.split(' ');
	    $.each(classNamesArray,function(index,value){
	      if(value.indexOf('-active') > -1){
	        classNames = classNames.replace(value,'');
	      } else {
	      }
	    });
	    this.attr('class',classNames);
	    return this;
	  } else {
	    return this;
	  }
	};

// Add active to element
	
	$.fn.addActive = function(pre) {
	  var classBase,i=0;
	  if(typeof pre !== typeof undefined && pre !== false){ classBase = pre; }
	  else {
	    if(this.attr('id').length > 0){ classBase = this.attr('id'); }
	    else {
	      if (typeof this.attr('class') !== typeof undefined && this.attr('class') !== false) {
	        var classNames = this.attr('class').split(' ');
	        if(i<1){
	          $.each(classNames,function(index,value){
	            i++;
	            classBase = value;
	          });
	        }
	      } else { classBase = 'this'; }
	    }
	  }
	  return this.addClass(classBase+'-active');
	};
