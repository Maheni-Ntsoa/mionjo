import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        NumVert: "Green numbers",
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
        Zones: "Intervention Areas",
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
        texteDescription: "The MIONJO project is an initiative set up by the Malagasy Government. MIONJO is a project to support resilient livelihoods in southern Madagascar under the supervision of the Ministry of the Interior and Decentralization (MID), with financial and technical support from the World Bank. The project was approved on December 10, 2020 for an amount of USD 100 million as the first phase (2021 - 2025) of a series of projects (SdP). The Project entered into force on December 23, 2020 and will end on May 31, 2025. The project benefited from additional funding of US$100 million from the rapid response mechanism of the Rapid Response Response Mechanism (CRW). ERF).",

        soutitre1Objectif: "Improve access to basic infrastructure and livelihoods",
        texte1Objectif: "Ensure better access to essential infrastructure, such as clean water and basic services, while strengthening the livelihoods of local communities. By focusing on these fundamental elements, the project aims to improve the quality of life of the inhabitants of southern Madagascar, by increasing their economic opportunities and promoting sustainable development.",
        soutitre2Objectif: "Strengthening local governance in southern Madagascar, with emphasis on young people and women",
        texte2Objectif: "Strengthen governance at the local level, with particular emphasis on the inclusion and active involvement of young people and women. This means that the voices and needs of these groups will be taken into account in local decisions, contributing to fair representation and policies that are better suited to the entire population.",
        soutitre3Objectif: "Provide a rapid and effective response to the food security crisis and other eligible emergencies",
        texte3Objectif: " Provide the flexibility needed to quickly reallocate financial resources from other project components to effectively respond to these emergency situations. This rapid response capacity aims to mitigate the impacts of potential crises on local populations and guarantee their food security and well-being in times of need.",
        textezone: "The MIONJO Project operates in three regions Androy, Anosy and Atsimo Andrefana which make up the Great South. The MIONJO project deploys its actions in a total of 225 municipalities spread over 14 districts within these three regions.",

        titlecompo1: "Component 1",
        soustitrecompo1: "Component 1 of the project focuses on strengthening decentralized local governance, participatory planning, and social resilience. It aims to improve participatory local governance, enhance social resilience, and prevent conflicts by creating an enabling environment for sustainable development in the southern regions of Madagascar.",
        soutitreCompo1A: "Subcomponent 1A",
        soutitreCompo1B: "Subcomponent 1B",
        titreSousCompo1C: "",
        titreSousCompo1D: "",

        textSousCompo1A: "Rehabilitation of decentralized local authorities to improve community planning and the provision of essential services, with a focus on establishing Local Consultation Structures (LCS).",
        textSousCompo1B: `Strengthening social resilience, citizen engagement, and conflict prevention in the face of the impacts of climate change, periods of severe drought, increasing insecurity, social norms, social taboos related to the prevalence of Gender-Based Violence (GBV), youth conversion to Dahalo, and the lack of sustainable development activities by supporting LCS in social resilience activities. All of this includes social cohesion, support for specific vulnerable groups such as youth and women, the implementation of measures to mitigate GBV/VCE risks in project areas, and the implementation of an Early Warning and Response Community System (EWARCS) with a strong focus on the prevention and resolution of local conflicts.`,
        textSousCompo1C: "",
        textSousCompo1D: "",

        titrecompo2: "Component 2",
        soustitrecompo2: "Component 2 of the Mionjo project enables the development of resilient infrastructure to improve access to basic services, including clean water and roads, to strengthen the capacity of local communities to cope with climate shocks and promote economic development.",
        titreSousCompo2A: "Subcomponent 2A",
        titreSousCompo2B: "Subcomponent 2B",
        titreSousCompo2C: "Subcomponent 2C",
        titreSousCompo2D: "",

        textSousCompo2A: "Resilient community grants to improve access to basic infrastructure in rural municipalities by providing grants for community and inter-municipal projects, managed and monitored by local communities.",
        textSousCompo2B: "Regional water resilience infrastructure through the rehabilitation of regional water infrastructure, including pipelines, to ensure reliable water supply to local communities.",
        textSousCompo2C: "Improving access to protected and sustainable water sources by modernizing water points, grouping them into versatile mini-grids with solar energy storage batteries to provide sustainable water access meeting the multiple needs of the communities involved.",
        textSousCompo2D: "",

        titrecompo3: "Component 3",
        soustitrecompo3: "Component 3 concerns increasing the resilience of local livelihoods by strengthening food production capacity, promoting sustainable value chains, and promoting adaptation to climate change.",
        titreSousCompo3A: "Subcomponent 3A",
        titreSousCompo3B: "Subcomponent 3B",
        titreSousCompo3C: "Subcomponent 3C",
        titreSousCompo3D: "Subcomponent 3D",
        textSousCompo3A: "Support for community organizations and local value chains by assisting residents of targeted municipalities in strengthening their livelihoods, based on their vulnerability, by promoting sustainability and resilience.",
        textSousCompo3B: "Irrigation system for livelihood resilience through the rehabilitation of irrigation perimeters to support agricultural productivity in drought-affected regions.",
        textSousCompo3C: "Restoration of food production capacity and strengthening of food systems and livelihoods by providing resources, training, and technologies to improve resilience to climate change.",
        textSousCompo3D: "Development of green infrastructure and resilient landscapes by creating nurseries to produce adaptive vegetation, planting windbreak trees and shrubs, reforestation for multifunctional purposes.",

        titrecompo4: "Component 4",
        soustitrecompo4: "Component 4 facilitates the successful implementation of the project by strengthening the capacities of the stakeholders involved, providing geospatial knowledge for monitoring and evaluation, and supporting the planning of essential infrastructure.",
        titreSousCompo4A: "Subcomponent 4A",
        titreSousCompo4B: "Subcomponent 4B",
        titreSousCompo4C: "Subcomponent 4C",
        titreSousCompo4D: "Subcomponent 4D",
        textSousCompo4A: "Implementation of project financing, including studies, management, administration, and learning Preparatory Analyses of the Project Series (PAPS).",
        textSousCompo4B: "Preparatory Analyses of the Project Series (PAPS).",
        textSousCompo4C: "Capacity building of the government to provide a response to climate change, including emergency management, climate resilience at the local level, and leadership in climate response.",
        textSousCompo4D: "Development of green infrastructure and resilient landscapes by creating nurseries to produce adaptive vegetation, planting windbreak trees and shrubs, reforestation for multifunctional purposes.",

        titrecompo5: "Component 5",
        soustitrecompo5: "Component 5 of the project aims to provide an emergency response in case of eligible crises or emergency situations, with reallocation of funds from other components of the project. This component was activated in response to prolonged periods of drought and other emergencies affecting the population.",
        titreSousCompo5A: "Subcomponent 5A",
        titreSousCompo5B: "Subcomponent 5B",
        titreSousCompo5C: "Subcomponent 5C",
        titreSousCompo5D: "Subcomponent 5D",
        textSousCompo5A: "Intervention 1: Restoring the production capacity of 50,000 vulnerable households in the short term.",
        textSousCompo5B: `Intervention 3: Optimizing and sustaining existing drinking water points to secure water supply for multiple uses.`,
        textSousCompo5C: `01: Water trucking`,
        textSousCompo5D: "Development of green infrastructure and resilient landscapes by creating nurseries to produce adaptive vegetation, planting windbreak trees and shrubs, reforestation for multifunctional purposes.",

      },
    },
    mg: {
      translation: {
        NumVert: "Ireo isa maitso",
        Attribue: "Attributes",
        Actu: "Vaovao",
        Composantes: "Singa",
        Evénements: "Hetsika",
        Galerie: "Tahirin-tsary",
        LiensUtiles: "Rohy mahasoa",
        NousContacter: "Mifandraisa aminay",
        Apropos: "Ny Mombamomba",
        Realisations: "Zava-bita",
        IdeePlaintes: "Hevitra sy fitarainana",
        Cartographie: "Sarintany",
        Description: "Famaritana",
        documentation: "Tahirin-kevitra",
        Objectifs: "Tanjona",
        Zones: "Faritra fitsabahana",
        ReaParCompo: "Hetsika avy amin'ny singa",
        Annonces: "Dokam-barotra",
        Consultants: "Mpanolo-tsaina",
        ConsultantIndi: "Mpanolo-tsaina manokana",
        ConsultantCab: "Mpanolo-tsaina mafy",
        Fournitures: "KOJAKOJA",
        Travaux: "Asa",
        Services: "Mpanolo-tsaina tsy misy serivisy",
        IdeeSud: "Hevitra fandraisana anjara ho an'ny Atsimo",
        DepPlaintes: "Mametraha fitarainana",
        StatPlaintes: "Statistika fitantanana fitarainana",
        C1: "Ampahany 1: Fitantanana eo an-toerana",
        C2: "Ampahany 2: Fotodrafitrasa",
        C3: "Ampahany 3: Fivelomana",
        C4: "Ampahany 4: Fampiharana",
        C5: "Ampahany 5: CIUC",
        SearchResult: "Valiny fikarohana",
        Keyword: "Mot clé(s) ",
      }
    },
    fr: {
      translation: {
        NumVert: "Numéros vert",
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
        Zones: "Zones d'Intervention",
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
        soutitreCompo1A: "Sous-composante 1A",
        soutitreCompo1B: "Sous-composante 1B",
        titreSousCompo1C: "",
        titreSousCompo1D: "",

        textSousCompo1A:
          "Réhabilitation des collectivités territoriales décentralisées pour améliorer la planification communautaire et la prestation de services essentiels, avec un accent sur la mise en place de Structures Locales de Concertation (SLC).",
        textSousCompo1B: `Renforcement de la résilience sociale, de l’engagement citoyen et de la
        prévention des conﬂits face aux impacts du changement climatique, des périodes de sécheresse
        sévère, de l’insécurité croissante, des normes sociales, des tabous sociaux liés à la prévalence de
        la Violence Basée sur le Genre (VBG), de la conversion des jeunes en Dahalo, et de l’inexistence
        d’activités de développement durable en soutenant les SLC dans des activités de résilience sociale.
        Tout cele en incluant la cohésion sociale, le soutien au groupes vulnérables spécifques tels les
        jeunes et les femmes, la mise en place des mesures d’atténuation des risques de VBG/VCE dans les
        zones du projet et la mise en œuvre d’un Système Communautaire d’Alerte Précoce et de Réponse
        (SCAPR) avec un fort accent sur la prévention et la résolution des conﬂits locaux.`,
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
        textSousCompo5A:
          "Intervention 1 : Rétablir la capacité de production de 50 000 ménages vulnérables dans le court terme",
        textSousCompo5B: `Intervention 3 : Optimiser et pérenniser les points
        d'eau potable existant et vue de sécuriser l'alimentation en eau pour des usages multiples`,
        textSousCompo5C: `01: Water trucking`,
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
        texteDescription: `Le projet MIONJO est une initiative mise en place par le Gouvernement malagasy. MIONJO est un projet de soutien aux moyens de subsistance résilients dans le Sud de Madagascar sous tutelle du Ministère de l’Intérieur et de la Décentralisation (MID), avec le soutien financier et technique de la Banque mondiale.
Le projet a été approuvé le 10 décembre 2020 pour un montant 100 millions USD en tant que première phase (2021 - 2025) d’une série de projets (SdP). Le Projet est entré en vigueur le 23 décembre 2020 et se terminera le 31 mai 2025. Le projet a bénéficié d'un Financement additionnel, de 100 millions de dollars US, provenant du dispositif de riposte rapide du Mécanisme de riposte de réponse rapide (CRW ERF).
        `,
        soutitre1Objectif: "Améliorer l’accès aux infrastructures de base et aux moyens de subsistance",
        texte1Objectif: "Garantir un meilleur accès aux infrastructures essentielles, telles que l'eau potable et les services de base, tout en renforçant les moyens de subsistance des communautés locales. En mettant l'accent sur ces éléments fondamentaux, le projet vise à améliorer la qualité de vie des habitants du Sud de Madagascar, en augmentant leurs opportunités économiques et en favorisant un développement durable.",
        soutitre2Objectif: "Renforcer la gouvernance locale dans le Sud de Madagascar, en mettant l’accent sur les jeunes et les femmes",
        texte2Objectif: "Renforcer la gouvernance au niveau local, en mettant particulièrement l'accent sur l'inclusion et l'implication active des jeunes et des femmes. Cela signifie que les voix et les besoins de ces groupes seront pris en compte dans les décisions locales, contribuant ainsi à une représentation équitable et à des politiques mieux adaptées à l'ensemble de la population.",
        soutitre3Objectif: "Fournir une riposte rapide et efficace à la crise de sécurité alimentaire et à d’autres urgences admissibles",
        texte3Objectif: "  Offrir la flexibilité nécessaire pour réallouer rapidement des ressources financières depuis d'autres composantes du projet afin de répondre efficacement à ces situations d'urgence. Cette capacité de réponse rapide vise à atténuer les impacts de crises potentielles sur les populations locales et à garantir leur sécurité alimentaire et leur bien-être en temps de besoin.",
        textezone: "Le Projet MIONJO intervient dans trois régions Androy, Anosy et Atsimo Andrefana qui composent le Grand Sud. Le projet MIONJO déploie ses actions sur un total de 225 communes réparties sur 14 districts au sein de ces trois régions.",

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
