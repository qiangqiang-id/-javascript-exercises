class Father {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  say() {
    console.log(this.age)
  }
}

class Son extends Father {
  constructor(name, age) {
    super(name, age)
  }
}

const son = new Son('xiaoming', 18)
console.log(son)
son.say()
