/**
 * enqueue	向队列后端添加元素
 * dequeue	删除队列最前端的一个元素，并返回该元素
 * front	返回队列前端的元素，但不会移除该元素
 * isEmpty	查看队列是否为空
 * size	返回队列内元素的个数
 * toString	以字符串的形式展示队列内的所有元素
 */

class Queue {
  constructor() {
    this._list = []
  }

  enqueue(value) {
    this._list.push(value)
  }

  dequeue() {
    return this._list.shift()
  }

  front() {
    return this._list[0]
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

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)

const value = queue.dequeue()
queue.enqueue(3)

const front = queue.front()
const isEmpty = queue.isEmpty()
const size = queue.size()
const str = queue.toString()

console.log(queue, value, front, isEmpty, size, str)
