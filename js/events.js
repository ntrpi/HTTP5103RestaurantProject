var errorBackground = "errorBackground";

function setErrorBackground( element )
{
    if( !element.classList.contains( errorBackground) ) {
        element.classList += " " + errorBackground;
    }
}

function removeErrorBackground( element )
{
    if( element.classList.contains( errorBackground) ) {
        try {
            // Not sure why contains returns true, but then this 
            // throws an exception saying it's not there.
            element.classList.replace( errorBackground, "" );
        } catch( e ) {}
    }
}

var earliestHour = "12";

window.onload = function()
{
    var now = new Date().getHours() + 2;
    if( now > earliestHour ) {
        earliestHour = now;
    }

    var eventForm = document.forms.eventForm;
    var inputElements = Array.from( eventForm.elements );
    var validators = {};
    var errorStrings = {};

    var nameInput = eventForm.customerName;
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

    var emailInput = eventForm.customerEmail;
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

    var phoneInput = eventForm.customerPhone;
    validators[phoneInput.id] = function() {
        if( /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test( phoneInput.value ) ) {
            removeErrorBackground( phoneInput );
            return true;
        } else {
            setErrorBackground( phoneInput );
            return false;
        }
    }
    errorStrings[phoneInput.id] = "Please enter a valid phone number.";

    var dateInput = eventForm.datePicker;
    validators[dateInput.id] = function() {
        if( !dateInput.value ) {
            setErrorBackground( dateInput );
            return false;
        }

        var date = new Date( dateInput.value );
        date.setDate( date.getDate() + 1 );
        var today = new Date();
        if( date.getDate() < today.getDate() ) {
            setErrorBackground( dateInput );
            return false;
        } else {
            removeErrorBackground( dateInput );
            return true;
        }
    }
    errorStrings[dateInput.id] = "Please enter a date not in the past.";

    var timeInput = eventForm.timePicker;
    validators[timeInput.id] = function() {
        if( !timeInput.value ) {
            setErrorBackground( timeInput );
            return false;
        }

        var times = timeInput.value.split( ":" ); 
        var hour = times[0];
        // Validate against opening time.
        if( hour < 12 ) {
            errorStrings[timeInput.id] = "The earliest we can book an event is at 12:00.";
            setErrorBackground( timeInput );
            return false;
        }

        var now = new Date();
        var nowHours = now.getHours();
        if( hour <= nowHours ||
            ( hour == nowHours + 1 && times[1] < now.getMinutes() ) ) {
            setErrorBackground( timeInput );
            return false;

        } else {
            removeErrorBackground( timeInput );
            return true;
        }
    }
    errorStrings[timeInput.id] = "The earliest we can book an event is an hour from now.";

    eventForm.onsubmit = function() 
    {
        for( var i = 0; i < inputElements.length - 1; i++ ) {
            let id = inputElements[i].id;
            if( !validators[id]() ) {
                alert( errorStrings[id] );
                return false;
            }
        }
        alert( "Thanks for booking your event with us! You will receive an email confirming your event within 24 hours." );
        return false;
    }

    inputElements.forEach(element => {
        element.onchange = function() {
            let e = element;
            removeErrorBackground(e);
        }
    } );
        
}