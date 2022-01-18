const tap = require('../utils/tap')
tap(document.querySelector('#tap'),function(){
    console.log(this)
    console.log(arguments)
    alert('这是一个tap事件')
})