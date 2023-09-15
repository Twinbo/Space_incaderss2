let bullets = []
let bulletnr = 0
let aliensLine1 = []
let aliensLine2 = []
let offspringLine1 = []
let offspringLine2 = []

function preload(){
    ship_0 = loadImage("ressources/Ship0.png");
    ship_1 = loadImage("ressources/Ship1.png");
    ship_2 = loadImage("ressources/Ship2.png");
    alien_0 = loadImage("ressources/Alien0.png");
    alien_1 = loadImage("ressources/Alien1.png");
    offspring_0 = loadImage("ressources/offspring0.png")
    offspring_1 = loadImage("ressources/offspring1.png")
    offspring_2 = loadImage("ressources/offspring2.png")

   
}

let ship
let ship_0, ship_1, ship_2

function setup() {
    
    createCanvas(500, 500);
    background(0)
    ship = new Ship(width/2-25,height-100);
   
    ship.draw();

    for (let i=0; i<5; i++){
        aliensLine1[i]=new Alien(90+70*i,130)
        aliensLine2[i]=new Alien(60+50*i,70)

        
            
    }

    for (let i=0; i<5; i++){
        offspringLine1[i]=new Offspring(90+70*i,130)
        offspringLine2[i]=new Offspring(60+50*i,70)
    }

   // alien = new Alien(width/2-10,20)



	
}

function draw()
{
    background(0)
    ship.draw()
    //alien.draw()
    //alien.update()
    for (let i=0; i< bullets.length; i++){
        bullets[i].draw();
        bullets[i].update();
     //   print("before hasHit")
        bullets[i].hasHit(aliensLine1);
        bullets[i].hasHit(aliensLine2);
      //  print(i)
       // print(bullets.length)
    //    print("after hashit")
     //  bullets[i].hasHit(aliensLine2);

    }
    for (let i=0;i<5;i++){
        aliensLine1[i].draw()
        aliensLine1[i].update()
        aliensLine2[i].draw()
        aliensLine2[i].update()
        
    }
    //print("locationStage "aliensLine1[2].locationStage)
    //print(aliensLine1[2].x)
    //print(aliensLine1[2].y)
    //print(aliensLine1[2].dx)
    //print(aliensLine1[2])
    if (aliensLine1[0].y > height) 
        noLoop()

    for (let i=0;i<5;i++){
        offspringLine1[i].draw()
        offspringLine1[i].update()
        offspringLine2[i].draw()
        offspringLine2[i].update()
    }

    if (offspringLine1[0].y > height)
        noloop()
}

class Alien{
    constructor(x,y){
        this.x = x
        this.y = y
        this.alienStage=0;
        this.changeStage = 0;
        this.alive = true;
        this.locationStage = 0
        this.diff_locationStage = 1
        this.dx = 3
       
    }

    draw(){
        if (this.alive) {
            console.log("alienStage:", this.alienStage);
            console.log("changeStage:", this.changeStage);
            if (this.alienStage == 0){
                image(alien_0,this.x,this.y,60,60);         
            }
            else {
                image(alien_1,this.x,this.y,55,55);
            // this.changeStage++            
            }           
            if (this.changeStage==0){
                this.alienStage++;
                if (this.alienStage > 1)
                    this.alienStage = 0
           }
            this.changeStage++
            if (this.changeStage >5)
                this.changeStage = 0

        }

        
   
    }
    update(){
        if(this,this.alive) {
            this.y +=0.2
        }
        if (this.locationStage == 16 ) {
            this.y+=3
            this.dx = -this.dx
            this.locationStage++
        }
        else if(this.locationStage==48){
            this.y+=3
            this.dx = -this.dx
            this.locationStage = -15    

        }
        else {

        this.x += this.dx
        this.locationStage++
        }

    }



}

    class Offspring extends Alien {
        constructor(x, y) {
            super(x, y);//kalder på constructoren fra classen Alien
            this.offspring = true;
            this.offspringStage = 0;
            this.changeStage = 0;
            this.imageChangeDelay = 25;
        }
    
        draw() {
            if (this.alive && this.offspring) {
                console.log("offspringStage:", this.offspringStage);
                console.log("changeStage:", this.changeStage);
                if (this.changeStage < this.imageChangeDelay) {
                    if (this.offspringStage == 0) {
                        image(offspring_0, this.x, this.y, 70, 90);
                    } else if (this.offspringStage == 1) {
                        image(offspring_1, this.x, this.y, 60, 90);
                    } else {
                        image(offspring_2, this.x, this.y, 50, 90);
                    }
                    this.changeStage++;
                } else {
                    this.offspringStage++;
                    if (this.offspringStage > 2) {
                        this.offspringStage = 0;
                    }
                    this.changeStage = 0; // Reset changeStage
                }
            }
        }
    
    update() {
        if (this.alive) {
            this.y += 0.2;
        }
        if (this.locationStage == 16) {
            this.y += 3;
            this.dx = -this.dx;
            this.locationStage++;
        } else if (this.locationStage == 48) {
            this.y += 3;
            this.dx = -this.dx;
            this.locationStage = -15;
        } else {
            this.x += this.dx;
            this.locationStage++;
        }
    }
}

function keyPressed() {
   if (keyCode === 32) {
        ship.fire()
    }

}


class Ship{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.shipStage=0;
        this.changeStage = 0;
    }

    move(){
        if (keyIsDown(LEFT_ARROW)){
            this.x-=5;
        }
        if (keyIsDown(RIGHT_ARROW)){
            this.x+=5;
        }
        


    }
    

    draw(){
        this.move()
        if (this.shipStage == 0){
            image(ship_0,this.x,this.y);
           // this.changeStage++
        }
        else if (this.shipStage == 1){
            image(ship_1,this.x,this.y);
           // this.changeStage++
        }
        else {
            image(ship_2,this.x,this.y);
            
        }

        
        if (this.changeStage==0){
            this.shipStage++;
            if (this.shipStage > 2)
                this.shipStage = 0

            
        
            
        }
        this.changeStage++
        if (this.changeStage >5)
            this.changeStage = 0
      
        



       

    }
    fire(){
        bullets[bulletnr]= new Bullet(this.x+32,this.y)
        bulletnr++;
      //  print(bulletnr)
      //  print(bullets)
    }
}

class Bullet{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.hasNotHit = true;
        
    }

    draw(){
        if(this.hasNotHit){
            fill(255,0,0)
            circle(this.x,this.y,7.5)
        }
    }

    update(){
        //Bullets skal flytte sig to op ad gangen. Ellers er den for langsom
        this.y-=2
    }

    hasHit(aliens){
        for (let i=0;i<aliens.length;i++){
            if (aliens[i].alive && this.hasNotHit){
                if (this.x > (aliens[i].x)-3 && this.x < (aliens[i].x)+27
                    && this.y > (aliens[i].y)-3 && this.y < (aliens[i].y)+27){
                   // print("true")
                    aliens[i].alive = false;
                    this.hasNotHit = false;
                }
            }
        }
    }

    hasHit(offspring){
        for (let i=0;i<offspring.length;i++){
            if (offspring[i].alive && this.hasNotHit){
                if (this.x > (offspring[i].x)-3 && this.x < (offspring[i].x)+27
                    && this.y > (offspring[i].y)-3 && this.y < (offspring[i].y)+27){
                   // print("true")
                    offspring[i].offspring = false;
                    this.hasNotHit = false;
                }
            }
        }
    }

}
