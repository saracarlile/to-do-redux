import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <div className='input-group mb-3'>
          <input ref={node => input = node} className="form-control" />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="submit">
              Add Todo
        </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default connect()(AddTodo)