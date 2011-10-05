(function stickingLikeABitch(global) {
		 
    var	doc = global.document,
			elemParent = getEl('photo'),
		 	img = getTag({ tag: 'img', context: elemParent, first: true }), 
			ul = getEl('feeder'),
		 	thumbs = getTag({ tag: 'a', context: ul }),
			len = thumbs.length, 
			src;
	
	
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
		
})(this) // We pass in 'this' and reference it as 'global' object (in the browser world the global object is the Window object)