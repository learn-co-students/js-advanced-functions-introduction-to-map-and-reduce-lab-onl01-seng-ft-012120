// Your code here
 let  mapToNegativize = function(array){
     let result = []
     for (let i = 0; i < array.length; i++) {
         result.push(array[i]*(-1))
     }
     return result
 }
 
 let mapToNoChange = function(array) {
      let result = []
     for (let i = 0; i < array.length; i++) {
         result.push(array[i])
     }
     return result
 }
 
 let mapToDouble = function(array) {
      let result = []
     for (let i = 0; i < array.length; i++) {
         result.push(array[i] * 2)
     }
     return result
 }
 
 let  mapToSquare = function(array) {
      let result = []
     for (let i = 0; i < array.length; i++) {
         result.push(array[i] ** 2)
     }
     return result
 }
 
 let  reduceToTotal = function(array, start=0) {
     let total = start
     for (let i = 0; i < array.length; i++){
         total += array[i]
     }
     
    return total 
 }
 
 let  reduceToAllTrue = function(array) {
     for (let i = 0; i < array.length; i++){
         if (!array[i]) {
             return false 
         }
            
         
     }
     return true
 }
 
 let reduceToAnyTrue = function(array) {
     for (let i = 0; i < array.length; i++){
         if (array[i]) {
             return true
         }
     }
     return false
 }