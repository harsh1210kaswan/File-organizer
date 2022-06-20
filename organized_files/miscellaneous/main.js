let helpfunc = require("./helpfunction")
let orrganize = require("./organize")
let tree = require("./tree")


//taking input and slicing it 
//we do not want to input node command and name of the program
//as they are used to run the program and are not the part of 
//our input 
let inputarr= process.argv.slice(2);
//seprating the input command 
let command =inputarr[0];
//checking which command it is
//we have 3 main commands
//help (Will tell us the commands and how to use them)
//organize (this would organize a folder by making sub folders)
//tree (this will print the structure of a folder)
let path=inputarr[1];
//we will take the path as input and will pass it to sub functions

switch(command)
{
    case "tree":
        //if the command is of the tree function we will
        //call the tree function and will provide the path
        tree.helptree(path);break;

    case "organize":
        //if the command is of the organize function we
        //will call the organize function and will give patrh to it
        orrganize.organize(path);break;

    case "help":
        //this command will list all the commands present in our set of commands.
        //we will call the help function
        helpfunc.help();break;
    
    default:
        //if the command is unmatched we will throw error this way.
        console.log("Commands not recognized! Use help to know about commands!");
        break;
}
