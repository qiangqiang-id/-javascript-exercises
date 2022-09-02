function Father(name) {
  this.name = name
  this.money = () => {
    console.log('money')
  }
}

Father.prototype.say = () => {
  console.log('say hello')
}

function Son(name) {
  Father.call(this, name)
}

Son.prototype = new Father()
const son = new Son('小强')
console.log(son)
