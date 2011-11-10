/*
jQuery Localizer Plugin

Copyright (c) 2011 Sagi Mann
All rights reserved.

Redistribution and use in source and binary forms are permitted
provided that the above copyright notice and this paragraph are
duplicated in all such forms and that any documentation,
advertising materials, and other materials related to such
distribution and use acknowledge that the software was developed
by the <organization>.  The name of the
University may not be used to endorse or promote products derived
from this software without specific prior written permission.
THIS SOFTWARE IS PROVIDED ``AS IS'' AND WITHOUT ANY EXPRESS OR
IMPLIED WARRANTIES, INCLUDING, WITHOUT LIMITATION, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
*/

jQuery.fn.localizeFromBrowserLanguage = function() {
	var lang = window.navigator.language;
	
	if( jQuery.isArray( i18n[lang] ) ) {
            $('html').localize( i18n[lang] );
        } else {
            <!-- if there is no special tranlation the first two chars are extracted and checked. -->
	    if( lang.charAt( 2 ) == '-' ) {
		var l = lang.slice( 0,2 );
		if( jQuery.inArray( l, i18n ) ) {
		  $('html').localize( i18n[l] );
		}
	    }
        }
};

jQuery.fn.localize = function(stringsVar) {
	var stringRes = stringsVar || strings;
	this.find("*").contents().each(function() {
			if (typeof this.data == 'string') {
				var s = jQuery.trim(this.data);
				if (typeof s == 'string' && s.length > 0) {
					var s2 = stringRes[s];
					if (typeof s2 == 'string') {
						this.data = s2;
					}
				}
			}
			
			if (this.nodeName == "IMG") {
				// use the nodeValue instead of this.src because this.src is resolved to full path instead of the original value in the html, so it can't be known at coding time.
				var s2 = stringRes[this.attributes['src'].nodeValue];
				if (typeof s2 == 'string') {
					this.attributes['src'].nodeValue = s2;
				}
			}

			if (this.nodeName == "A") {
				// use the nodeValue instead of this.href because this.href is resolved to full path instead of the original value in the html, so it can't be known at coding time.
				var s2 = stringRes[this.attributes['href'].nodeValue];
				if (typeof s2 == 'string') {
					this.href = s2;
				}
			}
			return this;
	});
	
};