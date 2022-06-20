function help(){
    //we will prnit the commands which are used
    console.log(
`
These are some commands used in various situations
   1. node main.js tree <path>
   2. node main.js organize <path>
   3. node main.js help
`
    )
}
//we will export this module
module.exports=
{
    help: help,
}