const prompt = require("prompt-sync")()


let typeOnePackage = "standard"  ;
let typeTwoPackage = "express" ;
let typeThreePackage =  "overnight" ; 
let inputPackage ;

 inputPackage = prompt("Enter Type of package"  ) ;
 
switch(true ) {
 
    case (inputPackage = typeOnePackage) :
        console.log("It might take 3-5 days to deliver .")
        break ;

        case (inputPackage = typeTwoPackage) :
            console.log("It might take 1-2 days to deliver .")
        break ; 

        case (inputPackage = typeThreePackage) :
            console.log("It might be delivered overnight")
        break ; 
 
        default :
        console.log("invalid input")
        


}