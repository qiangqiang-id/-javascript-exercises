/**
 * add	将一个数据添加到集合中
 * has	判断一个元素是否存在于集合中
 * delete	删除集合中的某个元素
 * clear	清空集合内的所有元素
 * size	返回集合内的元素个数
 * values	返回集合内的所有元素，保存在数组中
 * union	获取与另一个集合的并集
 * intersect	获取与另一个集合的交集
 * difference	获取与另一个集合的差集
 * subset	判断是否为另一个集合的子集
 */

class Set {
  constructor() {
    this.items = {}
  }

  has(value) {
    return Reflect.has(this.items, value)
  }

  add(value) {
    if (this.has(value)) return false

    this.items[value] = value

    return this.items
  }

  delete(value) {
    return Reflect.deleteProperty(this.items, value)
  }

  clear() {
    this.items = {}
  }

  size() {
    return Object.keys(this.items).length
  }

  values() {
    return Object.values(this.items)
  }

  union(otherSet) {
    const newSet = new Set()

    const itemValue = Object.values(this.items)

    for (let i = 0; i < itemValue.length; i++) {
      newSet.add(itemValue[i])
    }
    const otherValue = Object.values(otherSet)

    for (let i = 0; i < otherValue.length; i++) {
      newSet.add(otherSet[i])
    }

    return newSet
  }

  intersect(otherSet) {
    const newSet = new Set()
    const otherValue = Object.values(otherSet)

    for (let i = 0; i < otherValue.length; i++) {
      if (this.has(otherValue[i])) {
        newSet.add(otherValue[i])
      }
    }
    return newSet
  }

  difference(otherSet) {
    const newSet = new Set()
    const otherValue = Object.values(otherSet)

    for (let i = 0; i < otherValue.length; i++) {
      if (!this.has(otherValue[i])) {
        newSet.add(otherValue[i])
      }
    }

    return newSet
  }

  subset(otherSet) {
    const itemValue = this.values()
    for (let i = 0; i < itemValue.length; i++) {
      if (!otherSet.has(itemValue[i])) {
        return false
      }
    }

    return true
  }
}

const set = new Set()
set.add('heihei')
set.add('heihe')

const isHas = set.has('heihei')
// set.delete('heihei')
const size = set.size()
const values = set.values()

console.log(set, isHas, size, values)
