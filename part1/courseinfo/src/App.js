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

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  
  const {part1, exercises1} = props
  const {part2, exercises2} = props
  const {part3, exercises3} = props

  return (
    <div>
      <Part part={part1} exercises={exercises1}></Part>
      <Part part={part2} exercises={exercises2}></Part>
      <Part part={part3} exercises={exercises3}></Part>
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

const Total = ({exercises1, exercises2, exercises3}) => <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total exercises1={exercises1}  exercises2={exercises2}  exercises3={exercises3} />
    </div>
  )
}

export default App
