class TreeNode{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function height(root){
  if(root === null){
    return -1;
  }
  let leftH = height(root.left);
  let rightH = height(root.right);

  return Math.max(leftH,rightH)+1;
}

function findDepth(root,target,depth =0){
  if(root === null){
    return -1;
  }
  if(root.value === target){
    return depth;
  }
  let left = findDepth(root.left,target,depth+1);
  if(left != -1){
    return left;
  }
  return findDepth(root.right,target,depth+1)
}

let root = new TreeNode(10);
root.left = new TreeNode(20);
root.right = new TreeNode(30);

root.left.left =new TreeNode(40);
root.left.right =new TreeNode(50);

root.left.left.left = new TreeNode(60);

console.log(height(root));
console.log(findDepth(root,60));

