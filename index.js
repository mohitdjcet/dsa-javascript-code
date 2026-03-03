function createCircularQueue(size){
    let queue = new Array(size);
    let front = -1;
    let rear = -1;

    function isFull(){
        return (rear+1)%size === front;
    }

    function isEmpty(){
        return front === -1;
    }

    function enqueue(val){
        if(isFull()){
            console.log("Queue is Full");
            return;
        }
        if(isEmpty()){
            front = 0;
            rear = 0;
        } else {
            rear = (rear+1 )% size;
        }

        queue[rear] = val;
    }

    function dequeue(){
        if(isEmpty()){
            console.log("Queue is Empty");
            return null;
        }

        let removed = queue[front];

        if(front === rear){
            front = -1;
            rear = -1;
        } else {
            front = (front+1)% size;
        }

        return removed;
    }

    function peek(){
        if(isEmpty()) return null;
        return queue[front];
    }

    function print(){
        if(isEmpty()){
            console.log("Queue is Empty");
            return null;
        }

        let result = [];
        let i = front;

        while(true){
            result.push(queue[i])

                if(i === rear) break;

                i = (i+1)% size;
        }
        console.log(result);
    }

    return { enqueue, dequeue, peek, print}
}


let cq = createCircularQueue(5);

cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.enqueue(40);

cq.print();

cq.dequeue();

cq.enqueue(50);
cq.enqueue(60);
cq.enqueue(70);
cq.print();