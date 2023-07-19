/**
 * enqueue	向队列添加元素
 * dequeue	删除队列最前端的一个元素，并返回该元素
 * front	返回队列前端的元素，但不会移除该元素
 * isEmpty	查看队列是否为空
 * size	返回队列内元素的个数
 * toString	以字符串的形式展示队列内的所有元素
 */

class PriorityQueue {
  constructor() {
    this._list = []
  }

  enqueue(el, num) {
    const element = new EachElement(el, num)

    if (!this._list.length) {
      this._list.push(element)
      return
    }

    for (let i = 0; i < this._list.length; i++) {
      if (this._list[i]._priority > num) {
        this._list.splice(i, 0, element)
        return
      }
    }

    this._list.push(element)
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
    this._list.forEach((item) => (result += ` ${item._el}:${item._priority}`))
    return result
  }
}

class EachElement {
  constructor(el, num) {
    this._el = el
    this._priority = num
  }
}

const priorityQueue = new PriorityQueue()

priorityQueue.enqueue('a', 1)
priorityQueue.enqueue('b', 0)

const value = priorityQueue.dequeue()
priorityQueue.enqueue('c', 4)
const str = priorityQueue.toString()

console.log(priorityQueue, value, str)
