class TreeNode{
  constructor(value){
    this.value = value;
    this.left= null;
    this.right = null;
  }
}

function insert(root,value){
  if(root === null){
    return new TreeNode(value)
  }
  if(value < root.value){
    root.left = insert(root.left,value)
  }else{
    root.right = insert(root.right,value)
  }
  return root
}
let root = null;
root = insert(root,50);
root = insert(root,30);
root = insert(root,70);
root = insert(root,20);
root = insert(root,40);
root = insert(root,60);
root = insert(root,80);

console.log(root);

function search(root,target){
  if(root === null){
    return false
  }
  if(root.value === target){
    return true
  }
  if(target < root.value){
    return search(root.left,target)
  }
  return search(root.right,target)
}

console.log(search(root,120));
