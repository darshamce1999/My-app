// import React from 'react'

// //https://chatgpt.com/share/6994994e-3ea4-8010-9d3b-17ff64810b63
// class myGraph {
//     constructor() {
//         this.adjecentList = {}
//     }

//     addVertex(vertex) {
//         this.adjecentList[vertex] = []
//     }

//     addEdge(vertex1, vertex2) {
//         if(vertex1 in this.adjecentList) {
//             this.adjecentList[vertex1].push(vertex2)
//         } else {
//             this.adjecentList[vertex1] = [vertex2]
//         }
        
//         if(vertex2 in this.adjecentList) {
//             this.adjecentList[vertex2].push(vertex1)
//         } else {
//             this.adjecentList[vertex2] = [vertex1]
//         }
//     }

//     hasEdge(vertex1, vertex2) {
//         if(vertex1 in this.adjecentList && vertex2 in this.adjecentList) {
//             return this.adjecentList[vertex1].includes(vertex2) && this.adjecentList[vertex2].includes(vertex1)
//         }
//         return false
//     }

//     display() {
//         for(let vertex in this.adjecentList) {
//             console.log(vertex + "-->" + [...this.adjecentList[vertex]])
//         }
//     }

//     removeEdge(vertex1, vertex2) {
//         let index = this.adjecentList[vertex1].indexOf(vertex2)
//         if(index != -1) {
//             this.adjecentList[vertex1].splice(index, 1)
//         }

//         index = this.adjecentList[vertex2].indexOf(vertex1)
//         if(index != -1) {
//             this.adjecentList[vertex2].splice(index, 1)
//         }
//     }

//     removeVertex(vertexToRemove) {
//         if(!(vertexToRemove in this.adjecentList)) {
//             return
//         }
//         for(let vertex in this.adjecentList) {
//             this.removeEdge(vertex, vertexToRemove)
//         }
//         delete this.adjecentList[vertexToRemove]
//     }

//     depthFirstSearch(startVertex, visisted = new Set()) {
//         visisted.add(startVertex)
//         for(let i of this.adjecentList[startVertex]) {
//             if(!visisted.has(i)) {
//                 console.log(i)
//                 this.depthFirstSearch(i, visisted)
//             }
//         }
//     }

//     breadthFirstSearch(startVertex) {
//         const queue = [startVertex]
//         const visited = [startVertex]
//         while(queue.length > 0) {
//             const poped = queue.shift()
//             console.log(poped)

//             for(let i of this.adjecentList[poped]) {
//                 if(!visited.includes(i)) {
//                     visited.push(i)
//                     queue.push(i)
//                 }
//             }
//         }
//     }

// }



function Graph() {
    // const graph = new myGraph();

    // graph.addVertex("Root")
    // graph.addVertex("A")
    // graph.addVertex("B")
    // graph.addVertex("C")
    // graph.addVertex("D")
    // graph.addVertex("E")

    // graph.addEdge("A", "Root")
    // graph.addEdge("A", "B")
    // graph.addEdge("A", "C")
    // graph.addEdge("D", "B")
    // graph.addEdge("D", "E")
    // console.log(graph)

    // console.log(graph.display())
    // console.log(graph.hasEdge("B", "C"))

    // graph.removeEdge("A", "C")
    // console.log(graph.display())

    // graph.removeVertex("A")
    // console.log(graph.display())'

    // graph.depthFirstSearch("Root")
    // graph.breadthFirstSearch("Root")


  return (
    <div>Graph</div>
  )
}

export default Graph