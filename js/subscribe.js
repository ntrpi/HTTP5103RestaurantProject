var errorBackground = "errorBackground";

function setErrorBackground( element )
{
    if( !element.classList.contains( errorBackground) ) {
        element.classList += " " + errorBackground;
    }
}

function removeErrorBackground( element )
{
    if( element.classList.contains( errorBackground ) ) {
        try {
            // Not sure why contains returns true, but then this 
            // throws an exception saying it's not there.
            element.classList.replace( errorBackground, "" );
        } catch( e ) {}
    }
}

window.onload = function()
{
    var subscribeForm = document.forms.subscribeForm;
    var inputElements = Array.from( subscribeForm.elements );
    var validators = {};
    var errorStrings = {};

    var nameInput = subscribeForm.customerName;
    validators[nameInput.id] = function() {
        if( nameInput.value === "" ) {
            setErrorBackground( nameInput );
            return false;
        } else {
            removeErrorBackground( nameInput );
            return true;
        }
    
    }
    errorStrings[nameInput.id] = "Please enter a name.";

    var emailInput = subscribeForm.customerEmail;
    validators[emailInput.id] = function() {
        if( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test( emailInput.value ) ) {
            removeErrorBackground( emailInput );
            return true;
        } else {
            setErrorBackground( emailInput );
            return false;
        }
    }
    errorStrings[emailInput.id] = "Please enter a valid email address.";

    subscribeForm.onsubmit = function() 
    {
        for( var i = 0; i < inputElements.length - 1; i++ ) {
            let id = inputElements[i].id;
            if( !validators[id]() ) {
                alert( errorStrings[id] );
                return false;
            }
        }
        alert( "Thanks for subscribing!" );
        return false;
    }

    inputElements.forEach(element => {
        element.onchange = function() {
            let e = element;
            removeErrorBackground(e);
        }
    } );
        
}