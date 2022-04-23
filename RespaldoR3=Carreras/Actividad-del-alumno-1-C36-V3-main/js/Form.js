class Form{
  constructor(){
  this.input=createInput("Su nombre porfavor")
    this.button=createButton("Lets Start")
    this.title=createElement("h1")
    this.wellcome=createElement("h2")
    
  }
////
hide(){
  this.wellcome.hide();
  this.button.hide();
  this.title.hide();
  this.input.hide();
}
////
display(){
  this.input=createInput("Su nombre porfavor")
  this.button=createButton("Lets Start")
  this.title=createElement("h1")
  this.wellcome=createElement("h2")
  this.title.html("Carros_ElJuego")
  this.title.position(width/2,20)
  this.input.position(width/2,150)
  this.button.position(width/2,200)

  this.button.mousePressed(()=>{
  this.input.hide()
  this.button.hide()
  player1.name=this.input.value()
  playerCount=+1
  player1.index=playerCount
  player1.update()
  player1.updateCount(playerCount)
  this.wellcome.html("Hola! " + player1.name)
  this.wellcome.position(width/2,height/2)
  
  })
}
}