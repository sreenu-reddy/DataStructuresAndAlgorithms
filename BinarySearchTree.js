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
    // if (this.root.value === value) {
    //   return this.root;
    // } else {
    //   let currentNode = this.root;
    //   while (true) {
    //     // left
    //     if (currentNode.value > value) {
    //       if (currentNode.left === null) {
    //         return -1;
    //       } else if (currentNode.left.value === value) {
    //         return currentNode.left;
    //       } else {
    //         currentNode = currentNode.left;
    //       }
    //       // right
    //     } else {
    //       if (currentNode.right === null) {
    //         return -1;
    //       } else if (currentNode.right.value === value) {
    //         return currentNode.right;
    //       } else {
    //         currentNode = currentNode.right;
    //       }
    //     }
    //   }
    // }

    //1) another way

    if (!this.root) {
      return -1;
    } else {
      let currentNode = this.root;
      while (currentNode) {
        if (value < currentNode.value) {
          currentNode = currentNode.left;
        } else if (value > currentNode.value) {
          currentNode = currentNode.right;
        } else if (value === currentNode.value) {
          return currentNode;
        }
      }
    }
    return -1;
  }

  remove(value) {
    // looking for root existance
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        // we have a match .....

        // no right child
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
        }
        // right child which doesn't have left child
        else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        }
        // right child which have a left

        let leftmost = currentNode.right.left;
        let leftmostparent = currentNode.right;
        while (leftmost.left !== null) {
          leftmostparent = leftmost;
          leftmost = leftmost.left;
        }

        leftmostparent.left = leftmost.right;
        leftmost.left = currentNode.left;
        leftmost.right = currentNode.right;

        if (parentNode === null) {
          this.root = leftmost;
        } else {
          if (currentNode.value < parentNode.value) {
            parentNode.left = leftmost;
          } else if (currentNode.value > parentNode.value) {
            parentNode.right = leftmost;
          }
        }

        return true;
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

console.log(tree.lookup(171));
// console.log(JSON.stringify(traverse(tree.root)));

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
