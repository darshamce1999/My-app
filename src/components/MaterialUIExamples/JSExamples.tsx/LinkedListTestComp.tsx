// import React from 'react'

// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class myLinkedList {
//     constructor() {
//         this.head = null
//         this.size = 0;
//     }

//     isEmpty() {
//         return this.size === 0
//     }

//     prepend(value) {
//         const node = new Node(value)
//         if(this.isEmpty()) {
//             this.head = node
//         } else {
//             node.next =  this.head;
//             this.head = node;
//         }
//         this.size++
//     }

//     append(value) {
//         let node = new Node(value)
//         if(this.isEmpty()) {
//             this.head = node
//         } else {
//             let lastNode = this.head
//             while(lastNode.next) {
//                 lastNode = lastNode.next
//             }
//             lastNode.next = node
//         }
//         this.size++
//     }

//     insert(value, index) {
//         let node = new Node(value)
//         if(this.size === 0 || index < 0 || index > this.size) {
//             return;
//         }
//         if(index === 0) {
//             this.prepend(value)
//         } else {
//             let prevNode =  this.head;
//             for(let i = 0; i<index-1; i++ ) {
//                 prevNode = prevNode.next
//             }
//             const nextNode = prevNode.next
//             prevNode.next = node
//             node.next = nextNode
//         }
//         this.size++
//     }

//     remove(index) {
//         if(this.size === 0 || index < 0 || index > this.size) {
//             return;
//         }
//         let removedNode = null;
//         if(index === 0) {
//             removedNode = this.head
//             this.head = this.head.next
//         } else {
//             let prevNode =  this.head;
//             for(let i = 0; i<index-1; i++ ) {
//                 prevNode = prevNode.next
//             }
//             removedNode = prevNode.next
//             prevNode.next = removedNode.next
//         }
//         this.size--
//         return removedNode
//     }

//     removeByValue(value) {
//         if(this.size === 0) {
//             return;
//         }
//         let removedNode = null;
//         if(this.head.value === value) {
//             removedNode = this.head
//             this.head = this.head.next
//         } else {
//             let prev = this.head;
//             while(prev.next && prev.next.value !== value) {
//                 prev = prev.next
//             }
//             if(prev.next) {
//                 removedNode = prev.next
//                 prev.next = removedNode.next
//             }
//         }
//         this.size--
//         return removedNode
//     }

//     reverse() {
//         let curr = this.head;
//         let prev = null
//         while(curr.next) {
//             let nexNode = curr.next;
//             curr.next = prev
//             prev = curr
//             curr = nexNode
//         }
//         curr.next = prev
//         this.head = curr
//     }


//     print() {
//         let node= this.head
//         let res = ''
//         while(node) {
//             res += node.value + "-->"
//             node = node.next
//         }
//         console.log(res)
//     }
// }

// function LinkedListTestComp() {
//     const l = new myLinkedList()
//     l.prepend(30)
//     l.prepend(20)
//     l.prepend(10)
//     l.append(40)
//     l.prepend(5)
//     l.append(50)
//     l.insert(70, 6)
//     l.insert(15, 2)
//     // l.remove(1)
//     // l.removeByValue(50)
//     l.print()
//     l.reverse()
//     l.print()
    

//   return (
//     <div>LinkedListTestComp</div>
//   )
// }

// export default LinkedListTestComp


// class LinkedListWithTail {
//     constructor() {
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }

//     isEmpty() {
//         return this.size === 0
//     }

//     prepend(value) {
//         const node = new Node(value)
//         if(this.isEmpty()) {
//             this.head = node
//             this.tail = node
//         } else {
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     append(value) {
//         const node = new Node(value)
//         if(this.isEmpty()) {
//             this.head = node
//             this.tail = node
//         } else {
//             this.tail.next = node
//             this.tail = node
//         }
//         this.size++
//     }

//     removeAtFront() {
//         if(this.size < 2) {
//             this.head = null;
//             this.tail = null;
//         } else {
//             this.head = this.head.next
//         }
//         this.size--
//     }

//     removeAtEnd() {
//         if(this.size < 2) {
//             this.head = null;
//             this.tail = null;
//         } else {
//             let prev = this.head
//             while(prev.next !== this.tail) {
//                 prev = prev.next
//             }
//             prev.next = null
//             this.tail = prev
//         }
//         this.size--
//     }
// }

export const LinkedListTestWithTailComp = () => {
//    const linkedListWithTail = new LinkedListWithTail()

//    linkedListWithTail.prepend(10)
//    linkedListWithTail.prepend(20)
//    linkedListWithTail.prepend(30)
//    linkedListWithTail.append(40)

//    linkedListWithTail.removeAtEnd()
//    console.log(linkedListWithTail)
    
  return (
    <div>LinkedListTestWithTailComp</div>
  )
}