// Stack: last in, first out
function Stack() {
  let arr = [];
  return {
    push: (item) => {
      arr[arr.length] = item;
      return arr;
    },
    pop: () => {
      let result = arr[arr.length - 1]; // 印出拿掉的值
      arr.splice(arr.length - 1, 1);
      return result;
    }
  }
}

// Queue: first in, first out
function Queue() {
  let arr = [];
  return {
    push: (item) => {
      arr[arr.length] = item;
    },
    pop: () => {
      let result = arr[0];
      arr.splice(0,1);
      return result;
    }
  }
}

const stack = new Stack()
stack.push(10)
stack.push(5)
console.log(stack.pop()) // 5
console.log(stack.pop()) // 10

const queue = new Queue()
queue.push(1)
queue.push(2)
console.log(queue.pop()) // 1
console.log(queue.pop()) // 2