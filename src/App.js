import './App.css'; // also used as the global variable.
const style = "App-header";
function App() {
  const topic = "Hello Developer, Welcome to ReactJs!"; // used as the local variable that is valid for the current components.
  return (
    <>
      <div className={style}>{topic}
        <Demo/>
      </div>
    </>
  );
}

function Demo() {
  return (
    <>
      <div className={style}>Now Start reactJs</div>
    </>
  );
}

export default App; // Here I have maked two function and link them in the exported one file and export as App.js and also import these as App.js