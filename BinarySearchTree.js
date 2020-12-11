class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        // left
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          } else {
            currentNode = currentNode.left;
          }
          // right
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }
  lookup(value) {
    if (this.root.value === value) {
      return this.root;
    } else {
      let currentNode = this.root;
      while (true) {
        // left
        if (currentNode.value > value) {
          if (currentNode.left === null) {
            return -1;
          } else if (currentNode.left.value === value) {
            return currentNode.left;
          } else {
            currentNode = currentNode.left;
          }
          // right
        } else {
          if (currentNode.right === null) {
            return -1;
          } else if (currentNode.right.value === value) {
            return currentNode.right;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log(tree.lookup(1));
// console.log(JSON.stringify(traverse(tree.root)));

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
