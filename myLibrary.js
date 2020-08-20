function isTouching() {
    if(object_1.x-object_2.x < object_1.width/2+object_2.width/2 && object_2.x-object_1.x <object_1.width/2+object_2.width/2
    && object_1.y-object_2.y < object_1.height/2+object_2.height/2 && object_2.y-object_1.y <object_1.height/2+object_2.height/2
    ) {
    object_1.shapeColor = "red";
    object_2.shapeColor = "red";
    
    
    
    }
    
    else{
      object_1.shapeColor = "green";
      object_2.shapeColor = "green";
      
    }
    
    }
    function bounce(){
      if(object_3.x-object_4.x < object_3.width/2+object_4.width/2 && object_4.x-object_3.x <object_4.width/2+object_3.width/2){
        object_3.velocityX = object_3.velocityX *(-1);
        object_4.velocityX = object_4.velocityX *(-1);
      }
      if(object_5.y-object_6.y < object_5.height/2+object_6.height/2 && object_6.y-object_5.y <object_5.height/2+object_6.height/2){
        object_5.velocityY = object_5.velocityY *(-1);
        object_6.velocityY = object_6.velocityY *(-1);
    
    
    
    
      }
    
    }