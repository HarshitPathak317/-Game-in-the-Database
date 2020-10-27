class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",(data)=>{
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form();
      form.display();
    }
  }
  play(){
    form.hide();
    textSize(30);
    text("Game Start",150,100);
    Player.getPlayerInfo();
    if(allPlayers !== undefined){
     var displaypos = 130;
     for(var plar in allplayers){
       if(plar ==="player"+player.index)
        fill("red");
        else fill("black");
        displaypos+=20;
        textSize(15);
        text(allplayers[plar].name+" : " + allplayers[plar].distance,120,displaypos);       
     }
    }
    if(keyIsDown (UP_ARROW)){
     player.distance+=50;
     player.update();
    }
  }
}