# tap
### 功能介绍
 移动端click事件有300ms的延时,为了解决延时,用touch事件模拟click事件

### 实现思路
利用touchstart和touchend事件分别获取触摸事件的开始和结束时间,起始坐标和结束坐标,判断时间差小于150ms且坐标位移小于5px判定为点击事件,执行事件的回调函数

### 参数配置

1.el 绑定tap事件的目标元素

 类型:DOM元素

 
2.callback tap事件响应的函数

类型:function

### 用法示例
```javascript
tap(document.querySelector('#tap'),function(){
    console.log(this)
    console.log(arguments)
    alert('这是一个tap事件')
})
```