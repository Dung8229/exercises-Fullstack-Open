const Part = ({name, exercises}) => {
    return (
        <p> 
            {name} {exercises} 
        </p>
    )
}

const Total = ({parts}) => {
    const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0)

    return (
        <p>
            <b> total of {totalExercises} exercises </b>
        </p>
    )
}

const Content = ({parts}) => 
    <ul>
        {parts.map(part =>
            <Part key={part.id} name={part.name} exercises={part.exercises} />
        )}
        <Total parts={parts} />
    </ul>

export default Content