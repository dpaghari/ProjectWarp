// Member variable: Hold interval id of the timer
var timerId = "0" + 0;
var timerIdMinutes = 0;
var savedTimerId = 0;
var onPause = false; 
var unPause = true; 

// Declaring class "Timer"
var Timer = function()
{        
    // Property: Frequency of elapse event of the timer in millisecond
    this.Interval = 1000;
    
    // Property: Whether the timer is enable or not
    this.Enable = new Boolean(false);
    
    // Event: Timer tick
    this.Tick;
        
    // Member variable: Hold instance of this class
    var thisObject;
    
    // Function: Start the timer
    this.Start = function()
    {
        this.Enable = new Boolean(true);
        timerId++;
        timerId = "0" + timerId;

        thisObject = this;
        if (thisObject.Enable)
        {
            thisObject.timerId = setInterval(
            function()
            {
                thisObject.Tick(); 
                timerId++;
                if (timerId < 10) {
                    timerId = "0" + timerId;
                }
                if (timerId == 60) {
                    timerIdMinutes = 1;
                    timerId = 0; 
                }
            }, thisObject.Interval);
        }
    };
    
    // Function: Stops the timer
    this.Stop = function()
    {            
        thisObject.Enable = new Boolean(false);
        clearInterval(thisObject.timerId);
        timerId = "";
        timerIdMinutes = "";
    };

    this.onPause = function() {
        savedTimerId = timerId; 
        savedTimerIdMinutes = timerIdMinutes;
        thisObject.Enable = new Boolean(false);
        clearInterval(thisObject.timerId);
        onPause = true; 
    };

    this.unPause = function() {
        timerId = savedTimerId; 
        timerIdMinutes = savedTimerIdMinutes;
        thisObject.Enable = new Boolean(false);
        clearInterval(thisObject.timerId);
        this.Start();
        unPause = true; 
    }

};