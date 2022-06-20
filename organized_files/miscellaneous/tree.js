const fs= require("fs");

let path= require("path");

function tree(dirpath)
{
    if(dirpath==undefined)
    {
        console.log("Please enter a valid path!");
        return;
    }
    let pathexist=fs.existsSync(dirpath);
    if(pathexist)
    {
        //calling the recursive function along with indentation
        treehelp(dirpath, " ");
    }
    else{
        console.log("Path does not exist");
    }
}

function treehelp(targetpath, indent)
{
    let issfile= fs.lstatSync(targetpath).isFile();
    if(issfile)
    {
        let filename= path.basename(targetpath);
        console.log(indent+ "├──"+filename);
        return;
    }
    let dirname=path.basename(targetpath);
    console.log(indent+"└──"+dirname);
    let children=fs.readdirSync(targetpath);
    for(let i=0;i<children.length;i++)
    {
        let childpath = path.join(targetpath, children[i]);
        treehelp(childpath, indent + "\t");
    }
}

module.exports={
    helptree:tree,
}