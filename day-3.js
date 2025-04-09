
function expect(val) {
    return {
     toBe : (v)=>{
         if(val === v){
             return true
         }else{
             throw new Error('Not Equal')
         }
     
     },
     notToBe: (v)=>{
         if(val !== v){
             return true
         }else{
              throw new Error('Equal')
         }
        
     }
    }
 };
 
 /**
  * expect(5).toBe(5); // true
  * expect(5).notToBe(5); // throws "Equal"
  */