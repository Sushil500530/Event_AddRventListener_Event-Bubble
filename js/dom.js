// option-1
// ata use korbo na...
console.log('hello dom event i am here!')
// option -2 redColor 
// ata sob theke besi use korbo 
// IMPORTANT: [we will use sometimes]
function redBody(){
    document.body.style.backgroundColor = 'red'
}

// option -3 
// ata besi use korbo na,tobe majhe majhe use korbo 
const blue = document.getElementById("blue-color")
blue.onclick = makeBlue; 

function makeBlue(){
 document.body.style.backgroundColor = 'blue'
}
// option -3 another 
const makePurple = document.getElementById('purple-color')
makePurple.onclick = function purple(){
    document.body.style.backgroundColor = 'purple'
}
const makeWhite = document.getElementById('white-color')
makeWhite.onclick = function white(){
    document.body.style.backgroundColor = 'white'
}
// option-4
const makePink = document.getElementById('pink-color') 
makePink.addEventListener('click', pink)

function pink(){
    document.body.style.backgroundColor = 'pink'
}
const makeGreen = document.getElementById('green-color')
makeGreen.addEventListener('click', function (){
    document.body.style.backgroundColor = 'green'
})

// final 
// IMPORTANT WE WILL USE SOMETIMES
document.getElementById('golden').addEventListener('click', function gold(){
    document.body.style.backgroundColor ='orange';
    return gold;
})
