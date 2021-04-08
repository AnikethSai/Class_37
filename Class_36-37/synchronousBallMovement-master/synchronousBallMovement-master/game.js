class Game{
    constructor(){
        
    }

    getState(){
    var gsref = database.ref("gamestate")
    gsref.on("value",function(data){
   gamestate = data.val()
    })
    }
    update(state){
        database.ref("/").update({
            gamestate : state
        })
    }
    async start(){
        if(gamestate === 0){
            player = new Player();
            var pcref = await database.ref("playercount").once("value")
            if (pcref.exists()){
               playercount = pcref.val()
               player.getCount()
            } 
            
            form = new Form()
            form.display()
        }
    }
    play(){
    form.hide();
    text("Game here",200,200)
    Player.allPlayersInfo()
    if(allplayers !== indefined){
        var displayPosition = 100
        for(var plr in allplayers  ){
            if(plr === "player" + player.index){
                fill("red");

            }
            else{
                fill("black");
            } 
            diplayPosition += 20;   
            text(allplayers[plr].name + ": " + allplayers[plr].distance,120,displayPosition)    
        }
    }
    
    if(keyIsDown(UP_ARROW) && player.index !== null){
    player.distance += 50;
    player.update()
    }
}

}
