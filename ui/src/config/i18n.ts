import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        Attribue: "Assigned",
        Actu: "News",
        Composantes: "Components",
        Evénements: "Events",
        Galerie: "Gallery",
        LiensUtiles: "Useful Links",
        NousContacter: "Contact Us",
        Apropos: "About Us",
        Realisations: "Activity",
        IdeePlaintes: "Ideas and Complaints",
        Cartographie: "Mapping",
        Description: "Description",
        Objectifs: "Goals",
        Zones: "Intervention Area",
        ReaParCompo: "Component's activity",
        ReaParLoc: "Location's activity",
        Annonces: "Announcements",
        Consultants: "Consultants",
        Fournitures: "Supplies",
        Travaux: "Works",
        Services: "Services",
        IdeeSud: "Southern Contribution Ideas",
        DepPlaintes: "Submit a Complaint",
        StatPlaintes: "Complaints Management Statistics",
        C1: "Component 1: Local Governance",
        C2: "Component 2: Infrastructure",
        C3: "Component 3: Livelihoods",
        C4: "Component 4: Implementation",
        C5: "Component 5: CIUC",
        SearchResult: "Search Result(s)",
        Keyword: "Keyword(s)",
        CountResult: "Number of Result(s)",
        SiteSearch: "Search on the site",
        BtnDocument: "/assets/buttons/documentationEng.png",
        BtnDown: "/assets/buttons/download_eng.png",
        BtnSend: "/assets/buttons/submitEn.png",
        BtnIdee: "/assets/buttons/btn_sendiee.png",
        BtnSearch: "/assets/buttons/btn_recherche.png",
        BtnLearn: "/assets/buttons/learnmore_eng.png",
        BtnLog: "/assets/buttons/login.png",
        Btnsavoirplus: "/assets/buttons/btn_savoirEn.png",
        documentation: "Documentation",
        compo: "Components",
        regi: "Regions",
        commu: "Communes",
        mini: "PMO Ministries",
        distric: "Districts",
        compo1: "Components 1",
        compo2: "Components 2",
        compo3: "Components 3",
        compo4: "Components 4",
        compo5: "Components 5",
        textcompo1:
          "Strengthening decentralized local governance, participatory planning, and social resilience",
        textcompo2: "Resilient infrastructure",
        textcompo3: "Support for resilient livelihoods",
        textcompo4: "Support for implementation and knowledge learning",
        textcompo5: "Conditional Emergency Intervention Component (CIUC)",
        textaproche1:
          "ANGLAISLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum libero ut volutpat elementum. Nullam non sem tristique, accumsan nibh eu maximus ligula",
        textaproche2:
          "ANGLAISLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum libero ut volutpat elementum. Nullam non sem tristique, accumsan nibh eu maximus ligula",
        textaproche3:
          "ANGLAISLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum libero ut volutpat elementum. Nullam non sem tristique, accumsan nibh eu maximus ligula",
        textaproche4:
          "ANGLAISLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum libero ut volutpat elementum. Nullam non sem tristique, accumsan nibh eu maximus ligula",
        soutitre1: "ANGLAISLorem ipsum dolor sit amet",
        soutitre2: "ANGLAISLorem ipsum dolor sit amet",
        soutitre3: "ANGLAISLorem ipsum dolor sit amet",
        soutitre4: "ANGLAISLorem ipsum dolor sit amet",
        nom: "Last Name",
        prenom: "First Name",
        email: "Email",
        objet: "Subject",
        message: "Message",
        téléphone: "Phone",
        plainte: "Complaints",
        interview: "Interview of the Month",
        photomois: "Photo of the Month",
        reaCompo1: " Local Governance",
        reaCompo2: "Infrastructure",
        reaCompo3: "Livelihoods",
        reaCompo4: "Implementation",
        reaCompo5: "CIUC",
        idée: "WRITE US YOUR IDEA FOR THE SOUTH OF MADAGASCAR",
        descriptif: "Description",
        détail: "Detail",
        encour: "in progress",
        edito1: `"Welcome to the Mionjo Project website, a governmental initiative dedicated to strengthening the resilience of Southern Madagascar. We are delighted to welcome you to our online community, and we are committed to sharing with you our commitment to a more resilient and prosperous South.
          Our mission is clear. We are committed to breaking the humanitarian cycle by introducing and strengthening the presence of the State in the South. To achieve this, we are effectively implementing the decentralization and deconcentration frameworks in the three intervention regions: Anôsy, Androy, and Atsimo Andrefana, working closely with local authorities."`,

        edito2: `"At the heart of our approach lies investment in resilient infrastructure and resilient livelihoods, thus supporting an integrated and multi-sectoral approach. We firmly believe that coordination among various stakeholders is essential to achieving our goals.
          We also strive to bridge the gap between the good practices of humanitarian partners and the government, thereby creating a space where the sharing of knowledge and experiences is encouraged for the benefit of all."`,

        edito3:
          "As an online community, we invite you to explore our site to discover clear information about the project, real-time news, useful resources, and engagement opportunities. Together, by working hand in hand, we are confident that we can create a more resilient future for Southern Madagascar.",

        edito4: "The National Coordinator of the Mionjo Project",
      },
    },
    fr: {
      translation: {
        Attribue: "Attribues",
        Actu: "Actualités",
        Composantes: "Composantes",
        Evénements: "Événements",
        Galerie: "Galerie",
        LiensUtiles: "Liens Utiles",
        NousContacter: "Nous Contacter",
        Apropos: "À Propos",
        Realisations: "Activités",
        IdeePlaintes: "Idées et Plaintes",
        Cartographie: "Cartographie",
        Description: "Description",
        documentation: "Documentation",
        Objectifs: "Objectifs",
        Zones: "Zone d'Intervention",
        ReaParCompo: "Activités par Composante",
        ReaParLoc: "Activités par Localité",
        Annonces: "Annonces",
        Consultants: "Consultants",
        ConsultantIndi: "Consultants individuels",
        ConsultantCab: "Consultants cabinet",
        Fournitures: "Fournitures",
        Travaux: "Travaux",
        Services: "Non consultants de services",
        IdeeSud: "Idées de Contribution pour le Sud",
        DepPlaintes: "Déposer une Plainte",
        StatPlaintes: "Statistiques de Gestion des Plaintes",
        C1: "Composante 1 : Gouvernance Locale",
        C2: "Composante 2 : Infrastructures",
        C3: "Composante 3 : Moyens de Subsistance",
        C4: "Composante 4 : Mise en Œuvre",
        C5: "Composante 5 : CIUC",
        SearchResult: "Résultat(s) de la recherche",
        Keyword: "Mot clé(s) ",
        CountResult: "Nombre de résultat(s)",
        SiteSearch: "Rechercher sur le site",
        BtnDocument: "/assets/buttons/btn_documentation.png",
        BtnDown: "/assets/buttons/btn_telecharger.png",
        BtnSend: "/assets/buttons/btn_envoyer.png",
        BtnIdee: "/assets/buttons/btn_sendiee.png",
        BtnSearch: "/assets/buttons/btn_recherche.png",
        BtnLearn: "/assets/buttons/btn_savoirplus.svg",
        BtnLog: "/assets/buttons/btn_seconnecter.svg",
        Btnsavoirplus: "/assets/buttons/btn_savoirplus.png",
        Btnsavoir: "/assets/buttons/btn_savoir.png",
        compo: "Composantes",
        regi: "Régions",
        commu: "Communes",
        mini: "Ministères PMO",
        distric: "Districts",
        compo1: "Composante 1",
        compo2: "Composante 2",
        compo3: "Composante 3",
        compo4: "Composante 4",
        compo5: "Composante 5",
        textcompo1:
          "Renforcement de la gouvernance locale décentralisée, de la planification participative et de la résilience sociale",
        textcompo2: "Infrastructures résilientes",
        textcompo3: "Soutien aux moyens de subsistance résilients",
        textcompo4:
          "Soutien à la mise en œuvre et apprentissage des connaissances",
        textcompo5: "Composante d’Intervention d’Urgence Conditionnelle (CIUC)",
        textaproche1:
          "Le projet place les communautés locales au cœur du processus décisionnel. Il favorise une collaboration active avec les populations bénéficiaires, garantissant ainsi que les interventions répondent aux besoins et aux priorités identifiés localement.",
        textaproche2:
          "MIONJO adopte une approche inclusive qui englobe tous les niveaux de développement, de l'échelon local à l'échelon central. Cette coordination renforce l'efficacité des actions en s'assurant que toutes les parties prenantes travaillent en harmonie pour atteindre les objectifs du projet.",
        textaproche3:
          "Le projet reconnaît la vulnérabilité particulière des femmes et des jeunes dans la région et accorde une importance capitale à leur autonomisation. Les actions visent à améliorer leurs perspectives économiques et à leur offrir des opportunités pour un avenir plus prometteur.",
        textaproche4:
          "MIONJO adopte une vision holistique, considérant que le développement ne peut être atteint par des actions isolées. Les interventions sont conçues pour traiter divers aspects liés à la résilience, englobant à la fois les aspects sociaux, économiques et environnementaux.",

        soutitre1: "Approche Participative Pilotée par la Communauté",
        soutitre2: "Implication de l'ensemble des Acteurs, du Local au Central",
        soutitre3: "Priorité à l'Autonomisation des Femmes et des Jeunes ",
        soutitre4: "Approche Intégrée et Multisectorielle ",

        titrecompo1: "Composante 1",
        soustitrecompo1:
          "La composante 1 du projet est axé sur le renforcement de la gouvernance locale décentralisée, la planification participative et la résilience sociale. Elle vise à améliorer la gouvernance locale participative, renforcer la résilience sociale et prévenir les conflits, en créant un environnement propice au développement durable dans les régions méridionales de Madagascar.",
        titreSousCompo1A: "Sous-composante 1A",
        titreSousCompo1B: "Sous-composante 1B",
        titreSousCompo1C: "",
        titreSousCompo1D: "",

        textSousCompo1A:
          "Réhabilitation des collectivités territoriales décentralisées pour améliorer la planification communautaire et la prestation de services essentiels, avec un accent sur la mise en place de Structures Locales de Concertation (SLC).",
        textSousCompo1B:
          "Renforcement de la résilience sociale en améliorant la résilience sociale face aux changements climatiques, à la sécheresse et à d'autres risques sociaux en soutenant la cohésion sociale, en particulier parmi les jeunes et les femmes, pour la prévention et la résolution des conflits locaux.",
        textSousCompo1C: "",
        textSousCompo1D: "",

        titrecompo2: "Composante 2",
        soustitrecompo2:
          "La composante 2 du projet Mionjo permet de développer des infrastructures résilientes pour améliorer l'accès aux services de base, notamment l'eau potable et les routes, afin de renforcer la capacité des communautés locales à faire face aux chocs climatiques et à favoriser le développement économique.",
        titreSousCompo2A: "Sous-composante 2A",
        titreSousCompo2B: "Sous-composante 2B",
        titreSousCompo2C: "Sous-composante 2C",
        titreSousCompo2D: "",

        textSousCompo2A:
          "Subventions communautaires résilientes pour améliorer l'accès aux infrastructures de base dans les communes rurales en offrant des subventions pour des projets communautaires et intercommunaux, gérés et suivis par les communautés locales.",
        textSousCompo2B:
          "Infrastructures de résilience régionale en eau à travers la réhabilitation des infrastructures d'eau régionales, notamment les pipelines, pour garantir un approvisionnement en eau fiable aux communautés locales.",
        textSousCompo2C:
          "Amélioration de l'accès à des sources d'eau protégées et durables par la modernisation de points d'eau, leur regroupement en mini-réseaux polyvalents avec des batteries de stockage d'énergie solaire pour fournir un accès durable à l'eau répondant aux besoins multiples des communautés concernées.",
        textSousCompo2D: "",

        titrecompo3: "Composante 3",
        soustitrecompo3:
          "La composante 3 concerne l’accroissement de la résilience des moyens de subsistance des populations locales en renforçant les capacités de production alimentaire, en favorisant des chaînes de valeur durables et en promouvant l'adaptation aux changements climatiques.",
        titreSousCompo3A: "Sous-composante 3A",
        titreSousCompo3B: "Sous-composante 3B",
        titreSousCompo3C: "Sous-composante 3C",
        titreSousCompo3D: "Sous-composante 3D",
        textSousCompo3A:
          "Soutien aux organisations communautaires et aux chaînes de valeur locales à travers l’accompagnement des habitants des communes ciblées dans le renforcement de leurs moyens de subsistance, en fonction de leur vulnérabilité, en favorisant la durabilité et la résilience.",
        textSousCompo3B:
          "Système d'irrigation pour la résilience des moyens de subsistance à travers la réhabilitation des périmètres d'irrigation pour soutenir la productivité agricole dans les régions touchées par la sécheresse.",
        textSousCompo3C:
          "Restauration de la capacité de production alimentaire et renforcement des systèmes alimentaires et de moyens de subsistance en fournissant des ressources, des formations et des technologies pour améliorer la résilience face au changement climatique.",
        textSousCompo3D:
          "Développement des infrastructures vertes et des paysages résilients par la création de pépinières pour produire une végétation adaptative, la plantation d'arbres et d'arbustes brise-vents, le reboisement à des fins multifonctionnelle.",

        titrecompo4: "Composante 4",
        soustitrecompo4:
          "La composante 4 permet de faciliter la mise en œuvre réussie du projet en renforçant les capacités des acteurs impliqués, en fournissant des connaissances géospatiales pour le suivi et l'évaluation, et en soutenant la planification d'infrastructures essentielles.",
        titreSousCompo4A: "Sous-composante 4A",
        titreSousCompo4B: "Sous-composante 4B",
        titreSousCompo4C: "Sous-composante 4C",
        titreSousCompo4D: "Sous-composante 4D",
        textSousCompo4A:
          "Mise en œuvre du financement du projet, y compris les études, la gestion, l'administration, et l'apprentissage Étude des analyses préparatoires de la série de projets (SdP).",
        textSousCompo4B:
          "Étude des analyses préparatoires de la série de projets (SdP).",
        textSousCompo4C:
          "Renforcement de capacité du gouvernement à apporter une riposte au changement climatique, y compris la gestion des situations d'urgence, la résilience climatique au niveau local et le leadership dans la réponse au climat.",
        textSousCompo4D:
          "Développement des infrastructures vertes et des paysages résilients par la création de pépinières pour produire une végétation adaptative, la plantation d'arbres et d'arbustes brise-vents, le reboisement à des fins multifonctionnelle.",

        titrecompo5: "Composante 5",
        soustitrecompo5:
          "La composante 5 du projet vise à fournir une réponse d'urgence en cas de crises ou de situations d'urgence admissibles, avec une réaffectation de fonds depuis les autres composantes du projet. Cette composante a été activée en réponse à des périodes de sécheresse prolongées et à d'autres urgences touchant les populations.",
        titreSousCompo5A: "Sous-composante 5A",
        titreSousCompo5B: "Sous-composante 5B",
        titreSousCompo5C: "Sous-composante 5C",
        titreSousCompo5D: "Sous-composante 5D",
        textSousCompo5A: "Relance agricole avec la FAO.",
        textSousCompo5B: "Approvisionnement en eau avec l’UNICEF.",
        textSousCompo5C:
          "Renforcement de capacité du gouvernement à apporter une riposte au changement climatique, y compris la gestion des situations d'urgence, la résilience climatique au niveau local et le leadership dans la réponse au climat.",
        textSousCompo5D:
          "Développement des infrastructures vertes et des paysages résilients par la création de pépinières pour produire une végétation adaptative, la plantation d'arbres et d'arbustes brise-vents, le reboisement à des fins multifonctionnelle.",

        nom: "Nom ",
        prenom: "Prénom",
        email: "Email",
        objet: "Objet ",
        message: "Message",
        téléphone: "Téléphone",
        plainte: "Plaintes",
        interview: "Interview du mois",
        photomois: "Photo du mois",
        reaCompo1: " Gouvernance Locale",
        reaCompo2: " Infrastructures",
        reaCompo3: " Moyens de Subsistance",
        reaCompo4: " Mise en Œuvre",
        reaCompo5: " CIUC",
        encour: "en cours",
        idée: "  ECRIVEZ-NOUS VOTRE IDEE POUR LE SUD DE MADAGASCAR",
        descriptif: "Descriptif ",
        détail: "Détail ",
        edito1: `"Bienvenue sur le site web du projet Mionjo, une initiative gouvernementale dédiée à renforcer la résilience du Sud de Madagascar. Nous sommes ravis de vous accueillir au sein de notre communauté en ligne, et nous sommes déterminés à partager avec vous notre engagement envers un Sud plus résilient et prospère.
          Notre mission est claire. Nous nous engageons à briser le cycle humanitaire en introduisant et en renforçant la présence de l'État dans le Sud. Pour y parvenir, nous mettons en œuvre de manière effective les cadres de décentralisation et de déconcentration dans les trois régions d'intervention : Anôsy, Androy et Atsimo Andrefana, travaillant en étroite collaboration avec les autorités locales"`,
        edito2: `"Au cœur de notre approche se trouve l'investissement dans des infrastructures résilientes et des moyens de subsistance résilients, soutenant ainsi une approche intégrée et multisectorielle. Nous croyons fermement que la coordination entre les différents acteurs est essentielle pour atteindre nos objectifs.
          Nous nous efforçons également de faire le lien entre les bonnes pratiques des partenaires humanitaires et le gouvernement, créant ainsi un espace où le partage de connaissances et d'expériences est encouragé pour le bénéfice de tous.
          "`,
        edito3:
          "En tant que communauté en ligne, nous vous invitons à explorer notre site pour découvrir des informations claires sur le projet, des actualités en temps réel, des ressources utiles et des opportunités d'engagement. Ensemble, en travaillant main dans la main, nous sommes convaincus que nous pouvons créer un avenir plus résilient pour le Sud de Madagascar.",
        edito4: `Le Coordonnateur National du Projet Mionjo`,
        voirvideo: "Voir vidéos",
        voirphoto: "Voir photos",
      },
    },
  },
  lng: "fr", // Default language
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
