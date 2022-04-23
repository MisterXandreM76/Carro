class Player{
    constructor(){
      this.index=null
      this.distance=0
      this.name=null
    }
/////
   getCount(){//Obtener el numero del jugador de la base de datos
      var playerCountRef=database.ref("playerCount")
    playerCountRef.on("value",(data)=>{playerCount=data.val()})    
   } 
/////
   updateCount(count){//Actualiza el numero de jugador en la base de datos
     database.ref("/").update({playerCount:count})   
   }//Termina la funcion Update
/////
    update(){//Actualiza el nombre del juigador en la base de datos
        var playerIndex="players/player"+this.index   
        database.ref(playerIndex).set({name:this.name,distance:this.distance})   
    }
/////
static getPlayerInfo(){
  var playerInfoRef=database.ref("players") 
  playerInfoRef.on("value",(data)=>{allplayers=data.val()})

}
}//Clase Player termina aqui
/////

