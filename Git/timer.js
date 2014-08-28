// Member variable: Hold interval id of the timer
var timerId = 0;
var maxTime;
// Declaring class "Timer"
var Timer = function(maxTime)
{        
    // Property: Frequency of elapse event of the timer in millisecond
    this.Interval = 1000;
    this.maxT = maxTime;
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

        thisObject = this;
        if (thisObject.Enable)
        {
            thisObject.timerId = setInterval(
            function()
            {
                thisObject.Tick(); 
                timerId++;
            }, thisObject.Interval);
        }
    };
    
    // Function: Stops the timer
    this.Stop = function()
    {            
        thisObject.Enable = new Boolean(false);
        clearInterval(thisObject.timerId);
        timerId = "";
    };
    
    this.isFinished = function(){
    	
    	if(timerId >= this.maxT ){
    		timerId = this.maxT;
    		this.Stop();
    		return true;
    	}
    	else{
    		return false;
    	}
    	
    }
    

};