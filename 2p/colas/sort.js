/* A simple example of a queue sort is with the radix sort, it works by making two passes over a data set, 
in this case the set of integers from 0 to 99. The first pass sorts the numbers based on the 1s digit, 
and the second pass sorts the numbers based on the 10s digit. Each number is placed in a bin based on the
digit in each of these two places.*/

//First we define the constructor function implementing the Queue class:
function Queue() {
    this.dataStore = [];
    this.dequeue = dequeue;
    this.enqueue = enqueue;
    this.empty = empty;
}

//Next we define the function that removes the element in the queue with the highest priority.
function dequeue() {
    return this.dataStore.shift();
}

//And the enqueue() function to add an element to the end of a queue
function enqueue(element) {
    this.dataStore.push(element);
}

//Also we need a function that lets us know if a queue is empty
function empty() {
    if (this.dataStore.length == 0) {
        return true;
    }
    else {
        return false;
    }
}

//First, here is the function that distributes numbers by the place (1s or 10s) digit:
function distribute(nums, queues, n, digit) {
    for (var i = 0; i < n; ++i){
        if (digit == 1) {
            queues[nums[i]%10].enqueue(nums[i]);
        }
        else{
            queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
        }
    }
}

//Here is the function for collecting numbers from the queues:
function collect(queues, nums) {
    var i = 0;
    for (var digit = 0; digit < 10; ++digit){
        while (!queues[digit].empty()){
        }
    }
}

//Now we perform the radix sort, along with a function for displaying the contents of an array.
function distribute(nums, queues, n, digit){
    for(var i = 0; i < n; ++i){
       if (digit == 1) {
           queues[nums[i]%10].enqueue(nums[i]);
       }
       else {
           queues[Math.floor(nums[i]/10)].enqueue(nums[i]);
       } 
    }
}

function collect(queues, nums) {
    var i = 0;
    for (var digit = 0; digit < 10; ++digit) {
        while (!queues[digit].empty()) {
            nums[i++] = queues[digit].dequeue();
        }
    }
}

function dispArray(arr) {
    for (var i = 0; i < arr.length; ++i) {
        console.log(arr[i] + " ");
    }
}

//main program
var queues = [];
for (var i = 0; i < 10; ++i) {
    queues[i] = new Queue();
}
var nums = [];
for (var i = 0; i < 10; ++i) {
    nums[i] = Math.floor(Math.floor(Math.random() * 101));
}
console.log("Before radix stort: ");
dispArray(nums);
distribute(nums,queues, 10, 1);
collect(queues, nums);
distribute(nums, queues, 10, 10);
collect(queues, nums);
console.log("/n/nAfter radix sort");
dispArray(nums);