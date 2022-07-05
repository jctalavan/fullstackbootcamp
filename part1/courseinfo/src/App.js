/**
 * EXERCISE 1.1
 * Refactor the code so that it consists of three new components: Header, Content, and Total. All data still resides in the App component, which passes the necessary 
 * data to each component using props. Header takes care of rendering the name of the course, Content renders the parts and their number of exercises and Total renders the
 * total number of exercises.
 */

/** 
 * EXERCISE 1.2
 * Refactor the Content component so that it does not render any names of parts or their number of exercises by itself. Instead it only renders three Part components 
 * of which each renders the name and number of exercises of one part.
 */

/**
 * EXERCISE 1.3
 * Let's move forward to using objects in our application. Modify the variable definitions of the App component as follows and also refactor the application so that it 
 * still works
 */

/**
 * EXERCISE 1.4
 * And then place the objects into an array. Modify the variable definitions of App into the following form and modify the other parts of the application accordingly
 */

 /**
 * EXERCISE 1.5
 * Let's take the changes one step further. Change the course and its parts into a single JavaScript object. Fix everything that breaks.
 */

const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

const Content = ({course}) => {
  
  const {name: name1, exercises: exercises1} = course.parts[0]
  const {name: name2, exercises: exercises2} = course.parts[1]
  const {name: name3, exercises: exercises3} = course.parts[2]

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

const Total = ({course}) => <p>Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course}/>
    </div>
  )
}

export default App
