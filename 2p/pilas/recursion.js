//We begin our stack implementation by defining the constructor function for a Stack class:
function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
    }
function push(element) {
    this.dataStore[this.top++] = element;
}
function peek() {
    return this.dataStore[this.top-1];
}
function pop() {
    return this.dataStore[--this.top];
}
function clear() {
    this.top = 0;
}
function length() {
    return this.top;
}

/* To simulate computing 5! using a stack, first push the numbers 5 through 1 onto a stack.
Then, inside a loop, pop each number and multiply the number by the running product, */
function fact(n) {
    var s = new Stack();
    while (n > 1) {
    s.push(n--);
    }
    var product = 1;
    while (s.length() > 0) {
    product *= s.pop();
    }
    return product;
    }
    console.log(fact(5)); // displays 120