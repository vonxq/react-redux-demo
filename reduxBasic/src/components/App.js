import React from 'react'
import { connect } from 'react-redux'

// let Add = ({ dispatch, counter }) => {
let Add = ({ dispatch, counter, store }) => {
  // console.log("store", sotre)
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

export default Add
