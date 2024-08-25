import { useState, useEffect } from 'react'
import personService from './services/Person'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notifications'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [successfulMsg, setSuccessfulMsg] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const isNewName = () => {
    for (let person of persons) {
      if (person.name === newName) return false
    }
    return true
  }

  const addPerson = (e) => {
    e.preventDefault()

    if (!isNewName()) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const newPerson = {
      name: newName,
      number: newNumber
    }
  
    personService
      .create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
        setSuccessfulMsg(`Added ${returnedPerson.name}`)
        setTimeout(() => {
          setSuccessfulMsg(null)
        }, 5000)
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={successfulMsg} type='success' /> 
      <Notification message={errorMsg} type='error' />

      <PersonForm 
        name={newName}
        setNewName={setNewName}
        number={newNumber}
        setNewNumber={setNewNumber}
        handleClick={addPerson}
      />

      <h2>Numbers</h2>

      <Persons 
        persons={persons} 
        setPersons={setPersons}
        setErrorMsg={setErrorMsg}
      />

    </div>
  )
}

export default App