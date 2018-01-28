var ships = [
    /*
    ["F.R.E.E. Chest",Math.random(1,15),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false],
    ["F.R.E.E. Gold",Math.random(1,15),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false],
    ["F.R.E.E. Money",Math.random(1,15),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false],
    ["F.R.E.E. Riches",Math.random(1,15),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false],
    ["F.R.E.E. Coins",Math.random(1,15),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false],
    ["F.R.E.E. Cash",Math.random(1,15),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false],
    ["F.R.E.E. Doubloons",Math.random(1,15),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false],
    ["F.R.E.E. Money",Math.random(1,15),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false],
    */
    
    ["T.U.T. Orial", 15, ["Type Shuttle", "Tutorial Class", "Plasma Leaks", "Starboard Nacelle Offline", "Injured Crew"], 5, false],//name,gold,status, power, destroyed
    ["T.U.T. Rubble", 20, ["Type Frigate", "Tutorial Class", "Plasma Leaks-", "Damaged Hull", "Mostly Dead Crew"], 12, false],
    ["T.U.T. Begger", 10, ["Type Shuttle", "Tutorial Class", "Unarmed", "Un-armored", "Dead crew"], 1, false],
    ["T.U.T. Weaper", 40, ["Type Shuttle", "Tutorial Class", "Full of Cargo", "Main Reactor Offline", "Injured Crew", "Partial Weapons"], 12, false],
    ["T.U.T. Doomed", 3, ["Type Shuttle", "Tutorial Class", "Airtight via Elmer's Glue", "Weapons consist of Paper Planes", "Lego Controls"], 1, false],
    ["T.U.T. Trade", 20, ["Type Frigate", "Tutorial Class", "Holographic Crew Online", "Aft nonexistant (flaw in design)", "Mostly Dead Crew"], 12, false],
    ["T.U.T. Sacrificial Ship", 10, ["Type Shuttle", "Tutorial Class", "Unarmed", "Un-armored", ""], 1, false],
    ["T.U.T. Scrap Heap", 40, ["Type Shuttle", "Tutorial Class", "Thrown Together", "Constructed", "Injured Crew", "Partial Weapons"], 8, false],
    ["T.U.T. Forager", 10, ["Type Shuttle", "Tutorial Class", "Unarmed", "Fast Engines", "Scanners for Weapons"], 5, false],
    ["T.U.T. Junker", 30, ["Type Shuttle", "Tutorial Class", "Thrown Together", "Constructed Quickly", "Civilian Crew"], 10, false],
    ["T.U.T. Powerless", 5, ["Type Shuttle", "Tutorial Class", "Unarmed", "Un-armored", "Unmanned"], 1, false],
    ["T.U.T. Vulture", 80, ["Type Shuttle", "Tutorial Class", "Full of Cargo", "Low Grade Engine", "Destroyed Armor", "Partial Weapons"], 15, false],
    ["T.U.T. Scrapper", 80, ["Type Frigate", "Tutorial Class", "Full of Cargo", "Scraper Gun", "Civilian Crew", "Hull Intact"], 17, false],
    
    ["A.U.R. Seeker", 40, ["Type Light Scout", "Auran Ship", "Type I Armour", "Vector Probe Weaponry", "Cheap Plasma Conduits", "Microfracture Problem"], 30, false],
    ["A.U.R. Starstruck", 80, ["Type Light Escort", "Auran Ship", "Type 2 Armour", "Vector Probe Weaponry", "Microfracture Problem"], 35, false],
    ["A.U.R. Stirm", 120, ["Type Heavy Shuttle", "Auran Ship", "Type 2 Armour", "Rotating Vector Probe Weaponry", "Microfracture Problem"], 45, false],
    ["A.U.R. Soaking", 50, ["Type Armoured Protector", "Auran Ship", "Type 4 Armour", "Salvaged Particle Weapons", "Microfracture PRoblem"], 120, false],
    ["A.U.R. Septober", 160, ["Type Luxury Escort", "Auran Ship", "Type 1 Armour", "Basic Plasma Projectiles", "Cheap Plasma Conduits", "Microfracture Problem"], 60, false],
    ["A.U.R. Sonic", 20, ["Type Light Shuttle", "Auran Ship", "Auto Point Defense Weaponry", "\"Child's First Starship\"", "Detecting 1 Lifeform", "En Route to Auran Prime", "Nearby Reinforcements", "Microfracture Problem"], 10, false],
    ["A.U.R. Sinking", 40, ["Type Gunship", "Auran Ship", "Rotating Vector Probe Weaponry", "Type 2 Armour", "Microfracture Problem"], 20, false],
    ["A.U.R. Canyon", 60, ["Type Personal Travel Ship", "Auran Ship", "Detecting 4 Lifeforms", "Point Defense Weaponry", "En Route to Jeranix Camping Grounds", "Microfracture Problem",false], 20, false],
    ["A.U.R. Stampede", 20, ["Type Transport", "Auran Ship", "Detecting 139 livestock", "En Route to Shopping Mall", "Point Defense Weaponry", "Microfracture Problem"], 40, false],
    ["A.U.R. Sight", 5, ["Type High-Risk Transport", "Auran Ship", "Detecting 40 known criminals", "En Route to Eternal Prison Camps on Herilict IV", "Type 5 Armour", "Microfracture problem"], 60, false],
    
    ["R.G.B. The Showroom", 250, ["Type Mobile Gallery", "Artistic Alliance ship", "Detecting 138 different famous works of art", "Medium laser weapons", "Medium armor"], 165, false],
    ["R.G.B. Transport", 175, ["Type Gallery Delivery", "Artistic Alliance ship", "Detecting 16 different famous works of art", "Light laser weapons", "light armor"], 75, false],
    ["R.G.B. Artists den", 120, ["Type Gallery Delivery", "Artistic Alliance ship", "Detecting 3 different famous artists", "One Gaurd for Protection", "light armor"], 50, false],
    
    ["N.B.L. California Dreamer", 135, ["Type Frigate", "Nobles Ship", "Light Lasers", "Light Armor","Lots of crew"], 100, false],
    ["N.B.L. Dream Breaker",145,["Type Frigate","Nobles Ship","Medium Weapons, Light armor","Tons of crew"],145,false],
    ["N.B.L. Destructions Eve", 150, ["Type Heavy Frigate", "Nobles Ship", "Medium Armor", "Medium Weapons","Lots of crew"], 165, false],
    ["N.B.L. SweetDreams",125,["Type Gunship","Nobles Ship","light Weapons","Light armor","Tons of crew","Light hull damage"],100,false],
    ["N.B.L. Sultan's Swing",140,["Type Heavy Gunship","Nobles Ship","Heavy Lasers","no armor","Tons of crew"],120,false],
    ["N.B.L. Sunwalker",130,["Type Frigate","Nobles Ship","Medium Lasers","no armor","Tons of crew","Light hull damage"],95,false],
    ["N.B.L. Major Tom",115,["Type Light Gunship","Nobles Ship","Medium Lasers","Medium Armor","One Crew","Severe hull damage"],80,false],
    
    ["D.A.R. Spire", 150,["Type Heavy Gunship","Darkmoore Ship","Heavy lasers","Heavy armor","Unskilled Crew"],195,false],
    ["D.A.R. Reaper", 185,["Type Light Destroyer","Darkmoore Ship","Heavy lasers","Heavy armor","Medium Tracking Missles","Unskilled Crew"],215,false],
    ["D.A.R. Eclipse", 200,["Type Light Battleship","Darkmoore Ship","Very Heavy lasers","Very Heavy armor","Hundreds of Fighters","Skilled Crew"],250,false],
    ["D.A.R. Shadow", 175,["Type Heavy Gunship","Darkmoore Ship","Medium lasers","Heavy armor","Cloaking Drive","Unskilled Crew"],195,false],
    ["D.A.R. Spike", 145,["Type Frigate","Darkmoore Ship","Medium lasers","Heavy armor","Unskilled Crew"],185,false],
    ["D.A.R. Darkness", 180,["Type Light Destroyer","Darkmoore Ship","Powerfull Boarding Troops","Heavy armor","Skilled Crew"],215,false],
    
    ["N.A.S. Orion", 2000, ["Type Light Cruiser", "Neptunian Armada", "Adaptive Armourments", "Wormhole Technology", "Skilled Crew", "Adaptive Shielding"], 10000, false],
    ["N.A.S. Blue Heart", 40000, ["Type Mothership", "Neptunian Armada", "High Density Adaptive Armourments", "Close-by reinforcements", "Multi-Phasic Adaptive Shielding", "Wormhole Technology"], 50000, false]
];
/*
 *We are in probably going to want to make prices increase dramatically,
 *this way getting stuff as a newcomer is easy but the higher you get the
 *harder it is to upgrade.
 **/
