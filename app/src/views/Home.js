import axios from "axios";
import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import PhotoCard from "../components/PhotoCard";

// import Photo from "../components/photoBlock";

function Home() {
  const url = `http://localhost:8000/api/photos`;
  const [photos, setPhotos] = useState({
    loading: false,
    data: null,
    error: false,
  });

  useEffect(() => {
    setPhotos({
      loading: true,
      data: null,
      error: false,
    });
    axios
      .get(url)
      .then((response) => {
        setPhotos({
          loading: false,
          data: response.data,
          error: false,
        });
      })
      .catch(() => {
        setPhotos({
          loading: false,
          data: null,
          error: true,
        });
      });
  }, [url]);

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
