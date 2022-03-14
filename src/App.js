import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import { useState } from "react";
function App() {
  const account = useSelector((state) => state.account)
  const dispatch = useDispatch()
  const { deposit, withdraw } = bindActionCreators(actionCreators, dispatch)
  const [amount, setAmount] = useState(0)
  function handleInputChange(e) {
    if (isNaN(parseInt(e.target.value))) {
      setAmount(0)
    } else {
      setAmount(parseInt(e.target.value))
    }
  }
  function handleDeposit() {
    deposit(amount)
    setAmount(0)
  }
  function handleWithdraw() {
    withdraw(amount)
    setAmount(0)
  }
  return (
    <div className="App">
      <h5>account: {account}</h5>
      <input value={amount} onChange={handleInputChange} />
      <button onClick={handleDeposit}>deposit</button>
      <button onClick={handleWithdraw}>withdraw</button>
    </div>
  );
}

export default App;
