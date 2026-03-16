class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
    }

    insertAtBiginning(data){
        const newNode = new Node(data);

        newNode.next = this.head;

        this.head = newNode;
    }

    insertAtEnd(data){
        let newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
            return;
        }

        let current = this.head
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
    }

    deleteFromBiginning(){
        if(!this.head) return null;
        this.head = this.head.next;
    }

    deleteByValue(value){
        if(!this.head) return null;

        if(this.head.data === value){
            this.head = this.head.next;
            return;
        }

        let current = this.head;

        while(current.next && current.next.data !== value){
            current = current.value;
        }

        if(current.next){
            current.next = current.next.next;
        }
    }

    print(){
        let current = this.head;
        let result = "";

        while(current){
            result += current.data + " -> ";

            current = current.next;
        }

        console.log(result + "null")
    }
}

let list = new LinkedList();

list.insertAtBiginning(20);
list.insertAtBiginning(10);
list.insertAtEnd(30);
list.insertAtEnd(40);

list.print();

list.deleteFromBiginning();
list.print();

list.deleteByValue(30);
list.print();