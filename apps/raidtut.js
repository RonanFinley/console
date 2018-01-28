var ships = [
    ["T.U.T. Orial", 15, ["Type Shuttle", "Tutorial Class", "Plasma Leaks", "Starboard Nacelle Offline", "Injured Crew"], 5, false],//name,gold,status, power, destroyed
];
var shop = [
    ["Light Laser",10,3,"A light laser weapon to damage unarmored targets", false],//Name, Cost,Power,Disc,bought
    ["Light Armor",15,8,"Some light armor",false]
];
var gold = 10;
var scanned = [];
var surveying = 0;
var tut = true;
var strength = 15;
var light, med, heavy;
print("This is the Raid Game Tutorial. We will guide you through gameplay basics before you go out into the world!");
print("To begin the game, please type 'Scan'");
getInput(game, "Type SCAN");

function game() {
    output.innerHTML = "";
    print("You have " + gold + " gold and " + strength + " power quotient.");
    var comm = input.value;
    console.log(comm);
    if (comm.toLowerCase() == "scan") {
        scanned = [];
        for (var x = 0; x < 3; x++) {
            scanned.push(ships[Math.floor(Math.random() * ships.length)]);
            for (var y = 0; y < scanned.length - 1; y++) {
                if (scanned[y] == scanned[x]) {
                    console.log("already has " + scanned[x][0]);
                    scanned.splice(x, 1);
                    
                }
            }
        }
        
        print("There are "+(scanned.length+1)+" ships in range:");
        print("0 - Interstellar Shopping Mall")
        for (var x = 0; x < scanned.length; x++) {
            print((x+1) + " - " + scanned[x][0]);
        }
        print("")
        print("Type what starship number you wish to survey");
    } else if (parseFloat(comm) >= 0) {//if it is a number
        surveying = parseFloat(comm)-1;
        if(parseFloat(comm)==0){
            print("Trade - Enter The shop");
            print("Raid  - Raid the Shop");
            print("Back  - Leave the shop");
            getInput(shopping, "Shop");
        }else{
            print("Surveying " + scanned[surveying][0]);
            print("Type a Command");
            print("Scan - get detailed readings");
            print("Raid - try to plunder the starship");
            print("Back - Retreat from Ship");
            getInput(survey, "Surveying");
        }
            
    }
    
}
function shopping() {
    output.innerHTML = "";
    var comm = input.value;
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
    if(parseFloat(comm)>=0){
        if(gold>=shop[comm][1]){
            print("Purchase Complete!");
            print("You bought a "+shop[comm][0]+" for "+shop[comm][1]);
            strength+=shop[comm][2];
            gold+=(shop[comm][1]*-1);
            shop[comm][4]=true;
            shopping()
        }else{
            print("In your dreams! You need "+(shop[comm][1]-gold)+" more gold to afford that!")
        }
    }
    if(comm.toLowerCase()=="back") {
        output.innerHTML = "";
        print("Type 'Scan' to get a list of ships");

        getInput(game, "Type 'help' for list of commands");
    } else if(comm.toLowerCase()=="raid") {
        if(strength>10000) {
            print("You pillaged the store for 3 billion gold. What are you going to do with it now?")
            error("Game Ended")
            getInput(submit);
        } else {
            print("YOU LOSE!!! what were you expecting?");
            error("Game Ended")
            getInput(submit);
        }
    }
}
function survey() {
    output.innerHTML = "";
    var comm = input.value;
    if (comm.toLowerCase() == "scan") {
        print("Scanning:");
        print("---------");
        if(strength*1.5>scanned[surveying][3]) {
            for (var x = 0; x < scanned[x][2].length; x++) {
                print(scanned[surveying][2][x]);
            }
            print(getGoldAmount(scanned[surveying][1]))
        } else {
            print("Your scans do not penetrate the hull.")
        }
        
        print("")
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
            print("Back - Return to menu")
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
    
    if(comm=="0") {
        var ratio = (strength / scanned[surveying][3]) / 2;
        if (Math.random() <= ratio) {
            print("You plundered " + scanned[surveying][0] + " for " + scanned[surveying][1] + " gold!");
            gold+=scanned[surveying][1];
            scanned[surveying][4] = true;
        } else {
            print("The ship escaped, but not before taking some of your gold!"); //need to implement damage
            gold-=-Math.floor(scanned[surveying][4]/10);
            //scanned[surveying][4] = true;//Our Choice, the idea is that if you fail you can try again
        }
        print("You have " + gold + " gold and " + strength + " power quotient.");
        print("Type 'Scan' to get a list of ships");
        getInput(game, "Surveying");
    } else if(comm=="1") {
        if(gold<light) {
            raiderr()
        } else {
            gold = gold - light;
            var ratio = ((strength*1.1) / scanned[surveying][3]) / 2;
            if (Math.random() <= ratio) {
                print("You plundered " + scanned[surveying][0] + " for " + scanned[surveying][1] + " gold!");
                gold+=scanned[surveying][1];
                scanned[surveying][4] = true;
            } else {
                print("The ship escaped, but not before taking some of your gold!"); //need to implement damage
                gold-=-Math.floor(scanned[surveying][4]/10);
                //scanned[surveying][4] = true;//Our Choice, the idea is that if you fail you can try again
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
            var ratio = ((strength*1.2) / scanned[surveying][3]) / 2;
            if (Math.random() <= ratio) {
                print("You plundered " + scanned[surveying][0] + " for " + scanned[surveying][1] + " gold!");
                gold+=scanned[surveying][1];
                scanned[surveying][4] = true;
            } else {
                print("The ship escaped, but not before taking some of your gold!"); //need to implement damage
                gold-=-Math.floor(scanned[surveying][4]/10);
                //scanned[surveying][4] = true;//Our Choice, the idea is that if you fail you can try again
                
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
            var ratio = ((strength*1.5) / scanned[surveying][3]) / 2;
            if (Math.random() <= ratio) {
                print("You plundered " + scanned[surveying][0] + " for " + scanned[surveying][1] + " gold!");
                gold+=scanned[surveying][1];
                scanned[surveying][4] = true;
            } else {
                print("The ship escaped, but not before taking some of your gold!"); //need to implement damage
                gold-=-Math.floor(scanned[surveying][4]/10);
                //scanned[surveying][4] = true;//Our Choice, the idea is that if you fail you can try again
                
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
    if (amount <= 0) {
        return "They have no gold";
    } else if (amount <= 5) {
        return "They have very little gold";
    } else if (amount > 5 && amount <= 10) {
        return "They don't have much gold";
    } else if (amount > 10 && amount <= 20) {
        return "They do not have much gold aboard";
    } else if (amount > 20 && amount <= 40) {
        return "They have a poor amount of gold";
    } else if (amount > 40 && amount <= 80) {
        return "They have a miniscule amount of gold aboard";
    } else if (amount > 80 && amount <= 160) {
        return "They could have an ok sum of gold";
    } else if (amount > 160 && amount <= 320) {
        return "The ship is carying a small vault";
    } else if (amount > 320 && amount <= 640) {
        return "You could purchase a small house with this gold";
    } else if (amount > 640 && amount <= 1280) {
        return "This ship could hold vast amounts of wealth";
    } else if (amount > 1280 && amount <= 2560) {
        return "Gold comprises over 80% of the starship's mass"
    } else if (amount > 2560 && amount <= 5000) {
        return "There are huge sums of gold aboard this ship"
    } else if (amount > 5000 && amount <= 10000) {
        return "The Motherload of Gold!"
    } else if (amount > 10000) {
        return "Darn, thats El Dorado levels of gold!"
    }
}