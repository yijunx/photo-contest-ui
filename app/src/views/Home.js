import React from "react";
import Loader from "../components/Loader";
import PhotoCard from "../components/PhotoCard";
import { useAxiosGet } from "../hooks/HttpRequest";

// import Photo from "../components/photoBlock";

function Home() {
  const url = `http://localhost:8000/api/photos`;

  let photos = useAxiosGet(url);

  let content = null;
  if (photos.loading) {
    content = <Loader />;
  }

  if (photos.error) {
    content = <p>error getting photos data...</p>;
  }

  if (photos.data) {
    content = photos.data.response.data.map((photo) => (
      <div key={photo.id}>
        <PhotoCard photo={photo} />
      </div>
    ));
  }

  return (
    <div>
      <h1 className="font-bold text-2xl">Photos</h1>
      {content}
    </div>
  );
}

export default Home;
