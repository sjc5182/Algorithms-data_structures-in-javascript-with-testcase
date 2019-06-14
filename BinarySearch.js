// Given a target integer T and an integer array A sorted in ascending order, find the index i such that A[i] == T or return -1 if there is no such index.

// Assumptions

// There can be duplicate elements in the array, and you can return any of the indices i such that A[i] == T.
// Examples

// A = {1, 2, 3, 4, 5}, T = 3, return 2
// A = {1, 2, 3, 4, 5}, T = 6, return -1
// A = {1, 2, 2, 2, 3, 4}, T = 2, return 1 or 2 or 3
// Corner Cases

// What if A is null or A is of zero length? We should return -1 in this case.
class Node {
  constructor(value, index){
    this.value = value;
    this.index = index;
    this.right = null;
    this.left = null;
  }
}


class BST {
  constructor(){
    this.root = null;
  }
  
  nodeInsertion(value, index){
    let newNode = new Node(value, index)
      if(this.root === null){
        this.root = newNode
        return this
      }else{
        let current = this.root
        while(true){
        if(current.value>value){
          if(current.left===null){
            current.left=new Node(value, index)
            return this
          }else{
            current = current.left
          }
        }else if(current.value<value){
          if(current.right===null){
            current.right=new Node(value, index)
            return this
          }else{
            current = current.right
          }
        }
      }
    }
  }

  BFS(array, target){
    for(let i = 0; i<array.length; i++){
      this.nodeInsertion(array[i], i)
    }

    let node = this.root,
        queue = [],
        data = []
    queue.push(node)
    while(queue.length){
      node = queue.shift()

      if(node.value===target)data.push(node.index)
      
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }
    return data
  }
}


let binarySearchTest = new BST()
console.log(binarySearchTest.BFS([1,2,3,4,5], 3))


//test cases
// [
//   ([[], 1],
//   [[1], 1],
//   [[1], 2],
//   [[1, 2], 2],
//   [[1, 2], 0],
//   [[1, 2, 5, 8], 2],
//   [[1, 2, 2, 2, 5, 8], 3],
//   [[1, 2, 2, 2, 4, 5, 8, 13, 13], 5],
//   [[1, 2, 2, 2, 4, 5, 8, 13, 13], 16],
//   [[1, 2, 2, 2, 4, 5, 8, 13, 13], 10],
//   [[2, 9, 11, 13], 2],
//   [[1, 2, 2, 4, 13, 13, 13], 4],
//   [[2, 2, 2, 2, 4, 8, 9, 9, 14, 18], 18],
//   [[1, 1, 1, 4, 8, 8, 10, 11, 15], -2],
//   [[1, 2, 2, 2, 10, 10, 13], 13],
//   [[3, 4, 5, 6, 9, 16], 9],
//   [[3, 4, 5, 6, 6, 9, 16], 3],
//   [[3, 4, 5, 6, 6, 9, 16], 5])
// ]