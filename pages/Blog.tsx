import * as React from 'react';
import Card from '../components/Card';
import Navbar from '../components/Navbar';

const myData = [
  {
    title: " La Création d'un site WEB ",
    description:
      'Initiation aux différents langages : Html, Css, Javascript.<br> Codage avec un édtieur de textes (codesanbox), affichage sur un navigateur...',
    date: ' Lundi 14 Novembre ',
    image:
      'https://pic.clubic.com/v1/images/1709696/raw?width=1200&fit=max&hash=b66a110eab5bfb759d547630534eb1be823a7b82',
  },
  {
    title: ' Framework et Templates ',

    description:
      "Un framework (ex: Bootstrap) de frontend gratuit : c'est un ensemble qui contient des codes HTML et CSS, des formulaires, boutons, outils de navigation et autres éléments interactifs, ainsi que des extensions JavaScript en option. ",
    date: ' Mardi 15 Novembre ',

    image:
      'https://techibhai.com/wp-content/uploads/2019/12/Web-Application-Frameworks-1.png',
  },
  {
    title: ' Framework Bootstrap ',

    description:
      'Bootstrap, une bibliothéque gratuite qui fournit des modèles pour le développement de sites Web',
    date: ' Mercredi 16 Novembre ',

    image:
      'https://www.bootstrapdash.com/wp-content/uploads/2019/10/one-host-1.png',
  },
  {
    title: " Création d'un Portfolio ",

    description:
      "Utilisation de l'éditeur de textes Stackblitz, pour un Portfolio personnel<br> Une nouvelle extension dans Javascript : le json, un format utilisé pour structurer et échanger des données...",
    date: ' Jeudi 17 Novembre ',

    image:
      'https://th.bing.com/th/id/R.e91cf4b533d7fc90b5b8c35469c04f52?rik=x8h9RFR4KTtj1w&pid=ImgRaw&r=0',
  },
  {
    title: " Création d'un Blog ",

    description:
      "Insertion d'objet et de tableaux dans le Javascript pour afficher des cartes sur le blog. <br> De nouvelles syntaxes telles que : let cardList, const myData, forEach...",
    date: ' Vendredi 18 Novembre ',

    image:
      'https://cpothemes.com/wp-content/uploads/2012/02/illustrious-01-475x325.jpg',
  },
];

const Blog = () => {
  const [data, setData] = React.useState([]);

  return (
    <div>
      <Navbar />
      <h2>Mon Blog</h2>

      {JSON.stringify(data)}
      <Card />
      <Card />
    </div>
  );
};

export default Blog;
