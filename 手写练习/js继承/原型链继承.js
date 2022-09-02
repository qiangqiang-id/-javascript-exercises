function groundFather() {}
groundFather.prototype.money = () => {
  console.log('money')
}
function Father(name) {
  this.name = name
  this.sleep = () => {
    console.log(this.name + '在睡觉')
  }
}
Father.prototype.show = () => {
  console.log('show')
}

function Son(name) {
  this.name = name
}
Son.prototype = new Father('father')
Son.prototype = Father.prototype
Son.prototype = Object.create(Father.prototype)
Son.prototype.constructor = Son

Son.prototype.eat = (name) => {
  Father.call(this, name)
  console.log('我要吃饭')
}

const xiaoli = new Son('xiaoqiang')
console.log(xiaoli)
console.log(Father.prototype)
