import personService from '../services/Person'

const Person = ({name, number, handleRemoveButton}) => {
    return (
      <li>
        {name} {number} {" "}
        <button onClick={handleRemoveButton} >
          delete
        </button>
      </li>
    )
  }

const Persons = ({persons, setPersons, setErrorMsg}) => {
  const removePerson = (id) => {
    const thatPerson = persons.find(p => p.id === id)
    if (confirm(`Delete ${thatPerson.name}?`)) {
      personService
        .remove(id)
        .then(deletedPerson => {
          setPersons(persons.filter(person => person.id !== id))
        })
        .catch(error => {
          setErrorMsg(`Information of '${thatPerson.name}' was already deleted from server`)
          setPersons(persons.filter(person => person.id !== id))
          setTimeout(() => {
            setErrorMsg(null)
          }, 5000);        
        })
    }
  }
  
  return (
    <ul>
      {persons.map(person =>
        <Person 
          key={person.name} 
          name={person.name} 
          number={person.number} 
          handleRemoveButton={() => removePerson(person.id)}/>
      )}
    </ul>
  )
}

export default Persons