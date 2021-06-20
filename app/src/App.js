import React from "react";
import Photo from "./components/photoBlock";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  // returning jsx
  return (
    <div>
      <Header />
      <Photo title="nice winter" />
      <Footer />
    </div>
  );
}

export default App;
