import React from "react";
import './../styles/App.css';
import Tabs from "./Tabs";

function App() {
  const tabs = [
    { title: "Tab 1", content: "This is the content for Tab 1." },
    { title: "Tab 2", content: "This is the content for Tab 2." },
    { title: "Tab 3", content: "This is the content for Tab 3." }
  ];

  return (
    <div>
      <Tabs tabs={tabs} />
    </div>
  );
}

export default App;
