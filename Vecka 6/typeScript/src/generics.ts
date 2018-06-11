class Queue<T> { // T betyder i förväg att vi inte vet vilken typ vi kommer skicka in.
    private data = [];

    enqueue(value: T){
        this.data.push(value)
    }
    dequeue(): T{
        return this.data.shift();
    }
}

interface Customer {
    id: number;
}

export default () => {
    const q = new Queue<Customer>(); //här bestämmer vilken typ vi ska skapa klassen med. Vad vi accepterar in.
    q.enqueue({id: 1});
    q.enqueue({id: 2});
    q.enqueue({id: 3});
    q.enqueue({id: 4});
    // q.enqueue('foo'); // detta funkar inte då vi ovan satt att vi bara tar in number.
    console.log(q.dequeue());
}