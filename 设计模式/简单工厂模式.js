/**
 * 构造器模式
 * @param {*} name 
 * @param {*} age 
 * @param {*} career 
 */
function User1 (name , age, career) {
  this.name = name;
  this.age = age;
  this.career = career;
};

const XiaoQiang = new User1('xiaoqiang', 18, 'programmer');
const XiaoHong = new User1('xiaohong', 19, 'productManager');

/**
 * 构造器
 * @param {*} name 
 * @param {*} age 
 * @param {*} career 
 * @param {*} work 工作需要做的事情
 * 因为不同的岗位，需要做的事情是不一样的。
 */
function User2 (name, age, career, work) {
  this.name = name;
  this.age = age;
  this.career = career;
  this.work = work; 
};

/**
 * 工厂
 * @param {*} name 
 * @param {*} age 
 * @param {*} career 
 * @returns 
 */
function Factory (name, age, career) {
  let work;
  switch(career){
    case 'programmer':
      work = ['写bug','修bug'];
      break;
    case 'productManager':
      work = ['订会议室', '写产品文档', '催更']
      break;
    case 'boss':
      work = ['喝茶', '看报', '见客户']
      break;
    // 其他岗位 ...
  }

  return new User2(name, age, career, work)
};

const XiaoMing = new Factory('xiaoming', 18, 'programmer')
const XiaoLi = new Factory('xiaoli', 18, 'productManager')
const LaoDa = new Factory('laoda', 18, 'boss')