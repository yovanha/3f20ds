//A palindrome is a word, phrase, or number that is spelled the same forward and back‐ward.

/*We can use a stack to determine whether or not a given string is a palindrome. We take
the original string and push each character onto a stack, moving from left to right. When
the end of the string is reached, the stack contains the original string in reverse order,
with the last letter at the top of the stack and the first letter at the bottom of the stack */

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

/*Once the complete original string is on the stack, we can create a new string by popping
each letter the stack. This process will create the original string in reverse order. We then
simply compare the original string with the reversed work, and if they are equal, the
string is a palindrome. */

function isPalindrome(word) {
    var s = new Stack();
    for (var i = 0; i < word.length; ++i) {
        s.push(word[i]);
    }
    var rword = "";
    while (s.length() > 0) {
        rword += s.pop();
    }
    if (word == rword) {
        return true;
    }
    else {
    return false;
    }
}
var word = "hello";
if (isPalindrome(word)) {
    console.log(word + " is a palindrome.");
}
else {
    console.log(word + " is not a palindrome.");
}
word = "racecar"
if (isPalindrome(word)) {
    console.log(word + " is a palindrome.");
}
else {
    console.log(word + " is not a palindrome.");
}