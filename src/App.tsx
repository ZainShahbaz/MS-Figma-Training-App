import React from "react";
import Mainform from "components/UserInfoForm/UserInfoForm";
import Loader from "components/Loader/Loader";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path="/">
            <Mainform />
          </Route>
          <Route path="/Loading">
            <Loader />
          </Route>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
export default App;
