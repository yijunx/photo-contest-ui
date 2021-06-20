import React from "react";

// function Photo(props) {
//   return <h1>{props.title}</h1>;
// }

class Photo extends React.Component {
  render() {
    return <h1> Hello {this.props.title} </h1>;
  }
}

export default Photo;
