//HorizontalAlignment notation: 1 = center

var headerText = document.getElementById('content1'); 
var sectionContent = document.getElementById('partContainer');

//Intervals
var scrollInterval;
var headerTextInterval;

//Variable for the moving object 
var centerOfPage = parseInt(Math.max(document.documentElement.clientWidth, window.innerWidth || 0))/2;
var viewportWidth = parseInt(Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
var scrollHeight;
var placedInit = false;
var speedSet = false;
var currentSpeed;

//place element
function placeDivHori(xPos, object){
        object.style.left = xPos+'px';
}

//place element
function placeDivVert(yPos, object){
    object.style.top = yPos+'px';
}

//Left Animation 
function slideLeft(object, startX, endX, speed, scrollHeight){
    if(placedInit == false){
        placeDivHori(startX, object);
        placedInit = true;
    }
    
    if (speedSet == false){
        currentSpeed = speed;
        speedSet = true;
    }
    else{
        speedSet = true;
    }
    
    var xPos = parseInt(object.style.left);

    if (endX > xPos){
        console.log("ANIMATING");
        xPos = xPos+currentSpeed;
        if (currentSpeed > 1){
            currentSpeed = currentSpeed-.04;
        }
        if (currentSpeed < 1){
            currentSpeed = 1;
        }
        console.log("speed is: " + currentSpeed);
        placeDivHori(xPos, object);
    }
    else{
        clearInterval(animatingInterval);
        placedInit = false;
    }
    
}
//Down Animation
function slideDown(object, interval, startY, endY, speed){
    object.style.left = (centerOfPage-(headerText.offsetWidth)/2);
    if(placedInit == false){
        placeDivVert(startY, object);
        placedInit = true;
    }
    
    if (speedSet == false){
        currentSpeed = speed;
        speedSet = true;
    }
    else{
        speedSet = true;
    }
    
    var yPos = parseInt(object.style.top);

    if (endY > yPos){
        console.log("ANIMATING");
        yPos = yPos+currentSpeed;
        if (currentSpeed > 1){
            currentSpeed = currentSpeed-.04;
        }
        if (currentSpeed < 1){
            currentSpeed = 1;
        }
        console.log("speed is: " + currentSpeed);
        placeDivVert(yPos, object);
    }
    else{
        clearInterval(interval);
        placedInit = false;
    }
    
}

//Function that sets scroll height variable 
function getScrollHeight(){
    scrollHeight = document.body.scrollTop;
    console.log(scrollHeight);
}

//sets interval for getScrollHeight function
scrollInterval = setInterval(getScrollHeight, 500);  

//ANIMATIONS 

headerTextInterval = setInterval(slideDown, 6, headerText, headerTextInterval, -400, 100, 6);


//Website Script
var part1 = document.getElementById('part1');
var part2 = document.getElementById('part2');
var part3 = document.getElementById('part3');

part1.style.left = 10 +'%';
part2.style.left = 35 + '%';
part3.style.left = 60 + '%';