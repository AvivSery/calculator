

let allTheElementsHavingID = document.querySelectorAll('[isVisible]');
let allTheID = [];
for(i=0;i<allTheElementsHavingID.length;i++)//יצירת מערך של כל המספרים והסימנים
{
  allTheID.push(allTheElementsHavingID[i].id);
}

for(i=0; i<allTheID.length; i++){//הוספת פונקציה לכל הכפתורים 

    let theButton = document.getElementById(allTheID[i])
    theButton.addEventListener('click',getNum)
}

let myDrill= "";
let isEqualPreesesLast=false;

function getNum(id){//יצירת התרגיל

    let num = id.target.innerHTML;
    if(isEqualPreesesLast && (num!=='*' && num!=='/' && num!=='-' && num!=='+'))
    myDrill=""
    myDrill +=num;
    document.getElementById('calc-area').innerHTML =myDrill
    isEqualPreesesLast=false;
}

document.getElementById("eqal").addEventListener('click',calculate)//כפתור שווה מחשב את התרגיל
document.getElementById("new").addEventListener('click',clearMyCalculator)// כפתור זה מאפס את המחשבון




function calculate(){
    
    isEqualPreesesLast=true;
    try {
        console.log(myDrill)
        if(checkMistakeInDrill())
        throw new error("error")
        let result = eval(myDrill)
        result = cutResolt(result)
        document.getElementById('calc-area').innerHTML = result
        myDrill= checkRersltType(result)
       } catch(error) {
        document.getElementById('calc-area').innerHTML = "error"
        myDrill = "";
       }   
}

function checkMistakeInDrill(){


    for(let i=0;i-1<myDrill.length;i++){

        if((myDrill[i]==="/"||myDrill[i]==="*") &&(myDrill[i+1]==="/"||myDrill[i+1]==="*")){
            return true
        }
    }
    return false;
}


function cutResolt(result){

    if(Number.isInteger(result)){
        return result;

    }

    result = result.toFixed(2);
    result= parseFloat(result);
    // result = parseInt(result);
    return result
    
}


function clearMyCalculator(){
    myDrill="";
    document.getElementById('calc-area').innerHTML = 0
}

function checkRersltType(result){

    if(typeof result ==="number"&& result !== Infinity)
    return result;
    else
    return "";

}







