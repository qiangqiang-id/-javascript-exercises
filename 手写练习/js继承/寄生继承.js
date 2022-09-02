function obj(father) {
  function Fn() {}
  Fn.prototype = father
  return new Fn()
}

function extend(father, son) {
  son.prototype = obj(father.prototype)
  son.prototype.constructor = son
  return son
}

function Father(name, age) {
  this.name = name
  this.age = age
}
Father.prototype.eat = () => {
  console.log('干饭')
}

function Son(name, age) {
  Father.call(this, name, age)
}

extend(Father, Son)
const son = new Son('father', 18)
console.log(son)
son.eat()
