class TreeNode{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let root = new TreeNode(1);

root.left = new TreeNode(2);
root.right =new TreeNode(3);

root.left.left =new TreeNode(4);
root.left.right =new TreeNode(5);

root.right.left =new TreeNode(6);
root.right.right = new TreeNode(7);

// function preOrder(root){
//   if(root === null){
//     return;
//   }
//   console.log(root.value);
//   preOrder(root.left);
//   preOrder(root.right)
  
// }
// preOrder(root);

// function inOrder(root){
//   if(root === null){
//     return;
//   }
//   inOrder(root.left);
//   console.log(root.value);
//   inOrder(root.right)
  
// }
// inOrder(root);

function inOrder(root){
  if(root === null){
    return;
  }
  inOrder(root.left);
  inOrder(root.right)
  console.log(root.value);
}
inOrder(root);