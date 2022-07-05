/**
 * STEP 1
 * Refactor the code so that it consists of three new components: Header, Content, and Total. All data still resides in the App component, which passes the necessary 
 * data to each component using props. Header takes care of rendering the name of the course, Content renders the parts and their number of exercises and Total renders the
 * total number of exercises.
 */

/** 
 * STEP 2
 * Refactor the Content component so that it does not render any names of parts or their number of exercises by itself. Instead it only renders three Part components 
 * of which each renders the name and number of exercises of one part.
 */

/**
 * STEP 3
 * Let's move forward to using objects in our application. Modify the variable definitions of the App component as follows and also refactor the application so that it 
 * still works
 */

/**
 * STEP 4
 * And then place the objects into an array. Modify the variable definitions of App into the following form and modify the other parts of the application accordingly
 */

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = ({parts}) => {
  
  const {name: name1, exercises: exercises1} = parts[0]
  const {name: name2, exercises: exercises2} = parts[1]
  const {name: name3, exercises: exercises3} = parts[2]

  return (
    <div>
      <Part part={name1} exercises={exercises1}></Part>
      <Part part={name2} exercises={exercises2}></Part>
      <Part part={name3} exercises={exercises3}></Part>
    </div>
  )
}

const Part = ({part, exercises}) => {
  return (
    <p>
      {part} {exercises}
    </p>
  )
}

const Total = ({parts}) => <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts}/>
    </div>
  )
}

export default App
