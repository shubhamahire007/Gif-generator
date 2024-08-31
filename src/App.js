import logo from './logo.svg';
import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    <div className="app">

        <h1 className='heading'>Random Gifs</h1>

        <div className='gifs'>
          <Random/>
          <Tag/>
        </div>
    </div>
  );
}

export default App;
