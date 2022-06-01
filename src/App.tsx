import React, { useState } from 'react'
import Form from './components/Form'
import List from './components/List'
import "./App.css"

export interface IState {
  people: {
    name: string,
    age: number,
    bio: string
  }[]

}
export default function App() {
  const [people,setPeople] = useState<IState["people"]>([{name:"Tuan",age:30,bio:"developer"}])
  return (
    <div className="container">
      <Form people={people} setPeople={setPeople}/>
      <List people={people}/>
    </div>
  )
}
