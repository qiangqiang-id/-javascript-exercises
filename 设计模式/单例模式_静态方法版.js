
/**
 * 单例模式
 * 确保当前类，只产生一个实例
 */

class SingleDog {
  show() {
    console.log('我是个单身狗');
  };

  static getInstance () {
    if(!SingleDog.instance) {
      SingleDog.instance = new SingleDog()    
    }
    return SingleDog.instance
  }
}

const dog1 = SingleDog.getInstance()
const dog2 = SingleDog.getInstance()
console.log(dog1 === dog1) // true



class Storage {
  static getInstance () {
    if(!Storage.instance) {
      Storage.instance = new Storage()
    }
    return Storage.instance
  } 

  getItem(key) {
    return localStorage.getItem(key)
  }

  setItem(key, value) {
    return localStorage.setItem(key, value)
  }
}

const storage1 = Storage.getInstance()
const storage2 = Storage.getInstance()

storage1.setItem('name', 'xiaoqiang')
storage1.getItem('name') // xiaoqiang
storage2.getItem('name') // xiaoqiang

console.log(storage1 === storage2) // true