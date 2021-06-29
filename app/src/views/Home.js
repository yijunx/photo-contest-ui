import React from "react";
import Photo from "../components/photoBlock";

function Home() {
  return (
    <div>
      <h1 className="font-bold text-2xl">This is the home page</h1>
      <Photo title="i am a photo" />
    </div>
  );
}

export default Home;
