import Home from "./components/Home";
import { useSelector } from 'react-redux';

function App() {
  const {price} = useSelector(state => state.priceReducer)

  return (
    <div className="App">
      <h2 style={{textAlign: 'center', marginBlockStart: '40px'}}>Redux Example</h2>
      <p style={{textAlign: 'center'}}>{price}</p>

      <Home/>
    </div>
  );
}

export default App;
