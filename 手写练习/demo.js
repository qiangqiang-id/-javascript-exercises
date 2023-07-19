// new
function myNew() {
  let constructor = Array.prototype.shift.call(arguments)

  if (typeof constructor !== 'function') {
    console.log('type error')
  }

  let newObj = Object.create(constructor.prototype)

  return constructor.apply(newObj, arguments)
}

// Object.create
function myCreate(obj) {
  function Fn() {}

  Fn.prototype = obj

  return new Fn()
}

// instenceof
function myInstenceof(left, rigth) {
  let proto = Object.getPrototypeOf(left)
  let prototype = rigth.prototype

  while (true) {
    if (!proto) return false
    if (proto === prototype) return true

    proto = Object.getPrototypeOf(proto)
  }
}

// call
Function.prototype.myCall = function (target) {
  if (typeof this !== 'function') {
    throw new TypeError()
  }

  let args = [...arguments].slice(1)

  let result = null
  target = target || window
  target.fn = this
  result = target.fn(...args)
  delete target.fn

  return result
}

// apply
Function.prototype.myApply = function (target) {
  if (typeof this !== 'function') {
    throw new TypeError()
  }
  let result = null

  target = target || window
  target.fn = this

  result = arguments[1] ? target.fn(...arguments[1]) : target.fn()

  delete target.fn
  return result
}

// bind
Function.prototype.myBind = function (target) {
  if (typeof this !== 'function') {
    throw new TypeError()
  }

  target = target || window
  target.fn = this
  let args = [...arguments].slice(1)

  return function () {
    let result = target.fn(args.concat(arguments))

    delete target.fn
    return result
  }
}

// 节流
function throttle(fn, delay) {
  let timer = null

  return function () {
    if (!timer) {
      timer = setTimeout(function () {
        fn.apply(this, arguments)
        timer = null
      }, delay)
    }
  }
}

// 防抖
function debounce(fn, delay) {
  let timer = null

  return function () {
    if (timer) clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(this, arguments)
    }, delay)
  }
}

function formatMoney(num) {
  let strList = num.toString().split('').reverse()

  for (let i = 0; i < strList.length; i++) {
    if ((i + 1) % 4 === 0) {
      strList.splice(i, 0, ',')
    }
  }

  strList.reverse()

  return strList.join('')
}
