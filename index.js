function creteQueue(){
    let arr = [];
    let front = 0;

    return{
        enqueue(x){
            arr.push(x);
        },

        dequeue(){
            if(front >= arr.length) return null;
            return arr[front++]
        },

        peek(){
            return arr[front] || null;
        },

        print(){
            console.log("Queue:", arr.slice(front));
        }
    }
}

let q = creteQueue();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

console.log(q.dequeue());
console.log(q.peek());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());

q.print();