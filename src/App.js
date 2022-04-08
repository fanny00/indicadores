import logo from './logo.svg';
import './App.css';
import FinantialIndicators from './components/FinantialIndicators';

function App() {
  return (
    <div className="App mt-10 ">
        <h1 className="text-3xl font-bold">
          <FinantialIndicators />
        </h1>
    </div>
  );
}

export default App;
