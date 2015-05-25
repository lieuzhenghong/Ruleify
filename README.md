# Ruleify

What is a CSS Rule? A CSS Rule is just a selector.

    rule.get( ruleName ) //returns the rule
    //rule.get ('h2');
    rule.add( ruleName ) //adds a CSS rule called ruleName
    rule.kill( ruleName) //removes a CSS rule called ruleName
    rule.prop ( ruleName, propertyName, property) // adds a property to a rule
    // rule.prop('h2', 'font-size', '4em');

Example: adding an animatable property to an element.

    rule.add( '.animated' );
    rule.prop( '.animated', '-webkit-transition', '2s');
    rule.prop( '.animated', 'transform-y', '45deg');

The power of Ruleify is that, you can make user-specifiable, customised animations.

    if (userWants == '45deg') { var deg = '45deg'; }
    else { var deg = '90deg'; }
    rule.prop( '.animated', 'transform-y', deg);

Tadah!
