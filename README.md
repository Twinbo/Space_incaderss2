# Space_incaderss2
I starten havde jeg meget problemer med mit git, så jeg startede med at bruge meget tid på at få det op og køre. Efter jeg havde fået det til at virker efter utalige kampe, så lavede jeg grafisk desgin til min Aliens og paceship.
Efter jeg havde fået designet dem, så fik jeg inplimanteret dem i den givende kode som vi havde fået og da jeg fik dem til at virke i programmet, så gik jeg videre til næste skridt. 
Næste skridt var så at få lavet nedarving, her støtte jeg f.eks. ind på mange problemer og forvirring, hvordan jeg skulle få integeret nedarving. F.eks. støtte jeg på problemer med at få dem tegnet, hvor jeg fadnt ud af at jeg havde glemt at diffinerene viablerne for min nedarving i form af et arrey.
Da jeg havde fået lavet forløkkerne for min nedarving af classen Aliens i form af de parametre de skulle blive tegnet som, så kunne jeg stadig ikke få dem tegnet og det var først da jeg fik implateret en update inde i min nedarving classe at jeg kunne få den tegnet.
Men her støtte jeg så ind på nye problemer, som der gjorde at min nedarvings classe (offspring) ikke ville cyrkulere rundt med de forskellige imiges, så fandt jeg ud af at jeg skulle lave en else og if statementes i forhold til offspringStage, som der ville sætte parameterne for hvornår den ville skifte imellem bidllederne. Her skulle jeg også få implamenteret at ved en hvis værdig, skulle den changStage være lig emd 0, for at resetete skiftnignen mellem billederne.
Da jeg endelig fik det til at virke, med at mine offspring blev tegnet og de skiftede mellem billederne, så begyndte jeg på at se om jeg kunne få deres hasHit metode til at virke, hvilket jeg stadig ikke har fpet til at virker, hvor jeg sidder fast ved det punkt, så nu er det kun mine aliens som der kan skudt og dræbt.

Jeg syntes den kode der står nedunder er svær at gennemskue, hvad der foregår, men udmiddelbart, så starter koden med et for loop, som der går igennem aliens arrays længde, hvilket også vil være aliens liv.
Efter for loopen, så kommer der en if statement, som der tjekker om at alien er alive ved at gå igennem dens arrey, hvor den derefter tjekker om den er blevet ramt.
I det andet if statement tjekker den også 2 forskellige parametrer fra både x og y koordinatterne, f.eks. starten den med at tjekke den om x postitionen for bulletsne er størrer end aliens x position og minuser den værdig med 3 og efter tjekker den det samme, bare hvor den tjekker om x positionen et mindre end aliens x coordinat plus 27. Dette gør if statementet så også for y på den samme møde.
Det vil sige hvis alle disse parametrer bliver mødt, så bliver aliens[i].alive sat til at være false, som indikere at den er blevet ramt er og død og det samme sker for this.hasNotHit bliver også lig med false, fordi så er alien blevet ramt. 

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

Jeg ved ikke lige, hvordan jeg skal lave en tabel med i forhold til test af programmet, så har bare lagt et link in til billedet, lægger også selve diagramet i pdf'en.
Når man tester et program, så kan man aldrgi bedømme om det virker eller ej, for der kan altid være fejl som der gemmer sig.
Dog hovedfunktioner i programmet virker til at fungere nogen lunde, f.eks. kan jeg bevæge space sipet og skyde, hvor jeg dog kun kan dræbe halvdelen af alle aliens, hvor den anden halvdels hitboks ikke funkgere.
På grund af at ikke alt som der blevet forvenetet var det der skete, så vil det betyde at spillet ikke bestod testen.
![image](https://github.com/Twinbo/Space_incaderss2/assets/142229154/47b0701f-3f1c-4efe-90d0-1f48530cc646)
    
