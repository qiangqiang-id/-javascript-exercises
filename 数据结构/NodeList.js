/**
 * append()	向链表尾部追加元素
 * insert()	在链表的某个位置插入元素
 * get()	获取链表对应位置的元素
 * indexOf()	获取某元素在链表中的索引
 * update()	修改链表中某个位置上的元素的值
 * removeAt()	移除链表中某位置上的某元素
 * remove()	移除链表中的某元素
 * isEmpty()	判断链表内是否为空
 * size()	返回链表内元素个数
 * toString()	以字符串的形式展示链表内的所有元素
 */

class NodeList {
  constructor() {
    this._head = null
    this._lenght = 0
  }

  append(value) {
    const node = new Node(value)

    if (this._lenght === 0) {
      this._head = node
      this._lenght = 1
    } else {
      let currentNode = this._head

      while (currentNode._next) {
        currentNode = currentNode._next
      }

      currentNode._next = node

      this._lenght++
    }
  }

  insert(index, value) {
    const node = new Node(value)
    let i = 0
    let currentNode = this._head

    let prev = null

    if (index < 0 || index > this._lenght) {
      return false
    } else if (index === 0) {
      node._next = this._head
      this._head = node
    } else {
      while (i++ < index) {
        prev = currentNode
        currentNode = currentNode._next
      }
      prev._next = node
      node._next = currentNode
    }

    this._lenght++
    return true
  }

  get(index) {
    const currentNode = this._head
    const i = 0

    if (index < 0 || index > this._lenght) return false

    while (i++ < index) {
      currentNode = currentNode._next
    }

    return currentNode._item
  }

  indexOf(value) {
    const currentNode = this._head
    let index = 0
    while (currentNode._next) {
      if (currentNode._item === value) {
        return index
      } else {
        currentNode = currentNode._next
        index++
      }
    }
    return -1
  }

  update(index, value) {
    const currentNode = this._head
    let i = 0

    if (index < 0 || index > this._lenght) return false

    while (++i < index) {
      currentNode = currentNode._next
    }
    currentNode._item = value
    return true
  }

  removeAt(index) {}
}

class Node {
  constructor(node) {
    this._item = node
    this._next = null
  }
}

const nodeList = new NodeList()
