import { useState } from "react";
import "./App.css";
import Payment from "./components/Payment";
import { createContext } from "react";
import { CURRENCIES } from "./utils/CurrencyUtil";

export const CurrencyContext = createContext("USD");
export const AmountContext = createContext(0);

function App() {
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState(30);
  const updateCurrency = (currency) => {
    setCurrency(currency);
  };
  const updateAmount = (value) => {
    setAmount(value);
    console.log(amount);
  };

  return (
    <>
      <AmountContext.Provider value={{ amount }}>
        <CurrencyContext.Provider value={{ currency }}>
          <input onInput={(e) => updateAmount(e.target.value)}></input>
          <select
            value={currency}
            onChange={(e) => updateCurrency(e.target.value)}
          >
            {Object.keys(CURRENCIES).map((currency) => (
              <option value={currency}>{currency}</option>
            ))}

          </select>
          <Payment />

        </CurrencyContext.Provider>
      </AmountContext.Provider>
    </>
  );
}

export default App;
