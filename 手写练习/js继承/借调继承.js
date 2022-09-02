function Father(name, age) {
  this.name = name
  this.age = age
}

Father.prototype.say = () => {
  console.log('say hello')
}

function Mother() {
  this.sleep = () => {
    console.log('妈妈在睡觉')
  }
}
function Son(name, age) {
  Father.call(this, name, age)
  Mother.call(this)
}

const xiaoming = new Son('小明', 18)
xiaoming.sleep()
console.log(xiaoming)
