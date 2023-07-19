/**
 * push	入栈操作
 * pop	出栈操作
 * getTopElement	返回栈顶的元素，但不会移除栈顶的元素
 * isEmpty	查看栈是否为空
 * size	返回栈内元素的个数
 * toString	以字符串的形式展示栈内的所有元素
 */

class Stack {
  constructor() {
    this._list = []
  }

  push(value) {
    this._list.push(value)
  }

  pop() {
    return this._list.pop()
  }

  getTopElement() {
    return this._list[this._list.length - 1]
  }

  isEmpty() {
    return !this._list.length
  }

  size() {
    return this._list.length
  }

  toString() {
    let result = ''
    this._list.forEach((item) => (result += `${item}`))
    return result
  }
}

const stack = new Stack()
const isEmpty = stack.isEmpty()

stack.push(1)
stack.push(2)

const value = stack.pop()
stack.push(3)
stack.push(4)

const topValue = stack.getTopElement()
const str = stack.toString()
console.log(stack, value, topValue, isEmpty, str)
