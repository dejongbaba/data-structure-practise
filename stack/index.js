class Stack {
  constructor(items) {
    this.items = items || [];
  }

  push(i) {
    return this.items.push(i);
  }

  seek() {
    if (this.items.length) {
      return this.items[this.items.length - 1];
    }
  }
  pop() {
    if (this.items.length) {
      return this.items.pop();
    }
    return 'No Items is stack';
  }

  isEmpty() {
    return !this.items.length;
  }

  printStack() {
    return this.items.toString();
  }
}

// we going to be adding functions and properties to the stack

// push -> add to the back

// seek -> to know the most recently added info

// pop  -> remove from the back

//print Stack -> converts stack to string

const StackEx = new Stack([1, 5, 6, 3, 4]);

console.log(StackEx.seek());
console.log(StackEx.isEmpty());
console.log(StackEx.printStack());
console.log(StackEx.pop());
console.log(StackEx.seek());
console.log(StackEx.printStack());
console.log(StackEx.push(9));
console.log(StackEx.seek());
console.log(StackEx.printStack());
