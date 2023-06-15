import PropTypes from 'prop-types'

// Tip Clean Code: Para recibir props una x una, ideal que sea hasta un máximo de 4 params
const Greetings = (props) => {
  console.log(props)
  const { firstName, lastName, age } = props
  // props.age = 40
  //const agePerson = age + 40

  return (
    <div>
      Hi {firstName} {lastName} you are {age}
      <br />
        {props.children}
    </div>
  )
}

export default Greetings

Greetings.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.number,
}

