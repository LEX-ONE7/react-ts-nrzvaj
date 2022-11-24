import * as React from 'react';
const Header = () => {
  return (
    <section id="home">
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h3 className="text-info">Developpeur WEB</h3>

            <h1 className="display-1 fw-bold">
              TAURUA Alexandre
              <br />
              28 ans
            </h1>

            <h4 className="text-success">Dynamique</h4>

            <div className="buttons mt-4 mb-4">
              <button className="btn btn-outline-primary px-4 py-2">
                Embauchez-moi
              </button>

              <a
                className="btn btn-info text-white px-4 py-2"
                href="https://lex-one7.github.io/AT-Blog/"
                target="_blank"
              >
                En Savoir plus
              </a>
            </div>
          </div>

          <div className="col-md-6">
            <div
              id="myCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://picsum.photos/id/357/1000/1300.jpg"
                    className="d-block w-100 img-fluid"
                    alt="..."
                    height="600px"
                  />
                </div>

                <div className="carousel-item">
                  <img
                    src="https://picsum.photos/id/139/1000/1300.jpg"
                    className="d-block w-100 img-fluid"
                    alt="..."
                    height="600px"
                  />
                </div>

                <div className="carousel-item">
                  <img
                    src="https://picsum.photos/id/238/1000/1300.jpg"
                    className="d-block w-100 img-fluid"
                    alt="..."
                    height="600px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