var shop = [
    //45549 Total cost
    //16288 End Power
    ["4 leaf clover",1,1,"Makes you a tiny bit more lucky, thats it",false],
    ["Pebble Slingshot",2,2,"Exactly what is sounds like",false],
    ["Hand laser",7,3,"a small laser you strap to the front of your craft",false],
    ["Hand phaser",8,4,"A cheap hand phaser you attach with duct tape",false],
    ["Light Laser",10,5,"A light laser weapon to damage unarmored targets", false],
    ["Heavy hand phaser",12,6,"A heavy hand weapon you put on your craft", false],//Name, Cost,Power,Disc,bought
    ["Plasma ball",15,7,"A weak plasma ball",false],
    ["Light Laser",18,8,"A light laser weapon to damage unarmored targets", false],
    ["Old Shield System",20,9,"A small 2nd hand shield system",false],
    ["Powerbolt!",23,10,"We swear it it not just a tesla coil!",false],
    ["Swarm Rocket",25,11,"Not to be confused with a swarm rocket pod, this is just one",false],
    ["Tribble Cannon",27,12,"A fuzzly little distraction! Of course theese ones eat up hull",false],
    ["The Master of Blaster",32,13,"A light little drone toy with a hand blaster attached to it",false],
    ["Tachyon Beam",35,15,"A Light Beam of tachyons",false],
    ["Heat gun",40,17,"Heats up armor weakening it",false],
    ["Mines",45,20,"old naval mines adapted to work in space",false],
    ["Old Moses",50,27,"An old 16th century cannon adapted to be a powerfull ship cannon",false],
    ["Small Missle",55,30,"A Deployable missle",false],
    ["Radiation blaster",85,35,"Blast your foes with a birst thats fulla radiation!!!",false],
    ["Ray gun blaster",90,37, "For those who have imaginations stuck in the 20th century",false],
    ["Medium Laser array",100,40,"A medium laser weapon to damage light armor",false],
    ["Tractor Shreder",125,35,"Destroyes ships with a tractor beam by attempting to shred the ship",false],
    ["Light Phaser",135,35,"A very small phaser array",false],
    ["Slugger",175,45,"A large 20th century deck gun from a battleship, Retrofitted to work in space",false],
    ["Medium Armor",180,50,"Meduim Civilian Armor Plates",false],
    ["Light shield",200,55,"A small shield to absorb some damage",false],
    ["Heavy Laser",210,60,"Heavy duty laser to take out medium armor",false],
    ["''Sabo'' the robot",220,65,"A Bot with an attitude! He digs into ships and cuts them open from the inside!",false],
    ["Meduim Phaser",275,75,"A phaser to do large damage to light armor",false],
    ["Boarding shuttles",300,85,"Allows more boarding",false],
    ["Grinder",320,100,"Some spinny spikes for the front of your ship, fun for the whole famaly",false],
    ["Net gun",400,110,"fires a very, very big net",false],
    ["Heavy Armor",405,120,"Heavy armor to allow a ship to last longer in a fight",false],
    ["Swarm Pod",410,125,"A pod of 16 rapid fire swarm missles",false],
    ["Heavy Missle",420,130,"A heavy missle to destroy medium sized ships",false],
    ["Meduim Shield",500,140,"A Meduim Grade shield to make bullets bounce of your ship",false],
    ["Small Nuclear Missle",510,145,"Weak little nuclear missle",false],
    ["Reactor Beam",525,150,"Releases a large blast of engine power to disable ships",false],
    ["Heavy Shield",1000,275,"A heavy duty shield that is neigh on inpenetrable",false],
    ["Nuclear Missle",1150,285,"A powerfull missle to damage and iradiate ships",false],
    ["Heavy Phaser",1250,300,"A Powerfull phaser to incenerate ships",false],
    ["Quantum Mine",1300,325,"A Damaging Quantum mechanics powered Mine to do alot of damage to ships",false],
    ["Super Nuclear Fusion Missle",1350,350,"A Devistating weapon that can destroy large sections of ships",false],
    ["Photon Torpido",1800,400,"A Destructive missle that can destroy asteroids in a single shot",false],
    ["Vector Probe Launcher",2500,600,"Launches a couple probes to do lots damage from different angles",false],
    ["Multivector Assult System",2750,680,"Splits the ship allowing for better angles of attack",false],
    ["Fighter Squadron",3000,720,"A squadron of fighters that you deploy to defend yourself",false],
    ["Cloak",3250,780,"A cloak to make your ship vanish so you can get the jump on enimies",false],
    ["Mini Black Hole missle",3350,800,"A missle that slams particles together to make a mini black hole that decays near instantly",false],
    ["Photonic Cannon",4500,950,"ARM THE PHOTONIC CANNON",false],
    ["Adaptive shield",10000,5000,"While expensive it makes your ship practicly invunerable",false],
    ["Adaptive Weapon System",12500,5500,"While expensive it is a weapon of godly power",false],
    ["Hood Orniment",20000,0,"There is only one like it! Its rare! Its valuable! It doesnt do anything,",false],
    ["Trophy",1,0,"For those who can not get one legitly, decorative",false],
    ["1 Cubic meter of Dirt",3500,0,"Its overpriced and does nothing, but you'll buy it just to clean out the shop, how sad...",false],
    ["Modern art",4500,0,"Its overpriced and does nothing, it a red dot on a white canvas. thats it, does nothign for your ship",false],
];
var noscope = false;
var letters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()_+=-[]{}\|\\\"':;/?.>,<";
var gold = 10;
var scanned = [];
var surveying = 0;
var scalar=false;
var tut = true;
var strength = 15;
var difficulty = 1;
var trueblue = 0;
var maxscan = (Math.ceil(Math.log(strength)/Math.log(2)));//4 for 10-19 or so
var light, med, heavy;
var offence = 0;
var failstate = 0;//When you lose, you lose forever
/*global print*/
/*global getInput*/
/*global output*/
print("Hello, welcome to your new job");
print("You will be required to assess risk of and raid other starships");
print("Type scan to get started");
getInput(game, "Type 'Scan'");

