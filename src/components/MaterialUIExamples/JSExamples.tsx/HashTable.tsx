
// class myHashTable {
//     constructor(size) {
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key) {
//         let sum = 0;
//         for(let i=0; i<key.length; i++) {
//             sum += key[i].charCodeAt()
//         }
//         return sum % this.size
//     }

//     //If Hash function is strong and if it's capabe of returning uninque value for different key, then set and get methods become simpler.
//     set(key, value) {
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(!bucket) {
//             this.table[index] = [[key, value]]
//         } else {
//             const findIndex = bucket.findIndex(item => item[0] === key)
//             if(findIndex != -1) {
//                 bucket[findIndex][1] = value 
//             } else {
//                 bucket.push([key, value])
//             }
//         }
//     }

//     get(key) {
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(bucket) {
//              return bucket.find(item => item[0] === key)
//         }
//         return null;
//     }

//     remove(key) {
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(bucket) {
//              const keyIndex = bucket.findIndex(item => item[0] === key)
//              bucket.splice(keyIndex, 1)
//              return true
//         }
//         return false
//     }
// }


function HashTable() {
    
    // const table = new myHashTable(5)
    // table.set("name", "Darshan")
    // table.set("age", 27)
    // table.set("bf", "Siddesh")
    // table.set("friend", "Vishwas")
    // console.log(table.get("friend"))

    // table.set("name", "Darshan N R")
    // table.set("friend", "Karthik")
    // console.log(table)
    // table.remove("friend")
    // console.log(table)

  return (
    <div>HashTable</div>
  )
}

export default HashTable