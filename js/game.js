class Game{
    constructor(){


    }

    getState(){
        var gameStateRef= database.ref('gameState');
        gameStateRef.on("value",(data)=>{
            gameState=data.val();
        })
        


    }

    update(state){

        database.ref('/').update({
            gameState:state

        })

    }

    async start(){
        if(gameState===0){
            player=new Player();
            var playerCountRef=await database.ref('playerCount').once("value");

            if(playerCountRef.exists()){

                playerCount=playerCountRef.val();
                player.getCount();
            }
            
            form=new Form();
            form.display();
        }

        
        bg=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
        bg.scale=3;
        bg.addImage(gg1);

        
    }
    play(){

        form.hide();
        //textSize(30);
        //text("GAME START",120,100);
        Player.getPlayerInfo();
        Player.getCarsAtEnd();
        

        
            //var display_position=130;

            //image(gg1,displayWidth/16,displayHeight/16,displayWidth,displayHeight);
            iground=createSprite(displayWidth/2,displayHeight-250,displayWidth,20);
        car1=createSprite(100,700);
        //car1.addImage("car1",car1_img);
        car2=createSprite(300,700);
        //car2.addImage("car2",car2_img);
        car3=createSprite(500,700);
        //car3.addImage("car3",car3_img);
        car4=createSprite(700,700);
        //car4.addImage("car4",car4_img);

        cars=[car1,car2,car3,car4];

        if(keyDown(LEFT_ARROW)){
            writePosition(-1,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            writePosition(1,0);
        }
        else if(keyDown(UP_ARROW)){
            writePosition(0,-1);
        }
        else if(keyDown(DOWN_ARROW)){
            writePosition(0,+1);
        }

       // var playerPosition=database.ref('players/player');
 //  playerPosition.on("value",readPosition,showError);

        drawSprites();

                //var index=0;
                //var x=175;
                //var y;


            //for(var plr in allPlayers){

             //   index=index+1;

              //  x=x+200;

               // y=displayHeight-allPlayers[plr].distance;
                
               // cars[index-1].x=x;
              //  cars[index-1].y=y;

                


               // if(plr==="player"+player.index)
                //fill("red");
                //else
                //fill("black");

               // display_position+=30;
                //textSize(15);
                //text(allPlayers[plr].name+" : "+allPlayers[plr].distance,120,display_position)

                
            //}
        //}

        /*if(keyDown("UP_ARROW")&&player.index!==null){

            player.distance+=50;
            player.update();
        }

if(player.distance>5000){

    gameState=2;
    Player.rank+=1;
    Player.updateCarsAtEnd(Player.rank);
   // game.update(2);
}

        
    }

end(){

    console.log("gameEnded");
    console.log(Player.rank);
    //game.update(2);
   // drawSprites();
*/

}
 writePosition(x,y){
    var playerIndex="players/player"+player.index;
    database.ref('playerIndex').set({
        'x':position.x+x,
        'y':position.y+y
    })
}

 readPosition(data){

    position=data.val();
    player.x=position.x;
    player.y=position.y;
}

 showError(){

    console.log("error in writing to the database");
}

}
