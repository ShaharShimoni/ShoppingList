import "./App.css";
import ShoppingListScreen from "./components/ShoppingListScreen";
import OrderSummary from "./components/OrderSummary";
import store from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<ShoppingListScreen />} />
            <Route path="/orderSummary" element={<OrderSummary />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