function game() {
    output.innerHTML = "";
    print("You have " + gold + " gold and " + strength + " power quotient.");
    var comm = input.value;
    input.value = "";
    console.log(comm);
    if (comm.toLowerCase() == "scan") {
        scanned = [];
        maxscan = (Math.ceil(Math.log(strength)/Math.log(2)))
        for (var x = 0; x < maxscan; x++) {
            console.log(x);
            scanned.push(ships[Math.floor(Math.random() * ships.length)]);
            for(var y = 0; y < scanned.length-1; y++) {
                if (scanned[y] == scanned[x]){
                    console.log("already has " + scanned[x][0]);
                    scanned.splice(x, 1,["Nothing",0,["You Have just scanned empty space","Why would you scan empty space","Your scans *surprisingly* did not come up with anything","There is literaly nothing here"],1,false]);
                }
            }
        }
        
        //cleanup
        for(var x = 0; x < scanned.length; x++) {
            if(scanned[x][4]==true) {
                console.log("already raided " + scanned[x][0]);
                scanned.splice(x, 1,["Nothing",0,["You Have just scanned empty space","Why would you scan empty space","Your scans *surprisingly* did not come up with anything","There is literaly nothing here"],1,false]);
            }
        }
        
        print("There are " + (scanned.length+1) + " ships in range:");
        print("0 - Interstellar Shopping Mall");
        for (var x = 0; x < scanned.length; x++) {
            print((x+1) + " - " + scanned[x][0]);
        }
        print("<->");
        print("Type what starship number you wish to survey");
    } else if (parseFloat(comm) >= 0) {//if it is a number
        surveying = parseFloat(comm)-1;
        if(parseFloat(comm)==0){
            output.innerHTML = "";
            print("Trade - Enter The shop");
            print("Menu  - Go to an intergalactic terminal")
            print("Raid  - Raid the Shop");
            print("Back  - Leave the shop");
            getInput(shopping, "Shop");
        }else{
            output.innerHTML = "";
            print("Surveying " + scanned[surveying][0]);
            print("Type a Command");
            print("Scan - get detailed readings");
            print("Raid - try to plunder the starship");
            print("Back - Retreat from Ship");
            getInput(survey, "Surveying");
        }
            
    }else{
        print("''"+comm+"'' is not a command, try typing ''scan'' ")
    }
    
}

