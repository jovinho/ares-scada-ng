import React from "react";

export default () => (
  <section className="section">
    <div className="container loading-container">
      <p>Aguarde! Estamos carregando seu dashboard :D</p>
      <progress className="progress is-info" max="100">
        30%
      </progress>
    </div>
  </section>
);
