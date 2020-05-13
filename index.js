// Your code here
function mapToNegativize(sourceArray){
   return  sourceArray.map(element => element * -1)
}

function mapToNoChange(sourceArray){
    return  sourceArray.map(element => element)
 }

 function mapToDouble(sourceArray){
    return  sourceArray.map(element => element * 2)
 }

 function mapToSquare(sourceArray){
    return  sourceArray.map(element => element ** 2)
 }


 function reduceToTotal(sourceArray, startingPoint= 0){
    let acc = startingPoint
//   return sourceArray.reduce((startingPoint,currentValue) => startingPoint + currentValue);
for (let i = 0; i< sourceArray.length; i++){
    
   acc += sourceArray[i]
}
  return acc
 }
 
 function reduceToAllTrue(sourceArray){
  
for (let i = 0; i< sourceArray.length; i++){

    if (sourceArray[i] === false){
        return false;
    }
    
       
}
  return true
 }

 function reduceToAnyTrue(sourceArray){
for (let i = 0; i < sourceArray.length; i++){
 if (sourceArray[i] === true){

   return true;
 }

  
}
  return false;
}