import React, { Component } from "react";
import Photo from "../components/photo";

class ContentOne extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    return (
      <div className="content-one">
        {this.state.loading ? (
          <h3>Retrieving Photos...</h3>
        ) : (
          this.props.photos.map(photo => <Photo key={photo.id} photo={photo} />)
        )}
      </div>
    );
  }
}

export default ContentOne;