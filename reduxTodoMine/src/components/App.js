import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// let Add = ({ dispatch, counter }) => {
let Add = (props, context) => {
  const { dispatch, counter } = props
  console.log(props)
  // console.log("context", context)
  let input
  const onAdd = () => {
    dispatch({
      type: "ADD",
    })
  }
  const onDec = () => {
    dispatch({
      type: "DEC",
    })
  }
  const onReset = () => {
    dispatch({
      type: "RESET",
    })
  }
  return (
    <div>
        <span>当前counter: {counter} </span>
        <button onClick={onAdd}>Add</button>
        <button onClick={onDec}>Dec</button>
        <button onClick={onReset}>Reset</button>
    </div>
  )
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
      counter: state
  }
}
// 使Add具有dispatch等方法(store提供  )
Add = connect(mapStateToProps)(Add)
// 组件只能获取到自己已经声明过contextType的context内容
// Add.contextTypes = {
//   store: PropTypes.object
// };
export default Add
