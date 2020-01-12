let tilesTossed = 0;
let i =0;

function random()
{ 
let values = ["bag","bell","bow","candy","decorate","hat","bag","bell","bow","candy","decorate","hat","bag","bell","bow","candy","decorate","hat","bag","bell","bow","candy","decorate","hat"];
 return values.sort(() => Math.random() - 0.5);
}

val = random()
function start(){
    console.log('clicked');
    document.getElementById('intro').classList.add('start');
   // document.getElementById('intro').classList.remove('start');
}

function game(n)
{
    tilesTossed += 1  
    document.getElementById('score').innerHTML = `tossed ${tilesTossed} times`
    document.getElementsByClassName('small-box')[n-1].innerHTML = `<img src="./svgs/${val[n-1]}.svg" />`
    document.getElementsByClassName('small-box')[n-1].style.background = "white"
    document.getElementsByClassName('small-box')[n-1].style.border = "2px solid #f45c43"
    if(tilesTossed % 2 === 0){
        if(val[n-1] === val[prev])
        {
            console.log("won it");
        }
        else{
         setTimeout(() => {
            document.getElementsByClassName('small-box')[n-1].innerHTML = ``
            document.getElementsByClassName('small-box')[n-1].style.background = "var(--gradient-color)"
            document.getElementsByClassName('small-box')[n-1].style.border = ""
            document.getElementsByClassName('small-box')[prev].innerHTML = ``
            document.getElementsByClassName('small-box')[prev].style.background = "var(--gradient-color)"
            document.getElementsByClassName('small-box')[prev].style.border = ""
         }, 300);
        }
    }
    else
    {
        prev = n-1;
    }
}


