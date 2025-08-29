console.log('Heyaaa! ~^v^~')

// My melody - 4
// Cinnamoroll - 6
// Kerropi - 2
// Pochacco - 8

rl = require('readline')    
rli = rl.createInterface({
    input : process.stdin,
})
rli.on('line', get_the_character)

function getInputs(line) {
    if(line !== "END")
    Inputs.push(line)
    else{
        rli.close()
    }
}
    var Inputs = []

rli.on('close', get_the_character)

function get_the_character(line) {
    for (let i=0; i < Inputs.length; i++){
    switch(line){
        case "4":
            console.log("My melody");
            break;
        case "6":
            console.log("Cinnamoroll");
            break;
        case "2":
            console.log("Kerropi");
            break;
        case "8":
            console.log("Pochacco")
            break;
        default:
            console.log("Unknown Character");
    }
}
}