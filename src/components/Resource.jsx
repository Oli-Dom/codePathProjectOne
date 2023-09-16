/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Resource.css';

const Resource = (props) => {
  return (
    <div className="Card">
      <img id="photo" src={props.image} />
      <h2 id="resourceName">{props.name}</h2>
      <h3 id="description">{props.description}</h3>
      <a href={props.link} target="_blank" rel="noreferrer">
        <button className="button-3">View Site</button>
      </a>
    </div>
  );
};

export default Resource;
