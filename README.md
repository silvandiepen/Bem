# jQuery.BEMClasses

Tiny extension to use with bem in javascript. Add active, remove actives and check if element has active. 


### Initialize BEMclasses (example)

```javascript

	// Check if active
	$('.element').hasActive();
	
	
	// Add active
	$('.element').addActive();
	
	// Remove active
	$('.element').removeActive();

```

### The code

```javascript
        
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

        
      
```

Installation
------------

Install the script with bower or make your own files

### Embed

```html
<script type="text/javascript" src="vendor/jquery.BEM.js"></script>
```

### Bower

```
bower install jquery.bemclasses --save
```