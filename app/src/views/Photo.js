import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Loader from "../components/Loader";

function Photo() {
  const { id } = useParams();
  // because this request is sent by browser
  // which is outside the devcon
  // thus we can just use localhost...
  const url = `http://localhost:8000/api/photos/${id}`;
  const [photo, setPhoto] = useState({
    loading: false,
    data: null,
    error: false,
  });
  let content = null;

  useEffect(() => {
    setPhoto({
      loading: true,
      data: null,
      error: false,
    });
    axios
      .get(url)
      .then((response) => {
        setPhoto({
          loading: false,
          data: response.data,
          error: false,
        });
      })
      .catch(() => {
        setPhoto({
          loading: false,
          data: null,
          error: true,
        });
      });
  }, [url]);

  if (photo.loading) {
    content = <Loader />;
  }

  if (photo.error) {
    content = <p>error getting photo data...</p>;
  }

  if (photo.data) {
    content = (
      <div>
        <h1 className="text-2xl font-bold mb-3">{photo.data.response.title}</h1>
        <div>
          <img
            className="mb-3"
            src={`data:image/png;base64,${photo.data.response.image}`}
            alt={photo.data.response.title}
          />
        </div>

        <div>{photo.data.response.description}</div>
      </div>
    );
  }
  return <div>{content}</div>;
}

export default Photo;
