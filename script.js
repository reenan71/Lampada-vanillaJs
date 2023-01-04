const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ( 'turnOff' );
const lamp = document.getElementById ( 'lamp' );

function lampOn () {
    lamp . src= "assets/ligada.jpg"
}

function lampOff () {
    lamp.src = "assets/lampada-desligada.jpg"
}




turnOn.addEventListener ( 'click' , lampOn);
turnOff.addEventListener ( 'click' , lampOff);

