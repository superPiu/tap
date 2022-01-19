const touchStartHandle = function(e){
    const touch = e.changedTouches[0]
    let obj = e.target.params;
    obj.startTime = new Date().getTime();
    obj.clientX = touch.clientX
    obj.clientY = touch.clientY
}
const touchEndHandle=function(e){
    let obj = e.target.params;
    e.preventDefault();//解决点透问题
    const touch = e.changedTouches[0] //touchend事件里面 e 的对象获取touches数组是空的,changedTouches能取到值
    //console.log(that.params)
    const time = new Date().getTime() - obj.startTime;
    const offsetX = Math.abs(touch.clientX - obj.clientX) 
    const offsetY = Math.abs(touch.clientY - obj.clientY)
    if(time <150 && offsetX <5 && offsetY <5)
    obj.handleFn.call(this,e)
}
const bind = function(param){
    const params = param
    let obj = {
        startTime:null,
        clientX : 0,
        clientY:0,
        handleFn:params.handleFn
    }
    params.el.params = obj; //通过el把参数传入处理事件
    params.el.addEventListener('touchstart',touchStartHandle)
    params.el.addEventListener('touchend',touchEndHandle)
}
const unbind = function(param){
    const params = param
    params.el.removeEventListener('touchstart',touchStartHandle)
    params.el.removeEventListener('touchend',touchEndHandle)
}
export {bind,unbind}