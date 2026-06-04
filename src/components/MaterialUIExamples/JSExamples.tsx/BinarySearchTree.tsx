// import React from 'react'

// // https://youtu.be/c-LEpmYikFY?si=cwr_hV18TP7lfYLt
// // https://youtu.be/P37BpJyM2sI?si=aBL6Fj7XTMC69LLy
// // https://chatgpt.com/share/69932339-34c4-8010-a6e6-1c678a865020
// class Node {
//     constructor(value) {
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BinarySearch {
//     constructor() {
//         this.root = null
//     }

//     isEmpty() {
//         return this.root === null
//     }

//     insertNode(node, parent) {
//         if(node.value < parent.value) {
//             if(parent.left == null) {
//                 parent.left = node
//             } else {
//                 this.insertNode(node, parent.left)
//             }
//         } else {
//             if(parent.right == null) {
//                 parent.right = node
//             } else {
//                 this.insertNode(node, parent.right)
//             }
//         }
//     }

//     insert(value) {
//         const node = new Node(value)
//         if(this.isEmpty()) {
//             this.root = node
//         } else {
//             this.insertNode(node, this.root)
//         }
//     }

//     search(value, root = this.root) {
//         if(root === null) {
//             return false;
//         } else {
//             if(value === root.value) {
//                 return true
//             } else if(value < root.value) {
//                 return this.search(value, root.left)
//             } else {
//                 return this.search(value, root.right)
//             }
//         }
//     }

//     //analyse diagram https://www.geeksforgeeks.org/dsa/tree-traversals-inorder-preorder-and-postorder/
//     //https://youtu.be/n6_Ruq1qvjU?si=BQRdBk9zskxDuCNk
//     preOrder(root = this.root) {
//         if(root === null) {
//             return null
//         } else {
//             console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     inOrder(root = this.root) {
//         if(root === null) {
//             return null;
//         } else {
//             this.inOrder(root.left)
//             console.log(root.value)
//             this.inOrder(root.right)
//         }
//     }

//     postorder(root = this.root) {
//         if (!root) return;

//         this.postorder(root.left);
//         this.postorder(root.right);
//         console.log(root.value);
//     }

//     //The left most leaf is smaller one in binary search tree
//     min(root = this.root) {
//         if(root == null) {
//             return undefined
//         }
//         if(root.left === null) {
//             console.log(root.value)
//             // return root.value
//         } else {
//             return this.min(root.left)
//         }
//     }

//     //The right most leaf is largest one in binary search tree
//     max(root = this.root) {
//         if(root == null) {
//             return undefined
//         }
//         if(root.right === null) {
//             console.log(root.value)
//             // return root.value
//         } else {
//             return this.max(root.right)
//         }
//     }

//     //https://www.wscubetech.com/resources/dsa/dfs-vs-bfs
//     //https://youtu.be/H0i3gk1h0lI?si=-rbWaLEgmKkOUf8T
//     bfs(root = this.root) {
//         if(!root) {
//             return null
//         }
//         let queue = [root]
//         while(queue.length > 0) {
//             const node = queue.shift()
//             console.log(node.value)
//             if(node.left) {
//                 queue.push(node.left)
//             }
//             if(node.right) {
//                 queue.push(node.right)
//             }
//         }
//     }
// }

function BinarySearchTree() {

    // const binarySearchTree = new BinarySearch()
    // binarySearchTree.insert(10)
    // binarySearchTree.insert(5)
    // binarySearchTree.insert(15)
    // binarySearchTree.insert(3)
    // binarySearchTree.insert(7)
    // binarySearchTree.insert(8)
    // binarySearchTree.insert(4)
    // binarySearchTree.insert(6)
    // binarySearchTree.insert(9)

    // // console.log(binarySearchTree.search(9))
    // binarySearchTree.inOrder()
    // console.warn("a")
    // binarySearchTree.bfs()

    // // binarySearchTree.min()
    // // binarySearchTree.max()

    // console.log(binarySearchTree)


  return (
    <div>BinarySearchTree</div>
  )
}

export default BinarySearchTree