
/* Documentation

Ruleify.js

This is a Javascript library that makes it very easy for one to get CSS rules of an element. 
The traditional way of styling elements dynamically with javascript is to do element.style = '', but this only dynamically changes the _style_ of that element, and not the CSS class's style. 

This generates problems sometimes if you want to change the style of multiple elements (troublesome and unwieldy to iterate through each element with ClassName and changing). Changing the DOM like that can also be very slow when there are thousands of such elements. 

The other preferred way for adding CSS rules/properties directly is to have an unused CSS class and then attach that class to the element dynamically to it, something like element.ClassList.add('ClassName'); Very common in CSS transitions/animations control. The issue with this approach is that, since CSS does not take in variables, all your properties are fixed and immutable. So if you want to speed up or slow down a transition-time depending on user input, you cannot do that. 

Therefore, this library provides a nice way to add, delete and get CSS Rules dynamically. Add and Delete CSS rules are almost functionally identical to element.Classlist.add and element.ClassList.remove methods respectively. (Actually I am not sure whether to use that or deleteRule and addRule methods or what really is the difference).

The power of this is that it can also add CSS properties. The way to do it is to get the CSS rule of a class say (.className), then use JS's inbuilt .style method to change the CSS rule of that class. This is much faster, more elegant, and also removing the style is easier (ClassList.remove as compared to trying to .style back to normal)

I envision using this for user-specifiable animations.
*/
function getCSSRule(ruleName, deleteFlag) {
	ruleName = ruleName.toLowerCase();
	for (i = 0; i < document.styleSheets.length; i++) {
		var styleSheet = document.styleSheets[i];
		var ii = 0;
		var cssRule = false;
		do {
			cssRule = styleSheet.cssRules[ii];
			if (cssRule) {
				if (cssRule.selectorText.toLowerCase() == ruleName) {
					if (deleteFlag == 'delete') {
						styleSheet.deleteRule(ii);
						return true; //
					}
					else {
						return cssRule;
					}
				}
			}
			ii++;
		} while (cssRule)
	}
	return false;
}

function killCSSRule(ruleName) {
	return getCSSRule(ruleName, 'delete');
}

function addCSSRule(ruleName) {
	if (!getCSSRule(ruleName)) { // if rule doesn't exist...
		document.styleSheets[0].insertRule(ruleName + ' { }', 0);
	}
}
return getCSSRule(ruleName);
}

function addCSSPropTo(ruleName, propertyName, property) {
	//Syntax: addCSSPropTo('h2', 'font-size', '4em'); 
	getCSSRule(ruleName);
	cssRule.style.propertyName = property;
}