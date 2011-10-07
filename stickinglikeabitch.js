(function stickingLikeABitch(global) {
		 
    var	doc = global.document,
			container = getEl('contain'),
			parentElem = container.getElementsByTagName('article'),
			header = document.getElementsByTagName('header')[0].clientHeight;
	
	/**
	 * Following method is short hand for document.getElementById
	 * This can help improve performance by not having to keep looking up scope chain for either 'document' or 'getElementById'
	 * 
	 * @param id { String } the identifier for the element we want to access.
	 * @return { Element | Undefined } either the element we require or undefined if it's not found
	 */
	function getEl(id) {
		return doc.getElementById(id);
	}
	
	// With thanks to http://twitter.com/#!/ded
	function getClass(searchClass,node,tag) {
		
		var classElements = new Array();
		
		if ( node == null ) {
			node = document;
		}
		
		if ( tag == null ) {
			tag = '*';
		}
		
		var els = node.getElementsByTagName(tag);
		var elsLen = els.length;
		var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
		for (i = 0, j = 0; i < elsLen; i++) {
			if ( pattern.test(els[i].className) ) {
				classElements[j] = els[i];
				j++;
			}
		}
		
		return classElements;
		
	};
	
	
	
	jQuery(window).bind('scroll', function(e){
			var scrolling = jQuery(window).scrollTop();
		
		
			for (i = 0; i < parentElem.length; i++) {
				
				// Grabbing some numbers here. What we need to know is when our user has scrolled past
				// a certain position. These set of variables say if our user scrolls past the value
				// of our elements offseTop minus the height of our header minus 300px.
				var elem = parentElem[i],
					elemOffSet = elem.offsetTop,
					elemHeight = elem.clientHeight,
					space = 50, // This determines how much space after the header
					totalSpace = elemOffSet - header - space, // x = y - w - z // Check out that algorithm
					totalFigure = elemOffSet + elemHeight,
					stickyElem = elem.getElementsByTagName('div')[0], // We know its our first div element:)
					stickyElemHeight = stickyElem.clientHeight,
					stickyElementWidth = stickyElem.clientWidth;
					
					
					// Our current width is set in percentages for a responsive effect. When we apply a fixed position to it, it seems
					// to expand to it touches the next element. Only width wise.
					//stickyElem.style.width = stickyElem.clientWidth+'px';	
				
				// Chuck in a check to see which one of our elements are closent to the top of the window
				if (scrolling >= elemOffSet - 100) {
					if (scrolling >= totalFigure - stickyElemHeight - 210) {
						stickyElem.className = 'stickyElem release';
					} else {
						stickyElem.className = 'stickyElem fixed';
					}
				} else {
					stickyElem.className = 'stickyElem';
				}
			}
		
	})
	
	
	
	
		
})(this) // We pass in 'this' and reference it as 'global' object (in the browser world the global object is the Window object)