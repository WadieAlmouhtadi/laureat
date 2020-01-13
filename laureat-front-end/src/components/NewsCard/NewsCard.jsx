
import React, { Component } from "react";

export class NewsCard extends Component {
  render() {
    return (
      <div className="card card-user">
        <div className="image">
          <img src={this.props.bgImage} alt="..." />
        </div>
        <div className="content">
          
          <p className="description text-center">{this.props.description}</p>
        </div>
        <hr />
        <div className="text-center">{this.props.date}</div>
      </div>
    );
  }
}

export default NewsCard;
