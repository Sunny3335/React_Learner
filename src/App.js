import './App.css';
// also used as the global variable
const style="App-header";
function App() {
  // used as the local variable that is valid for the current components.
  const topic = "Hello Developer, Welcome to ReactJs!";

  return (
    <div>
      <div className={style}> {topic}
        <Demo></Demo>
      </div>

    </div>
  );
}


function Demo() {
  return (
    <div className="App">
        <div className={style}>Now Start reactJs</div>
    </div>
  );
}

export default App;
