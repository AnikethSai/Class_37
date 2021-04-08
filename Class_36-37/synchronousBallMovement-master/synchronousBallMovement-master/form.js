class Form{
    constructor(){
this.input = createInput(" ");
this.button = createButton("Play!");
this.greet = createElement("h3");
}
hide(){
    this.input.hide()
    this.button.hide()
    this.greet.hide()
}
    display(){
        var title = createElement("h2")
        title.html("Car Racing Game")
        title.position(200,50);
       
       
        this.input.position(200,100)

        
        this.button.position(200,200);

        
        
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name  = this.input.value();
            playercount +=1 ;
            player.index = playercount;
            player.update()
            player.updateCount(playercount)
            this.greet.html("Hello " + player.name)
            this.greet.position(200,100);
        })

        
    }

}
