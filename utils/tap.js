const tap = function(el,callback){
    let startTime = null,
    clientX = 0,
    clientY = 0
    el.addEventListener('touchstart',function(e){
        console.log(e)
        const touch = e.changedTouches[0]
        startTime = new Date().getTime();
        clientX = touch.clientX
        clientY = touch.clientY
    })
    el.addEventListener('touchend',function(e){
        e.preventDefault();//解决点透问题
        const touch = e.changedTouches[0] //touchend事件里面 e 的对象获取touches数组是空的,changedTouches能取到值
        console.log(e)
        const time = new Date().getTime() - startTime;
        const offsetX = Math.abs(touch.clientX - clientX) 
        const offsetY = Math.abs(touch.clientY - clientY)
        if(time <150 && offsetX <15 && offsetY <15)
        callback.call(this,e)
    })
}
module.exports = tap