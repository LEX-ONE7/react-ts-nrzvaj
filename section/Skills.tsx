import * as React from 'react';

const Skills = () => {
  return (
    <section id="skills">
      <div className="container my-5 py-5">
        <div className="row mb-5">
          <div className="col-12">
            <h1 className="fw-bold text-center">Mes compétences</h1>

            <hr />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <h1 className="fw-bold mb-4">Expériences & Compétences</h1>

            <p className="lead">
              En premier lieu, je voudrais vous dire que mon profil correspond
              bien aux qualités attendues pour être développeur web. En effet,
              en plus de mes savoir-faire, je peux m’appuyer sur mon sens des
              responsabilités et sur ma rigueur. Je suis aussi une personne
              ouverte avec un sens facile du contact et une réelle envie
              d’apprendre. Je crois que ce sont des valeurs incontournables pour
              atteindre le niveau de performance attendu par votre entreprise.
            </p>
          </div>

          <div className="col-md-5 d-flex flex-column justify-content-center">
            <div className="progress mb-4">
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                aria-label="Success example"
                style={{ width: '80%' }}
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                HTML
              </div>
            </div>

            <div className="progress mb-4">
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                aria-label="Info example"
                style={{ width: '75%' }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                CSS
              </div>
            </div>

            <div className="progress mb-4">
              <div
                className="progress-bar bg-warning"
                role="progressbar"
                aria-label="Warning example"
                style={{ width: '60%' }}
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                JavaScript
              </div>
            </div>

            <div className="progress mb-4">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                aria-label="Danger example"
                style={{ width: '50%' }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                React
              </div>
            </div>

            <div className="progress mb-4">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                aria-label="Danger example"
                style={{ width: '50%' }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                Bureautique
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
