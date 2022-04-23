class Game{
    constructor(){}

      getState(){//Obtener el estado del juego de la base de datos
        var gameStateRef=database.ref("gameState")
        gameStateRef.on("value",function(data){gameState=data.val()})
      }//fin de la función getCount
/////
      update(state){
        database.ref("/").update({gameState:state})  
      }//fin de update  
      
      async start(){
        if(gameState===0){
          player1=new Player()
          var playerCountRef=await database.ref("playerCount").once("value")
            if(playerCountRef.exists()){
              playerCount=playerCountRef.val()
              player1.getCount()
            }
          form1=new Form()
          form1.display()
        }
      }
//////
play(){
  form1.hide()
  Player.getPlayerInfo()
    if (allplayers!==undefined){
      var index=0
      var displayPosition=150
      for(var i in allplayers){
        index=+1
        if (index===player1.index){
         fill("red") 
        }
        displayaPosition+=20
      }
    }

    if (keyDown(UP_ARROW) && player1.index!==null){
      player1.distance+=50
      player1.update()
    }
  }
}//fin de la clase game
