

const SingleDog = function(){
  let instance = null
  function Dog (name, age) {
    this.name = name
    this.age = age
  }
  
  return function (...arg) {
    if(!instance) {
      instance = new Dog(...arg)
    }
    return instance
  }
}()


const dog1 = SingleDog('xiaoqiang',12)
const dog2 = SingleDog('xiaohong',18)

console.log( dog1, dog2) //dog1: { name: 'xiaoqiang', age: 12 } dog2:{ name: 'xiaoqiang', age: 12 }

