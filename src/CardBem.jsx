import React from 'react';
import './bem.css';

export default function CardBem() {
  return (
    <div className="card">
      <div className="card-cover">
        <img className="card-cover--image" src="https://fanatical-prelive.imgix.net/product/original/e998f096-d6f7-4f0b-aa13-0b25c9d3094e.jpeg?auto=compress,format&w=960&fit=crop&h=540" alt="img" />
      </div>
      <div className="card-title">
        <h2>Core Keeper</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus</p>
      </div>
      <hr />
      <div className="card-body">
        <div>
          <img className="card-body--image" src="https://cdn.fanatical.com/production/icons/drm/dark/steam.svg" alt="img" />
        </div>
        <div>
          <button className="card-body--button">30%</button>
        </div>
      </div>
    </div>
  );
}
