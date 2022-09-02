Object.prototype.eat = () => {
  console.log('吃饭了')
}

function Fn1() {}

const fn1 = new Fn1()
fn1.eat()
function Fn2() {}
const fn2 = new Fn2()
fn2.eat()
