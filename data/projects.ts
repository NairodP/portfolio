import { Project } from "@/types/project";
import imageMeteoApp from "@/public/meteo-app-screen.png";
import imageBibliModal from "@/public/modal-bibli-screen.png";
import imageEnregRh from "@/public/rhApp-screen.png";
import imageAppSport from "@/public/appSport-screen.png";
import imagePetitsPlats from "@/public/petitsPlatsApp-screen.png";
import petitsPlatsImageCarousel1 from "@/public/petitsPlats-image/petitsPlats-image1.png";
import petitsPlatsImageCarousel2 from "@/public/petitsPlats-image/petitsPlats-image2.png";
import petitsPlatsImageCarousel3 from "@/public/petitsPlats-image/petitsPlats-image3.png";
import petitsPlatsImageCarousel4 from "@/public/petitsPlats-image/petitsPlats-image4.png";
import petitsPlatsImageCarousel5 from "@/public/petitsPlats-image/petitsPlats-image5.png";

export const projects: Project[] = [
  {
    title: "App Météo",
    description:
      "Appel API pour afficher la météo partout en France. Cette application utilise l'API OpenWeatherMap pour fournir des informations météorologiques précises et à jour. Elle offre une interface utilisateur simple et responsive, permettant aux utilisateurs de rechercher facilement la météo de n'importe quelle ville en France grâce notamment à une barre de recherche intelligente.",
    image: imageMeteoApp,
    link: "https://meteo-app-do.vercel.app",
    isHosted: true,
  },
  {
    title: "Bibliothèque Modal",
    description:
      "Le but de ce projet était de convertir une bibliothèque JQuery de composant Modal en une bibliothèque React, avec TypeScript, pour ensuite la publier sur NPM. Cela permet de l'utiliser dans d'autres projets, notamment pour le projet 'Enregistrement RH' que vous pouvez voir à la suite de celui-ci.",
    image: imageBibliModal,
    link: "https://modal-library-documentation.vercel.app",
    isHosted: true,
  },
  {
    title: "Enregistrement RH",
    description:
      "Création de formulaire d'authentification multi champs avec gestion des différentes types d'erreurs. Utilisation du package Modal depuis NPM, créé dans le projet 'Bibliothèque Modal' pour afficher un message de succès d'enrgistrement. Une page comprennant un tableau récapituatif des utilisateurs enregistrés est ensuite proposée avec un système de recherche.",
    image: imageEnregRh,
    link: "https://enregistrement-rh.vercel.app",
    isHosted: true,
  },
  {
    title: "SportApp - Présentation de données sportives",
    description:
      "Ici l'objectif était de créer un tableau d'analytics avec des données sportives, mockées (déjà disponibles en local) ou via un appel API. Le code permet les deux. À partir de ces données, des graphiques explicites sont implémentés pour permettre un suivi. Les graphiques sont réalisés avec la bibliothèque Recharts.",
    image: imageAppSport,
    link: "https://sport-data-interface.vercel.app/profil",
    isHosted: true,
  },
  {
    title: "Petits Plats - recherches de recettes",
    description:
      "Dans cette très simple application réalisée uniquement en JavaScript, l'objectif était de pouvoir rechercher une recette dans une base de données (ici en local dans un fichier data) et de pouvoir afficher les informations de la recette. La recherche est possible via la barre de recherche proposant des suggestions, mais également grâce à 3 menus déroulants permettant un filtrage des données.",
    image: imagePetitsPlats,
    link: "",
    isHosted: false,
    carouselImages: [
      petitsPlatsImageCarousel1,
      petitsPlatsImageCarousel2,
      petitsPlatsImageCarousel3,
      petitsPlatsImageCarousel4,
      petitsPlatsImageCarousel5,
    ],
  },
];
