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
        BtnIdee: "/assets/buttons/btn_envoyer.png",
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
        textcompo1: "Enhancing decentralized local governance, participatory planning, and social resilience",
        textcompo2: "Resilient infrastructure",

        textcompo3: "Support for resilient livelihoods",
        textcompo4: "Support for implementation and knowledge learning",
        textcompo5: "Conditional Emergency Intervention Component (CIUC)",
        textaproche1:
          `The project places local communities at the core of the decision-making process. It promotes active collaboration with the beneficiary populations, ensuring that interventions align with locally identified needs and priorities.

          Approche Participative Pilotée par la Communauté
          Le projet place les communautés locales au cœur du processus décisionnel. Il favorise une collaboration active avec les populations bénéficiaires, garantissant ainsi que les interventions répondent aux besoins et aux priorités identifiés localement. 
          `,
        textaproche3:
          `The project recognizes the specific vulnerability of women and youth in the region and places significant importance on empowering them. Actions aim to improve their economic prospects and provide opportunities for a more promising future.`,
        textaproche4:
          `MIONJO adopts a holistic approach, recognizing that development cannot be achieved through isolated actions. Interventions are designed to address various aspects related to resilience, encompassing both social, economic, and environmental dimensions.`,
        textaproche2:
          "MIONJO adopts an inclusive approach that encompasses all levels of development, from the local to the central level. This coordination enhances the effectiveness of actions by ensuring that all stakeholders work in harmony to achieve the project's objectives.",
        soutitre1: "Community-Led Participatory Approach",
        soutitre2: "Involvement of All Stakeholders, from Local to Central",
        soutitre3: "Priority on Empowering Women and Youth",
        soutitre4: "Integrated and Multisectoral Approach",
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
        edito1: `Welcome to the Mionjo Project website, a government initiative dedicated to strengthening the resilience of Southern Madagascar. We are delighted to welcome you to our online community and are committed to sharing our dedication to a more resilient and prosperous South. Our mission is clear. We are committed to breaking the humanitarian cycle by introducing and enhancing the government's presence in the South. To achieve this, we effectively implement decentralization and deconcentration frameworks in the three intervention regions: Anôsy, Androy, and Atsimo Andrefana, working closely with local authorities.`,

        edito2: `At the heart of our approach is the investment in resilient infrastructure and livelihoods, thus supporting an integrated and multisectoral approach. We firmly believe that coordination among various stakeholders is essential to achieving our goals. We also strive to bridge the gap between humanitarian partners' best practices and the government, creating a space where knowledge and experiences are shared for the benefit of all.`,

        edito3:
          "As an online community, we invite you to explore our website to find clear information about the project, real-time news, useful resources, and engagement opportunities. Together, by working hand in hand, we are confident that we can create a more resilient future for Southern Madagascar.",

        edito4: "The National Coordinator of the Mionjo Project",
        texteDescription: `The MIONJO project represents a strategic endeavor initiated by the Malagasy Government. It is a program designed to bolster the resilience of livelihoods in the southern regions of Madagascar. This initiative is overseen by the Ministry of Interior and Decentralization (MID) and enjoys substantial financial and technical support from the World Bank.
        The project received official approval on December 10, 2020, securing a substantial funding allocation of 100 million USD for its inaugural phase, spanning from 2021 to 2025. This initial phase marks the outset of a comprehensive series of projects (SdP). The project officially commenced its operations on December 23, 2020, with its conclusion slated for May 31, 2025.
        In an exceptional display of commitment, the project was the recipient of an additional infusion of 100 million USD through the Rapid Response Mechanism (RRM) of the Crisis Response Window (CRW) under the aegis of the World Bank. This supplemental funding underscores the critical importance of the project's goals and the rapid response required to address the unique challenges in the region.
        `,

        soutitre1Objectif: "Enhancing Access to Basic Infrastructure and Livelihoods",
        texte1Objectif: "The primary objective of the project is to ensure improved access to essential infrastructure, including clean water and basic services, while concurrently strengthening the livelihoods of local communities. By placing a strong emphasis on these foundational elements, the project aims to enhance the quality of life for the residents of Southern Madagascar. This includes increasing their economic opportunities and promoting sustainable development.",
        soutitre2Objectif: "Strengthening Local Governance in Southern Madagascar with a Focus on Youth and Women",
        texte2Objectif: "The project seeks to bolster local governance in Southern Madagascar, with a particular emphasis on fostering the active inclusion of young people and women. This means that the voices and needs of these groups will be taken into account in local decision-making, contributing to equitable representation and policies that are better tailored to the entire population.",
        soutitre3Objectif: "Providing a Swift and Effective Response to Food Security Crises and Other Eligible Emergencies",
        texte3Objectif: "The project is designed to provide the necessary flexibility to swiftly reallocate financial resources from other project components to effectively respond to emergent situations, particularly those related to food security and other eligible emergencies. This rapid response capability aims to mitigate the impacts of potential crises on local populations and ensure their food security and well-being in times of need.",
        textezone: "The MIONJO Project operates in three regions Androy, Anosy and Atsimo Andrefana which make up the Great South. The MIONJO project deploys its actions in a total of 225 municipalities spread over 14 districts within these three regions.",

        titlecompo1: "Component 1",
        soustitrecompo1: "The first component of the project is dedicated to enhancing decentralized local governance, participatory planning, and social resilience. Its primary objectives are to improve participatory local governance, bolster social resilience, and prevent conflicts by creating an environment conducive to sustainable development in the southern regions of Madagascar.",
        soutitreCompo1A: "Subcomponent 1A",
        soutitreCompo1B: "Subcomponent 1B",
        titreSousCompo1C: "",
        titreSousCompo1D: "",

        textSousCompo1A: "This subcomponent focuses on rehabilitating decentralized territorial communities to enhance community planning and the delivery of essential services, with a specific emphasis on establishing Local Concentration Structures (LCS).",
        textSousCompo1B: `In this subcomponent, the project aims to enhance social resilience, citizen engagement, and conflict prevention in response to the impacts of climate change, severe drought periods, increasing insecurity, social norms, social taboos related to the prevalence of Gender-Based Violence (GBV), youth involvement in Dahalo activities, and the absence of sustainable development initiatives. This includes promoting social cohesion, supporting specific vulnerable groups such as youth and women, implementing GBV/VCE risk mitigation measures in project areas, and establishing a Community Early Warning and Response System (CERWRS) with a strong focus on conflict prevention and resolution at the local level.`,
        textSousCompo1C: "",
        textSousCompo1D: "",

        titrecompo2: "Component 2",
        soustitrecompo2: "The second component of the Mionjo Project is dedicated to developing resilient infrastructure to enhance access to basic services, such as clean water and roads, with the goal of increasing the capacity of local communities to withstand climate-related shocks and stimulate economic development.",
        titreSousCompo2A: "Subcomponent 2A",
        titreSousCompo2B: "Subcomponent 2B",
        titreSousCompo2C: "Subcomponent 2C",
        titreSousCompo2D: "",

        textSousCompo2A: "Under this subcomponent, Resilient Community Grants are provided to enhance access to basic infrastructure in rural municipalities by offering grants for community and inter-community projects, which are managed and monitored by local communities.",
        textSousCompo2B: "This subcomponent focuses on ensuring regional water resilience infrastructure through the rehabilitation of regional infrastructure, including pipelines, to ensure a reliable water supply to local communities.",
        textSousCompo2C: "This subcomponent is dedicated to improving access to safe and sustainable water sources through the modernization of water points. These water points will be consolidated into versatile mini-grid systems equipped with solar energy storage batteries to provide sustainable water access that can fulfill the diverse needs of the communities in question .",
        textSousCompo2D: "",

        titrecompo3: "Component 3",
        soustitrecompo3: "Component 3 focuses on enhancing the resilience of local livelihoods by bolstering food production capacity, promoting sustainable value chains, and facilitating adaptation to climate change.",
        titreSousCompo3A: "Subcomponent 3A",
        titreSousCompo3B: "Subcomponent 3B",
        titreSousCompo3C: "Subcomponent 3C",
        titreSousCompo3D: "Subcomponent 3D",
        textSousCompo3A: "This subcomponent entails supporting community organizations and local value chains by aiding residents in targeted municipalities to strengthen their livelihoods based on their vulnerability, with an emphasis on promoting sustainability and resilience.",
        textSousCompo3B: "In Subcomponent 3B, the project focuses on the development of an irrigation system to enhance livelihood resilience by rehabilitating irrigation schemes that will support agricultural productivity in regions affected by drought.",
        textSousCompo3C: "The goal of Subcomponent 3C is to restore food production capacity and strengthen food and livelihood systems by providing resources, training, and technologies to enhance resilience to climate change.",
        textSousCompo3D: "Subcomponent 3D is dedicated to the development of green infrastructure and resilient landscapes. This involves establishing nurseries to produce adaptive vegetation, planting windbreak trees and shrubs, and engaging in reforestation for multifunctional purposes.",

        titrecompo4: "Component 4",
        soustitrecompo4: "Component 4 is designed to facilitate the successful implementation of the project by enhancing the capacities of involved stakeholders, providing geospatial knowledge for monitoring and evaluation, and supporting the planning of essential infrastructure.",
        titreSousCompo4A: "Subcomponent 4A",
        titreSousCompo4B: "Subcomponent 4B",
        titreSousCompo4C: "Subcomponent 4C",
        titreSousCompo4D: "Subcomponent 4D",
        textSousCompo4A: "Subcomponent 4A focuses on the implementation of project financing, encompassing studies, management, administration, and learning. It also includes preparatory analyses for the project series (SdP).",
        textSousCompo4B: "In Subcomponent 4B, the project aims to enhance the government's capacity to respond to climate change. This involves managing emergency situations, fostering local climate resilience, and assuming a leadership role in climate response efforts.",
        textSousCompo4C: "Capacity building of the government to provide a response to climate change, including emergency management, climate resilience at the local level, and leadership in climate response.",
        textSousCompo4D: "Development of green infrastructure and resilient landscapes by creating nurseries to produce adaptive vegetation, planting windbreak trees and shrubs, reforestation for multifunctional purposes.",

        titrecompo5: "Component 5",
        soustitrecompo5: "Component 5 of the project is dedicated to providing emergency response in the event of crises or eligible emergency situations, with a reallocation of funds from other project components. This component has been activated in response to prolonged periods of drought and other emergencies impacting the population.",
        titreSousCompo5A: "Subcomponent 5A",
        titreSousCompo5B: "Subcomponent 5B",
        titreSousCompo5C: "Subcomponent 5C",
        titreSousCompo5D: "Subcomponent 5D",
        textSousCompo5A: "Intervention 1: This intervention aims to restore the production capacity of 50,000 vulnerable households in the short term.",
        textSousCompo5B: `Intervention 3: This intervention focuses on optimizing and sustaining existing drinking water points and ensuring a secure water supply for multiple uses.`,
        textSousCompo5C: `Intervention 1: Water trucking services are provided as part of this subcomponent. `,
        textSousCompo5D: "Development of green infrastructure and resilient landscapes by creating nurseries to produce adaptive vegetation, planting windbreak trees and shrubs, reforestation for multifunctional purposes.",
        nombreTele: "National download count",
        nombreTeleI: "International download count",
        Adjudicateur: "Adjudicator",
        Montant: "Amount",
        dateLimite: "deadline",
      },
    },
    mg: {
      translation: {
        encour: "Eo an-dàlana",
        NumVert: "Ireo isa maitso",
        Attribue: "Ny nahazo",
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
        idée: " SORATY AMINAY NY HEVITRAO HON'NY ATSIMO NY MADAGASIKARA",

        nombreTele: "Isan'ny fampidinana nasionaly",
        nombreTeleI: "Isan'ny fampidinana iraisam-pirenena",
        Adjudicateur: "Mpitsara",
        Montant: "vola",
        dateLimite: "Daty fe-potoana",
        BtnDocument: "/assets/buttons/domg.png",
        BtnDown: "/assets/buttons/misintona.png",
        BtnSend: "/assets/buttons/mandefa.png",
        BtnIdee: "/assets/buttons/mandefa.png",

        // BtnIdee: "/assets/buttons/btn_sendiee.png",
        // BtnSearch: "/assets/buttons/btn_recherche.png",
        // BtnLearn: "/assets/buttons/btn_savoirplus.svg",
        // BtnLog: "/assets/buttons/btn_seconnecter.svg",
        Btnsavoirplus: "/assets/buttons/hijery.png",
        // Btnsavoir: "/assets/buttons/btn_savoir.png",
        texteDescription: `Ny tetikasa MIONJO dia hetsika napetraky ny Fanjakana Malagasy. Ny MIONJO dia tetikasa hanohanana ny fivelomana maharitra any amin’ny faritra atsimon’i Madagasikara eo ambany fiahian’ny minisiteran’ny Atitany sy ny fitsinjaram-pahefana (MID), miaraka amin’ny fanohanana ara-bola sy ara-teknika avy amin’ny Banky iraisam-pirenena.
        Nankatoavina tamin'ny 10 Desambra 2020 ny tetikasa tamin'ny vola mitentina 100 tapitrisa dolara ho dingana voalohany (2021 - 2025) amin'ny tetikasa maromaro (SdP). Nanomboka tamin'ny 23 Desambra 2020 ny Tetikasa ary hifarana amin'ny 31 Mey 2025. Nahazo tombony tamin'ny famatsiam-bola fanampiny 100 tapitrisa dolara amerikana avy amin'ny rafitra famaliana haingana an'ny Rapid Response Mechanism (CRW). ERF ny tetikasa.`,
        soutitre1Objectif: `Manatsara ny fidirana amin'ny fotodrafitrasa fototra sy ny fivelomana`,
        texte1Objectif: `Mba hiantohana ny fidirana tsara kokoa amin'ny fotodrafitrasa ilaina, toy ny rano fisotro sy ny serivisy fototra, ary hanamafisana ny fiveloman'ny vondrom-piarahamonina eo an-toerana. Amin'ny alàlan'ny fifantohana amin'ireo singa fototra ireo, ny tetikasa dia mikendry ny fanatsarana ny kalitaon'ny fiainan'ny mponina any atsimon'i Madagasikara, amin’ny fampitomboana ny fahafahany ara-toekarena sy ny fampiroboroboana ny fampandrosoana maharitra.`,
        soutitre2Objectif: ` Fanamafisana ny fitantanana eto an-toerana any atsimon’i Madagasikara, amin’ny fanantitranterana ny tanora sy ny vehivavy `,
        texte2Objectif: "Manamafy ny fitantanana eo amin'ny sehatra eo an-toerana, amin'ny fanamafisana manokana ny fampidirana sy ny fandraisana anjara mavitrika amin'ny tanora sy ny vehivavy. politika mifanaraka tsara amin'ny vahoaka manontolo.",
        soutitre3Objectif: "Manome valiny haingana sy mahomby amin'ny krizy ara-tsakafo sy ny vonjy taitra hafa",
        texte3Objectif: "Manome ny fahafaha-manao ilaina mba hamerenana haingana ny loharanon-karena ara-bola avy amin'ireo singa hafa amin'ny tetikasa mba hamaliana amin'ny fomba mahomby ireo toe-javatra maika ireo. amin'ny fotoan-tsarotra.",

        textaproche1:
          "Ny tetikasa dia mametraka ny vondrom-piarahamonina eo an-toerana ho ivon'ny dingan'ny fandraisana fanapahan-kevitra. Mampiroborobo ny fiaraha-miasa mavitrika amin'ny mponina mpahazo tombontsoa izany, ka manome antoka fa mamaly ny filana sy laharam-pahamehana eo an-toerana ny fandraisana andraikitra.",
        textaproche2:
          "Ny MIONJO dia mandray ny fomba fiasa mitambatra izay mahafaoka ny ambaratonga rehetra amin'ny fampandrosoana, manomboka eo an-toerana ka hatrany amin'ny foibe. Ity fandrindrana ity dia manamafy ny fahombiazan'ny hetsika amin'ny fiantohana fa ny mpiara-miombon'antoka rehetra dia miara-miasa mba hahatratrarana ny tanjon'ny tetikasa.",
        textaproche3:
          "Ny tetikasa dia manaiky ny faharefoan'ny vehivavy sy ny tanora ao amin'ny faritra ary manome lanja indrindra ny fanomezan-danja azy ireo. Ny hetsika dia mikendry ny hanatsara ny fahatsinjovan'izy ireo ara-toekarena sy hanome azy ireo fahafahana ho amin'ny hoavy mampanantena kokoa.",
        textaproche4:
          "MIONJO dia mitodika amin’ny lafiny rehetra, amin’ny fiheverana fa tsy azo tanterahina amin’ny alalan’ny hetsika mitokana ny fampandrosoana.",

        soutitre1: "Fomba fandraisana anjara entin'ny fiaraha-monina",
        soutitre2: "Fandraisana anjaran’ny mpandray anjara rehetra, manomboka eo an-toerana ka hatrany afovoany",
        soutitre3: "Laharam-pahamehana amin’ny Fampiroboroboana ny Vehivavy sy ny Tanora",
        soutitre4: "Fanatonana mitambatra sy sehatra maro",
        textezone: "Ny Tetikasa MIONJO dia miasa any amin’ny faritra telo Androy, Anosy ary Atsimo Andrefana izay mandrafitra ny faritra atsimo. Ny tetikasa MIONJO dia mametraka ny hetsika ataony amin'ny kaominina 225 miparitaka amin'ny distrika 14 ao anatin'ireo faritra telo ireo.",

        titrecompo1: "Singa 1",
        soustitrecompo1:
          "Ny singa 1 amin'ny tetikasa dia mifantoka amin'ny fanamafisana ny fitantanana ifotony ifotony, ny fandrindrana ny fandraisana anjara ary ny faharetan'ny fiaraha-monina. Tanjona ny hanatsarana ny fitantanana eo an-toerana mandray anjara, hanamafisana ny fiatrehana ny fiaraha-monina ary hisorohana ny fifandirana, amin'ny famoronana tontolo mifanaraka amin'ny fampandrosoana maharitra any amin'ny faritra atsimon'i Madagasikara.",
        ssoutitreCompo1A: "Singa-ambany 1A",
        ssoutitreCompo1B: "Singa-ambany 1B",

        textSousCompo1A:
          "Fanarenana ireo manam-pahefana eo an-toerana itsinjaram-pahefana mba hanatsarana ny fandrindrana ny vondrom-piarahamonina sy ny fanaterana ireo tolotra tena ilaina, miaraka amin'ny fanamafisana ny fametrahana ny rafitra fakan-kevitra eo an-toerana (SLC).",
        textSousCompo1B: `Manamafy ny fiahiana ara-tsosialy, ny firotsahan'ny olom-pirenena ary
        fisorohana ny fifandirana manoloana ny fiantraikan'ny fiovaovan'ny toetr'andro, vanim-potoanan'ny hain-tany
        henjana, mitombo tsy fandriampahalemana, fitsipika ara-tsosialy, fady ara-tsosialy mifandray amin'ny fihanaky ny
        Herisetra mifototra amin’ny lahy sy ny vavy (GBV), ny fiovan’ny tanora ho dahalo, ary ny tsy fisiana.
        hetsika fampandrosoana maharitra amin'ny alàlan'ny fanohanana ny SLC amin'ny hetsika fiarovana ara-tsosialy.
        Izany rehetra izany dia tafiditra ao anatin'izany ny firaisankina ara-tsosialy, fanohanana ireo vondrona marefo manokana toy ny
        tanora sy vehivavy, ny fampiharana ny fepetra fanalefahana ny risika GBV/ECV ao
        faritra misy ny tetikasa ary ny fampiharana ny rafitra fampitandremana sy famaliana mialoha ny fiaraha-monina
        (SCAPR) miaraka amin'ny fanamafisana mafy ny fisorohana sy ny famahana ny fifandirana eo an-toerana.`,

        titrecompo2: "Singa 2",
        soustitreCompo2:
          `Ny singa faha-2 amin’ny tetikasa Mionjo dia manampy amin’ny fampivoarana fotodrafitrasa maharitra hanatsarana ny fidirana amin’ny serivisy fototra, anisan’izany ny rano fisotro sy ny lalana, mba hanamafisana ny fahafahan’ny vondrom-piarahamonina eo an-toerana hiatrika ny fikorontanan’ny toetr’andro sy hampiroboroboana ny fampandrosoana ara-toekarena.`,
        soutitreCompo2A: "Singa-ambany 2A",
        soutitreCompo2B: "Singa-ambany 2B",
        soutitreCompo2C: "Singa-ambany 2C",

        textSousCompo2A:
          "Famatsiam-bola ho an’ny vondrombahoakam-paritra itsinjaram-pahefana mba hanatsarana ny fidirana amin’ireo fotodrafitrasa fototra eny anivon’ny kaominina ambanivohitra amin’ny alalan’ny fanomezana vola ho an’ny tetikasam-piarahamonina sy iraisan’ny kaominina, tantanan’ny vondrom-bahoakam-paritra itsinjaram-pahefana sy fanaraha-maso.",
        textSousCompo2B:
          " Fotodrafitrasa mahazaka rano isam-paritra amin’ny alalan’ny fanarenana ny fotodrafitrasa momba ny rano any amin’ny faritra, anisan’izany ny fantsona fantsona, mba hiantohana ny famatsian-drano azo antoka ho an’ny vondrom-piarahamonina eo an-toerana.",
        textSousCompo2C:
          "Ny fanatsarana ny fidirana amin'ny loharanon-drano arovana sy maharitra amin'ny alàlan'ny fanavaozana ny toerana misy rano, ny fampivondronana azy ireo amin'ny tambajotra mini misy tanjona maro miaraka amin'ny bateria fitahirizana angovo azo avy amin'ny masoandro mba hanomezana fidirana maharitra amin'ny rano mamaly ny filan'ny vondrom-piarahamonina voakasik'izany.",

        titrecompo3: "Singa 3",
        soustitreCompo3:
          "Ny singa 3 dia mampanahy ny fampitomboana ny faharetan'ny fiveloman'ny mponina eo an-toerana amin'ny alàlan'ny fanamafisana ny fahafaha-mamokatra sakafo, ny fampivoarana ny rojom-bidy maharitra ary ny fampiroboroboana ny fampifanarahana amin'ny fiovan'ny toetr'andro.",
        soutitreCompo3A: "Singa-ambany 3A",
        soutitreCompo3B: "Singa-ambany 3B",
        soutitreCompo3C: "Singa-ambany 3C",
        soutitreCompo3D: "Singa-ambany 3D",
        textSousCompo3A:
          "Fanohanana ny fikambanan'ny vondrom-piarahamonina sy ny rojo sanda eo an-toerana amin'ny alàlan'ny fanohanana ny mponina amin'ny kaominina lasibatra amin'ny fanamafisana ny fivelomany, miankina amin'ny fahalemen'izy ireo, amin'ny fampiroboroboana ny faharetana sy ny faharetana.",
        textSousCompo3B:
          "Rafitra fanondrahana ho an'ny fahavelomana amin'ny alàlan'ny fanarenana ny rafitra fanondrahana hanohanana ny vokatra fambolena any amin'ny faritra tratran'ny hain-tany.",
        textSousCompo3C:
          "Famerenana amin'ny laoniny ny fahafaha-mamokatra sakafo ary fanamafisana ny rafitra ara-tsakafo sy fivelomana amin'ny alàlan'ny fanomezana loharanon-karena, fiofanana ary teknolojia hanatsarana ny faharetana amin'ny fiovan'ny toetr'andro.",
        textSousCompo3D:
          "Ny fampivoarana fotodrafitrasa maitso sy ny tontolo iainana maharitra amin'ny alàlan'ny fananganana toeram-pambolena mba hamokatra zavamaniry mifanaraka amin'ny toetr'andro, ny fambolen-kazo sy ny kirihitra, ny fambolen-kazo ho an'ny tanjona maro samihafa.",

        titrecompo4: "Singa 4",
        soustitreCompo4:
          "Ny singa 4 dia manampy amin'ny fanamorana ny fanatanterahana ny tetikasa amin'ny alàlan'ny fanamafisana ny fahaiza-manaon'ireo mpandray anjara voakasika, ny fanomezana fahalalana ara-jeografia amin'ny fanaraha-maso sy ny fanombanana, ary ny fanohanana ny drafitra fotodrafitrasa.",
        soutitreCompo4A: "Singa-ambany 4A",
        soutitreCompo4B: "Singa-ambany 4B",
        soutitreCompo4C: "Singa-ambany 4C",
        soutitreCompo4D: "Singa-ambany 4D ",
        textSousCompo4A:
          "Fampiharana ny famatsiam-bola amin'ny tetikasa, ao anatin'izany ny fandalinana, ny fitantanana, ny fitantanana ary ny fianarana Fandalinana ny famakafakana fanomanana ny andiana tetikasa (SdP).",
        textSousCompo4B:
          "Fandalinana ny famakafakana fanomanana ny andian-drafitra (SdP).",
        textSousCompo4C:
          "Manamafy ny fahafahan'ny governemanta hamaly ny fiovan'ny toetr'andro, ao anatin'izany ny fitantanana vonjy maika, ny faharetan'ny toetr'andro eo an-toerana ary ny fitarihana amin'ny valin'ny toetrandro.",
        textSousCompo4D:
          "Ny fampivoarana fotodrafitrasa maitso sy ny tontolo iainana maharitra amin'ny alàlan'ny fananganana toeram-pambolena mba hamokatra zavamaniry mifanaraka amin'ny toetr'andro, ny fambolen-kazo sy ny kirihitra, ny fambolen-kazo ho an'ny tanjona maro samihafa.",

        titrecompo5: "Singa 5",
        soustitrecompo5:
          "Ny singa faha-5 amin'ny tetikasa dia mikendry ny hanome valiny maika raha misy krizy na toe-javatra maika, miaraka amin'ny famerenana ny vola avy amin'ireo singa hafa amin'ny tetikasa. miantraika amin'ny mponina.",
        titreSousCompo5A: "Singa-ambany 5A",
        titreSousCompo5B: "Singa-ambany 5B",
        titreSousCompo5C: "Singa-ambany 5C",
        titreSousCompo5D: "Singa-ambany 5D ",
        textSousCompo5A:
          "Fandraisana anjara 1: Avereno ao anatin’ny fotoana fohy ny fahafaha-mamokatra tokantrano marefo 50.000",
        textSousCompo5B: `Fandraisana anjara 3: Amboary sy tohano ireo teboka
          ny rano fisotro efa misy ary amin'ny tanjona hiantohana ny famatsiana rano ho an'ny fampiasana maro`,

        textSousCompo5C: "01: Fitondran - drano",
        textSousCompo5D:
          "Ny fampivoarana fotodrafitrasa maitso sy ny tontolo iainana maharitra amin'ny alàlan'ny fananganana toeram-pambolena mba hamokatra zavamaniry mifanaraka amin'ny toetr'andro, ny fambolen-kazo sy ny kirihitra, ny fambolen-kazo ho an'ny tanjona maro samihafa.",

        textcompo1:
          " Fanamafisana ny fitantanan-draharaham-paritra itsinjaram-pahefana, ny fandraisan'anjara anjara ary ny fiaretana ara-tsosialy ",
        textcompo2: "Fotodrafitrasa maharitra",
        textcompo3: "Fanohanana ny fivelomana maharitra",
        textcompo4:
          "Fanohanana fampiharana sy fianarana fahalalana",
        textcompo5: "Conditional Emergency Intervention Component (CIUC)",
        edito1: `Tongasoa eto amin'ny tranokalan'ny tetikasa Mionjo, hetsika ataon'ny governemanta natokana hanamafisana ny faharetan'ny faritra atsimon'i Madagasikara. Faly izahay miarahaba anao ao amin'ny vondrom-piarahamoninay an-tserasera, ary manolo-tena izahay hizara ny fanoloran-tenanay ho amin'ny faritra Atsimo mirindra sy miroborobo kokoa. Mazava ny iraka ataontsika. Manolo-kevitra ny hanapaka ny fihodinan’ny maha-olona amin’ny alalan’ny fampahafantarana sy fanamafisana ny fisian’ny Fanjakana any Atsimo izahay. Mba hahatongavana amin’izany, dia mampihatra tsara ny rafitra fitsinjaram-pahefana sy deconcentration izahay any amin’ireo faritra telo idirana: Anôsy, Androy ary Atsimo Andrefana, izay miara-miasa akaiky amin’ireo tompon’andraikitra eo an-toerana.`,
        edito2: `Ny ivon'ny fomba fiasantsika dia ny fampiasam-bola amin'ny fotodrafitrasa maharitra sy ny fivelomana maharitra, manohana ny fomba fiasa mitambatra, sehatra maro. Mino tanteraka izahay fa tena ilaina ny fandrindrana eo amin'ny samy mpandray anjara mba hahatratrarana ny tanjonay. Miezaka ihany koa izahay hampifandray ireo fomba fanao tsara ataon'ny mpiara-miombon'antoka amin'ny maha-olona sy ny governemanta, mamorona sehatra iray izay hamporisihana ny fifampizaràna fahalalana sy traikefa ho tombontsoan'ny rehetra. `,
        edito3:
          "Amin'ny maha vondrom-piarahamonina an-tserasera, manasa anao izahay hitsidika ny tranokalanay hahazoana fampahalalana mazava momba ny tetikasa, vaovao amin'ny fotoana tena izy, loharano mahasoa, ary fahafahana mifandray. Miaraka, miara-miasa, resy lahatra izahay fa afaka mamorona hoavy maharitra kokoa ho an'ny faritra atsimon'ny Madagasikara.",
        edito4: `Ny mpandrindra nasionalin'ny tetikasa Mionjo`,


        compo: "Singa",
        regi: "Faritra",
        commu: "Kaominina",
        mini: "Minisitry ny PMO",
        distric: "Distrika",
        compo1: "Singa 1",
        compo2: "Singa 2",
        compo3: "Singa 3",
        compo4: "Singa 4",
        compo5: "Singa 5"
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
        BtnIdee: "/assets/buttons/btn_envoyer.png",
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
        titreedito: "Un Engagement envers un Sud Résilient",
        edito1: `Bienvenue sur le site web du projet Mionjo, une initiative gouvernementale dédiée à renforcer la résilience du Sud de Madagascar. Nous sommes ravis de vous accueillir au sein de notre communauté en ligne, et nous sommes déterminés à partager avec notre engagement envers un Sud plus résilient et prospère. Notre mission est claire. Nous nous engageons à briser le cycle humanitaire en introduisant et en renforçant la présence de l’Etat dans le Sud. Pour y parvenir, nous mettons en œuvre de manière effective les cadres de décentralisation et de déconcentration dans les trois régions d’intervention : Anôsy, Androy et Atsimo Andrefana, travaillant en étroite collaboration avec les autorités locales.`,
        edito2: `Au cœur de notre approche se trouve l’investissement dans des infrastructures résilientes et des moyens de subsistance résilients, soutenant ainsi une approche intégrée et multisectorielle. Nous croyons fermement que la coordination entre les différents acteurs est essentielle pour atteindre nos objectifs. Nous nous efforçons également de faire le lien entre les bonnes pratiques des partenaires humanitaires et le gouvernement, créant ainsi un espace où le partage de connaissances et d’expériences est encouragé pour le bénéfice de tous. `,
        edito3:
          "En tant que communauté en ligne, nous vous invitons à explorer notre site pour découvrir des informations claires sur le projet, des actualités en temps réel, des ressources utiles et des opportunités d’engagement. Ensemble, en travaillant main dans la main, nous sommes convaincus que nous pouvons créer un avenir plus résilient pour le Sud de Madagascar.",
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
        nombreTele: "  Nombre de téléchargement national ",
        nombreTeleI: "  Nombre de téléchargement international ",
        Adjudicateur: "Adjudicateur",
        Montant: "Montant",
        dateLimite: "date limite",
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










