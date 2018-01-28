/*global apps*/
var commands = [];
var comval = 0;
var tmp = "";
var pid = [];
var pidcount = 0;
var elem;
var call = submit;
console.log("Master.js Loaded");

document.addEventListener('keyup', function (e) {
    input.focus();
    if (e.keyCode == 13) {//ENTER
		if(input.value=="!RESET") {
			resetInput();
		} else {call(input.value);}
        
    } else if (e.keyCode == 38) { //UP
        comval--;
        if (comval <= commands.length) {
            input.value = commands[comval];
        } else {
            comval++;
        }
    } else if (e.keyCode == 40) { //DOWN
        comval++;
        if (comval >= 0) {
            input.value = commands[comval];
        } else {
            comval--;
        }
    }
}, false);

function submit(action) {
	input.value = "";
    commands.push(action);
    comval = commands.length;
    print(action, "blue");
    tmp = action.split(" ");
    switch (tmp[0]) {
        case "hello":
            print("Hello, USER! Type \"help\" to find a list of commands!");
            break;
        case "recent":
            for (var x = 0; x < commands.length; x++) {
                print(x + " - " + commands[x]);
            }
            break;
        case "open":
            print("Are you sure you want to open " + tmp[1] + "? (y/n)");
            if (prompt("Are you sure you want to open " + tmp[1] + "? (y/n)") == "y") {
                window.open(tmp[1]);
            } else {
                print("User did not say yes", "green");
                error("Cancelled Opening.");
            }
            break;
        case "clear":
            output.innerHTML = ""
            print("InCode Labs Command Line BETA (Creative Commons)");
            print("Type \"help\" for a list of commands.");
            print("------------------------------------------------");
            break;
        case "math":
            if (tmp[2] != undefined&&tmp[2]!="") {
                error("MATH ERROR: no spaces allowed in equations.");
            } else if (tmp[1] == undefined || tmp[1] == "") {
                error("Add an equation after the word 'math' using JavaScript Math Syntax");
            } else {
                try {
                    print("Evaluating " + tmp[1]);
                    print("= " + eval(tmp[1]));
                }
                catch (err) {
                    error(err.name + " Error Occurred: '" + err.message + "'");
                }
            }
            break;
        case "manifest":
            for (var x = 0; x < apps.length; x++) {
                print(x + " - " + apps[x][0])
            }
            break;
        case "run":
            for (var x = 0; x < apps.length; x++) {
                if (tmp[1] == apps[x][0]) {
                    var script = document.createElement('script');
                    pidcount++;
                    script.src = apps[x][2];
                    script.id = pidcount;
                    document.head.appendChild(script);
                    pid.push(new Array(script.id, tmp[1]));
                    print("Running Script with PID: " + pidcount);
                    break;
                }
            }
            break;
        case "pid":
            for (var x = 0; x < pid.length; x++) {
                print(pid[x][0] + " - " + pid[x][1]);
            }
        case "kill":
            if (tmp[1] == "all") {
                for (var x = 0; x < pid.length; x++) {
                    elem = document.getElementById(pid[x][0]);
                    elem.parentNode.removeChild(elem);
                    pid[x].splice[x, 1]
                }
            } else {
                elem = document.getElementById(tmp[1]);
                elem.parentNode.removeChild(elem);
                pid.splice(parseInt(tmp[1])-1,1);
            }
        case "execute":
            execute.src = tmp[1];
            break;
        case "help":
            print("LIST OF COMMANDS");
            print("(case sensitive)")
            print("----------------");
            print("help");
            print(" + List All Commands");
            print("hello");
            print(" + Return 'Hello World'");
            print("recent");
            print(" + Returns all recent commands");
            print("open url");
            print(" + Opens 'url' in your browser");
            print("clear");
            print(" + clears the console");
            print("math eval");
            print(" + evaluates mathematical equation based on JavaScript Math where equation is 'eval'");
            print("run PROG");
            print(" + run a program, where 'PROG' is the program name.")
            print("execute PATH");
            print(" + force a .js file to run in the command line, where PATH is the file location.");
            print("manifest");
            print("Lists available programs");
            print("---------------")
            print("ADDITIONAL INFO");
            print("---------------")
            print("You may use arrow keys (UP and DOWN)");
            print("to cycle through past commands.");
            break;
        default:
            error("UNKOWN COMMAND: " + action + " - Type \"help\" for a list of commands.")
            break;
    }
}

function getInput(callback, note) {
	if(note!=null) {
		notice.innerHTML = note;
	}
	notice.innerHTML += " - Type '!RESET' to exit"
	call = callback
}

function resetInput() {
	call = submit;
	notice.innerHTML = "";
}

function print(text, color) {
    if (color == null) {
        output.innerHTML += "<br/>" + escapeHtml(text);
    } else {
        output.innerHTML += "<br/><span style='color:" + color + ";'>" + escapeHtml(text) + "</span>";
    }
}
function error(text) {
    output.innerHTML += "<br/><span style='color:red;'>" + escapeHtml(text) + "</span>";
}
function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}