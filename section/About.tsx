import * as React from 'react';

const About = () => {
  return (
    <section id="about">
      <div class="container my-5 py-5">
        <div class="row mb-5">
          <div class="col-12">
            <h1 class="fw-bold text-center">En savoir plus</h1>

            <hr />
          </div>
        </div>

        <div class="row">
          <div class="col-md-4 img-profil overflow-hidden">
            <img
              class="img-fluid"
              src="https://picsum.photos/id/119/1000/1300.jpg"
              alt=""
              height="500px"
            />
          </div>

          <div class="col-md-8">
            <h1 class="fw-bold mt-4">TAURUA Alexandre</h1>

            <h3 class="text-info mb-4">Développeur WEB</h3>

            <p class="lead mb-4">
              Passionné par la réalisation et le développement de projets web,
              je me suis tout naturellement tourné vers une carrière de
              développeur web. Aujourd'hui je souhaite intégrer une entreprise
              dynamique et jeune, aussi je serai ravi de rejoindre votre équipe
              en tant que développeur web.
            </p>

            <div class="buttons">
              <button class="btn btn-outline-primary px-5 py-2">
                Télécharger CV
              </button>

              <button class="btn btn-info text-white color-black px-4 py-2">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
