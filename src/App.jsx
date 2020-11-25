import React from "react";
import { Layout } from "./Layout";
import FirstComponent from "./pages";
function App() {
  return (
    <div className="App">
      <Layout>
        <FirstComponent />
      </Layout>
    </div>
  );
}

export default App;
