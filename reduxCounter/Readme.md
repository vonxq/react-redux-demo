# react-redux Counter
一个Redux实现的简单计数器  
看完后可以看一下项目中的reduxTodoExample(这是一个Redux官方实例)加深理解  

## 简介
[React Redux中文文档](http://cn.redux.js.org/docs/react-redux/index.html)  
[Redux中文文档](http://cn.redux.js.org/index.html)  
[关于react-redux中的connect用法介绍及原理解析](http://www.jianshu.com/p/9873d4ccb891)  
react-redux实现一个简单counter  
redux提供顶层数据分发实现,提供combineReducers()来连接多个reducer  
react-redux提供provider、connect来连接React组件  

## 使用
克隆程序，然后执行:
```
cd ./reduxBasic 
yarn
npm run dev
打开http://localhost:8080/即可查看
# 项目打包
npm run build
```

## 常用方法
理解以下五个函数:
1. reducer是一个函数， (state=initstate, action) => newState
2. combineReducers({reducer1, reducer2})，将多个reducer合并
3. createStore(reducers, initState)
4. connect([mapStateToProps], [mapDispatchToProps], [mergeProps],[options])(组件)
    1. mapStateToProps(state, ownProps) => stateProps
    2. mapDispatchToProps(dispatch, ownProps) => dispatchProps
    3. mergeProps：默认 Object.assign 来merge前面两个方法传入的props
    4. options: object，一般不用
5. dispatch(action),action是一个普通对象


## 项目分析
Provider将store内容放到所有子组件(不管多少层)的context中，子组件可通过connect高阶组件将context的store内容解构并加载到自己的props中，也可以自己获取context中的store，但需要自己去实现connect中的一些逻辑(如mapStateToProps)  
注: connect之后的组件无法通过context获取到store内容,只能通过props获得一个dispatch方法用于事件的分发  
### react的context应用
[React Context](https://reactjs.org/docs/context.html)  
context除了在父组件通过getChildContext() 返回context对象，还需要在需使用context的组件中通过组件.contextTypes = {}来显示声明此context值  
之后组件可以在参数中取用，如:  
```javascript
const Component = (props, context) => {
  console.log(context.store)
  return (
    <div>test</div>
  )
}
Component.contextType={
  store: PropTypes.object,
}
```
