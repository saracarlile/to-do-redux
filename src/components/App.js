import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import '../styles.css';


const App = () => (
  <div className="margin-top"> 
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App