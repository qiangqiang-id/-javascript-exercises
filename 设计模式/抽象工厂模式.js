/**
 * 例子：创建一部手机，
 *      不管创建什么手机，都需要软件 和 硬件。提取共性的条件
 */ 
 
/**
 * 顶级抽象工厂
 * 类似一种约定，不管创建什么样的手机，都得按照一个框架来
 */
class MobilePhoneFactory {
  // 创建操作系统接口，及软件
  createOS () {
    throw new Error('抽象工厂方法不允许直接调用，你需要讲我重写')
  }

  // 创建硬件接口
  createHardWare(){
    throw new Error('抽象工厂方法不允许直接调用，你需要讲我重写')
  }
}

 
class IPhone13 extends MobilePhoneFactory {
  createOS() {
     // 采用ios系统
     return new IOS()
   }

   createHardWare() {
     // 搭载A15芯片
    return new A15()
   }
}

/**
 * 系统抽象工厂
 */
class System {
  controlHardWare() {
    throw new Error('抽象工厂方法不允许直接调用，你需要讲我重写')
  }
}

/**
 * IOS 系统
 */
class IOS extends System {
  controlHardWare(){
    console.log('我会用IOS的方式去操作硬件')
  }
}

/**
 * Android 系统
 */
class Android extends System {
  controlHardWare(){
    console.log('我会用Android的方式去操作硬件')
  }
}

/**
 * 芯片抽象工厂
 */
class Chip {
  operateByOrder() {
    throw new Error('抽象工厂方法不允许直接调用，你需要讲我重写')
  }
}

/**
 * A15 芯片
 */
class A15 extends Chip {
  operateByOrder() {
    console.log('我会用A15芯片的处理方式')
  }
}

/**
 * 麒麟980 芯片
 */
class Kirin980 extends A15 {
  operateByOrder() {
    console.log('我会用Kirin980芯片的处理方式')
  }
}

// 我IPhone13手机
const myPhone = new IPhone13()

// 让手机拥有操作系统
const mySystem = myPhone.createOS()

// 让手机拥有芯片
const myChip = myPhone.createHardWare()

// 启动操作系统
mySystem.controlHardWare()

// 唤醒芯片
myChip.operateByOrder()