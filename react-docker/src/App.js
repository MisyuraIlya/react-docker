import logo from './logo.svg';
import './App.css';

function App() {
  const apiUrl = process.env.REACT_APP_API_URL;
  console.log(apiUrl)
  return (
    <div className="App">
      <h2>ENV:{ apiUrl}</h2>
    </div>
  );
}

export default App;
