-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: bjzwpqtvt9ff7nkuxrxs-mysql.services.clever-cloud.com:3306
-- Generation Time: Oct 14, 2023 at 03:27 AM
-- Server version: 8.0.22-13
-- PHP Version: 8.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bjzwpqtvt9ff7nkuxrxs`
--

-- --------------------------------------------------------

--
-- Table structure for table `bannieres`
--

CREATE TABLE `bannieres` (
  `id` int NOT NULL,
  `nombanniere` varchar(150) NOT NULL,
  `chiffre` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int NOT NULL,
  `nomcategorie` varchar(150) NOT NULL,
  `datecreation` datetime NOT NULL DEFAULT (now())
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `nomcategorie`, `datecreation`) VALUES
(1, 'Accueil', '2023-09-27 13:53:33'),
(2, 'A propos', '2023-09-27 13:53:33'),
(3, 'Activites', '2023-09-27 13:53:33'),
(4, 'Annonces', '2023-09-27 13:53:33'),
(5, 'Idee et plaintes', '2023-09-27 13:53:33'),
(6, 'Composantes', '2023-09-27 13:53:33'),
(7, 'Documentations', '2023-09-27 13:53:33'),
(8, 'Interview', '2023-10-05 07:17:12');

-- --------------------------------------------------------

--
-- Table structure for table `documents`
--

CREATE TABLE `documents` (
  `id` int NOT NULL,
  `idgenerale` int DEFAULT NULL,
  `nomdocument` varchar(150) NOT NULL,
  `typedocument` varchar(150) NOT NULL,
  `datecreation` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `documents`
--

INSERT INTO `documents` (`id`, `idgenerale`, `nomdocument`, `typedocument`, `datecreation`) VALUES
(17, 102, 'codedeleauversionmalagasy.pdf', 'undefined', '2023-10-10 13:39:16'),
(18, 103, 'codedeleauversionmalagasy2.pdf', 'undefined', '2023-10-10 13:40:20');

-- --------------------------------------------------------

--
-- Stand-in structure for view `generalec`
-- (See below for the actual view)
--
CREATE TABLE `generalec` (
`contenu` longtext
,`contenuen` longtext
,`datecreation` datetime
,`datecreationcategorie` datetime
,`datecreationrubrique` datetime
,`datelimit` datetime
,`etat` int
,`id` int
,`idcategorie` int
,`idrubrique` int
,`nomcategorie` varchar(150)
,`nomrubrique` varchar(150)
,`titre` varchar(256)
,`titreen` varchar(256)
);

-- --------------------------------------------------------

--
-- Table structure for table `generales`
--

CREATE TABLE `generales` (
  `id` int NOT NULL,
  `idrubrique` int NOT NULL,
  `idcategorie` int NOT NULL,
  `titre` varchar(256) DEFAULT NULL,
  `contenu` longtext,
  `datecreation` datetime NOT NULL DEFAULT (now()),
  `etat` int NOT NULL DEFAULT (0),
  `datelimit` datetime DEFAULT NULL,
  `titreen` varchar(256) DEFAULT NULL,
  `contenuen` longtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `generales`
--

INSERT INTO `generales` (`id`, `idrubrique`, `idcategorie`, `titre`, `contenu`, `datecreation`, `etat`, `datelimit`, `titreen`, `contenuen`) VALUES
(0, 1, 1, NULL, NULL, '2023-09-27 23:33:43', 0, NULL, NULL, NULL),
(17, 15, 4, 'Offre de consultance', '<p>Ceci est une offre de consultance</p>', '2023-09-28 00:36:16', 0, '2023-09-29 00:00:00', NULL, NULL),
(25, 18, 4, 'Offre de travaux 2', '', '2023-09-28 02:54:08', 0, '2023-09-28 00:00:00', '', ''),
(26, 17, 4, 'Offre de service', '', '2023-09-28 02:54:31', 0, '2023-09-30 00:00:00', '', ''),
(27, 16, 4, 'Offre de fourniture', '', '2023-09-28 02:54:53', 0, '2023-09-28 00:00:00', '', ''),
(30, 2, 1, 'FIA Foire Internationale de l\'Agriculture', '<p>&nbsp;<strong>Participation de MIONJO à la FIA à travers la FAO le 21 au 23 septembre 2023</strong></p>', '2023-09-28 06:49:29', 0, NULL, NULL, NULL),
(32, 2, 1, 'Foire VOATSE ', '<p class=\"ql-align-justify\"><strong>﻿La Foire VOATSE 2023</strong>, prévue du 4 au 7 octobre à la capitale de la région Androy, mettra en valeur les atouts de cette région, tels que le tourisme, l’agriculture, l’élevage, l’artisanat et la pêche, les opportunités foncières, l’exploitation minière, la culture, et plus encore. L’objectif est de raviver les traditions et les jeux locaux.</p><p class=\"ql-align-justify\">Le Dr SOJA Tsimandilatse Lahimaro, Gouverneur de la région, finalise les accords avec les sponsors de l’événement. Il a récemment rencontré des journalistes pour expliquer sa vision alignée sur le budget de la Foire VOATSE, soulignant l’importance de cette démarche pour le développement régional.</p><p class=\"ql-align-justify\">Source&nbsp;: Governoran’ny Faritra Androy</p><p class=\"ql-align-justify\"><br></p><p class=\"ql-align-justify\">Afin de renforcer la synergie entre la Région Atsimo Andrefana et le projet Mionjo, un atelier et une évaluation des améliorations envisagées se tiennent su siège de la Région en présence du Gouverneur Edally Ranoelison TOVONDRAINY, du secrétaire général de la Région, de la préfecture.&nbsp;</p><p class=\"ql-align-justify\"><br></p>', '2023-09-28 07:04:58', 0, NULL, NULL, NULL),
(33, 6, 2, '', '<p>Le projet MIONJO est une initiative mise en place par le Gouvernement malagasy. MIONJO est un projet de soutien aux moyens de subsistance résilients dans le Sud de Madagascar sous tutelle du Ministère de l’Intérieur et de la Décentralisation (MID), avec le soutien financier et technique de la Banque mondiale.</p><p><br></p><p>Le projet a été approuvé le 10&nbsp;décembre 2020 pour un montant 100&nbsp;millions&nbsp;USD en tant que première phase (2021 - 2025) d’une série de projets (SdP). Le Projet est entré en vigueur le 23&nbsp;décembre 2020 et se terminera le 31&nbsp;mai 2025. Le projet a bénéficié d\'un Financement additionnel, de 100&nbsp;millions de dollars US, provenant du dispositif de riposte rapide du Mécanisme de riposte de réponse rapide (CRW ERF).</p>', '2023-09-28 08:24:00', 0, NULL, '', ''),
(34, 7, 2, '', '<p>Les objectifs de développement du projet (ODP) consistent à&nbsp;:</p><p>-&nbsp;&nbsp;&nbsp; Améliorer l’accès aux infrastructures de base et aux moyens de subsistance;</p><p>-&nbsp;&nbsp;&nbsp; Renforcer la gouvernance locale dans le Sud de Madagascar, en mettant l’accent sur les jeunes et les femmes;</p><p>-&nbsp;&nbsp;&nbsp; Et fournir une riposte rapide et efficace à la crise de sécurité alimentaire et à d’autres urgences admissibles ».</p><p><br></p><p>Le projet a adopté différentes approches pour sa réalisation, à savoir :</p><p>-&nbsp;&nbsp;&nbsp; Un développement piloté par la communauté;</p><p>-&nbsp;&nbsp;&nbsp; Une approche impliquant tous les acteurs de développement central et local;</p><p>-&nbsp;&nbsp;&nbsp; Une approche accordant une importance particulière aux femmes et aux jeunes;</p><p>-&nbsp;&nbsp;&nbsp; Une approche integrée et multi-sectorielle.</p><p><br></p><p>Il est principalement axé sur l’inclusion des jeunes et des femmes, afin d’améliorer les perspectives économiques, avec une vision à long terme consistant à aider les autorités locales, à promouvoir un engagement significatif et durable des citoyens du Sud.</p><p>Sous-jacent à ceci, le Projet MIONJO vise à redonner de l’espoir à ces populations du Sud, périodiquement impactées par des situations de catastrophes naturelles et un isolement faute d’infrastructures idoines.</p>', '2023-09-28 08:34:16', 0, NULL, NULL, NULL),
(35, 9, 2, '', '<p>Le Projet MIONJO intervient dans trois régions Androy, Anosy et Atsimo Andrefana qui composent le Grand Sud. Le projet MIONJO déploie ses actions sur un total de 225 communes réparties sur 14 districts au sein de ces trois régions, à savoir&nbsp;:</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>Région Anôsy&nbsp;: Tolagnaro, Amboasary Atsimo et Betroka dans la Région d’Anosy</em></p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>Région Androy&nbsp;: Ambovombe, Tsihombe, Beloha et Bekily dans la Région d’Androy</em></p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>Région Atsimo Andrefana&nbsp;: Morombe, Beroroha, Ankazoabo, Toliara&nbsp;II, Bénénitra, Betioky et Ampanihy dans la Région d’Atsimo Andrefana</em></p>', '2023-09-28 08:58:15', 0, NULL, NULL, NULL),
(36, 9, 2, '', '<p>Le Projet MIONJO intervient dans trois régions Androy, Anosy et Atsimo Andrefana qui composent le Grand Sud. Le projet MIONJO déploie ses actions sur un total de 225 communes réparties sur 14 districts au sein de ces trois régions, à savoir&nbsp;:</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Région Anôsy&nbsp;: Tolagnaro, Amboasary Atsimo et Betroka dans la Région d’Anosy</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Région Androy&nbsp;: Ambovombe, Tsihombe, Beloha et Bekily dans la Région d’Androy</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Région Atsimo Andrefana&nbsp;: Morombe, Beroroha, Ankazoabo, Toliara&nbsp;II, Bénénitra, Betioky et Ampanihy dans la Région d’Atsimo Andrefana</p>', '2023-09-28 09:28:13', 0, NULL, NULL, NULL),
(37, 1, 1, 'Nomination du Gouverneur de la région Anosy', '<p>Nommée par le décret lors du conseil des Ministres du 08 Septembre 2023, Madame Voahary RAKOTOVELOMANANTSOA accède à la tête du gouvernorat de la Région Anosy.</p><p><br></p><p>Le projet Mionjo souhaite la bienvenue à Madame le gouverneur et remercie l\'ancien gouverneur pour le travail qu\'il a fourni jusqu\'ici.&nbsp;</p><p>Source : Centre Régional d\'Observation et de la Communication de la Région Anosy.</p>', '2023-09-28 10:18:07', 0, NULL, NULL, NULL),
(38, 12, 3, '1A - Région ANOSY', '<p><strong style=\"color: rgb(0, 135, 0);\">REGION</strong></p><p><strong>250 PRD </strong>disponibles sur <strong>69 </strong>Communes /<strong>10 </strong>pôles de développement;</p><p>- <strong>Réhabilitation </strong>du bureau de la Région (CROC);</p><p>- Dotations de matériels : </p><p>Roulants&nbsp;: 1 voiture station wagon 4*4 Toyota + 1 moto pour CROC</p><p>Informatiques&nbsp;: 3 Ordinateurs portables</p><p>Didactique&nbsp;: 1 lot</p><p>Mobiliers&nbsp;: 5 packs de Direction, 22 tables de bureau et 22 chaises de bureau</p><p>&nbsp;</p><p><strong style=\"color: rgb(0, 135, 0);\">DISTRICTS</strong></p><p><strong>03 PRC (Plan de Renforcement de Capacité) </strong>disponibles ;</p><p>- <strong>Dispositif District </strong>et c<strong>entres de ressources </strong>mis en place ;</p><p>- <strong>Réhabilitation </strong>des bureaux du district d’Amboasary ;</p><p><strong>03 </strong>Districts dotés de matériels:</p><p>Roulants&nbsp;: 3 moto </p><p>Informatiques&nbsp;: 3 Ordinateurs portables + imprimante</p><p>Didactique&nbsp;: 1 lot</p><p>Mobiliers&nbsp;: 1 lot</p><p>&nbsp;</p><p><strong style=\"color: rgb(0, 135, 0);\">COMMUNES</strong></p><p><strong style=\"color: rgb(0, 135, 0);\">69 SLC </strong>mis en place et opérationnels&nbsp;: 29 à Tôlagnaro&nbsp;; 18 à Amboasary&nbsp;; 22 à Betroka</p><p><strong style=\"color: rgb(0, 135, 0);\">58 PDLII </strong>(Plan de Développement Locale Inclusif<strong style=\"color: rgb(0, 135, 0);\"> </strong>et Intégré) disponibles ;</p><p><strong style=\"color: rgb(0, 135, 0);\">&nbsp;</strong></p><p><strong style=\"color: rgb(0, 135, 0);\">IGL moyen Anôsy = 4,11</strong></p><p>vs</p><p>IGL moyen national = 3,97</p><p>&nbsp;</p><p><strong style=\"color: rgb(0, 135, 0);\">69 ADL </strong>opérationnels ;</p><p>- Formation sur l’élaboration du Budget Programme des 69 Communes ;</p><p>- Appui à la mise en oeuvre du Standard de service dans les Communes.</p>', '2023-09-28 12:07:35', 0, NULL, NULL, NULL),
(68, 22, 6, 'Renforcement de la gouvernance locale décentralisée,  planification participative et résilience sociale', '<p>&nbsp;&nbsp;&nbsp;&nbsp;i.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: rgb(128, 96, 0);\">Appui et accompagnement des Collectivités Territoriales Décentralisées (CTD) en matière de Gouvernance et de prestation de services&nbsp;: dotation de matériels aux Régions, allocation de subventions de 15&nbsp;000 USD aux Communes (Travaux réhabilitation et extension des bureaux) </span></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: rgb(128, 96, 0);\">Accompagnement des Structures Locales de Concertation (SLC) en planification et engagement communautaire </span></p><p>&nbsp;&nbsp;&nbsp;&nbsp;iii.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em style=\"color: rgb(128, 96, 0);\">Renforcement de la résilience sociale, et de la prévention des conflits</em></p>', '2023-10-09 07:13:11', 0, NULL, NULL, NULL),
(69, 23, 6, 'Infrastructures pour la résilience', '<p><strong style=\"color: rgb(47, 84, 150);\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><span style=\"color: black;\">Améliorer l’accès aux services et infrastructures de base par une dotation de subventions aux communes&nbsp;: 150 000 USD et 275 000 USD </span></p><p><span style=\"color: black;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Réhabilitation du pipeline de Sampona/fleuve Mandrare et du pipeline d\'Ampotaka&nbsp;/fleuve Menarandra) avec des extensions d\'eau aux communautés.</span></p>', '2023-10-09 07:33:22', 0, NULL, NULL, NULL),
(70, 24, 6, 'Soutien aux moyens de subsistances résilients', '<p><span style=\"color: black;\">&nbsp;&nbsp;&nbsp;&nbsp;i.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Réhabilitation de périmètres d\'irrigation pour soutenir les opportunités de moyens de subsistance</span></p><p><span style=\"color: black;\">&nbsp;&nbsp;&nbsp;&nbsp;ii.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Soutien aux organismes communautaires et aux chaines de valeur locales Accompagnement de la communauté en fonction de leur niveau de vulnérabilité face aux aléas climatiques, économiques et l’ampleur de l’insécurité alimentaire</span></p>', '2023-10-09 07:42:21', 0, NULL, NULL, NULL),
(71, 25, 6, 'Soutien à la mise en œuvre du projet et apprentissage des connaissances', '<p><span style=\"color: rgb(128, 96, 0);\">&nbsp;&nbsp;&nbsp;&nbsp;i.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mise en œuvre du projet et plateforme de connaissances géospatiales</span></p><p><span style=\"color: rgb(128, 96, 0);\">&nbsp;&nbsp;&nbsp;&nbsp;ii.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Études et analyses préparatoires pour la série de projets 2</span></p>', '2023-10-09 07:47:33', 0, NULL, NULL, NULL),
(72, 6, 6, 'Intervention d’urgence conditionnelle (CIUC)', '<p><strong style=\"color: rgb(47, 84, 150);\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><span style=\"color: black;\">Fourniture d’assistance immédiate si nécessaire en réponse à une crise ou une urgence admissible et éligible qui provoque une catastrophe majeure (Voir suite sur Le dépliant PDF)&nbsp;</span></p>', '2023-10-09 07:48:07', 0, NULL, NULL, NULL),
(73, 26, 6, 'Intervention d’urgence conditionnelle (CIUC)', '<p>i.	Fourniture d’assistance immédiate si nécessaire en réponse à une crise ou une urgence admissible et éligible qui provoque une catastrophe majeure.</p>', '2023-10-09 09:42:48', 0, NULL, NULL, NULL),
(76, 1, 1, 'Passation du  Gouverneur de la région ANOSY', '<p class=\"ql-align-justify\"><strong>Le projet Mionjo souhaite la bienvenue à Madame le Gouverneur et remercie l’ancien gouverneur pour le travail qu’il a fourni jusqu’ici</strong></p><p class=\"ql-align-justify\">Nommée par le décret lors du conseil des Ministres du 08 septembre 2023, Madame Voahary RAKOTOVELOMANTSOA accède à la tête du gouvernorat de la Région Anosy. </p><p class=\"ql-align-justify\">Source&nbsp;: Centre Régional d’Observation et de la Communication de la Région Anosy</p><p class=\"ql-align-justify\"><br></p>', '2023-08-09 00:00:00', 0, NULL, NULL, NULL),
(77, 1, 1, 'Renforcement de la gestion des plaintes à Ambosary Sud : un succès partagé', '<p class=\"ql-align-justify\">Le 31 août 2023, Amboasary Sud a accueilli un atelier de formation du Projet Mionjo, réunissant les représentants des 18 communes du District Amboasary.</p><p class=\"ql-align-justify\">Cet atelier a eu pour objectif de renforcer l’engagement envers l’amélioration de la gestion des plaintes et la promotion de solutions locales. </p><p class=\"ql-align-justify\">Source&nbsp;: Centre Régional d’Observation et de la Communication de la Région Anosy</p><p><br></p>', '2023-08-31 00:00:00', 0, NULL, NULL, NULL),
(78, 1, 1, 'Distribution de volailles', '<p class=\"ql-align-justify\">Promouvoir la Sécurité Alimentaire et l’Elevage Responsable&nbsp;: Le Projet Mionjo en Action.</p><p class=\"ql-align-justify\">Dans le cadre du Projet Mionjo au Sdu de Madagascar, une distribution de 500 têtes de volailles et 2.500 kg de provende a eu lieu les 21 et 22 août derniers dans plusieurs communes du District d’Ambovombe.</p><p class=\"ql-align-justify\">Cette action menée par la CIUC (Composante d’Intervention d’Urgence Conditionnelle), sous tutelle du Ministère de l’Agriculture et de l’Elevage, du Ministère de l’Intérieur et de la Décentralisation a eu un impact positif sur les communautés locales.</p><p class=\"ql-align-justify\">Chaque foyer bénéficiaire a reçu un ensemble comprenant 5 têtes de volailles et 25 kg de provende, favorisant ainsi la sécurité alimentaire et les pratiques d’élevage responsables.</p><p class=\"ql-align-justify\">Le Projet Mionjo, soutenu par la Banque Mondiale vise à renforcer les moyens de subsistance résilients dans la région. Il s’inscrit dans une démarche plus large visant à promouvoir la sécurité alimentaire, des pratiques agricoles durables, et le développement communautaire.</p><p class=\"ql-align-justify\">Source&nbsp;: FAO Representation – Madagascar – Comores Maurices Seychelles</p><p><br></p>', '2023-09-27 00:00:00', 0, NULL, NULL, NULL),
(79, 2, 1, 'Atelier de coordination des Agences d’exécution ou AGEX du Projet Mionjo dans les locaux du Carlton Anosy', '<p class=\"ql-align-justify\">	Le projet MIONJO, d’ordre gouvernemental, sous la tutelle de l’Etat à travers le Ministère de l’intérieur et de la décentralisation, en partenariat également avec le Ministère de l’agriculture et de l’élevage à travers à travers la FAO, PAM et CIP; avec le Ministère de la pêche et de l’économie bleue&nbsp;à travers la FAO et PAM; avec le Ministère de l’eau, de l’assainissement et de l’hygiène à travers l’UNICEF&nbsp;; et du Ministère de l’environnement et du développement durable à travers la fondation TANY MEVA et CRS, a impliqué la tenue d’une session de coordination durant la journée entière du mardi 1<sup>er</sup> août 2023 au Carlton Anosy. </p><p class=\"ql-align-justify\">La tenue de cet événement a permis de rassembler les représentants des agences d’exécution dont la coopération revêt une fonction capitale dans la concrétisation de mesures visant à améliorer les conditions socio-économiques et à favoriser un développement durable à long terme dans les régions Atsimo Andrefana, Anôsy et Androy. </p><p class=\"ql-align-justify\">Ces organismes assument indubitablement un rôle capital dans la fourniture de moyens de subsistance et l’amélioration de la sécurité alimentaire dans les régions concernées. L’indispensabilité de la synergie entre les activités se trouve être un des éléments primordiaux discutés lors de cette rencontre. Ainsi, les AGEX sont attendus avec des objectifs bien définis dans le cadre du projet. Leur tâche consiste à contribuer de manière symbiotique à l’atteinte des indicateurs définis en favorisant une approche collaborative autant que possible. Ils doivent accorder une priorité incontestable à l’intérêt des populations visées, tout en respectant scrupuleusement les planifications locales et régionales établies.&nbsp;</p><p><br></p>', '2023-08-01 00:00:00', 0, NULL, NULL, NULL),
(94, 15, 4, 'Offre consultance 2', '<p>Ceci est une offre de consultance</p>', '2023-10-10 00:00:00', 0, NULL, 'Consulting 2', '<p>Consutance offer</p>'),
(95, 16, 4, 'Offre de fourniture 2', '<p>Ceci est une offre de fournitures</p>', '2023-10-10 00:00:00', 0, NULL, '', ''),
(96, 17, 4, 'Offre de service 2', '<p>Ceci est une offre de services</p>', '2023-10-10 00:00:00', 0, NULL, '', ''),
(97, 18, 4, 'Offre de travaux', '<p>Ceci est une offre de travaux</p>', '2023-10-10 00:00:00', 0, NULL, '', ''),
(99, 2, 1, 'Atelier de restitution avec MIONJO au Kube C Andraharo', '<p class=\"ql-align-justify\">L’atelier de restitution sur le Projet Mionjo s’est avéré être une étape cruciale dans la poursuite de la vision de développement durable pour le Sud de Madagascar. La présentation des AGEX, la construction de l’identité du Projet et la formulation de la stratégie à appliquer ont jeté les bases pour des actions concrètes qui auront un impact positif sur les communautés locales et l’environnement.</p><p class=\"ql-align-justify\">Le Projet Mionjo continue de tracer la voie vers un avenir meilleur pour les Régions ciblés.&nbsp;&nbsp;</p>', '2022-11-01 00:00:00', 0, NULL, '', ''),
(102, 27, 7, 'TOROLALANA FANDRAFETANA FEHEZAM-PITSIPIKA MIKASIKA NY FANADIOVANA SY NY FIDIOVANA', '', '2023-10-10 00:00:00', 0, NULL, '', ''),
(103, 27, 7, 'Lalàna laharana faha 98-029 mitondra Fehezan-dalàna momba ny Rano', '', '2023-10-10 00:00:00', 0, NULL, '', ''),
(111, 21, 5, 'Statistique total des plaintes dans la Région Androy', '', '2023-10-12 00:00:00', 0, NULL, '', ''),
(112, 21, 5, 'Statistique total des plaintes dans la Région Anôsy', '', '2023-10-12 00:00:00', 0, NULL, '', ''),
(113, 21, 5, 'Statistique total des plaintes dans la Région Atsimo Andrefana', '', '2023-10-12 00:00:00', 0, NULL, '', ''),
(114, 21, 5, 'Statistique total des plaintes', '', '2023-10-13 06:00:00', 0, NULL, '', ''),
(117, 1, 1, 'Interview du Gouverneur de la Région Androy, SOJA Lahimaharo', '<p>Monsieur le Gouverneur de la Région Androy, SOJA Lahimaharo : « Félicitations à nous tous, car cette foire a été un total SUCCES grace au soutien du projet Mionjo. »</p>', '2023-10-11 13:26:00', 50, NULL, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `ideerecus`
--

CREATE TABLE `ideerecus` (
  `id` int NOT NULL,
  `contenu` longtext NOT NULL,
  `datecreation` datetime NOT NULL DEFAULT (now()),
  `descriptif` mediumtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `photomois`
--

CREATE TABLE `photomois` (
  `id` int NOT NULL,
  `nomphoto` varchar(256) DEFAULT NULL,
  `datecreation` datetime NOT NULL DEFAULT (now())
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `photomois`
--

INSERT INTO `photomois` (`id`, `nomphoto`, `datecreation`) VALUES
(6, 'whatsappimage20231010at11.13.36.jpeg', '2023-10-11 10:26:00'),
(7, 'whatsappimage20231010at11.13.36.jpeg', '2023-10-11 10:26:00');

-- --------------------------------------------------------

--
-- Table structure for table `photos`
--

CREATE TABLE `photos` (
  `id` int NOT NULL,
  `nomphoto` varchar(150) NOT NULL,
  `datecreation` datetime NOT NULL DEFAULT (now()),
  `idgenerale` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `photos`
--

INSERT INTO `photos` (`id`, `nomphoto`, `datecreation`, `idgenerale`) VALUES
(2, 'fia.jpg', '2023-09-27 14:33:17', 5),
(3, 'banque.jpeg', '2023-09-27 14:37:08', 6),
(23, 'homepage.jpg', '2023-09-28 00:46:15', 18),
(26, 'banque.jpeg', '2023-09-28 00:58:40', 20),
(29, 'fia.jpg', '2023-09-28 01:00:56', 24),
(30, 'gouverneur.jpeg', '2023-09-28 06:27:25', 0),
(32, 'gouverneur.jpeg', '2023-09-28 06:37:08', 29),
(33, 'evement.jpg', '2023-09-28 06:49:32', 30),
(34, 'fia.jpg', '2023-09-28 06:49:32', 30),
(35, 'voatse.jpg', '2023-09-28 06:56:18', 0),
(36, 'voatse.jpg', '2023-09-28 07:01:04', 31),
(37, 'voatse.jpg', '2023-09-28 07:05:26', 32),
(38, 'zoneintervention.jpg', '2023-09-28 09:28:18', 36),
(39, 'gouverneur.jpeg', '2023-09-28 10:18:22', 37),
(40, 'realloca1.jpg', '2023-09-28 12:07:37', 38),
(41, 'realloca2.jpg', '2023-09-28 12:07:37', 38),
(42, 'c1.jpg', '2023-09-28 12:26:38', 39),
(43, 'c2.jpg', '2023-09-28 12:27:46', 40),
(44, 'c3.jpg', '2023-09-28 12:28:16', 41),
(45, 'c4.jpg', '2023-09-28 12:28:39', 42),
(92, 'img1965.jpg', '2023-10-10 01:58:22', 79),
(93, 'img1970.jpg', '2023-10-10 02:13:39', 80),
(102, 'gouverneur.jpeg', '2023-10-10 06:06:08', 98),
(111, 'photoevenementsuite.jpg', '2023-10-10 08:33:15', 99),
(112, 'codedeleauversionmalagasy.pdf', '2023-10-10 09:22:05', 100),
(113, 'codedeleauversionmalagasy2.pdf', '2023-10-10 09:22:46', 101),
(114, 'photoevenementsuite.jpg', '2023-10-10 13:36:11', 99),
(116, 'aim.jpg', '2023-10-10 13:51:46', 0),
(117, 'cip.jpg', '2023-10-10 13:51:46', 0),
(118, 'fao.jpg', '2023-10-10 13:51:46', 0),
(119, 'img1945.jpg', '2023-10-10 13:51:46', 0),
(120, 'img1950.jpg', '2023-10-10 13:51:46', 0),
(121, 'img1963.jpg', '2023-10-10 13:51:46', 0),
(125, 'whatsappimage20231010at11.13.371.jpeg', '2023-10-10 13:54:47', 0),
(126, 'whatsappimage20231010at11.13.37.jpeg', '2023-10-10 13:54:47', 0),
(127, 'whatsappimage20231010at11.13.51.jpeg', '2023-10-10 13:54:47', 0),
(128, 'whatsappimage20231010at11.13.521.jpeg', '2023-10-10 13:54:47', 0),
(129, 'whatsappimage20231010at11.13.52.jpeg', '2023-10-10 13:54:47', 0),
(130, 'whatsappimage20231010at11.13.53.jpeg', '2023-10-10 13:54:47', 0),
(131, 'whatsappimage20231010at11.13.36.jpeg', '2023-10-11 10:25:58', 0),
(137, 'whatsappimage20231012at10.57.03.jpeg', '2023-10-12 10:35:18', 0),
(138, 'whatsappimage20231012at10.57.02.jpeg', '2023-10-12 10:35:18', 0),
(139, 'whatsappimage20231012at10.57.00.jpeg', '2023-10-12 10:35:18', 0),
(140, 'whatsappimage20231012at10.56.53.jpeg', '2023-10-12 10:35:18', 0),
(141, 'whatsappimage20231012at10.56.49.jpeg', '2023-10-12 10:35:18', 0),
(142, 'whatsappimage20231012at10.56.46.jpeg', '2023-10-12 10:35:18', 0),
(143, 'whatsappimage20231012at10.56.361.jpeg', '2023-10-12 10:35:18', 0),
(144, 'whatsappimage20231012at10.56.36.jpeg', '2023-10-12 10:35:18', 0),
(145, 'whatsappimage20231012at10.56.27.jpeg', '2023-10-12 10:35:18', 0),
(146, 'whatsappimage20231012at10.56.25.jpeg', '2023-10-12 10:35:18', 0),
(147, 'whatsappimage20231012at10.56.24.jpeg', '2023-10-12 10:35:18', 0),
(148, 'whatsappimage20231012at10.56.20.jpeg', '2023-10-12 10:35:18', 0),
(149, 'whatsappimage20231012at10.56.18.jpeg', '2023-10-12 10:35:18', 0),
(150, 'whatsappimage20231012at10.56.15.jpeg', '2023-10-12 10:35:18', 0),
(151, 'whatsappimage20231012at10.56.07.jpeg', '2023-10-12 10:35:18', 0),
(152, 'whatsappimage20231012at10.56.031.jpeg', '2023-10-12 10:35:18', 0),
(153, 'whatsappimage20231012at10.56.03.jpeg', '2023-10-12 10:35:18', 0),
(154, 'whatsappimage20231012at10.55.57.jpeg', '2023-10-12 10:35:18', 0),
(155, 'whatsappimage20231012at10.55.52.jpeg', '2023-10-12 10:35:18', 0),
(156, 'whatsappimage20231012at10.55.47.jpeg', '2023-10-12 10:35:18', 0),
(157, 'whatsappimage20231012at10.55.43.jpeg', '2023-10-12 10:35:18', 0),
(158, 'whatsappimage20231012at10.55.38.jpeg', '2023-10-12 10:35:18', 0),
(159, 'whatsappimage20231012at10.55.34.jpeg', '2023-10-12 10:35:18', 0),
(160, 'whatsappimage20231012at10.55.32.jpeg', '2023-10-12 10:35:18', 0),
(161, 'whatsappimage20231012at10.55.21.jpeg', '2023-10-12 10:35:18', 0),
(162, 'whatsappimage20231012at10.55.20.jpeg', '2023-10-12 10:35:18', 0),
(163, 'whatsappimage20231012at10.55.19.jpeg', '2023-10-12 10:35:18', 0),
(164, 'whatsappimage20231012at10.55.10.jpeg', '2023-10-12 10:35:18', 0),
(165, 'whatsappimage20231012at10.55.09.jpeg', '2023-10-12 10:35:18', 0),
(166, 'whatsappimage20231012at10.55.08.jpeg', '2023-10-12 10:35:18', 0),
(171, 'whatsappimage20231012at09.16.11.jpeg', '2023-10-13 09:39:24', 110),
(172, 'statandroy.jpg', '2023-10-13 11:56:50', 111),
(173, 'statanosy.jpg', '2023-10-13 11:57:19', 112),
(174, 'statatsimoandrefana.jpg', '2023-10-13 11:57:45', 113),
(175, 'statplainte.jpg', '2023-10-13 11:58:23', 114),
(176, 'whatsappimage20231012at09.16.11.jpeg', '2023-10-13 13:26:43', 117),
(178, 'logomionjo.svg', '2023-10-14 04:22:57', 33);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int NOT NULL,
  `nomrole` varchar(150) NOT NULL,
  `datecreation` datetime NOT NULL DEFAULT (now())
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `nomrole`, `datecreation`) VALUES
(1, 'SUPERADMIN', '2023-09-20 03:58:58');

-- --------------------------------------------------------

--
-- Table structure for table `rubriques`
--

CREATE TABLE `rubriques` (
  `id` int NOT NULL,
  `nomrubrique` varchar(150) NOT NULL,
  `datecreation` datetime NOT NULL DEFAULT (now()),
  `resume` mediumtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `rubriques`
--

INSERT INTO `rubriques` (`id`, `nomrubrique`, `datecreation`, `resume`) VALUES
(1, 'Actualité', '2023-09-27 13:57:25', NULL),
(2, 'Evenements', '2023-09-27 13:57:25', NULL),
(3, 'Liens utiles', '2023-09-27 13:57:25', NULL),
(4, 'Photos et videos', '2023-09-27 13:57:25', NULL),
(5, 'Nous contacter', '2023-09-27 13:57:25', NULL),
(6, 'Description', '2023-09-27 13:57:25', NULL),
(7, 'Objectifs et axes d\'intervetions', '2023-09-27 13:57:25', NULL),
(8, 'Composantes', '2023-09-27 13:57:25', NULL),
(9, 'Zones d\'interventions', '2023-09-27 13:57:25', NULL),
(10, 'Contexte du sud', '2023-09-27 13:57:25', NULL),
(11, 'Organisation institutionnelles', '2023-09-27 13:57:25', NULL),
(12, 'Realisation par localite', '2023-09-27 13:57:25', NULL),
(13, 'Realisation par composante', '2023-09-27 13:57:25', NULL),
(14, 'SISE', '2023-09-27 13:57:25', NULL),
(15, 'Consultants', '2023-09-27 13:57:25', NULL),
(16, 'Fournitures', '2023-09-27 13:57:25', NULL),
(17, 'Services', '2023-09-27 13:57:25', NULL),
(18, 'Travaux', '2023-09-27 13:57:25', NULL),
(19, 'Idees de contributions pour le sud', '2023-09-27 13:57:25', NULL),
(20, 'Deposer une plainte', '2023-09-27 13:57:25', NULL),
(21, 'Statistique de gestion des plaintes', '2023-09-27 13:57:25', NULL),
(22, 'Composante1', '2023-09-27 13:57:25', 'Resume composante 1'),
(23, 'Composante2', '2023-09-27 13:57:25', 'Resume composante 2'),
(24, 'Composante3', '2023-09-27 13:57:25', 'Resume composante 3'),
(25, 'Composante4', '2023-09-27 13:57:25', 'Resume composante 4'),
(26, 'Composante5', '2023-09-27 13:57:25', 'Resume composante 5'),
(27, 'Documentation', '2023-09-27 13:57:26', NULL),
(28, 'Interview du mois', '2023-10-05 07:19:39', NULL);

-- --------------------------------------------------------

--
-- Stand-in structure for view `userc`
-- (See below for the actual view)
--
CREATE TABLE `userc` (
`datecreation` datetime
,`email` varchar(150)
,`etat` int
,`id` int
,`idrole` int
,`mdp` varchar(150)
,`nomrole` varchar(150)
);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `email` varchar(150) NOT NULL,
  `mdp` varchar(150) NOT NULL,
  `datecreation` datetime NOT NULL DEFAULT (now()),
  `idrole` int NOT NULL,
  `etat` int NOT NULL DEFAULT (0)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `mdp`, `datecreation`, `idrole`, `etat`) VALUES
(1, 'hathawayroot@gmail.com', '$2b$10$ESYxTyywjShr1hPVQaq8HeosRqVWecFFqfYQ8TpoPRsAjUTKDMoUe', '2023-09-20 04:07:17', 1, 0),
(2, 'haingonirina73@gmail.com', '$2b$10$ESYxTyywjShr1hPVQaq8HeosRqVWecFFqfYQ8TpoPRsAjUTKDMoUe', '2023-09-20 04:08:22', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `videos`
--

CREATE TABLE `videos` (
  `id` int NOT NULL,
  `nomvideo` varchar(150) NOT NULL,
  `datecreation` datetime NOT NULL DEFAULT (now()),
  `idgenerale` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `videos`
--

INSERT INTO `videos` (`id`, `nomvideo`, `datecreation`, `idgenerale`) VALUES
(1, 'vidoprsentationmionjo.mp4', '2023-10-10 13:51:47', 0);

-- --------------------------------------------------------

--
-- Structure for view `generalec`
--
DROP TABLE IF EXISTS `generalec`;

CREATE ALGORITHM=UNDEFINED DEFINER=`u0cyg2xwdkkj0buh`@`%` SQL SECURITY DEFINER VIEW `generalec`  AS SELECT `g`.`id` AS `id`, `g`.`idrubrique` AS `idrubrique`, `g`.`idcategorie` AS `idcategorie`, `g`.`titre` AS `titre`, `g`.`titreen` AS `titreen`, `g`.`contenu` AS `contenu`, `g`.`contenuen` AS `contenuen`, `g`.`datelimit` AS `datelimit`, `g`.`datecreation` AS `datecreation`, `g`.`etat` AS `etat`, `r`.`nomrubrique` AS `nomrubrique`, `r`.`datecreation` AS `datecreationrubrique`, `c`.`nomcategorie` AS `nomcategorie`, `c`.`datecreation` AS `datecreationcategorie` FROM ((`generales` `g` left join `rubriques` `r` on((`r`.`id` = `g`.`idrubrique`))) left join `categories` `c` on((`c`.`id` = `g`.`idcategorie`))) ;

-- --------------------------------------------------------

--
-- Structure for view `userc`
--
DROP TABLE IF EXISTS `userc`;

CREATE ALGORITHM=UNDEFINED DEFINER=`u0cyg2xwdkkj0buh`@`%` SQL SECURITY DEFINER VIEW `userc`  AS SELECT `u`.`id` AS `id`, `u`.`email` AS `email`, `u`.`mdp` AS `mdp`, `u`.`datecreation` AS `datecreation`, `u`.`idrole` AS `idrole`, `u`.`etat` AS `etat`, `r`.`nomrole` AS `nomrole` FROM (`users` `u` join `roles` `r` on((`r`.`id` = `u`.`idrole`))) ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bannieres`
--
ALTER TABLE `bannieres`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_documents` (`idgenerale`);

--
-- Indexes for table `generales`
--
ALTER TABLE `generales`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_generales` (`titre`,`id`),
  ADD KEY `fk_generales_rubriques` (`idrubrique`),
  ADD KEY `fk_generales_categories` (`idcategorie`);

