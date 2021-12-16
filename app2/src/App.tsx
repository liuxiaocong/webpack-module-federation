// @ts-ignore
import React from "react";
import logo from "./logo.svg";
import "./App.css";

// @ts-ignore
//const RemoteNewsList = React.lazy(() => import("app2/NewsList"));

// @ts-ignore
const App1 = React.lazy(() => import("app1/AppTitle"));
// @ts-ignore
//const RemoteNewsList = React.lazy(() => import("app2/NewsList"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>this is App2</h2>
        <React.Suspense fallback="Loading Slides">
          <App1 />
        </React.Suspense>
        {/* <React.Suspense fallback="Loading Slides">
          <RemoteNewsList />
        </React.Suspense> */}
      </header>
    </div>
  );
}

export default App;
