// Declaring class "LevelComplete"
var LevelComplete = function()
{        
    // Function: Start the timer
    this.Draw = function()
    {
        // create a static Sprite Object
        var levelCompleteScreen = new me.SpriteObject (100, 100, me.loader.getImage("LevelComplete"));
    };
    
    // Function: Stops the timer
    this.Destroy = function()
    {            
        thisObject.Enable = new Boolean(false);
        clearInterval(thisObject.timerId);
        timerId = "";
        timerIdMinutes = "";
    };

};