--
-- Indexes for table `ideerecus`
--
ALTER TABLE `ideerecus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `photomois`
--
ALTER TABLE `photomois`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `photos`
--
ALTER TABLE `photos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_photos` (`idgenerale`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rubriques`
--
ALTER TABLE `rubriques`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unq_users` (`email`),
  ADD KEY `fk_users_roles` (`idrole`);

--
-- Indexes for table `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_videos` (`idgenerale`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bannieres`
--
ALTER TABLE `bannieres`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `documents`
--
ALTER TABLE `documents`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `generales`
--
ALTER TABLE `generales`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=122;

--
-- AUTO_INCREMENT for table `ideerecus`
--
ALTER TABLE `ideerecus`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `photomois`
--
ALTER TABLE `photomois`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `photos`
--
ALTER TABLE `photos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=179;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `rubriques`
--
ALTER TABLE `rubriques`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `videos`
--
ALTER TABLE `videos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `documents`
--
ALTER TABLE `documents`
  ADD CONSTRAINT `fk_documents_generales` FOREIGN KEY (`idgenerale`) REFERENCES `generales` (`id`);

--
-- Constraints for table `generales`
--
ALTER TABLE `generales`
  ADD CONSTRAINT `fk_generales_categories` FOREIGN KEY (`idcategorie`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `fk_generales_rubriques` FOREIGN KEY (`idrubrique`) REFERENCES `rubriques` (`id`);

--
-- Constraints for table `photos`
--
ALTER TABLE `photos`
  ADD CONSTRAINT `fk_photos_generales` FOREIGN KEY (`idgenerale`) REFERENCES `generales` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `fk_users_roles` FOREIGN KEY (`idrole`) REFERENCES `roles` (`id`);

--
-- Constraints for table `videos`
--
ALTER TABLE `videos`
  ADD CONSTRAINT `fk_videos_generales` FOREIGN KEY (`idgenerale`) REFERENCES `generales` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
