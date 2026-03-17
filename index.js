class Node {
  constructor(data) {
    this.data = data; 
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert at end
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  mergeList(l1,l2){
    let dummy = new Node(-1);
    let current = dummy;

    while(l1 && l2){
      if(l1.data < l2.data){
        current.next = l1;
        l1= l1.next;
      } else {
        current.next = l2;
        l2 = l2.next;
      }
      current = current.next;
    }


    current.next = l1 || l2;

    return dummy.next;
  }

  // Print list from any head
  printFrom(head) {
    let current = head;
    let result = "";

    while (current) {
      result += current.data + " → ";
      current = current.next;
    }

    console.log(result + "null");
  }
}

let list1 = new LinkedList();
list1.append(1);
list1.append(3);
list1.append(5);

let list2 = new LinkedList();
list2.append(2);
list2.append(4);
list2.append(6);

list1.printFrom(list1.head);
list2.printFrom(list2.head);

let mergeHead=list1.mergeList(list1.head,list2.head);

list1.printFrom(mergeHead);