import logo from './logo.svg';
import './App.css';
import Calculator from './Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculator</h1>
      </header>
      <div className='Container'>
        <div className="calculator">
          <Calculator />
        </div>
      </div>
    </div>
  );
}

export default App;

