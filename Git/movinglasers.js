/*------------------- 
a player entity
-------------------------------- */

var MovingLaserEntity = me.ObjectEntity.extend({
 
    /* -----
 
    constructor
 
    ------ */
    init: function(x, y, settings) {
    	 function timer_tick() {
            console.log("timer: " + timerId);
        }     
    	this.lasdelay = 1000;
        // call the constructor
       
        settings.spritewidth = 32;
        settings.spriteheight = 32;
        this.parent(x, y, settings);
        this.animationspeed = 1;
       	this.addAnimation("flickar",[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
        this.previousTime = me.timer.getDelta();
     
      	this.speed = 1;
    	this.vel.x = 1;

       
        this.collidable = true;
        this.setCurrentAnimation("flickar");

        this.type = me.game.ENEMY_OBJECT;	
        
     
        
        //this.setVelocity(10, 20);
        
        // returns current game time
        //this.timeAlive = me.timer.getTime();							
        //me.input.mouse.pos()
    },
    /*onCollision: function(){
    	
    	alert("collided");
    	me.levelDirector.loadlevel("level1");
    	
    },
    */
   
   
   
   onCollision: function(res, obj) {
    	
   },
    /* -----
 
    update the player pos
 
    ------ */
    update: function() {
    	var collision = this.collisionMap.checkCollision(this.collisionBox, this.vel);
		/*
		if (this.vel.x == 0 || this.vel.y == 0){
    		this.setCurrentAnimation("flickaz");
    		this.parent();
    		return true;
    	}
    	*/
    		
		 	this.movLaserTime = me.timer.getDelta() - this.previousTime;
		 		console.log(this.movLaserTime);
    		if(this.movLaserTime >= this.lasdelay){
    			
												// reverse the direction of the bullet
            	this.vel.x = -this.vel.x; 
            	this.movLaserTime = 0;    
         		console.log("Switch Direction");
				
        		me.game.sort();	
          	}

    this.updateMovement();	
 	},
 	
 
 	// this function is called by the engine, when
    // an object is touched by something (here collected)
    
 
 
});

