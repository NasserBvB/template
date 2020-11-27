import React, { Suspense } from "react";
import DashboardLayout from "./Layout/DashboardLayout";
import FirstComponent from "./pages";
function App() {
  

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <DashboardLayout >
          
        </DashboardLayout>
      </Suspense>
    </div>
  );
}

export default App;
