import React from "react";
import { Link } from "react-router-dom";

function PhotoCard(props) {
  const picUrl =
    "https://i.pinimg.com/474x/69/77/b7/6977b70a129ec184527433bbdf9fe457.jpg";
  return (
    <div className="border mb-4 rounded overflow-hidden">
      <Link to={`/photos/${props.photo.id}`}>
        <div
          style={{
            backgroundImage: `url("${picUrl}")`,
          }}
          className="w-full h-64 bg-blue bg-cover"
        ></div>
      </Link>
      <div className="p-3">
        <h3 className="font-bold text-xl mb-3">
          <Link to={`/photos/${props.photo.id}`}>{props.photo.title}</Link>
        </h3>
        <div className="mb-3">{props.photo.description}</div>
      </div>
      <Link
        to={`/photos/${props.photo.id}`}
        className="bg-blue-500 text-white p-2 flex justify-center w-full"
      >
        {" "}
        View{" "}
      </Link>
    </div>
  );
}

export default PhotoCard;
