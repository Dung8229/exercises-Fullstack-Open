const PersonForm = ({name, setNewName, number, setNewNumber, handleClick}) => {
    return ( 
        <form>
            <div>
            name: <input 
                    value={name}
                    onChange={(e) => setNewName(e.target.value)}
                    />
            </div>
            <div>
            number: <input 
                        value={number}
                        onChange={(e) => setNewNumber(e.target.value)}
                    />
            </div>
            <div>
            <button onClick={handleClick} type="submit">
                add
            </button>
            </div>
        </form>
    )
}

export default PersonForm