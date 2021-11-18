import './App.css';

import ComponentA from './components/ComponentA/index.js'
import ComponentB from './components/ComponentB/index.js'
import ComponentC from './components/ComponentC/index.js'

function App() {
  console.log('render App')
  return (
    <div className="App">
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </div>
  );
}

export default App;
