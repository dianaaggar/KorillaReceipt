
import './App.css';
import receipt from './models/receipt';
import Receipt from './Components/Receipt';
//--------allImports

//----1-Establish State
const state= {
  receipt
}


function App() {
  return (
    <div className="App">

    <Receipt  ticketInfo= { state.receipt[0]} />
    <Receipt  ticketInfo= { state.receipt[1]}/>
    <Receipt  ticketInfo= { state.receipt[2]}/>

    </div>
  );
}

export default App;
