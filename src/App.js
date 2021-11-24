import './App.css';
import { Route, Routes} from "react-router";
import Example from "./Components/Example";
import RouteComponent from "./Components/Component";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page#";
import NestedRoutes from "./Components/NestedRoutes";


function App() {

  return (
    <div className="App">
      <Routes>
          {/** To pass the old route props for your components*/}
          <Route
              path={"/"}
              element={<RouteComponent component={Example}/>}
          />
          {/** To pass parameters by Routes */}
          <Route
              path={"/page-2/:id"}
              element={<Page2/>}
          />

          {/** To pass properties by Routes (Query) */}
          <Route
              path={"/page-3"}
              element={<Page3/>}
          />

          {/** Nested Routes*/}
          {NestedRoutes()}

          {/** Protect Routes*/}
          <Route path="/protect" element={(()=>0? <div>
              You are authorized
          </div>: <div>
              You are not authorized
          </div>)()}/>

          {/** For Not Found pages*/}
          <Route path={'*'} element={<div>NotFound</div>}/>
      </Routes>
    </div>
  );
}

export default App;
