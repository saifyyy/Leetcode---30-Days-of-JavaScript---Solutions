class TimeLimitedCache {
    values = []
   constructor() {
       
   }
   
   set(key, value, duration) {
      let time = Date.now()
       let findItem = this.values.find(i => i.key == key)
       
       if(findItem && findItem.validUntil > time){
           this.values = this.values.map(e=> {
               if(e.key == findItem.key){
                   return {key : key,value: value , validUntil: Date.now() + duration}
               }else{
                   return e
               }
           })
           return true
       }else {
           this.values.push({key : key,value: value , validUntil: Date.now() + duration})
           return false
       }
   }
   
   get(key) {
      let findItem = this.values.find(i => i.key == key)
       let time = Date.now()
       if(findItem && findItem.validUntil > time){
           return findItem.value
       }else{
           return -1
       }
   }
   
   count() {
        let time = Date.now()
           return this.values.filter(i => i.validUntil > time)?.length
   }
}

/**
* const timeLimitedCache = new TimeLimitedCache()
* timeLimitedCache.set(1, 42, 1000); // false
* timeLimitedCache.get(1) // 42
* timeLimitedCache.count() // 1
*/