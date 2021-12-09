import React from "react";
import UserInfoForm from "components/UserInfoForm";
import Loader from "components/Loader";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "store/store";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Route path="/Loading">
            <Loader />
          </Route>
          <Route exact path="/">
            <UserInfoForm />
          </Route>
          <ToastContainer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}
export default App;
