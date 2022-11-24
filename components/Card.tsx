import * as React from 'react';

const Card = ({ title, description, date, image }) => (
  <div className="col-lg-4 col-sm-12">
    <div className="card mb-5 shadow-sm ">
      <div className="card border-primary mb-3">
        <img src={image} className="img-fluid" />

        <div className="card-body">
          <div className="card-title">
            <h2 className="text-decoration-underline">{title}</h2>

            <h3 className="display-5 fs-5">{date}</h3>
          </div>

          <div className="card-text">
            <p>{description}</p>
          </div>

          <a href="#" className="btn btn-outline-info rounded-0 float-end">
            {' '}
            Read More{' '}
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
