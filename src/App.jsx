import Greetings from "./Greetings";

function App() {
  return (
    <div>
      <h1>Welcome to React Props!</h1>
      <Greetings 
        firstName={"Paulina"}
        lastName="Ávila"
        age={30}
      />
    </div>
  );
}

export default App;
