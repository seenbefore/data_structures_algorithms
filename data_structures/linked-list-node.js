class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

var a = new Node(1);
var b = new Node(2);

a.next = b;

console.log(a.value);
console.log(a.next.value);