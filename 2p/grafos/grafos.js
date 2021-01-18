class Graph {
    constructor() {
      this.vertices = [];
      this.adjList = new Map();
    }
  
    addVertex(v) {
      this.vertices.push(v);
      this.adjList.set(v, []);
    }
  
    addEdge(v, w) {
      this.adjList.get(v).push(w);
      this.adjList.get(w).push(v);
    }
  
    toString() {
      const { vertices, adjList } = this;
      let s = '';
      for (let i = 0; i < vertices.length; i++) {
        //{10}
        s += `${vertices[i]} -> `;
        const neighbors = adjList.get(vertices[i]);
        for (let j = 0; j < neighbors.length; j++) {
          //{12}
          s += `${neighbors[j]} `;
        }
        s += '\n';
      }
      return s;
    }
    //   grafos (5) elegir 5 métodos e implementar en ES6 (clase), de acuerdo a lo visto en la codeconference,
    // puedes implementarlos usando matrices o listas enlazadas
  
    //   Usando matrices de una dimension
    get size() {
      return this.vertices.length;
    }
    get order() {
      const edges = new Set();
      const { vertices, adjList } = this;
  
      vertices.forEach((vertex) => {
        const adjs = adjList.get(vertex);
        adjs.forEach((ad) => {
          edges.add([vertex, ad].sort().join(''));
        });
      });
      return edges.size;
    }
    removeEdge(v, w) {
      this.adjList.set(
        v,
        this.adjList.get(v).filter((vv) => vv !== w)
      );
      this.adjList.set(
        w,
        this.adjList.get(w).filter((wv) => wv !== v)
      );
    }
    removeVertex(v) {
      this.vertices.forEach((vertex) => {
        if (vertex === v) {
          this.adjList.delete(vertex);
          this.vertices = this.vertices.filter((vv) => vv != v);
          return;
        }
        this.adjList.set(
          vertex,
          this.adjList.get(vertex).filter((vv) => vv !== v)
        );
      });
    }
    isAdjacent(v, u) {
      const { vertices, adjList } = this;
      return vertices.some(
        (vertice) => vertice === v && adjList.get(vertice).includes(u)
      );
    }
  }
  module.exports = Graph;

const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

const graph = new Graph();
for (let i = 0; i < myVertices.length; i++) graph.addVertex(myVertices[i]);
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log('-----------------Initial state-----------------');
console.log(graph.toString());
console.log('-----------------Size-----------------');
console.log(`Graph size: ${graph.size}`);
console.log('-----------------Order-----------------');
console.log(`Graph order${graph.order}`);
console.log('-----------------Is adjacent-----------------');
console.log(graph.isAdjacent('A', 'G')); // -> False
console.log(graph.isAdjacent('E', 'I')); // -> True
console.log('-----------------Remove edge-----------------');
console.log(`Graph order${graph.order}`);
graph.removeEdge('E', 'I');
console.log(`Graph order${graph.order}`);
console.log('-----------------Remove vertex-----------------');
console.log(`Graph size: ${graph.size}`);
graph.removeVertex('A');
console.log(`Graph size: ${graph.size}`);
console.log('-----------------Final State-----------------');
console.log(graph.toString());

  