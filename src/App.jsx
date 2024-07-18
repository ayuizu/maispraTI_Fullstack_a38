import './App.css'
import StdForm from './components/Forms1'
import Form2 from './components/Forms2'
import Desafio from './components/Desafio'

import { useState } from 'react'
import UserCard from './components/UserCard'



function App() {

  const [user, setUser] = useState({name: 'Gandalf', age: 1000})
  return (
    <>
      <Desafio />
      <hr />
      <StdForm />
      <hr />
      <Form2 />
      <hr />
      <UserCard user={user} setUser={setUser}/>
    </>
  )
}

export default App
