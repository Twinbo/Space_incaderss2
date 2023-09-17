let bullets = []
let bulletnr = 0
let aliensLine1 = []
let aliensLine2 = []
let offspringLine1 = []
let offspringLine2 = []
let ship
let ship_0, ship_1, ship_2


// Her er der blevet lavet en function som preloader billederene, så billederene kan blive kaldt på senere hen
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

// I function setup bliver parametrene for selve canvas, background, ship localitation og alliensLines og offspringLines.
function setup() {
    
    createCanvas(500, 500);
    background(0)
    ship = new Ship(width/2-25,height-100);
   
    ship.draw();
// Her er der et forloop, som sætter parametrende for de 2 linjer aliens i forhold til, hvor mange der bliver tegnet.
    for (let i=0; i<5; i++){
        aliensLine1[i]=new Alien(90+70*i,130)
        aliensLine2[i]=new Alien(60+50*i,70)
        // alien = new Alien(width/2-10,20)
        
            
    }

    for (let i=0; i<5; i++){
        offspringLine1[i]=new Offspring(90+70*i,130)
        offspringLine2[i]=new Offspring(60+50*i,70)
    }

   



	
}
// Her bliver alt tegnet, hvor alle tingene bliver kaldt på fra deres forskellige classer.
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
    // Her bliver aliensLinesne tegnet og update hele tiden i for loopen, så de bliver tegnet hver gang de bevæger sig.
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
// I calssen her, blvier alle parameterne for aliens lavet, i forhold til hvordan de bliver tegnet osv.
class Alien{
    // Her bliver start værdierne lavet for alle aliens
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
// koden under sætter parametrende for, hvor på x og y aksen alle aliense bliver tegnet og hvornår de skal skifte mellem billederne i forhold til aliens stage
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
    // koden under gør så at aliensne bevæger sig, hvor de hele tiden il bliver opdatere og det samme med deres lokalisation.
    update(){
        if(this.alive) {
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
// classen under er en nedarving fra classen aliens, hvor den ville have de samme paremter som aliensende og her bliver offspringsne start værdiger også pre difineret.
    class Offspring extends Alien {
        constructor(x, y) {
            super(x, y);//kalder på constructoren fra classen Alien
            this.offspring = true;
            this.offspringStage = 0;
            this.changeStage = 0;
            this.imageChangeDelay = 25;
            this.alive = true;
        }
    /* selve draw metoden er det samme fra aliens, hvor der bare er blevet tilføjet et ekstra bileld, hvilket har haft den betydning at der skulle blive en ny else og if statements
    i forhold til changeStage, så offspringse vil skifte i mellem de forskellige billeder.
    */ 
        draw() {
            if (this.alive && this.offspring) {
                console.log("offspringStage:", this.offspringStage);
                console.log("changeStage:", this.changeStage);
                if (this.changeStage < this.imageChangeDelay) {
                    if (this.offspringStage == 0) {
                        image(offspring_0, this.x, this.y, 70, 90);
                    } else if (this.offspringStage == 1) { // her bil image nr 2 blive tegnet hvis changeStage er lig med 1 eller hvis image nr 3 blive tegnet.
                        image(offspring_1, this.x, this.y, 60, 90);
                    } else {
                        image(offspring_2, this.x, this.y, 50, 90);
                    }
                    this.changeStage++; // her bliver this.changeStage plusset med 1 hele tiden 
                } else { // der bliver lavet en nu else statement for at give changeStaten parameter for, hvornår den skal blive resat, så billederne hele tiden bliver skiftet.
                    this.offspringStage++;
                    if (this.offspringStage > 2) {
                        this.offspringStage = 0;
                    }
                    this.changeStage = 0; // Reset changeStage
                }
            }
        }
    
    update() { // dette er den samme update som classen aliens har.
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
// parametrene for hvad space shipen skal gøre, når en knap er blevet trykket.
function keyPressed() {
   if (keyCode === 32) {
        ship.fire()
    }

}

// I calssen ship bliver alle parametrene for space shipen lavet, så den kan blive kaldt i draw 
class Ship{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.shipStage=0;
        this.changeStage = 0;
    }
// her bliver metoden lavet til hvordan space shipen skal bevæge sig, når piltasterne er blevet trukket.
    move(){
        if (keyIsDown(LEFT_ARROW)){
            this.x-=5;
        }
        if (keyIsDown(RIGHT_ARROW)){
            this.x+=5;
        }
        


    }
    
// I draw metoden bliver parametrerne for at få tegnet space ship sat, hvor det forgår på samme møde som i classen aliens og offsprings.
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
    fire(){ // her bliver parameterne sat for, hvor bulletsne skal blive tenget med x oh y koordinaterne, de bliver skudt. 
        bullets[bulletnr]= new Bullet(this.x+32,this.y)
        bulletnr++;
      //  print(bulletnr)
      //  print(bullets)
    }
}
// I classen bullets bliver parameterne sat for, hvad der skal ske når bulletsne rammer aliens.
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
// I kodene under bliver tjekket flere forskellige parameter for om at bulletsne har ramt en af alliensne.
    hasHit(aliens){
        for (let i=0;i<aliens.length;i++){
            if (aliens[i].alive && this.hasNotHit){
                if (this.x > (aliens[i].x)-3 && this.x < (aliens[i].x)+27 // I if statement tjekker den for bullets x position i forhold til aliens x position
                    && this.y > (aliens[i].y)-3 && this.y < (aliens[i].y)+27){ // det samme gør den for y koordinaterne 
                   // print("true")
                    aliens[i].alive = false; // hvis alle parameterne bliver mødt, så vil alien blive drøbt
                    this.hasNotHit = false; // dette vil sætte hasNotHit til false, fordi at alien er blevet ramt og er derfor ikke i ilive.
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
                    offspring[i].alive = false;
                    this.hasNotHit = false;
                }
            }
        }
    }

}