function randomship(diff){
    var rgold=Math.ceil(Math.random()*diff)
    ships.push(["R.A.N. "+letters[Math.floor(Math.random()*letters.length)]+letters[Math.floor(Math.random()*letters.length)]+letters[Math.floor(Math.random()*letters.length)]+letters[Math.floor(Math.random()*letters.length)]+letters[Math.floor(Math.random()*letters.length)]+letters[Math.floor(Math.random()*letters.length)]+letters[Math.floor(Math.random()*letters.length)]+letters[Math.floor(Math.random()*letters.length)]+letters[Math.floor(Math.random()*letters.length)]+letters[Math.floor(Math.random()*letters.length)]+letters[Math.floor(Math.random()*letters.length)]+letters[Math.floor(Math.random()*letters.length)]+letters[Math.floor(Math.random()*letters.length)]+letters[Math.floor(Math.random()*letters.length)]+letters[Math.floor(Math.random()*letters.length)]+letters[Math.floor(Math.random()*letters.length)]+letters[Math.floor(Math.random()*letters.length)]+letters[Math.floor(Math.random()*letters.length)]+letters[Math.floor(Math.random()*letters.length)]+letters[Math.floor(Math.random()*letters.length)],rgold,["A swarm ship","Seemes randomly designed"],rgold*Math.ceil(Math.random(10,25)),false])
}
function randomgarcon(){
    var vowl="aeiou"
    var contant="bcdfghjklmnpqrstvqxyz"
    var rgold=Math.ceil(Math.random()*250)
    ships.push(["R.A.N. "+(contant[Math.ceil(Math.random()*20)]).toUpperCase()+(vowl[Math.ceil(Math.random()*5)])+(contant[Math.ceil(Math.random()*20)])+(vowl[Math.ceil(Math.random()*5)])+(contant[Math.ceil(Math.random()*20)])+(vowl[Math.ceil(Math.random()*5)])+(contant[Math.ceil(Math.random()*20)]),rgold,["A swarm ship","Seemes randomly designed"],rgold*Math.ceil(Math.random(10,25)),false])
}
function menu() {
    output.innerHTML = "";
    print("+-----------+");
    print("| MAIN MENU |");
    print("+-----------+");
    print("|1: Back    |");
    print("|2: Change  |");
    print("|Difficulty |");
    print("|3: Quit    |");
    print("|4: Secrets |");
    print("+-----------+");
    var comm = input.value;
    if(comm.toLowerCase()=="1"||comm.toLowerCase()=="back") {
        output.innerHTML = "";
        print("Type 'Scan'");
        getInput(game);
    } else if(comm.toLowerCase()=="2"||comm.toLowerCase()=="change difficulty") {
        difficulty = parseInt(prompt("Enter what difficulty you want", difficulty));
    } else if(comm.toLowerCase()=="3"||comm.toLowerCase()=="quit") {
        if(prompt("Are you sure? (y/n)", "y")=="y") {
            error("Game Ended");
            getInput(submit);
        }
    } else if(comm.toLowerCase()=="4"||comm.toLowerCase()=="secrets") {
        var secretcode=prompt("Type in your code","Nevermind");
        if(secretcode=="Nevermind"){
            menu();
            getInput(menu, "Main Menu");
        }else if(secretcode=="BRH0208"||secretcode=="Bryce"||secretcode=="bryce"){
            print("Why Hello")
            gold=150000
            strength=80000
            difficulty=0.5
        }else if(secretcode=="Superhard"){
            print("So, the base game isn't hard eh? Well try it like THIS!")
            gold=0
            strength=5
            difficulty=4
            noscope=true;
        }else if(secretcode=="Scalar"){
            print("Be that way")
            if (scalar==true){
                scalar=false;
            };
            if (scalar==false){
                scalar=true;
            };
        }else if(secretcode=="Grenar"){
            print("The grenar are a joke race ment to prolong gameplay")
            randomgarcon()
        }else if(secretcode=="N00B"){
            print("Ha, Fine i'll make it as easy as possible!")
            gold=35
            strength=25
            difficulty=0.5
            noscope=false
            for(var z=0; z<shop.length; z++){
                console.log(z);
                console.log(shop[z][1]);
                shop[z][1]=shop[z][1]/2
            }
            ships.push(["F.R.E.E. Chest",Math.ceil(Math.random()*20),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false])
            ships.push(["F.R.E.E. Treasure",Math.ceil(Math.random()*20),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false])
            ships.push(["F.R.E.E. Gold",Math.ceil(Math.random()*20),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false])
            ships.push(["F.R.E.E. Money",Math.ceil(Math.random()*20),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false])
            ships.push(["F.R.E.E. Riches",Math.ceil(Math.random()*20),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false])
            ships.push(["F.R.E.E. Coins",Math.ceil(Math.random()*20),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false])
            ships.push(["F.R.E.E. Cash",Math.ceil(Math.random()*20),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false])
            ships.push(["F.R.E.E. Doubloons",Math.ceil(Math.random()*20),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false])
            ships.push(["F.R.E.E. Money",Math.ceil(Math.random()*20),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false])
        }else if(secretcode=="360NoScopeDoomstar"){
            print("I dont trust you.. Ill just make all ships disapear forever when you lose to them")
            noscope=true;
        }else if(secretcode=="Trueloss"){
            print("You will regret this")
            failstate=1;
        }else if(secretcode=="Rainbowteam"||secretcode=="Mikerific"){
            print("You know mikerific? Wow!")
            gold=011011010110100101101011011001010111001001101001011001100110100101100011001011100110001101101111011011010010111101110010011010010110011001101001011000110010110101100100011100100110000101110111
        }else if(secretcode=="Ronan"||secretcode=="Grandfathersnake"||secretcode=="Neptune"){
            print("You have the blue hearth")
            gold=40000
            strength=50000
        }else if(secretcode=="Hello World"||secretcode=="01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100"){
            print("Are you a computer by any chance?, eh have a coin for your troubles")
            gold+=1
        }else if(secretcode=="Spare a coin?"){
            print("Here!")
            gold++
        }else if(secretcode=="Back"){
            print("If you dont know a secret, then you should leave!")
            menu();
            getInput(menu, "Main Menu");
        }else if(secretcode=="Die"){
            print("No")
        }else if(secretcode=="..."){
            print("... youself!")
        }else if(secretcode=="Monday"){
            print("It just turns out that way!")
        }else if(secretcode=="CaliforniaDreaming"){
            print("Are the leaves brown?")
        }else if(secretcode=="Walkingonthesun"||secretcode=="Walking On The Sun"){
            print("Sounds painfull")
        }else if(secretcode=="U2"){
            print("I hate U2")
        }else if(secretcode=="Chocolate?"){
            print("Bleh")
        }else if(secretcode=="freecash?"){
            print("For me right?")
            gold=gold-1
        }else if(secretcode=="1+1="){
            print("I am not a calculator, but the answer is your gold")
            gold=3
        }else if(secretcode=="Science"){
            print("My favorate")
        }else if(secretcode=="Portal"){
            print("Have a coin to buy a black forrest cake!")
            gold++;
        }else if(secretcode=="secretcode"){
            print("secretcode? Really, Why would you do that? 2500 point reduction!")
            gold=gold-2500
        }else if(secretcode=="Dont pay the ferryman"){
            print("Till he gets ya to the other side")
        }else if(secretcode=="Dexmetrotoxin B"){
            print("Not again")
        }else if(secretcode=="Hitchhikers guide to the galaxy"){
            print("You have grown tenfold in power at the cost of 10 gold")
            gold=gold-10
            strength=strength*10
        }else if(secretcode=="Bored"){
            print("Thats fixable")
            ships.push(["B.O.W.L.",1,["Not again...","Just a bowl of pentumias","A single gold coin is in the bowl","It is falling to its death on a planet","You can tractor beam it onboard and raid the small bowl of petunias for its gold"],1,false])
            ships.push(["S.P.A.C.E. Whale",1,["Pondering life","A gigantic space whale","Falling to its doom on a planet, you can tractor in onboard, it may have swollowed a gold coin"],1,false])
            ships.push(["H.G.G. Heart of Gold",350,["Contains an improbability drive","Based on its name yo think it may be valuable","It contains powerfull weapons, I wouldn't take it on if you have a low strength"],850,false])
            ships.push(["H.G.G. Book",100,["A valuable book","Says ''DONT PANIC'' in big friendly letters","It is the best book in the universe"],1,false])
            ships.push(["H.G.G. Universal end",100,["Resterant at the end of the universe"],1,false])
            ships.push(["B.C. Serenity",250,["Brown Coat ship","Unarmed","fantastic crew","Carge ship","Contains an openable cargo bay and a cry baby system"],46,false])
            shop.push(["Cry Baby",35,60,"Cry baby cry, attracks a cruiser",false])
            ships.push(["Alliance Cruiser",1250,["Alliance craft","Hoards of confiscated cargo","Well trained crew","Cruiser","Contains boarding ships and fighters"],1026,false])
            ships.push(["Stealth Boarding Craft",1250,["A lion craft","A bounty hunter is inside","Well trained, has a mighty roar","Boarding Craft"],126,false])
            shop.push(["Vera",25,16,"Heck Yea",false])
            ships.push(["Reaver Slicer",250,["A ship of reavers","Reavers went out into space and went insane","Spikes and Blood were used as decoration"],600,false])
            ships.push(["Reaver Stabber",250,["A ship of reavers","Reavers went out into space and went insane","Spikes and Blood were used as decoration"],600,false])
            ships.push(["Reaver Killer",250,["A ship of reavers","Reavers went out into space and went insane","Spikes and Blood were used as decoration"],600,false])
            ships.push(["Reaver Monster",250,["A ship of reavers","Reavers went out into space and went insane","Spikes and Blood were used as decoration"],600,false])
            ships.push(["Reaver Murderer",250,["A ship of reavers","Reavers went out into space and went insane","Spikes and Blood were used as decoration"],600,false])
            ships.push(["Reaver Deathship",250,["A ship of reavers","Reavers went out into space and went insane","Spikes and Blood were used as decoration"],600,false])
            ships.push(["Reaver Livings End",250,["A ship of reavers","Reavers went out into space and went insane","Spikes and Blood were used as decoration"],600,false])
            ships.push(["Reaver Destroyer of Life",250,["A ship of reavers","Reavers went out into space and went insane","Spikes and Blood were used as decoration"],600,false])
            ships.push(["Reaver Spike",250,["A ship of reavers","Reavers went out into space and went insane","Spikes and Blood were used as decoration"],600,false])
            ships.push(["Reaver Stake",250,["A ship of reavers","Reavers went out into space and went insane","Spikes and Blood were used as decoration"],600,false])
            ships.push(["Reaver Slaughterer",250,["A ship of reavers","Reavers went out into space and went insane","Spikes and Blood were used as decoration"],600,false])
            ships.push(["U.S.S. Enterprise",1507,["Full of latinum!","NCC-1701","Outpowers any non borg"],12500,false])
            ships.push(["U.S.S. Voyager",1000,["Battel Worn","Somehow is reachable","Pretty Powerfull"],1250,false])
            ships.push(["U.S.S. DS9",2500,["Full of latinum","Its Deep space nine!"],12500,false])
            ships.push(["B.O.R.G Cube",250,["Adaptive Tech","RESSISTANCE IS FUTILE","PREPARE TO BE ASSIMILATED"],13000,false])
            ships.push(["F.E.G.I. Starship",2500,["Powerfull, trade vessle","Full Of Latinum","Ferengi Vessle"],1000,false])
            ships.push(["K.E. Bird of Prey",250,["A Destroyer full of klingon warriors"],2500,false])
            ships.push(["K.E. Battle cruiser",450,["A Battleship full of klingon warriors"],6000,false])
            shop.push(["Bat'leh",30,85,"A curved blade, While being a melee weapon it still holds power, The badass blade of Kahless",false])
            shop.push(["Star Trek Phaser",245,9,"3 of them can melt a small barrel while 1 can cut a large hole in a wall",false])
            ships.push(["F.R.E.E. Chest",,["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false])
            ships.push(["F.R.E.E. Gold",Math.ceil(Math.random()*20),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false])
            ships.push(["F.R.E.E. Money",Math.ceil(Math.random()*20),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false])
            ships.push(["F.R.E.E. Riches",Math.ceil(Math.random()*20),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false])
            ships.push(["F.R.E.E. Coins",Math.ceil(Math.random()*20),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false])
            ships.push(["F.R.E.E. Cash",Math.ceil(Math.random()*20),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false])
            ships.push(["F.R.E.E. Doubloons",Math.ceil(Math.random()*20),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false])
            ships.push(["F.R.E.E. Money",Math.ceil(Math.random()*20),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false])
            ships.push(["F.R.E.E. Treasure",Math.ceil(Math.random()*20),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false])
            randomgarcon()
            randomgarcon()
            randomgarcon()
            randomgarcon()
            randomgarcon()
            randomgarcon()
            randomgarcon()
            randomgarcon()
            randomgarcon()
            randomgarcon()
            randomship(100)
            randomship(100)
            randomship(100)
            randomship(100)
            randomship(100)
            randomship(100)
            randomship(100)
            randomship(100)
            randomship(100)
            randomship(100)
        }else if(secretcode=="Petunias"||secretcode=="Hitchhiker"){
            ships.push(["B.O.W.L.",1,["Not again...","Just a bowl of pentumias","A single gold coin is in the bowl","It is falling to its death on a planet","You can tractor beam it onboard and raid the small bowl of petunias for its gold"],1,false])
            ships.push(["S.P.A.C.E. Whale",1,["Pondering life","A gigantic space whale","Falling to its doom on a planet, you can tractor in onboard, it may have swollowed a gold coin"],1,false])
            ships.push(["H.G.G. Heart of Gold",350,["Contains an improbability drive","Based on its name yo think it may be valuable","It contains powerfull weapons, I wouldn't take it on if you have a low strength"],850,false])
            ships.push(["H.G.G. Book",100,["A valuable book","Says ''DONT PANIC'' in big friendly letters","It is the best book in the universe"],1,false])
            ships.push(["H.G.G. Universal end",100,["Resterant at the end of the universe"],1,false])
        }else if(secretcode=="Firefly"){
            ships.push(["B.C. Serenity",250,["Brown Coat ship","Unarmed","fantastic crew","Carge ship","Contains an openable cargo bay and a cry baby system"],46,false])
            shop.push(["Cry Baby",35,60,"Cry baby cry, attracks a cruiser",false])
            ships.push(["Alliance Cruiser",1250,["Alliance craft","Hoards of confiscated cargo","Well trained crew","Cruiser","Contains boarding ships and fighters"],1026,false])
            ships.push(["Stealth Boarding Craft",1250,["A lion craft","A bounty hunter is inside","Well trained, has a mighty roar","Boarding Craft"],126,false])
            shop.push(["Vera",25,16,"Heck Yea",false])
            ships.push(["Reaver Slicer",250,["A ship of reavers","Reavers went out into space and went insane","Spikes and Blood were used as decoration"],600,false])
            ships.push(["Reaver Stabber",250,["A ship of reavers","Reavers went out into space and went insane","Spikes and Blood were used as decoration"],600,false])
            ships.push(["Reaver Killer",250,["A ship of reavers","Reavers went out into space and went insane","Spikes and Blood were used as decoration"],600,false])
            ships.push(["Reaver Monster",250,["A ship of reavers","Reavers went out into space and went insane","Spikes and Blood were used as decoration"],600,false])
            ships.push(["Reaver Murderer",250,["A ship of reavers","Reavers went out into space and went insane","Spikes and Blood were used as decoration"],600,false])
            ships.push(["Reaver Deathship",250,["A ship of reavers","Reavers went out into space and went insane","Spikes and Blood were used as decoration"],600,false])
            ships.push(["Reaver Livings End",250,["A ship of reavers","Reavers went out into space and went insane","Spikes and Blood were used as decoration"],600,false])
            ships.push(["Reaver Destroyer of Life",250,["A ship of reavers","Reavers went out into space and went insane","Spikes and Blood were used as decoration"],600,false])
            ships.push(["Reaver Spike",250,["A ship of reavers","Reavers went out into space and went insane","Spikes and Blood were used as decoration"],600,false])
            ships.push(["Reaver Stake",250,["A ship of reavers","Reavers went out into space and went insane","Spikes and Blood were used as decoration"],600,false])
            ships.push(["Reaver Slaughterer",250,["A ship of reavers","Reavers went out into space and went insane","Spikes and Blood were used as decoration"],600,false])
            ships.push(["E.M.P TIE Fighter",65,["Twin Ion Enginges","Dangerous","The Backbone of the empire"],100,false])
            ships.push(["E.M.P Death star",2350,["I am not kidding","Thats no moon...","Where is that exaust port?"],12000,false])
            ships.push(["E.M.P Star destroyer",2350,["Da Da Da da Da Da da Da Da, Da Da Da DA Da Da Daaaa! ","Large Battleship of the empire","Does not actualy destroy stars"],1200,false])
            ships.push(["R.B.L. X-Wing",200,["Lock X-Foils in attack position","Why does it even have X-Foils","What purpose do they serve?"],200,false])
            ships.push(["R.B.L. Carrier",220,["Carries rebel ships","its a large rebellion","Technicly its not the rebels design"],4500,false])
            ships.push(["R.B.L. A-Wing",200,["Another Wing name","Why do they use them as suiside craft? What a waste","They look kinda like and A!"],180,false])
            shop.push(["Lightsaber",245,45,"A melee weapon when laser rifles exist, huh. Now you do not have to make your own sound effects! ITS A FREAKING LIGHT SABER BUY IT",false])
            shop.push(["Battle Droid",25,5,"They were programed to be bumbling idots, for no good reason",false])
            shop.push(["Stormtrooper Blaster",245,9,"Probaly pretty innacurate, designed for in ship combat",false])
        
            print("The best show ever")
        }else if(secretcode=="Star wars"){
            print("Not my favorate sci-fi, but its okay")
            ships.push(["E.M.P TIE Fighter",65,["Twin Ion Enginges","Dangerous","The Backbone of the empire"],100,false])
            ships.push(["E.M.P Death star",2350,["I am not kidding","Thats no moon...","Where is that exaust port?"],12000,false])
            ships.push(["E.M.P Star destroyer",2350,["Da Da Da da Da Da da Da Da, Da Da Da DA Da Da Daaaa! ","Large Battleship of the empire","Does not actualy destroy stars"],1200,false])
            ships.push(["R.B.L. X-Wing",200,["Lock X-Foils in attack position","Why does it even have X-Foils","What purpose do they serve?"],200,false])
            ships.push(["R.B.L. Carrier",220,["Carries rebel ships","its a large rebellion","Technicly its not the rebels design"],4500,false])
            ships.push(["R.B.L. A-Wing",200,["Another Wing name","Why do they use them as suiside craft? What a waste","They look kinda like and A!"],180,false])
            shop.push(["Lightsaber",245,45,"A melee weapon when laser rifles exist, huh. Now you do not have to make your own sound effects! ITS A FREAKING LIGHT SABER BUY IT",false])
            shop.push(["Battle Droid",25,5,"They were programed to be bumbling idots, for no good reason",false])
            shop.push(["Stormtrooper Blaster",245,9,"Probaly pretty innacurate, designed for in ship combat",false])
        }else if(secretcode=="Star Trek"){
            print("A fantastic series with with emphasis on morality and dimplomacy")
            ships.push(["U.S.S. Enterprise",1507,["Full of latinum!","NCC-1701","Outpowers any non borg"],12500,false])
            ships.push(["U.S.S. Voyager",1000,["Battel Worn","Somehow is reachable","Pretty Powerfull"],1250,false])
            ships.push(["U.S.S. DS9",2500,["Full of latinum","Its Deep space nine!"],12500,false])
            ships.push(["B.O.R.G Cube",250,["Adaptive Tech","RESSISTANCE IS FUTILE","PREPARE TO BE ASSIMILATED"],13000,false])
            ships.push(["F.E.G.I. Starship",2500,["Powerfull, trade vessle","Full Of Latinum","Ferengi Vessle"],1000,false])
            ships.push(["K.E. Bird of Prey",250,["A Destroyer full of klingon warriors"],2500,false])
            ships.push(["K.E. Battle cruiser",450,["A Battleship full of klingon warriors"],6000,false])
            shop.push(["Bat'leh",30,85,"A curved blade, While being a melee weapon it still holds power, The badass blade of Kahless",false])
            shop.push(["Star Trek Phaser",245,9,"3 of them can melt a small barrel while 1 can cut a large hole in a wall",false])
        }else if(secretcode=="Not the bee's"){
            shop.push(["Not the bee's gun",27,38,"NOT THE BEE'S unlocked with a secret",false])
            print("It has been added")
        }else if(secretcode=="Code"){
            print("This program was make in js through a software called C9")
        }else if(secretcode=="Lein"){
            print("My 9th grade AP Computer Science Princibles Teacher")
        }else if(secretcode=="Deepspace"||secretcode=="Brian"||secretcode=="Cleverlike"){
            print("Brian! You helped us make this game! here is the drop in money")
            gold=gold+10
            strength=strength*2
        }else if(secretcode=="Incode Labs"||secretcode=="Incode"){
            print("Incode labritories here is your donation")
            gold=gold+100
        }else if(secretcode=="Bryan Labs"){
            print("Here is the weapon you ordered")
            strength=strength+100
        }else if(secretcode=="Huntington Post"){
            print("Reliability! it's the best")
            gold=strength
        }else if(secretcode=="CIA"||secretcode=="FBI"){
            print("Nothing to see here")
        }else if(secretcode=="This game is bad"){
            print("No, its not")
            gold=-1337
        }else if(secretcode=="leet"){
            gold=1337
        }else if(secretcode=="Memes"){
            print("No!!")
            strength=-999999
        }else if(secretcode=="Barter"){
            print("Fine")
            for(var z=0; z<shop.length; z++){
                console.log(z);
                console.log(shop[z][1]);
                shop[z][1]=shop[z][1]/2
            }
        }else if(secretcode=="gold=9999"){
            print("No, infact gold=1")
            gold=1
        }else if(secretcode=="more gold"){
            print("For me? Thanks")
            gold=gold-1
        }else if(secretcode=="scan"){
            print("this is the secrets input, not the conosole")
        }else if(secretcode=="This game is awfull"){
            print("It Disagree, its better then some games on the market! You are wrong! just as you gold is now 0")
            gold=0
        }else if(secretcode=="lose"||secretcode=="I want to lose"){
            print("Sure! Now you basicly cannot win")
            difficulty=100000000
            gold=1
            strength=1
        }else if(secretcode=="reset"){
            print("Sure I will reset the game")
            gold=10;
            strength=15;
            for(var k=0; k<ships.length; k++){
                console.log(k);
                console.log(ships[k][0]);
                if(ships[k][4]==true){
                    ships[k][4]=false;
                }
            }
            for(var z=0; z<shop.length; z++){
                console.log(z);
                console.log(shop[z][0]);
                if(shop[z][4]==true){
                    shop[z][4]=false;
                }
            }
            difficulty=0
        }else if(secretcode=="my gold is 1337"&&gold==1337){
            print("not anymore")
            gold=0
        }else if(secretcode=="give me an achievement"){
            print("Fine!")
            print("*----------------------------*")
            print("|Achivement Get! - Nonsense  |")
            print("|You are not getting anything|")
            print("*----------------------------*")
        }else if(secretcode=="Help"||secretcode=="help"||secretcode=="?"){
            print("This is not the right place, but I know what to do")
            error("You need help.");
            print("");
            print("Type 'run raid_tutorial' to start");
            error("Program has ended");
            getInput(submit, "Type 'run raid_tutorial' to start");
        }else if(secretcode=="Who are you?"){
            print("I'll never tell...")
            print("Sincerely Incode Labs")
        }else if(secretcode=="MakeAShip"){
            print("Sure")
            var a=prompt("Type in the name","T.U.T. Myship");
            var b=prompt("Type in the gold","100");
            var c=prompt("Type in a status","Shields working");
            var d=prompt("Type in a status","Cannons working");
            var e=prompt("Type in a status","Crew alive and well");
            var f=prompt("Type in the power","300");
            b=Number(b)
            f=Number(f)
            ships.push([a,b,[c,d,e],f,false])
            print("[\""+a+"\","+b+","+"[\""+c+"\",\""+d+"\",\""+e+"\"]"+","+f+",false],")
            print("That should do it!")
        }else if(secretcode=="Pi"){
            print("That should do it!")
            gold=314159265358979323
        }else if(secretcode=="MakeAShop"){
            print("Sure")
            var a=prompt("Type in the name","Pewgun");
            var b=prompt("Type in the cost","12");
            var c=prompt("Type in the power","13");
            var d=prompt("Type in the discription","It goes pew, add your own sound effects!");
            b=Number(b)
            c=Number(c)
            shop.push([a,b,c,d,false])
            print("[\""+a+"\","+b+","+c+",\""+d+"\",false],")
            print("That should do it!")
        }else if(secretcode=="DesignAShop"){
            print("Sure")
            var a=prompt("Type in the name","Pewgun");
            var b=prompt("Type in the cost","12");
            var c=prompt("Type in the power","13");
            var d=prompt("Type in the discription","It goes pew, add your own sound effects!");
            b=Number(b)
            c=Number(c)
            //shop.push([a,b,c,d,false])
            print("[\""+a+"\","+b+","+c+",\""+d+"\",false],")
            print("That should do it!, its not in the game but you can give this code to the developers to reccomend it!")
        }else if(secretcode=="DesignAShip"){
            print("Sure")
            var a=prompt("Type in the name","T.U.T. Myship");
            var b=prompt("Type in the gold","100");
            var c=prompt("Type in a status","Shields working");
            var d=prompt("Type in a status","Cannons working");
            var e=prompt("Type in a status","Crew alive and well");
            var f=prompt("Type in the power","300");
            b=Number(b)
            f=Number(f)
            //ships.push([a,b,[c,d,e],f,false])
            print("[\""+a+"\","+b+","+"[\""+c+"\",\""+d+"\",\""+e+"\"]"+","+f+",false],")
            print("That should do it!, its not in the game but you can give this code to the developers to reccomend it!")
        }else if(secretcode=="F.R.E.E."){
             ships.push(["F.R.E.E. Chest",,["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false])
             ships.push(["F.R.E.E. Gold",Math.ceil(Math.random()*20),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false])
             ships.push(["F.R.E.E. Money",Math.ceil(Math.random()*20),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false])
             ships.push(["F.R.E.E. Riches",Math.ceil(Math.random()*20),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false])
             ships.push(["F.R.E.E. Coins",Math.ceil(Math.random()*20),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false])
             ships.push(["F.R.E.E. Cash",Math.ceil(Math.random()*20),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false])
             ships.push(["F.R.E.E. Doubloons",Math.ceil(Math.random()*20),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false])
             ships.push(["F.R.E.E. Money",Math.ceil(Math.random()*20),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false])
             ships.push(["F.R.E.E. Treasure",Math.ceil(Math.random()*20),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false])
             /*
            ["F.R.E.E. Chest",Math.random(1,15),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false],
            ["F.R.E.E. Gold",Math.random(1,15),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false],
            ["F.R.E.E. Money",Math.random(1,15),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false],
            ["F.R.E.E. Riches",Math.random(1,15),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false],
            ["F.R.E.E. Coins",Math.random(1,15),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false],
            ["F.R.E.E. Cash",Math.random(1,15),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false],
            ["F.R.E.E. Doubloons",Math.random(1,15),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false],
            ["F.R.E.E. Money",Math.random(1,15),["Wooden Chest","No Lock","Says ''Free Gold!'' On the side"],1,false],
            */
        }else if(secretcode=="resetShips"){
            for(var k=0; k<ships.length; k++){
                console.log(k);
                console.log(ships[k][0]);
                if(ships[k][4]==true){
                    ships[k][4]=false;
                }
            }
        }else if(secretcode=="resetShop"){
            for(var z=0; z<ships.length; z++){
                console.log(z);
                console.log(ships[z][0]);
                if(shop[k][4]==true){
                    shop[k][4]=false;
                }
            }
        }else if(secretcode=="Testsetgold"){
            gold=Number(prompt("INPUT GOLD AMOUNT",10))
        }else if(secretcode=="Testsetstrength"){
            strength=Number(prompt("INPUT STRENGTH AMOUNT",15))
        }else if(secretcode=="Testsetnoscope"){
            noscope=Number(prompt("INPUT NOSCOPE VALUE(1,0)",1))
        }else if(secretcode=="Teststrength"){
            print(strength)
        }else if(secretcode=="Testgold"){
            print(gold)
        }else if(secretcode=="Testnoscope"){
            print(noscope)
        }else if(secretcode=="Testshipcount"){
            print(ships.length)
        }else if(secretcode=="Testshoplength"){
            print(shop.length)
        }else if(secretcode=="Randomship"){
            print("Sure")
            var str=prompt("Strength?","100")
            var count=prompt("Count?","2")
            for(var z=0;z<=Number(count);z++){
                randomship(Number(str))
            }
        }
    }
}

function shopping(show) {
    output.innerHTML = "";
    var comm = input.value;
    input.value = "";
    if(comm.toLowerCase()=="menu") {
        menu();
        getInput(menu, "Main Menu");
    } else
    if(comm.toLowerCase()=="trade"||show==true) {
        print("Welcome to the shop");
        print("Type Back to return");
        print("Or Type in a number to select a purchase");
        print("You have " + gold + " gold and a " + strength + " power quotient.");
        for (var x = 0; x < shop.length; x++) {
            if(shop[x][4]==false) {
                print("------------------------------------------")
                print(x + " - " + shop[x][0]+": "+shop[x][1]+" Gold");
                print("- "+shop[x][3]);
            }
        }
    }
    if(parseFloat(comm)>=0){
        if(shop[comm][4]==true){
            print("You already have "+shop[comm][0])
        }else{
            if(gold>=shop[comm][1]){
                print("Purchase Complete!");
                print("You bought a "+shop[comm][0]+" for "+shop[comm][1]);
                strength+=shop[comm][2];
                gold+=(shop[comm][1]*-1);
                shop[comm][4]=true;
                shopping(true)
            }else{
                output.innerHTML = "";
                print("In your dreams! You need "+(shop[comm][1]-gold)+" more gold to afford that!");
            }
        }
    }
    if(comm.toLowerCase()=="back") {
        output.innerHTML = "";
        print("Type 'Scan' to get a list of ships");

        getInput(game, "Type 'help' for list of commands");
    } else if(comm.toLowerCase()=="raid") {
        if(strength>10000) {
            print("You raided the store for 3 billion gold!!!");
            gold=3000000010;
            for(var k=0; k<ships.length; k++){
                console.log(k);
                console.log(ships[k][0]);
                if(ships[k][0]=="N.A.S. Blue Heart"&&ships[k][4]==false){
                    print("However, the N.A.S. Blue Heart siezed all your money and the Galactic Counsel rebuilt the station, with your money!");
                    print("");
                    if(failstate){
                        error("You have lost.");
                        print("");
                        print("Type 'run raid' to start again");
                        error("Program has ended");
                        getInput(submit, "Type 'run raid' to start again");
                    }
                    print("You now have 0 Gold!");
                    print("")
                    print("Type 'Scan' to get a list of ships");
                    gold = 0;
                    getInput(game);
                }
            }
            if(gold>=2900000000){
                if(failstate){
                print("Oh my!")
                print("You won with a failstate,")
                print("Thats unprecidented")
                print("GG")
                }else if(difficulty>3){
                print("Nice, you made it hard and ya still won!")
                }else if(noscope==false){
                    print("Hmm, let me check something...")
                    print("Okay nice, you won with ships leaving when you lose!")
                    print("Pretty impressive!")
                }else{
                print("The deed is done and you have won")
                print("Everyone in the galaxy bends to your will")
                print("You Rule the galaxy with an iron fist")
                print("Under your dictatorship people die in the streets")
                print("Pain and suffering is everywhere")
                print("You monster")
                print("You have all the gold in the universe")
                print("You have all the things in the universe")
                print("But thats not fun")
                print("So I will take your gold")
                print("I will revive the ships you destroyed")
                print("I will reset the shop you also destroyed")
                print("I will take your weapons that you used to spill galactic blood")
                print("and you get to do it all over again")
                print("Have a good day")
                print("Sincerly,")
                print("Gamemaker")
                print("P.S. You world is a computer simulator so, yea")
                print("");
                print("btw, since you are \"you are so good\" and \"you won the game\" I will do the honor of raising the difficulty just a tiny bit.");
                }
                difficulty=difficulty*2
                gold=10;
                offence=0
                strength=15;
                for(var k=0; k<ships.length; k++){
                    console.log(k);
                    console.log(ships[k][0]);
                    if(ships[k][4]==true){
                        ships[k][4]=false;
                    }
                
                }
                for(var z=0; z<ships.length; z++){
                    console.log(z);
                    console.log(ships[z][0]);
                    if(shop[k][4]==true){
                        shop[k][4]=false;
                    }
                
                }
                
            }
            
        } else {
            if(offence>=3) {
                print("Station security has had just enough of you and are no longer convinced.");
                print("After being brought before the Galactic counsel, you were to be imprisoned.");
                print("Your crew was to go to a remote Penal Colony.");
                error("You have lost.");
                print("");
                print("Type 'run raid' to start again");
                error("Program has ended");
                getInput(submit, "Type 'run raid' to start again");
            } else if(offence<=0) {
                offence++;
                print("You lost and taken into custody.");
                print("Your tactical officer was able to convince the authorities it was a failed testing scenario.");
                print("Station Security reluctantly let you go.");
                print("");
                print("Type 'Scan' to get a list of ships");
                getInput(game);
            }else if(offence>0&&offence<3) {
                offence++;
                print("You lost and taken into custody.");
                if(failstate){
                    error("You have lost.");
                    print("");
                    print("Type 'run raid' to start again");
                    error("Program has ended");
                    getInput(submit, "Type 'run raid' to start again");
                }
                print("Your tactical officer was able to convince the authorities it was a failed testing scenario.");
                print("Station Security reluctantly let you go, but as your secound offence you were fined "+Math.floor(strength*(2/3))/10+" gold");
                print("");
                gold=gold-(Math.floor(strength*(2/3))/10)
                if(gold<0){
                print("But as you said that you didn't have the money they were pretty upset and took some weapons of yours")
                Math.ceil(strength+=gold*0.15)
                gold=0
                }
                print("You have " + gold + " gold")
                print("Type 'Scan' to get a list of ships");
                getInput(game);
            }
        }
    }
}

function survey() {
    output.innerHTML = "";
    var comm = input.value;
    input.value = "";
    if (comm.toLowerCase() == "scan") {
        print("Scanning:");
        print("---------");
        if(strength*1.5>scanned[surveying][3]*difficulty) {
            for (var x = 0; x < scanned[surveying][2].length; x++) {
                print(scanned[surveying][2][x]);
            }
            print(getGoldAmount(scanned[surveying][1]));
            print(Math.ceil(((scanned[surveying][1])/scanned[surveying][3]))+"% Of the ship is gold!")
        } else {
            print("Your scans do not penetrate the hull.");
            print(scanned[surveying][2][1])
        }
        print("");
        print("Surveying " + scanned[surveying][0]);
        print("");
        print("You have " + gold + " gold and a " + strength + " power quotient.");
        print("Type a Command");
        print("Scan - get detailed readings");
        print("Raid - try to plunder the starship");
        print("Back - Retreat from Ship");
    } else if (comm.toLowerCase() == "raid") {
        if(scanned[surveying][4] == true) {
            print("You already tried to raid them, what more do you want?");
        } else {
            light = Math.ceil(strength*(1/10));
            med =   Math.ceil(strength*(1/5));
            heavy = Math.ceil(strength*(1/2));
            print("What kind of raid do you want to do?");
            print("0 - Skirmish - Free");
            print("1 - Light Assault - " + light + " Gold (+10% power)");
            print("2 - Medium Assault - " + med + " Gold (+20% power)");
            print("3 - Heavy Assault - " + heavy + " Gold (+50% power)");
            print("Back - Return to menu");
            getInput(raid, "raiding");
            
        }
        /*print("Type 'Scan' to get a list of ships");
            scanned = [];
            getInput(game, "Type 'help' for list of commands");*/
    } else if(comm.toLowerCase()=="back") {
        print("Type 'Scan' to get a list of ships");
        getInput(game, "Type 'help' for list of commands");
    }
}

function raid() {
    output.innerHTML = "";
    var comm = input.value;
    input.value = "";
    if(comm=="0") {
        var ratio = (strength / (scanned[surveying][3]*difficulty)) / 2;
        if (Math.random() <= ratio) {
            print("You plundered " + scanned[surveying][0] + " for " + scanned[surveying][1] + " gold!");
            gold+=scanned[surveying][1];
            scanned[surveying][4] = true;
        } else {
            if(failstate){
                error("You have lost.");
                print("");
                print("Type 'run raid' to start again");
                error("Program has ended");
                getInput(submit, "Type 'run raid' to start again");
            }
            print("The ship escaped, but not before taking some of your gold!"); //need to implement damage
            gold=gold-Math.ceil(scanned[surveying][1]/10);
            if(gold<0){
                print("they took all of your gold!, maybe wait to take on such a powerfull ship")
                gold=0;
            }
            if(scalar){
                difficulty=difficulty*0.1
            }
            if(noscope){
                scanned[surveying][4] = true;//Our Choice, the idea is that if you fail you can try again
            }else{
                    if(scanned[surveying][0]=="N.A.S. Blue Heart"&&noscope==true){
                        print("With you oppritunity to kill the Blue Heart gone, you cannot kill the shop so you lose")
                        print("luckly for you I am a kind and generous soul and will revive it for you, at the cost of all your gold")
                        gold=0
                        scanned[surveying][4] = false;
                    }
                }
        }
        print("You have " + gold + " gold and " + strength + " power quotient.");
        print("Type 'Scan' to get a list of ships");
        getInput(game, "Surveying");
    } else if(comm=="1") {
        if(gold<light) {
            raiderr()
        } else {
            gold = gold - light;
            var ratio = ((strength*1.1) /  (scanned[surveying][3]*difficulty)) / 2;
            if (Math.random() <= ratio) {
                print("You plundered " + scanned[surveying][0] + " for " + scanned[surveying][1] + " gold!");
                gold+=scanned[surveying][1];
                scanned[surveying][4] = true;
                
            } else {
                if(failstate){
                    error("You have lost.");
                    print("");
                    print("Type 'run raid' to start again");
                    error("Program has ended");
                    getInput(submit, "Type 'run raid' to start again");
                }
                
                print("The ship escaped, but not before taking some of your gold!"); //need to implement damage
                gold=gold-Math.ceil(scanned[surveying][1]/10);
                if(gold<0){
                print("they took all of your gold!, maybe wait to take on such a powerfull ship")
                gold=0;
                }
                if(scalar){
                    difficulty=difficulty*0.1
                }
                if(noscope){
                    scanned[surveying][4] = true;//Our Choice, the idea is that if you fail you can try again
                }else{
                    if(scanned[surveying][0]=="N.A.S. Blue Heart"&&noscope==true){
                        print("With you oppritunity to kill the Blue Heart gone, you cannot kill the shop so you lose")
                        print("luckly for you I am a kind and generous soul and will revive it for you, at the cost of all your gold")
                        gold=0
                        scanned[surveying][4] = false;
                    }
                }
            }
            print("You have " + gold + " gold and " + strength + " power quotient.");
            print("Type 'Scan' to get a list of ships");
            getInput(game, "Surveying");
        }
    } else if(comm=="2") {
        if(gold<med) {
            raiderr()
        } else {
                gold = gold - med;
            var ratio = ((strength*1.2) / (scanned[surveying][3]*difficulty)) / 2;
            if (Math.random() <= ratio) {
                print("You plundered " + scanned[surveying][0] + " for " + scanned[surveying][1] + " gold!");
                gold+=scanned[surveying][1];
                scanned[surveying][4] = true;
            } else {
                if(failstate){
                    error("You have lost.");
                    print("");
                    print("Type 'run raid' to start again");
                    error("Program has ended");
                    getInput(submit, "Type 'run raid' to start again");
                }
                print("The ship escaped, but not before taking some of your gold!"); //need to implement damage
                gold=gold-Math.ceil(scanned[surveying][1]/10);
                if(scalar){
                    difficulty=difficulty*0.1
                }
                if(noscope){
                    scanned[surveying][4] = true;//Our Choice, the idea is that if you fail you can try again
                }else{
                    if(scanned[surveying][0]=="N.A.S. Blue Heart"&&noscope==true){
                        print("With you oppritunity to kill the Blue Heart gone, you cannot kill the shop so you lose")
                        print("luckly for you I am a kind and generous soul and will revive it for you, at the cost of all your gold")
                        gold=0
                        scanned[surveying][4] = false;
                    }
                }
                if(gold<0){
                print("they took all of your gold!, maybe wait to take on such a powerfull ship")
                gold=0;
                }
            }
            print("You have " + gold + " gold and " + strength + " power quotient.");
            print("Type 'Scan' to get a list of ships");
            getInput(game, "Surveying");
        }
    } else if(comm=="3") {
        if(gold<light) {
            raiderr()
        } else {
            gold = gold - heavy;
            var ratio = ((strength*1.5) /  (scanned[surveying][3]*difficulty)) / 2;
            if (Math.random() <= ratio) {
                print("You plundered " + scanned[surveying][0] + " for " + scanned[surveying][1] + " gold!");
                gold+=scanned[surveying][1];
                scanned[surveying][4] = true;
            } else {
                if(failstate){
                    error("You have lost.");
                    print("");
                    print("Type 'run raid' to start again");
                    error("Program has ended");
                    getInput(submit, "Type 'run raid' to start again");
                }
                print("The ship escaped, but not before taking some of your gold!"); //need to implement damage
                gold=gold-Math.ceil(scanned[surveying][1]/10);
                if(gold<0){
                print("they took all of your gold!, maybe wait to take on such a powerfull ship")
                gold=0;
                }
                if(scalar){
                    difficulty=difficulty*0.1
                }
                if(noscope){
                    scanned[surveying][4] = true;//Our Choice, the idea is that if you fail you can try again
                }else{
                    if(scanned[surveying][0]=="N.A.S. Blue Heart"&&noscope==true){
                        print("With you oppritunity to kill the Blue Heart gone, you cannot kill the shop so you lose")
                        print("luckly for you I am a kind and generous soul and will revive it for you, at the cost of all your gold")
                        gold=0
                        scanned[surveying][4] = false;
                    }
                }
            }
            print("You have " + gold + " gold and " + strength + " power quotient.");
            print("Type 'Scan' to get a list of ships");
                getInput(game, "Surveying");
        }
    } else if (comm=="Back"){
        
        if(comm.toLowerCase()=="back") {
        output.innerHTML = "";
        print("Type 'Scan' to get a list of ships");
        getInput(game, "Type 'help' for list of commands");
        }
        
    }
}

function raiderr() {
    input.value = "";
    error("You do not have the required funds to launch an attack of this magnitude.");
    print("")
    print("Surveying " + scanned[surveying][0]);
    print("Type a Command");
    print("Scan - get detailed readings");
    print("Raid - try to plunder the starship");
    print("Back - Retreat from Ship");
    getInput(survey, "Surveying");
}

function getGoldAmount(amount) {
    if (amount < 0) {
        return "They have anti-gold";
    }else if (amount == 0) {
        return "They have no gold";
    }else if (amount <= 5 && amount > 0) {
        return "They barely have any gold";
    } else if (amount > 5 && amount <= 10) {
        return "They don't have much gold";
    } else if (amount > 10 && amount <= 20) {
        return "They have a miniscule amount of gold aboard";
    } else if (amount > 20 && amount <= 40) {
        return "They have a little bit of gold";
    } else if (amount > 40 && amount <= 80) {
        return "They have a small pile";
    } else if (amount > 80 && amount <= 160) {
        return "They could have an ok sum of gold";
    } else if (amount > 160 && amount <= 320) {
        return "The ship is carying a small vault";
    } else if (amount > 320 && amount <= 640) {
        return "You could purchase a small house with this gold";
    } else if (amount > 640 && amount <= 1280) {
        return "This ship could hold vast amounts of wealth";
    } else if (amount > 1280 && amount <= 2560) {
        return "They are carrying a large vault!";
    } else if (amount > 2560 && amount <= 5000) {
        return "There are huge sums of gold aboard this ship";
    } else if (amount > 5000) {
        return "Esquisite amounts of gold aboard";
    }
}