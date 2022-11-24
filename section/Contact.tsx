import * as React from 'react';
const Contact = () => {
  return;
  <section id="contact">
    <div className="container my-5 bg-promary">
      <div className="row mb-5">
        <div className="col-12">
          <h1 className="fw-bold text-center pt-4">Contact</h1>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mx-auto">
          <form action="">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Nom Complet
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="John Smith"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Adresse mail
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Votre message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>;
};
export default Contact;
