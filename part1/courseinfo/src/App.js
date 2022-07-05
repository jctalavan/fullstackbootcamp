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

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = ({part1, part2, part3}) => {
  
  const {name: name1, exercises: exercises1} = part1
  const {name: name2, exercises: exercises2} = part2
  const {name: name3, exercises: exercises3} = part3

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

const Total = ({part1, part2, part3}) => <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1}  part2={part2} part3={part3} />
      <Total part1={part1}  part2={part2} part3={part3} />
    </div>
  )
}

export default App
