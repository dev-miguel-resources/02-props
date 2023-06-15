import Greetings from './Greetings'

function App() {
  return (
    <div>
      <h1>Welcome to React Props!</h1>
      <Greetings firstName={'Paulina'} lastName="Ávila" age={30}>
        <img src="https://picsum.photos/200/300" alt="picsum1" />
        <img src="https://picsum.photos/200/300" alt="picsum2" />
      </Greetings>
    </div>
  )
}

export default App
