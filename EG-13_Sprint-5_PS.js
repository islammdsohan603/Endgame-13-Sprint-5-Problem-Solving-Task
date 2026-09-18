// 05. Invert Binary Tree

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

var invertTree = function (root) {
  if (root === null) {
    return null;
  }

  // Swap left and right
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  // Invert subtrees
  invertTree(root.left);
  invertTree(root.right);

  return root;
};

// Create tree
const root = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(7, new TreeNode(6), new TreeNode(9)),
);

// Invert tree
const invertedRoot = invertTree(root);

// Convert tree to array
function treeToArray(root) {
  if (root === null) {
    return [];
  }

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();

    result.push(node.val);

    if (node.left !== null) {
      queue.push(node.left);
    }

    if (node.right !== null) {
      queue.push(node.right);
    }
  }

  return result;
}

console.log(treeToArray(invertedRoot));
