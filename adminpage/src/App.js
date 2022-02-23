import "./App.css";

import AdminPage from "AdminPage/AdminPage";
import { Link, Route, Router } from "react-router-dom";
import Home from "HomePage/Home";

function App() {
  return (
    <>
      {/* <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/admin">Users</Link>
            </li>
          </ul>
          <Route path="/admin">
            <AdminPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </div>
      </Router> */}
      <div>초특가 야놀자</div>
    </>
  );
}

export default App;
