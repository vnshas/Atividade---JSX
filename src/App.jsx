
function App() {
  const person = {
    name: "Vinicius",
    module: "Introdução ao React",
    age: 35,
  };

  const alertName = () =>{
    alert(person.name)
  }
  return (<>
    <li>
      <h3>{person.name} - {person.module}</h3>
      <p>Tenho {person.age} anos.</p>
    </li>
    <button onClick={alertName}>Quem sou eu?</button>
  </>);
}

export default App
