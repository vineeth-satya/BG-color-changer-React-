import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Change the Background Colour</h1>
      <input type="color" onChange={
        (e)=>{
              document.body.style.backgroundColor=e.target.value;
        }
      }/>
    </div>
  );
}

export default App;
