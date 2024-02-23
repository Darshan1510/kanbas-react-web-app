import Nav from "../Nav";
import Assignment3 from "./a3";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router";
import Assignment4 from "./a4";
import store from "./store";
import { Provider } from "react-redux";


export default function Labs() {
  return (
    <Provider store={store}>
      <div className="container">
        <Nav />
        <h1>Labs</h1>
        <Link to="a3">Assignment 3</Link> | <Link to="a4">Assignment 4</Link>
        <Routes>
          <Route path="a3/*" element={<Assignment3 />} />
          <Route path="a4" element={<Assignment4 />} />
        </Routes>
      </div>
    </Provider>
  );
}
