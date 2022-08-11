// Problem:1  radianToDegree


function radianToDegree(radian){
    if(typeof radian !== 'number'){
        return 'Please enter a number';
    }
    let degree = radian*180/Math.PI;
    const deg= parseFloat(degree.toFixed(2));
    return deg;
}
console.log(radianToDegree(10));


// Problem:2  isJavaScriptFile


function isJavaScriptFile(String){
    if(typeof String !== 'string'){
        return 'Please enter a string';
    }
    else if(String.endsWith('.js')){
        return true;
    }
    else{
        return false;
    }
}
console.log(isJavaScriptFile('image.js.png'));


// Problem 3: oilPrice


function oilPrice(degel, petrol ,octen){
// degel=114;
// petrol=130;
// octen = 135; 
   if(typeof degel !== 'number' || typeof petrol!=='number' || typeof octen!== 'number'){
    return 'Please enter number';
}
    return degel*114 +petrol*130+octen*135;
}
console.log(oilPrice(30,20,10));


// Problem 4: publicBusFare



function publicBusFare(persons){
    // to check for bus which can contain only 50 perons
    if(persons==50){
        return 0;
    }
    // to check for micro wchich can contain only 11 persons if that are less then 11 will be sent Public Bus so Public bus fare will be:
    else if(persons>=50){
        const remainderForMicro= persons%50;
        if(remainderForMicro>=11){
            const remainderForPublic= remainderForMicro%11;
            return remainderForPublic*250;
        }
        else{
            return remainderForMicro*250;
        }
    }
    // if less then 50 than they will be sent Public bus so Public bus fare will be: 
    else{
        return persons*250;
    }
}
console.log(publicBusFare(365));


// Problem 5: isBestFriend


const toCheck={name:'abul' , friend:'kabul'};
const toCheck1={name:'kabul' , friend:'sabul'};

function isBestFriend(toCheck,toCheck1){
    if(toCheck.name== toCheck1.friend && toCheck.friend== toCheck1.name){
        return true;
    }
    else{
        return false;
    }
}
console.log(isBestFriend(toCheck,toCheck1));
