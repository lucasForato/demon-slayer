let returned = document.getElementsByClassName('return')[0];
let next = document.getElementsByClassName('next')[0];

let cd1 = document.getElementsByClassName('cd1')[0];
let cd2 = document.getElementsByClassName('cd2')[0];
let cd3 = document.getElementsByClassName('cd3')[0];
let cd4 = document.getElementsByClassName('cd4')[0];
let cd5 = document.getElementsByClassName('cd5')[0];

const array = [
    {className: 'cd1', position: 1, d: 'block'},
    {className: 'cd2', position: 2, d: 'block'},
    {className: 'cd3', position: 3, d: 'block'},
    {className: 'cd4', position: 4, d: 'none'},
    {className: 'cd5', position: 5, d: 'none'},
];

function goForward() {
    if(array[0].position === 1) {
        array[0].position++;
        array[1].position++;
        array[2].position++;
        array[3].position++;
        array[4].position = 1;

        array[0].d = 'block';
        array[1].d = 'block';
        array[2].d = 'none';
        array[3].d = 'hidden';
        array[4].d = 'block';
        
    } else if(array[0].position === 2) {
        array[0].position++;
        array[1].position++;
        array[2].position++;
        array[3].position = 1;
        array[4].position++;

        array[0].d = 'block';
        array[1].d = 'none';
        array[2].d = 'none';
        array[3].d = 'block';
        array[4].d = 'block';
    } else if(array[0].position === 3) {
        array[0].position++;
        array[1].position++;
        array[2].position = 1;
        array[3].position++;
        array[4].position++;

        array[0].d = 'none';
        array[1].d = 'none';
        array[2].d = 'block';
        array[3].d = 'block';
        array[4].d = 'block';
    } else if(array[0].position === 4) {
        array[0].position++;
        array[1].position = 1;
        array[2].position++;
        array[3].position++;
        array[4].position++;

        array[0].d = 'none';
        array[1].d = 'block';
        array[2].d = 'block';
        array[3].d = 'block';
        array[4].d = 'none';
    } else if(array[0].position === 5) {
        array[0].position = 1;
        array[1].position++;
        array[2].position++;
        array[3].position++;
        array[4].position++;
        
        array[0].d = 'block';
        array[1].d = 'block';
        array[2].d = 'block';
        array[3].d = 'none';
        array[4].d = 'none';
    }
    changePosition()
}

function goBackwards() {
    if(array[0].position === 1) {
        array[0].position = 5;
        array[1].position--;
        array[2].position--;
        array[3].position--;
        array[4].position--;
    } else if(array[0].position === 2) {
        array[0].position--;
        array[1].position = 5;
        array[2].position--;
        array[3].position--;
        array[4].position--;
    } else if(array[0].position === 3) {
        array[0].position--;
        array[1].position--;
        array[2].position = 5;
        array[3].position--;
        array[4].position--;
    } else if(array[0].position === 4) {
        array[0].position--;
        array[1].position--;
        array[2].position--;
        array[3].position = 5;
        array[4].position--;
    } else if(array[0].position === 5) {
        array[0].position--;
        array[1].position--;
        array[2].position--;
        array[3].position--;
        array[4].position = 5;

    }
}

function changePosition() {

    cd1.style.gridColumn = array[0].position;
    cd2.style.gridColumn = array[1].position;
    cd3.style.gridColumn = array[2].position;
    cd4.style.gridColumn = array[3].position;
    cd5.style.gridColumn = array[4].position;

    cd1.style.gridRow = 1;
    cd2.style.gridRow = 1;
    cd3.style.gridRow = 1;
    cd4.style.gridRow = 1;
    cd5.style.gridRow = 1;

    cd1.style.display = array[0].d;
    cd2.style.display = array[1].d;
    cd3.style.display = array[2].d;
    cd4.style.display = array[3].d;
    cd5.style.display = array[4].d;
    
}


returned.onclick = goForward;
next.onclick = goForward;


function al() {
    alert('you made a purchase! Thanks.')
}