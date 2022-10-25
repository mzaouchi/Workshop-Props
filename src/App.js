import './App.css';
import ChildTest from './Components/ChildTest';

function App() {
  var name = "Brahim"
  var age = 22
  var tab = ['France','Tunisie','Italie']
  const user = {name:'Moez',city : 'Mourouj',track:'FullStack'}
  var asma = {checkpoint : 10, onetoone : 20}

  const handleAlert=()=>{
    alert('Hello Props')
  }

  const brahim=(a)=>{
    alert(`Hello ${a}`)
  }
  const show = false
  return (
    <div>
      <h1>Workshop Props</h1>
      <ChildTest name={name} age={age} tab={tab} user={user} asma={asma} handleAlert={handleAlert} brahim={brahim} show={show}>
          <h1>Children Props</h1>
          <img src='/A.png' alt='Not Found' width="300px"/>
      </ChildTest>


    

    </div>
  );
}

export default App;
