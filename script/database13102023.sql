-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: bjzwpqtvt9ff7nkuxrxs-mysql.services.clever-cloud.com:3306
-- Generation Time: Oct 14, 2023 at 02:24 AM
-- Server version: 8.0.22-13
-- PHP Version: 8.2.11
SET
  SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

START TRANSACTION;

SET
  time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;

/*!40101 SET NAMES utf8mb4 */
;

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
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

-- --------------------------------------------------------
--
-- Table structure for table `categories`
--
CREATE TABLE `categories` (
  `id` int NOT NULL,
  `nomcategorie` varchar(150) NOT NULL,
  `datecreation` datetime NOT NULL DEFAULT (now())
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

--
-- Dumping data for table `categories`
--
INSERT INTO
  `categories` (`id`, `nomcategorie`, `datecreation`)
VALUES
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
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

--
-- Dumping data for table `documents`
--
INSERT INTO
  `documents` (
    `id`,
    `idgenerale`,
    `nomdocument`,
    `typedocument`,
    `datecreation`
  )
VALUES
  (
    1,
    121,
    'documentcommunication2.pdf',
    'undefined',
    '2023-09-27 13:35:16'
  ),
  (
    2,
    7,
    'timesheet.xlsx',
    'undefined',
    '2023-09-27 17:17:03'
  ),
  (
    3,
    8,
    'timesheet.xlsx',
    '',
    '2023-09-27 17:37:00'
  ),
  (
    4,
    9,
    'timesheet.xlsx',
    'undefined',
    '2023-09-27 17:38:11'
  ),
  (
    5,
    11,
    'estimationprojetconge.xlsx',
    'undefined',
    '2023-09-27 23:51:59'
  ),
  (
    6,
    15,
    'estimationprojetconge.xlsx',
    'undefined',
    '2023-09-28 00:13:58'
  ),
  (
    7,
    16,
    'devisrefontespmarketplace.xlsx',
    'undefined',
    '2023-09-28 00:24:49'
  ),
  (
    8,
    17,
    'devisrefontespmarketplace.xlsx',
    'undefined',
    '2023-09-28 00:36:18'
  ),
  (
    9,
    25,
    'estimationprojetconge.xlsx',
    'undefined',
    '2023-09-28 02:54:10'
  ),
  (
    10,
    26,
    'estimationprojetconge.xlsx',
    'undefined',
    '2023-09-28 02:54:33'
  ),
  (
    11,
    27,
    'devisrefontespmarketplace.xlsx',
    'undefined',
    '2023-09-28 02:54:55'
  ),
  (
    12,
    91,
    'actualits.docx',
    'undefined',
    '2023-10-10 04:25:22'
  ),
  (
    13,
    93,
    'evnements.docx',
    'undefined',
    '2023-10-10 04:26:41'
  ),
  (
    14,
    94,
    'actualits.docx',
    'undefined',
    '2023-10-10 05:55:08'
  ),
  (
    15,
    95,
    'elementssuitesiteweb.docx',
    'undefined',
    '2023-10-10 05:56:21'
  ),
  (
    16,
    96,
    'evnements.docx',
    'undefined',
    '2023-10-10 05:58:02'
  ),
  (
    17,
    102,
    'codedeleauversionmalagasy.pdf',
    'undefined',
    '2023-10-10 13:39:16'
  ),
  (
    18,
    103,
    'codedeleauversionmalagasy2.pdf',
    'undefined',
    '2023-10-10 13:40:20'
  ),
  (
    19,
    106,
    'actualits.docx',
    'undefined',
    '2023-10-11 08:57:15'
  );

-- --------------------------------------------------------
--
-- Stand-in structure for view `generalec`
-- (See below for the actual view)
--
CREATE TABLE `generalec` (
  `contenu` longtext,
  `contenuen` longtext,
  `datecreation` datetime,
  `datecreationcategorie` datetime,
  `datecreationrubrique` datetime,
  `datelimit` datetime,
  `etat` int,
  `id` int,
  `idcategorie` int,
  `idrubrique` int,
  `nomcategorie` varchar(150),
  `nomrubrique` varchar(150),
  `titre` varchar(256),
  `titreen` varchar(256)
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
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

--
-- Dumping data for table `generales`
--
INSERT INTO
  `generales` (
    `id`,
    `idrubrique`,
    `idcategorie`,
    `titre`,
    `contenu`,
    `datecreation`,
    `etat`,
    `datelimit`,
    `titreen`,
    `contenuen`
  )
VALUES
  (
    0,
    1,
    1,
    NULL,
    NULL,
    '2023-09-27 23:33:43',
    0,
    NULL,
    NULL,
    NULL
  ),
  (
    1,
    1,
    1,
    'Gouvernorat de la Région Anôsy',
    '<p>8 septembre 2023&nbsp;: <strong>Nomination de Madame Voahary RAKOTOVELOMANATSOA à la tête du gouvernorat de la Région Anôsy.</strong></p>',
    '2023-09-27 14:19:47',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    2,
    1,
    1,
    'Distribution de volailles',
    '<p class=\"ql-align-justify\">Promouvoir la Sécurité Alimentaire et l’Elevage Responsable&nbsp;: Le Projet Mionjo en Action. </p><p class=\"ql-align-justify\">Dans le cadre du Projet Mionjo au Sdu de Madagascar, une distribution de 500 têtes de volailles et 2.500 kg de provende a eu lieu les 21 et 22 août derniers dans plusieurs communes du District d’Ambovombe. </p><p class=\"ql-align-justify\">Cette action menée par la CIUC (Composante d’Intervention d’Urgence Conditionnelle), sous tutelle du Ministère de l’Agriculture et de l’Elevage, du Ministère de l’Intérieur et de la Décentralisation a eu un impact positif sur les communautés locales.</p><p class=\"ql-align-justify\">Chaque foyer bénéficiaire a reçu un ensemble comprenant 5 têtes de volailles et 25 kg de provende, favorisant ainsi la sécurité alimentaire et les pratiques d’élevage responsables. </p><p class=\"ql-align-justify\">Le Projet Mionjo, soutenu par la Banque Mondiale vise à renforcer les moyens de subsistance résilients dans la région. Il s’inscrit dans une démarche plus large visant à promouvoir la sécurité alimentaire, des pratiques agricoles durables, et le développement communautaire.</p><p class=\"ql-align-justify\">Source&nbsp;: FAO Representation – Madagascar – Comores Maurices Seychelles</p><p><br></p>',
    '2023-09-27 14:23:02',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    3,
    1,
    1,
    'Foire VOATSE',
    '<p><strong>Participation de MIONJO à la Foire VOATSE du 4 au 7 octobre 2023 à la capitale de la région Androy</strong></p>',
    '2023-09-27 14:23:47',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    4,
    2,
    1,
    'FIA : Foire Internationale de l\'Agriculture',
    '<p><strong>Participation de MIONJO à la FIA du 21 au 23 septembre</strong></p>',
    '2023-09-27 14:27:17',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    5,
    2,
    1,
    'FIA Foire International de l\'Agriculture',
    '<p>&nbsp;<strong>Participation de MIONJO à la FIA du 21 au 23 septembre</strong></p>',
    '2023-09-27 14:33:15',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    6,
    2,
    1,
    'Banque Mondiale',
    '<p>&nbsp;<strong>Mission de supervision de la Banque Mondiale le 18  septembre au 06 octobre&nbsp;</strong></p>',
    '2023-09-27 14:37:06',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    7,
    15,
    4,
    'c1',
    NULL,
    '2023-09-27 17:17:01',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    8,
    27,
    7,
    'c2',
    '<p>ipo</p>',
    '2023-09-27 17:36:59',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    9,
    15,
    4,
    'c4',
    NULL,
    '2023-09-27 17:38:09',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    11,
    27,
    7,
    'Documentation 1',
    '<p>ceci est un document DE pour faire un test</p>',
    '2023-09-27 23:51:57',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    12,
    22,
    6,
    'Sous-composante 1 : Traitement de donnees',
    '<p>Ceci est un traitement de donnee, </p>',
    '2023-09-27 23:57:11',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    13,
    26,
    6,
    'Sous-composante  5-1 : Traitement des images',
    '<p>Vue tres  magnifique </p>',
    '2023-09-28 00:09:56',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    14,
    1,
    1,
    'Banque de photos',
    '',
    '2023-09-28 00:10:45',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    15,
    18,
    4,
    'titre',
    NULL,
    '2023-09-28 00:13:57',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    16,
    15,
    4,
    'Test titre',
    '',
    '2023-09-28 00:24:48',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    17,
    15,
    4,
    'Offre de consultance',
    '<p>Ceci est une offre de consultance</p>',
    '2023-09-28 00:36:16',
    0,
    '2023-09-29 00:00:00',
    NULL,
    NULL
  ),
  (
    18,
    12,
    3,
    'Ceci est ma realisationsdans cette localite',
    '<p>asdfa sdf asdfasd a sd sa</p>',
    '2023-09-28 00:46:14',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    19,
    21,
    5,
    'Gestion des plaintes ',
    '<p>Imges statisitques </p>',
    '2023-09-28 00:51:34',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    20,
    6,
    2,
    'Description',
    '<p>Description</p>',
    '2023-09-28 00:58:38',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    21,
    7,
    2,
    'Ceci est un objectif',
    '<p>Dans les axes d\'interventions</p>',
    '2023-09-28 00:59:17',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    22,
    9,
    2,
    'Ceci est une des zones d\'interventions',
    '<p>asdf sd flkm;  a\' a\'dslfa;ldskfl;</p>',
    '2023-09-28 00:59:51',
    0,
    NULL,
    NULL,
    NULL
  ),
  (
    23,
    9,
    2,
    '',
    '<p><br></p>',
    '2023-09-28 00:59:58',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    24,
    10,
    2,
    'Milieu sud',
    '<p>On est dans le coeur du sud</p>',
    '2023-09-28 01:00:54',
    0,
    NULL,
    NULL,
    NULL
  ),
  (
    25,
    18,
    4,
    'Offre de travaux 2',
    '',
    '2023-09-28 02:54:08',
    0,
    '2023-09-28 00:00:00',
    '',
    ''
  ),
  (
    26,
    17,
    4,
    'Offre de service',
    '',
    '2023-09-28 02:54:31',
    0,
    '2023-09-30 00:00:00',
    '',
    ''
  ),
  (
    27,
    16,
    4,
    'Offre de fourniture',
    '',
    '2023-09-28 02:54:53',
    0,
    '2023-09-28 00:00:00',
    '',
    ''
  ),
  (
    28,
    1,
    1,
    'Test titre',
    '<p>kokoko</p>',
    '2023-09-28 06:35:20',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    29,
    1,
    1,
    'oko',
    '<p>kokok</p>',
    '2023-09-28 06:37:05',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    30,
    2,
    1,
    'FIA Foire Internationale de l\'Agriculture',
    '<p>&nbsp;<strong>Participation de MIONJO à la FIA à travers la FAO le 21 au 23 septembre 2023</strong></p>',
    '2023-09-28 06:49:29',
    0,
    NULL,
    NULL,
    NULL
  ),
  (
    31,
    2,
    1,
    'zzdzd',
    '<p>zdzdddzd</p>',
    '2023-09-28 07:01:00',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    32,
    2,
    1,
    'Foire VOATSE ',
    '<p class=\"ql-align-justify\"><strong>﻿La Foire VOATSE 2023</strong>, prévue du 4 au 7 octobre à la capitale de la région Androy, mettra en valeur les atouts de cette région, tels que le tourisme, l’agriculture, l’élevage, l’artisanat et la pêche, les opportunités foncières, l’exploitation minière, la culture, et plus encore. L’objectif est de raviver les traditions et les jeux locaux.</p><p class=\"ql-align-justify\">Le Dr SOJA Tsimandilatse Lahimaro, Gouverneur de la région, finalise les accords avec les sponsors de l’événement. Il a récemment rencontré des journalistes pour expliquer sa vision alignée sur le budget de la Foire VOATSE, soulignant l’importance de cette démarche pour le développement régional.</p><p class=\"ql-align-justify\">Source&nbsp;: Governoran’ny Faritra Androy</p><p class=\"ql-align-justify\"><br></p><p class=\"ql-align-justify\">Afin de renforcer la synergie entre la Région Atsimo Andrefana et le projet Mionjo, un atelier et une évaluation des améliorations envisagées se tiennent su siège de la Région en présence du Gouverneur Edally Ranoelison TOVONDRAINY, du secrétaire général de la Région, de la préfecture.&nbsp;</p><p class=\"ql-align-justify\"><br></p>',
    '2023-09-28 07:04:58',
    0,
    NULL,
    NULL,
    NULL
  ),
  (
    33,
    6,
    2,
    '',
    '<p>Le projet MIONJO est une initiative mise en place par le Gouvernement malagasy. MIONJO est un projet de soutien aux moyens de subsistance résilients dans le Sud de Madagascar sous tutelle du Ministère de l’Intérieur et de la Décentralisation (MID), avec le soutien financier et technique de la Banque mondiale.</p><p><br></p><p>Le projet a été approuvé le 10&nbsp;décembre 2020 pour un montant 100&nbsp;millions&nbsp;USD en tant que première phase (2021 - 2025) d’une série de projets (SdP). Le Projet est entré en vigueur le 23&nbsp;décembre 2020 et se terminera le 31&nbsp;mai 2025. Le projet a bénéficié d\'un Financement additionnel, de 100&nbsp;millions de dollars US, provenant du dispositif de riposte rapide du Mécanisme de riposte de réponse rapide (CRW ERF).</p>',
    '2023-09-28 08:24:36',
    0,
    NULL,
    NULL,
    NULL
  ),
  (
    34,
    7,
    2,
    '',
    '<p>Les objectifs de développement du projet (ODP) consistent à&nbsp;:</p><p>-&nbsp;&nbsp;&nbsp; Améliorer l’accès aux infrastructures de base et aux moyens de subsistance;</p><p>-&nbsp;&nbsp;&nbsp; Renforcer la gouvernance locale dans le Sud de Madagascar, en mettant l’accent sur les jeunes et les femmes;</p><p>-&nbsp;&nbsp;&nbsp; Et fournir une riposte rapide et efficace à la crise de sécurité alimentaire et à d’autres urgences admissibles ».</p><p><br></p><p>Le projet a adopté différentes approches pour sa réalisation, à savoir :</p><p>-&nbsp;&nbsp;&nbsp; Un développement piloté par la communauté;</p><p>-&nbsp;&nbsp;&nbsp; Une approche impliquant tous les acteurs de développement central et local;</p><p>-&nbsp;&nbsp;&nbsp; Une approche accordant une importance particulière aux femmes et aux jeunes;</p><p>-&nbsp;&nbsp;&nbsp; Une approche integrée et multi-sectorielle.</p><p><br></p><p>Il est principalement axé sur l’inclusion des jeunes et des femmes, afin d’améliorer les perspectives économiques, avec une vision à long terme consistant à aider les autorités locales, à promouvoir un engagement significatif et durable des citoyens du Sud.</p><p>Sous-jacent à ceci, le Projet MIONJO vise à redonner de l’espoir à ces populations du Sud, périodiquement impactées par des situations de catastrophes naturelles et un isolement faute d’infrastructures idoines.</p>',
    '2023-09-28 08:34:16',
    0,
    NULL,
    NULL,
    NULL
  ),
  (
    35,
    9,
    2,
    '',
    '<p>Le Projet MIONJO intervient dans trois régions Androy, Anosy et Atsimo Andrefana qui composent le Grand Sud. Le projet MIONJO déploie ses actions sur un total de 225 communes réparties sur 14 districts au sein de ces trois régions, à savoir&nbsp;:</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>Région Anôsy&nbsp;: Tolagnaro, Amboasary Atsimo et Betroka dans la Région d’Anosy</em></p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>Région Androy&nbsp;: Ambovombe, Tsihombe, Beloha et Bekily dans la Région d’Androy</em></p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>Région Atsimo Andrefana&nbsp;: Morombe, Beroroha, Ankazoabo, Toliara&nbsp;II, Bénénitra, Betioky et Ampanihy dans la Région d’Atsimo Andrefana</em></p>',
    '2023-09-28 08:58:15',
    0,
    NULL,
    NULL,
    NULL
  ),
  (
    36,
    9,
    2,
    '',
    '<p>Le Projet MIONJO intervient dans trois régions Androy, Anosy et Atsimo Andrefana qui composent le Grand Sud. Le projet MIONJO déploie ses actions sur un total de 225 communes réparties sur 14 districts au sein de ces trois régions, à savoir&nbsp;:</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Région Anôsy&nbsp;: Tolagnaro, Amboasary Atsimo et Betroka dans la Région d’Anosy</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Région Androy&nbsp;: Ambovombe, Tsihombe, Beloha et Bekily dans la Région d’Androy</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Région Atsimo Andrefana&nbsp;: Morombe, Beroroha, Ankazoabo, Toliara&nbsp;II, Bénénitra, Betioky et Ampanihy dans la Région d’Atsimo Andrefana</p>',
    '2023-09-28 09:28:13',
    0,
    NULL,
    NULL,
    NULL
  ),
  (
    37,
    1,
    1,
    'Nomination du Gouverneur de la région Anosy',
    '<p>Nommée par le décret lors du conseil des Ministres du 08 Septembre 2023, Madame Voahary RAKOTOVELOMANANTSOA accède à la tête du gouvernorat de la Région Anosy.</p><p><br></p><p>Le projet Mionjo souhaite la bienvenue à Madame le gouverneur et remercie l\'ancien gouverneur pour le travail qu\'il a fourni jusqu\'ici.&nbsp;</p><p>Source : Centre Régional d\'Observation et de la Communication de la Région Anosy.</p>',
    '2023-09-28 10:18:07',
    0,
    NULL,
    NULL,
    NULL
  ),
  (
    38,
    12,
    3,
    '1A - Région ANOSY',
    '<p><strong style=\"color: rgb(0, 135, 0);\">REGION</strong></p><p><strong>250 PRD </strong>disponibles sur <strong>69 </strong>Communes /<strong>10 </strong>pôles de développement;</p><p>- <strong>Réhabilitation </strong>du bureau de la Région (CROC);</p><p>- Dotations de matériels : </p><p>Roulants&nbsp;: 1 voiture station wagon 4*4 Toyota + 1 moto pour CROC</p><p>Informatiques&nbsp;: 3 Ordinateurs portables</p><p>Didactique&nbsp;: 1 lot</p><p>Mobiliers&nbsp;: 5 packs de Direction, 22 tables de bureau et 22 chaises de bureau</p><p>&nbsp;</p><p><strong style=\"color: rgb(0, 135, 0);\">DISTRICTS</strong></p><p><strong>03 PRC (Plan de Renforcement de Capacité) </strong>disponibles ;</p><p>- <strong>Dispositif District </strong>et c<strong>entres de ressources </strong>mis en place ;</p><p>- <strong>Réhabilitation </strong>des bureaux du district d’Amboasary ;</p><p><strong>03 </strong>Districts dotés de matériels:</p><p>Roulants&nbsp;: 3 moto </p><p>Informatiques&nbsp;: 3 Ordinateurs portables + imprimante</p><p>Didactique&nbsp;: 1 lot</p><p>Mobiliers&nbsp;: 1 lot</p><p>&nbsp;</p><p><strong style=\"color: rgb(0, 135, 0);\">COMMUNES</strong></p><p><strong style=\"color: rgb(0, 135, 0);\">69 SLC </strong>mis en place et opérationnels&nbsp;: 29 à Tôlagnaro&nbsp;; 18 à Amboasary&nbsp;; 22 à Betroka</p><p><strong style=\"color: rgb(0, 135, 0);\">58 PDLII </strong>(Plan de Développement Locale Inclusif<strong style=\"color: rgb(0, 135, 0);\"> </strong>et Intégré) disponibles ;</p><p><strong style=\"color: rgb(0, 135, 0);\">&nbsp;</strong></p><p><strong style=\"color: rgb(0, 135, 0);\">IGL moyen Anôsy = 4,11</strong></p><p>vs</p><p>IGL moyen national = 3,97</p><p>&nbsp;</p><p><strong style=\"color: rgb(0, 135, 0);\">69 ADL </strong>opérationnels ;</p><p>- Formation sur l’élaboration du Budget Programme des 69 Communes ;</p><p>- Appui à la mise en oeuvre du Standard de service dans les Communes.</p>',
    '2023-09-28 12:07:35',
    0,
    NULL,
    NULL,
    NULL
  ),
  (
    39,
    22,
    6,
    'Les grandes realisations de la composante 1 au 06 septembre 2023',
    '',
    '2023-09-28 12:26:36',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    40,
    23,
    6,
    'Les grandes realisations de la composante 2 au 06 septembre 2023',
    '',
    '2023-09-28 12:27:44',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    41,
    24,
    6,
    'Les grandes realisations de la composante 3 au 06 septembre 2023',
    '',
    '2023-09-28 12:28:13',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    42,
    25,
    6,
    'Les grandes realisations de la composante 4 au 06 septembre 2023',
    '',
    '2023-09-28 12:28:38',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    43,
    1,
    1,
    'Test titre',
    '<p>asdfghj ggj h j ggjhg jg</p>',
    '2023-10-03 03:43:59',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    44,
    1,
    1,
    'teste',
    '<p>kokok</p>',
    '2023-10-04 08:53:43',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    45,
    1,
    1,
    'kokok',
    '<p>llololo</p>',
    '2023-10-04 08:54:10',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    46,
    1,
    1,
    'lolo',
    '<p>lolololocdcdc</p>',
    '2023-10-04 08:54:37',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    47,
    22,
    6,
    'lo',
    '<p>kok</p>',
    '2023-10-04 08:57:39',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    48,
    28,
    8,
    'interview',
    '<p><span style=\"color: rgb(51, 50, 56);\">Use merge requests to propose changes to your project and discuss them with your team. To make changes, use the&nbsp;</span><strong style=\"color: rgb(51, 50, 56);\">Code</strong><span style=\"color: rgb(51, 50, 56);\">&nbsp;dropdown list above, then test them with&nbsp;</span><a href=\"https://gitlab.com/help/ci/quick_start/index.html\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(31, 117, 203);\">CI/CD</a><span style=\"color: rgb(51, 50, 56);\">&nbsp;before merging.</span></p>',
    '2023-10-06 11:56:14',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    49,
    28,
    8,
    'interviewooooo',
    '<p><span style=\"color: rgb(51, 50, 56);\">Use merge requests to propose changes to your project and discuss them with your team. To make changes, use the&nbsp;</span><strong style=\"color: rgb(51, 50, 56);\">Code</strong><span style=\"color: rgb(51, 50, 56);\">&nbsp;dropdown list above, then test them with&nbsp;</span><a href=\"https://gitlab.com/help/ci/quick_start/index.html\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(31, 117, 203);\">CI/CD</a><span style=\"color: rgb(51, 50, 56);\">&nbsp;before merging.</span></p><p><span style=\"color: rgb(51, 50, 56);\">lolo</span></p>',
    '2023-10-06 11:56:56',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    50,
    28,
    8,
    'interviewooooo',
    '<p><span style=\"color: rgb(51, 50, 56);\">Use merge requests to propose changes to your project and discuss them with your team. To make changes, use the&nbsp;</span><strong style=\"color: rgb(51, 50, 56);\">Code</strong><span style=\"color: rgb(51, 50, 56);\">&nbsp;dropdown list above, then test them with&nbsp;</span><a href=\"https://gitlab.com/help/ci/quick_start/index.html\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(31, 117, 203);\">CI/CD</a><span style=\"color: rgb(51, 50, 56);\">&nbsp;before merging.</span></p><p><span style=\"color: rgb(51, 50, 56);\">lolo</span></p>',
    '2023-10-06 12:00:22',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    51,
    2,
    1,
    'Evenement',
    '<p>Ceci est un evenement </p>',
    '2023-10-06 16:13:13',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    52,
    1,
    1,
    'Bisous',
    '<p>fvhjxghxfgchgvhjv  vchg jhcg ghckgc  kvhjh </p>',
    '2023-10-09 04:46:00',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    53,
    1,
    1,
    'Titre ihn no eto',
    '<p>dsafsd</p>',
    '2023-10-09 04:47:56',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    54,
    2,
    1,
    'Evenement',
    '<p>asdf as ff ad fasdf df</p>',
    '2023-10-09 04:49:03',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    55,
    1,
    1,
    'love',
    '<p>mah kely sy io</p>',
    '2023-10-09 06:01:03',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    56,
    28,
    8,
    'in2',
    '<p>sxxxsx</p>',
    '2023-10-09 05:59:06',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    57,
    28,
    8,
    'in2',
    '<p>sxxxsx</p>',
    '2023-10-09 05:59:07',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    58,
    28,
    8,
    'in3',
    '<p>kokokoko</p>',
    '2023-10-09 05:59:47',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    59,
    28,
    8,
    'in3',
    '<p>kokokoko</p>',
    '2023-10-09 05:59:48',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    60,
    6,
    2,
    'teste finl',
    '<p>any a</p>',
    '2023-10-09 06:05:47',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    61,
    7,
    2,
    'tezte objet',
    '<p>koko</p>',
    '2023-10-09 06:07:33',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    62,
    28,
    8,
    'Eo ary e',
    '<p>ads asd sdf asd a</p>',
    '2023-10-09 07:29:18',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    63,
    28,
    8,
    'Eo ary e',
    '<p>ads asd sdf asd a</p>',
    '2023-10-09 07:29:19',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    64,
    28,
    8,
    'Test titre',
    '<p>asdfas df a d fasdafsd a</p>',
    '2023-10-09 07:32:07',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    65,
    28,
    8,
    'Test titre',
    '<p>asdfas df a d fasdafsd a</p>',
    '2023-10-09 07:32:09',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    66,
    28,
    8,
    'asd fasd ',
    '<p>sdfdfsdf fasd fas dsaf as fa sdf asdf asdfasdfa sdfa sdfa sdfa ssdaf  adsf asdf asdf asfd as a sdf</p>',
    '2023-10-09 07:38:13',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    67,
    6,
    2,
    '',
    '',
    '2023-10-09 07:04:18',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    68,
    22,
    6,
    'Renforcement de la gouvernance locale décentralisée,  planification participative et résilience sociale',
    '<p>&nbsp;&nbsp;&nbsp;&nbsp;i.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: rgb(128, 96, 0);\">Appui et accompagnement des Collectivités Territoriales Décentralisées (CTD) en matière de Gouvernance et de prestation de services&nbsp;: dotation de matériels aux Régions, allocation de subventions de 15&nbsp;000 USD aux Communes (Travaux réhabilitation et extension des bureaux) </span></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: rgb(128, 96, 0);\">Accompagnement des Structures Locales de Concertation (SLC) en planification et engagement communautaire </span></p><p>&nbsp;&nbsp;&nbsp;&nbsp;iii.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em style=\"color: rgb(128, 96, 0);\">Renforcement de la résilience sociale, et de la prévention des conflits</em></p>',
    '2023-10-09 07:13:11',
    0,
    NULL,
    NULL,
    NULL
  ),
  (
    69,
    23,
    6,
    'Infrastructures pour la résilience',
    '<p><strong style=\"color: rgb(47, 84, 150);\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><span style=\"color: black;\">Améliorer l’accès aux services et infrastructures de base par une dotation de subventions aux communes&nbsp;: 150 000 USD et 275 000 USD </span></p><p><span style=\"color: black;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Réhabilitation du pipeline de Sampona/fleuve Mandrare et du pipeline d\'Ampotaka&nbsp;/fleuve Menarandra) avec des extensions d\'eau aux communautés.</span></p>',
    '2023-10-09 07:33:22',
    0,
    NULL,
    NULL,
    NULL
  ),
  (
    70,
    24,
    6,
    'Soutien aux moyens de subsistances résilients',
    '<p><span style=\"color: black;\">&nbsp;&nbsp;&nbsp;&nbsp;i.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Réhabilitation de périmètres d\'irrigation pour soutenir les opportunités de moyens de subsistance</span></p><p><span style=\"color: black;\">&nbsp;&nbsp;&nbsp;&nbsp;ii.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Soutien aux organismes communautaires et aux chaines de valeur locales Accompagnement de la communauté en fonction de leur niveau de vulnérabilité face aux aléas climatiques, économiques et l’ampleur de l’insécurité alimentaire</span></p>',
    '2023-10-09 07:42:21',
    0,
    NULL,
    NULL,
    NULL
  ),
  (
    71,
    25,
    6,
    'Soutien à la mise en œuvre du projet et apprentissage des connaissances',
    '<p><span style=\"color: rgb(128, 96, 0);\">&nbsp;&nbsp;&nbsp;&nbsp;i.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mise en œuvre du projet et plateforme de connaissances géospatiales</span></p><p><span style=\"color: rgb(128, 96, 0);\">&nbsp;&nbsp;&nbsp;&nbsp;ii.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Études et analyses préparatoires pour la série de projets 2</span></p>',
    '2023-10-09 07:47:33',
    0,
    NULL,
    NULL,
    NULL
  ),
  (
    72,
    6,
    6,
    'Intervention d’urgence conditionnelle (CIUC)',
    '<p><strong style=\"color: rgb(47, 84, 150);\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><span style=\"color: black;\">Fourniture d’assistance immédiate si nécessaire en réponse à une crise ou une urgence admissible et éligible qui provoque une catastrophe majeure (Voir suite sur Le dépliant PDF)&nbsp;</span></p>',
    '2023-10-09 07:48:07',
    0,
    NULL,
    NULL,
    NULL
  ),
  (
    73,
    26,
    6,
    'Intervention d’urgence conditionnelle (CIUC)',
    '<p>i.  Fourniture d’assistance immédiate si nécessaire en réponse à une crise ou une urgence admissible et éligible qui provoque une catastrophe majeure.</p>',
    '2023-10-09 09:42:48',
    0,
    NULL,
    NULL,
    NULL
  ),
  (
    74,
    1,
    1,
    'teste',
    '<p>dsf ads fasd fasd fa </p>',
    '2023-10-08 00:00:00',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    75,
    2,
    1,
    'asdfasdf dfd f',
    '<p>asdfasd ads</p>',
    '2023-10-09 00:00:00',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    76,
    1,
    1,
    'Passation du  Gouverneur de la région ANOSY',
    '<p class=\"ql-align-justify\"><strong>Le projet Mionjo souhaite la bienvenue à Madame le Gouverneur et remercie l’ancien gouverneur pour le travail qu’il a fourni jusqu’ici</strong></p><p class=\"ql-align-justify\">Nommée par le décret lors du conseil des Ministres du 08 septembre 2023, Madame Voahary RAKOTOVELOMANTSOA accède à la tête du gouvernorat de la Région Anosy. </p><p class=\"ql-align-justify\">Source&nbsp;: Centre Régional d’Observation et de la Communication de la Région Anosy</p><p class=\"ql-align-justify\"><br></p>',
    '2023-08-09 00:00:00',
    0,
    NULL,
    NULL,
    NULL
  ),
  (
    77,
    1,
    1,
    'Renforcement de la gestion des plaintes à Ambosary Sud : un succès partagé',
    '<p class=\"ql-align-justify\">Le 31 août 2023, Amboasary Sud a accueilli un atelier de formation du Projet Mionjo, réunissant les représentants des 18 communes du District Amboasary.</p><p class=\"ql-align-justify\">Cet atelier a eu pour objectif de renforcer l’engagement envers l’amélioration de la gestion des plaintes et la promotion de solutions locales. </p><p class=\"ql-align-justify\">Source&nbsp;: Centre Régional d’Observation et de la Communication de la Région Anosy</p><p><br></p>',
    '2023-08-31 00:00:00',
    0,
    NULL,
    NULL,
    NULL
  ),
  (
    78,
    1,
    1,
    'Distribution de volailles',
    '<p class=\"ql-align-justify\">Promouvoir la Sécurité Alimentaire et l’Elevage Responsable&nbsp;: Le Projet Mionjo en Action.</p><p class=\"ql-align-justify\">Dans le cadre du Projet Mionjo au Sdu de Madagascar, une distribution de 500 têtes de volailles et 2.500 kg de provende a eu lieu les 21 et 22 août derniers dans plusieurs communes du District d’Ambovombe.</p><p class=\"ql-align-justify\">Cette action menée par la CIUC (Composante d’Intervention d’Urgence Conditionnelle), sous tutelle du Ministère de l’Agriculture et de l’Elevage, du Ministère de l’Intérieur et de la Décentralisation a eu un impact positif sur les communautés locales.</p><p class=\"ql-align-justify\">Chaque foyer bénéficiaire a reçu un ensemble comprenant 5 têtes de volailles et 25 kg de provende, favorisant ainsi la sécurité alimentaire et les pratiques d’élevage responsables.</p><p class=\"ql-align-justify\">Le Projet Mionjo, soutenu par la Banque Mondiale vise à renforcer les moyens de subsistance résilients dans la région. Il s’inscrit dans une démarche plus large visant à promouvoir la sécurité alimentaire, des pratiques agricoles durables, et le développement communautaire.</p><p class=\"ql-align-justify\">Source&nbsp;: FAO Representation – Madagascar – Comores Maurices Seychelles</p><p><br></p>',
    '2023-09-27 00:00:00',
    0,
    NULL,
    NULL,
    NULL
  ),
  (
    79,
    2,
    1,
    'Atelier de coordination des Agences d’exécution ou AGEX du Projet Mionjo dans les locaux du Carlton Anosy',
    '<p class=\"ql-align-justify\"> Le projet MIONJO, d’ordre gouvernemental, sous la tutelle de l’Etat à travers le Ministère de l’intérieur et de la décentralisation, en partenariat également avec le Ministère de l’agriculture et de l’élevage à travers à travers la FAO, PAM et CIP; avec le Ministère de la pêche et de l’économie bleue&nbsp;à travers la FAO et PAM; avec le Ministère de l’eau, de l’assainissement et de l’hygiène à travers l’UNICEF&nbsp;; et du Ministère de l’environnement et du développement durable à travers la fondation TANY MEVA et CRS, a impliqué la tenue d’une session de coordination durant la journée entière du mardi 1<sup>er</sup> août 2023 au Carlton Anosy. </p><p class=\"ql-align-justify\">La tenue de cet événement a permis de rassembler les représentants des agences d’exécution dont la coopération revêt une fonction capitale dans la concrétisation de mesures visant à améliorer les conditions socio-économiques et à favoriser un développement durable à long terme dans les régions Atsimo Andrefana, Anôsy et Androy. </p><p class=\"ql-align-justify\">Ces organismes assument indubitablement un rôle capital dans la fourniture de moyens de subsistance et l’amélioration de la sécurité alimentaire dans les régions concernées. L’indispensabilité de la synergie entre les activités se trouve être un des éléments primordiaux discutés lors de cette rencontre. Ainsi, les AGEX sont attendus avec des objectifs bien définis dans le cadre du projet. Leur tâche consiste à contribuer de manière symbiotique à l’atteinte des indicateurs définis en favorisant une approche collaborative autant que possible. Ils doivent accorder une priorité incontestable à l’intérêt des populations visées, tout en respectant scrupuleusement les planifications locales et régionales établies.&nbsp;</p><p><br></p>',
    '2023-08-01 00:00:00',
    0,
    NULL,
    NULL,
    NULL
  ),
  (
    80,
    1,
    1,
    'Test en francais',
    '<p>contenu en fr</p>',
    '2023-10-12 00:00:00',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    81,
    1,
    1,
    'adasfas',
    '<p>dfadfddfdf</p>',
    '2023-10-10 00:00:00',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    82,
    1,
    1,
    'aaaaaaaaaaaaaaaa',
    '<p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>',
    '2023-10-10 00:00:00',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    83,
    1,
    1,
    'francais',
    '<p>francais</p>',
    '2023-10-10 00:00:00',
    10,
    NULL,
    'anglais',
    '<p>anglais</p>'
  ),
  (
    84,
    1,
    1,
    'Francais',
    '<p>Francais contenuuuu</p>',
    '2023-10-28 00:00:00',
    10,
    NULL,
    'anglais',
    '<p>anglais contenuuuu</p>'
  ),
  (
    85,
    27,
    7,
    'Documentation 3',
    '<p>Ceci est une documentation</p>',
    '2023-10-10 00:00:00',
    10,
    NULL,
    'Documentation 3',
    '<p>This is a documentation</p>'
  ),
  (
    86,
    27,
    7,
    'Doc 3',
    '<p>Ceci est une documentation 3</p>',
    '2023-10-10 00:00:00',
    10,
    NULL,
    'Doc 3',
    '<p>This is a documentation 3</p>'
  ),
  (
    87,
    27,
    7,
    'test',
    '',
    '2023-10-10 00:00:00',
    10,
    NULL,
    '',
    ''
  ),
  (
    88,
    27,
    7,
    'Test titre',
    '',
    '2023-10-10 00:00:00',
    10,
    NULL,
    '',
    ''
  ),
  (
    89,
    27,
    7,
    'Eo ary e',
    '',
    '2023-10-20 00:00:00',
    10,
    NULL,
    '',
    ''
  ),
  (
    90,
    27,
    7,
    'Test titre',
    '<p>sssssssssss</p>',
    '2023-10-10 00:00:00',
    10,
    NULL,
    '',
    ''
  ),
  (
    91,
    27,
    7,
    'Test titre',
    '<p>fffffffffffffffffffffffffff</p>',
    '2023-10-10 00:00:00',
    10,
    NULL,
    '',
    '<p>aaaaaaaaaaaaaaaaaaaaaaaaaa</p>'
  ),
  (
    92,
    27,
    7,
    ' bvbv',
    '<p>frfrfrf</p>',
    '2023-10-10 00:00:00',
    10,
    NULL,
    '',
    ''
  ),
  (
    93,
    27,
    7,
    'Doc3',
    '<p>Ceci est une documentation </p>',
    '2023-10-10 00:00:00',
    10,
    NULL,
    'Doc 3',
    '<p>This is a documentation</p>'
  ),
  (
    94,
    15,
    4,
    'Offre consultance 2',
    '<p>Ceci est une offre de consultance</p>',
    '2023-10-10 00:00:00',
    0,
    NULL,
    'Consulting 2',
    '<p>Consutance offer</p>'
  ),
  (
    95,
    16,
    4,
    'Offre de fourniture 2',
    '<p>Ceci est une offre de fournitures</p>',
    '2023-10-10 00:00:00',
    0,
    NULL,
    '',
    ''
  ),
  (
    96,
    17,
    4,
    'Offre de service 2',
    '<p>Ceci est une offre de services</p>',
    '2023-10-10 00:00:00',
    0,
    NULL,
    '',
    ''
  ),
  (
    97,
    18,
    4,
    'Offre de travaux',
    '<p>Ceci est une offre de travaux</p>',
    '2023-10-10 00:00:00',
    0,
    NULL,
    '',
    ''
  ),
  (
    98,
    1,
    1,
    'Interview du Gouverneur da la region ANOSY',
    '<p>Ceci est une interview avec le Gouverneur de la region ANOSY</p>',
    '2023-10-06 00:00:00',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    99,
    2,
    1,
    'Atelier de restitution avec MIONJO au Kube C Andraharo',
    '<p class=\"ql-align-justify\">L’atelier de restitution sur le Projet Mionjo s’est avéré être une étape cruciale dans la poursuite de la vision de développement durable pour le Sud de Madagascar. La présentation des AGEX, la construction de l’identité du Projet et la formulation de la stratégie à appliquer ont jeté les bases pour des actions concrètes qui auront un impact positif sur les communautés locales et l’environnement.</p><p class=\"ql-align-justify\">Le Projet Mionjo continue de tracer la voie vers un avenir meilleur pour les Régions ciblés.&nbsp;&nbsp;</p>',
    '2022-11-01 00:00:00',
    0,
    NULL,
    '',
    ''
  ),
  (
    100,
    27,
    7,
    'TOROLALANA FANDRAFETANA FEHEZAM-PITSIPIKA MIKASIKA NY FANADIOVANA SY NY FIDIOVANA',
    '',
    '2023-10-10 00:00:00',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    101,
    27,
    7,
    'Lalàna laharana faha 98-029 mitondra Fehezan-dalàna momba ny Rano',
    '',
    '2023-10-10 00:00:00',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    102,
    27,
    7,
    'TOROLALANA FANDRAFETANA FEHEZAM-PITSIPIKA MIKASIKA NY FANADIOVANA SY NY FIDIOVANA',
    '',
    '2023-10-10 00:00:00',
    0,
    NULL,
    '',
    ''
  ),
  (
    103,
    27,
    7,
    'Lalàna laharana faha 98-029 mitondra Fehezan-dalàna momba ny Rano',
    '',
    '2023-10-10 00:00:00',
    0,
    NULL,
    '',
    ''
  ),
  (
    104,
    15,
    4,
    'teste dqte',
    '',
    '2023-10-11 00:00:00',
    10,
    NULL,
    '',
    ''
  ),
  (
    105,
    15,
    4,
    'teste dqte 2',
    '',
    '2023-10-27 00:00:00',
    10,
    NULL,
    '',
    ''
  ),
  (
    106,
    15,
    4,
    'teete',
    '<p>asdasdfasfd</p>',
    '2023-10-11 00:00:00',
    10,
    '2023-10-11 00:00:00',
    'tetetet',
    '<p>asdfasdfa</p>'
  ),
  (
    107,
    28,
    8,
    'Test titre',
    '<p>afadsfas</p>',
    '2023-10-11 00:00:00',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    108,
    28,
    8,
    'sdsdsd',
    '<p>sdsdsd</p>',
    '2023-10-11 00:00:00',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    109,
    28,
    8,
    'Test titre',
    '<p>adfadsf</p>',
    '2023-10-11 00:00:00',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    110,
    1,
    1,
    'Interview du Gouverneur de la Région Androy, SOJA Lahimaharo',
    '<p>Monsieur le Gouverneur de la Région Androy, SOJA Lahimaharo : « Félicitations à nous tous, car cette foire a été un total SUCCES grace au soutien du projet Mionjo. »</p>',
    '2023-10-11 00:00:00',
    10,
    NULL,
    NULL,
    NULL
  ),
  (
    111,
    21,
    5,
    'Statistique total des plaintes dans la Région Androy',
    '',
    '2023-10-12 00:00:00',
    0,
    NULL,
    '',
    ''
  ),
  (
    112,
    21,
    5,
    'Statistique total des plaintes dans la Région Anôsy',
    '',
    '2023-10-12 00:00:00',
    0,
    NULL,
    '',
    ''
  ),
  (
    113,
    21,
    5,
    'Statistique total des plaintes dans la Région Atsimo Andrefana',
    '',
    '2023-10-12 00:00:00',
    0,
    NULL,
    '',
    ''
  ),
  (
    114,
    21,
    5,
    'Statistique total des plaintes',
    '',
    '2023-10-13 06:00:00',
    0,
    NULL,
    '',
    ''
  ),
  (
    115,
    1,
    1,
    'test',
    '<p>tesesets</p>',
    '2023-10-14 13:17:00',
    10,
    NULL,
    '',
    ''
  ),
  (
    116,
    28,
    8,
    'adsfasdfas',
    '<p>ssdfadsfads</p>',
    '2023-10-14 13:21:00',
    10,
    NULL,
    '',
    ''
  ),
  (
    117,
    1,
    1,
    'Interview du Gouverneur de la Région Androy, SOJA Lahimaharo',
    '<p>Monsieur le Gouverneur de la Région Androy, SOJA Lahimaharo : « Félicitations à nous tous, car cette foire a été un total SUCCES grace au soutien du projet Mionjo. »</p>',
    '2023-10-11 13:26:00',
    50,
    NULL,
    '',
    ''
  ),
  (
    118,
    28,
    8,
    'dafasdfadfasdf',
    '<p>adsfasdfa</p>',
    '2023-10-13 13:28:00',
    10,
    NULL,
    '',
    ''
  ),
  (
    119,
    1,
    1,
    'asdfasdf',
    '<p>adsfasdfaaaaaaaaaaaaaaaaaaa</p>',
    '2023-10-13 13:28:00',
    10,
    NULL,
    '',
    ''
  ),
  (
    120,
    28,
    8,
    'adsfsdfasfd',
    '<p>asdfasdfasdf</p>',
    '2023-10-13 13:31:00',
    10,
    NULL,
    '',
    ''
  ),
  (
    121,
    28,
    8,
    'dddddddddddddddddddddd',
    '<p>dddddddddddddddddddddddddddd</p>',
    '2023-10-13 13:32:00',
    10,
    NULL,
    '',
    ''
  );

-- --------------------------------------------------------
--
-- Table structure for table `ideerecus`
--
CREATE TABLE `ideerecus` (
  `id` int NOT NULL,
  `contenu` longtext NOT NULL,
  `datecreation` datetime NOT NULL DEFAULT (now()),
  `descriptif` mediumtext
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

-- --------------------------------------------------------
--
-- Table structure for table `photomois`
--
CREATE TABLE `photomois` (
  `id` int NOT NULL,
  `nomphoto` varchar(256) DEFAULT NULL,
  `datecreation` datetime NOT NULL DEFAULT (now())
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

--
-- Dumping data for table `photomois`
--
INSERT INTO
  `photomois` (`id`, `nomphoto`, `datecreation`)
VALUES
  (1, 'haingo.png', '2023-10-06 07:50:59'),
  (2, 'bannerimmobilier.jpg', '2023-10-06 08:09:02'),
  (3, 'volaille.webp', '2023-10-06 13:58:52'),
  (
    4,
    'huguesperspectiveam25.jpg',
    '2023-10-09 05:57:35'
  ),
  (5, 'volaille.webp', '2023-10-09 07:46:07'),
  (
    6,
    'whatsappimage20231010at11.13.36.jpeg',
    '2023-10-11 10:26:00'
  ),
  (
    7,
    'whatsappimage20231010at11.13.36.jpeg',
    '2023-10-11 10:26:00'
  );

-- --------------------------------------------------------
--
-- Table structure for table `photos`
--
CREATE TABLE `photos` (
  `id` int NOT NULL,
  `nomphoto` varchar(150) NOT NULL,
  `datecreation` datetime NOT NULL DEFAULT (now()),
  `idgenerale` int DEFAULT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

--
-- Dumping data for table `photos`
--
INSERT INTO
  `photos` (`id`, `nomphoto`, `datecreation`, `idgenerale`)
VALUES
  (1, 'bannire01.jpg', '2023-09-27 14:27:52', 4),
  (2, 'fia.jpg', '2023-09-27 14:33:17', 5),
  (3, 'banque.jpeg', '2023-09-27 14:37:08', 6),
  (4, '285a9180copie.jpg', '2023-09-27 23:38:28', 0),
  (
    5,
    '285a9187copie1.jpg',
    '2023-09-27 23:38:28',
    0
  ),
  (6, '285a9187copie.jpg', '2023-09-27 23:38:28', 0),
  (7, '285a9193copie.jpg', '2023-09-27 23:38:28', 0),
  (
    8,
    '285a9200copie1.jpg',
    '2023-09-27 23:38:28',
    0
  ),
  (9, '285a9203copie.jpg', '2023-09-27 23:38:28', 0),
  (
    10,
    '285a9212copie.jpg',
    '2023-09-27 23:38:28',
    0
  ),
  (
    11,
    '285a9223copie.jpg',
    '2023-09-27 23:38:28',
    0
  ),
  (
    12,
    '285a9231copie.jpg',
    '2023-09-27 23:38:28',
    0
  ),
  (
    13,
    '285a9241copie.jpg',
    '2023-09-27 23:38:28',
    0
  ),
  (
    14,
    '285a9245copie.jpg',
    '2023-09-27 23:38:28',
    0
  ),
  (
    15,
    '285a9249copie.jpg',
    '2023-09-27 23:38:28',
    0
  ),
  (
    16,
    '285a9349copie.jpg',
    '2023-09-27 23:38:28',
    0
  ),
  (17, 'retourwave.png', '2023-09-27 23:57:13', 12),
  (18, 'sequelize.png', '2023-09-27 23:57:13', 12),
  (19, 'signparaph2.jpg', '2023-09-27 23:57:13', 12),
  (
    20,
    '285a9508copie.jpg',
    '2023-09-28 00:09:58',
    13
  ),
  (
    21,
    '285a9510copie.jpg',
    '2023-09-28 00:09:58',
    13
  ),
  (
    22,
    '285a9520copie.jpg',
    '2023-09-28 00:09:58',
    13
  ),
  (23, 'homepage.jpg', '2023-09-28 00:46:15', 18),
  (24, 'nestjs.png', '2023-09-28 00:46:15', 18),
  (
    25,
    '1681400308417.jpeg',
    '2023-09-28 00:51:35',
    19
  ),
  (26, 'banque.jpeg', '2023-09-28 00:58:40', 20),
  (
    27,
    'tsiscursorpointer.png',
    '2023-09-28 00:59:52',
    22
  ),
  (
    28,
    'tsiscursorpointer.png',
    '2023-09-28 00:59:59',
    23
  ),
  (29, 'fia.jpg', '2023-09-28 01:00:56', 24),
  (30, 'gouverneur.jpeg', '2023-09-28 06:27:25', 0),
  (31, 'gouverneur.jpeg', '2023-09-28 06:33:54', 0),
  (32, 'gouverneur.jpeg', '2023-09-28 06:37:08', 29),
  (33, 'evement.jpg', '2023-09-28 06:49:32', 30),
  (34, 'fia.jpg', '2023-09-28 06:49:32', 30),
  (35, 'voatse.jpg', '2023-09-28 06:56:18', 0),
  (36, 'voatse.jpg', '2023-09-28 07:01:04', 31),
  (37, 'voatse.jpg', '2023-09-28 07:05:26', 32),
  (
    38,
    'zoneintervention.jpg',
    '2023-09-28 09:28:18',
    36
  ),
  (39, 'gouverneur.jpeg', '2023-09-28 10:18:22', 37),
  (40, 'realloca1.jpg', '2023-09-28 12:07:37', 38),
  (41, 'realloca2.jpg', '2023-09-28 12:07:37', 38),
  (42, 'c1.jpg', '2023-09-28 12:26:38', 39),
  (43, 'c2.jpg', '2023-09-28 12:27:46', 40),
  (44, 'c3.jpg', '2023-09-28 12:28:16', 41),
  (45, 'c4.jpg', '2023-09-28 12:28:39', 42),
  (46, 'volaille.webp', '2023-10-03 02:50:17', 2),
  (47, 'volaille.webp', '2023-10-03 03:44:01', 43),
  (48, 'volaille.webp', '2023-10-03 03:46:46', 43),
  (
    49,
    '3340715502961840687458108832319207821042550n.jpg',
    '2023-10-04 08:54:12',
    45
  ),
  (
    50,
    '3340715502961840687458108832319207821042550n.jpg',
    '2023-10-04 08:54:39',
    46
  ),
  (
    51,
    '3340715502961840687458108832319207821042550n.jpg',
    '2023-10-06 05:36:07',
    0
  ),
  (52, 'cover.jpg', '2023-10-06 11:56:16', 48),
  (
    53,
    'huguesperspectiveam241.jpg',
    '2023-10-06 11:59:37',
    46
  ),
  (
    54,
    'huguesperspectiveam25.jpg',
    '2023-10-06 12:00:23',
    49
  ),
  (55, 'couvhugues.jpg', '2023-10-06 12:05:10', 50),
  (56, 'couvvert.jpg', '2023-10-06 12:31:50', 50),
  (57, 'listebillet.jpg', '2023-10-06 13:58:34', 50),
  (58, 'staty.jpg', '2023-10-06 14:09:40', 46),
  (59, 'volaille.webp', '2023-10-06 14:09:40', 46),
  (60, 'staty.jpg', '2023-10-06 16:11:33', 46),
  (61, 'volaille.webp', '2023-10-06 16:13:16', 51),
  (62, 'staty.jpg', '2023-10-09 04:25:27', 46),
  (63, 'staty.jpg', '2023-10-09 04:26:38', 0),
  (64, 'volaille.webp', '2023-10-09 04:26:38', 0),
  (65, 'listebillet.jpg', '2023-10-09 04:37:02', 28),
  (66, 'sonia.jpg', '2023-10-09 04:46:01', 52),
  (67, 'sonia.jpg', '2023-10-09 04:47:59', 53),
  (68, 'listebillet.jpg', '2023-10-09 04:49:05', 54),
  (69, 'volaille.webp', '2023-10-09 04:49:22', 54),
  (70, 'listebillet.jpg', '2023-10-09 04:49:50', 0),
  (71, 'volaille.webp', '2023-10-09 06:01:06', 55),
  (72, 'listebillet.jpg', '2023-10-09 06:04:31', 55),
  (
    73,
    'huguesperspectiveam25.jpg',
    '2023-10-09 05:57:34',
    0
  ),
  (
    74,
    'bannerimmobilier.jpg',
    '2023-10-09 05:59:08',
    56
  ),
  (
    75,
    'bannerimmobilier.jpg',
    '2023-10-09 05:59:08',
    57
  ),
  (
    76,
    'huguesperspectiveam25.jpg',
    '2023-10-09 05:59:49',
    58
  ),
  (
    77,
    'huguesperspectiveam25.jpg',
    '2023-10-09 05:59:49',
    59
  ),
  (78, 't5interieur.jpg', '2023-10-09 06:01:35', 0),
  (79, 't5interieur.jpg', '2023-10-09 06:03:48', 0),
  (80, 'faadea.jpg', '2023-10-09 06:05:48', 60),
  (
    81,
    'perspinta309.jpg',
    '2023-10-09 06:07:35',
    61
  ),
  (82, 'graphe.jpg', '2023-10-09 07:29:20', 62),
  (83, 'graphe.jpg', '2023-10-09 07:29:20', 63),
  (84, 'graphe.jpg', '2023-10-09 07:32:10', 64),
  (85, 'graphe.jpg', '2023-10-09 07:32:10', 65),
  (86, 'graphe.jpg', '2023-10-09 07:38:14', 66),
  (87, 'volaille.webp', '2023-10-09 07:46:07', 0),
  (88, 'logomionjo.svg', '2023-10-09 07:04:20', 67),
  (89, 'logomionjo.svg', '2023-10-09 10:07:19', 33),
  (90, 'graphe.jpg', '2023-10-09 10:23:12', 74),
  (91, 'volaille.webp', '2023-10-09 10:25:31', 75),
  (92, 'img1965.jpg', '2023-10-10 01:58:22', 79),
  (93, 'img1970.jpg', '2023-10-10 02:13:39', 80),
  (94, 'actualits.docx', '2023-10-10 03:12:11', 85),
  (95, 'actualits.docx', '2023-10-10 03:18:21', 86),
  (96, 'actualits.docx', '2023-10-10 03:20:33', 86),
  (97, 'actualits.docx', '2023-10-10 03:24:54', 86),
  (98, 'actualits.docx', '2023-10-10 03:25:34', 87),
  (99, 'actualits.docx', '2023-10-10 03:54:59', 89),
  (100, 'actualits.docx', '2023-10-10 03:57:10', 90),
  (101, 'actualits.docx', '2023-10-10 04:22:47', 91),
  (
    102,
    'gouverneur.jpeg',
    '2023-10-10 06:06:08',
    98
  ),
  (103, 'graphe.jpg', '2023-10-10 06:13:56', 0),
  (104, 'listebillet.jpg', '2023-10-10 06:13:56', 0),
  (105, 'sonia.jpg', '2023-10-10 06:13:56', 0),
  (106, 'staty.jpg', '2023-10-10 06:13:56', 0),
  (107, 'volaille.webp', '2023-10-10 06:13:56', 0),
  (108, 'graphe.jpg', '2023-10-10 06:14:23', 0),
  (109, 'listebillet.jpg', '2023-10-10 06:14:23', 0),
  (110, 'volaille.webp', '2023-10-10 06:14:23', 0),
  (
    111,
    'photoevenementsuite.jpg',
    '2023-10-10 08:33:15',
    99
  ),
  (
    112,
    'codedeleauversionmalagasy.pdf',
    '2023-10-10 09:22:05',
    100
  ),
  (
    113,
    'codedeleauversionmalagasy2.pdf',
    '2023-10-10 09:22:46',
    101
  ),
  (
    114,
    'photoevenementsuite.jpg',
    '2023-10-10 13:36:11',
    99
  ),
  (
    115,
    '285a9589copie.jpg',
    '2023-10-10 13:51:46',
    0
  ),
  (116, 'aim.jpg', '2023-10-10 13:51:46', 0),
  (117, 'cip.jpg', '2023-10-10 13:51:46', 0),
  (118, 'fao.jpg', '2023-10-10 13:51:46', 0),
  (119, 'img1945.jpg', '2023-10-10 13:51:46', 0),
  (120, 'img1950.jpg', '2023-10-10 13:51:46', 0),
  (121, 'img1963.jpg', '2023-10-10 13:51:46', 0),
  (
    125,
    'whatsappimage20231010at11.13.371.jpeg',
    '2023-10-10 13:54:47',
    0
  ),
  (
    126,
    'whatsappimage20231010at11.13.37.jpeg',
    '2023-10-10 13:54:47',
    0
  ),
  (
    127,
    'whatsappimage20231010at11.13.51.jpeg',
    '2023-10-10 13:54:47',
    0
  ),
  (
    128,
    'whatsappimage20231010at11.13.521.jpeg',
    '2023-10-10 13:54:47',
    0
  ),
  (
    129,
    'whatsappimage20231010at11.13.52.jpeg',
    '2023-10-10 13:54:47',
    0
  ),
  (
    130,
    'whatsappimage20231010at11.13.53.jpeg',
    '2023-10-10 13:54:47',
    0
  ),
  (
    131,
    'whatsappimage20231010at11.13.36.jpeg',
    '2023-10-11 10:25:58',
    0
  ),
  (
    137,
    'whatsappimage20231012at10.57.03.jpeg',
    '2023-10-12 10:35:18',
    0
  ),
  (
    138,
    'whatsappimage20231012at10.57.02.jpeg',
    '2023-10-12 10:35:18',
    0
  ),
  (
    139,
    'whatsappimage20231012at10.57.00.jpeg',
    '2023-10-12 10:35:18',
    0
  ),
  (
    140,
    'whatsappimage20231012at10.56.53.jpeg',
    '2023-10-12 10:35:18',
    0
  ),
  (
    141,
    'whatsappimage20231012at10.56.49.jpeg',
    '2023-10-12 10:35:18',
    0
  ),
  (
    142,
    'whatsappimage20231012at10.56.46.jpeg',
    '2023-10-12 10:35:18',
    0
  ),
  (
    143,
    'whatsappimage20231012at10.56.361.jpeg',
    '2023-10-12 10:35:18',
    0
  ),
  (
    144,
    'whatsappimage20231012at10.56.36.jpeg',
    '2023-10-12 10:35:18',
    0
  ),
  (
    145,
    'whatsappimage20231012at10.56.27.jpeg',
    '2023-10-12 10:35:18',
    0
  ),
  (
    146,
    'whatsappimage20231012at10.56.25.jpeg',
    '2023-10-12 10:35:18',
    0
  ),
  (
    147,
    'whatsappimage20231012at10.56.24.jpeg',
    '2023-10-12 10:35:18',
    0
  ),
  (
    148,
    'whatsappimage20231012at10.56.20.jpeg',
    '2023-10-12 10:35:18',
    0
  ),
  (
    149,
    'whatsappimage20231012at10.56.18.jpeg',
    '2023-10-12 10:35:18',
    0
  ),
  (
    150,
    'whatsappimage20231012at10.56.15.jpeg',
    '2023-10-12 10:35:18',
    0
  ),
  (
    151,
    'whatsappimage20231012at10.56.07.jpeg',
    '2023-10-12 10:35:18',
    0
  ),
  (
    152,
    'whatsappimage20231012at10.56.031.jpeg',
    '2023-10-12 10:35:18',
    0
  ),
  (
    153,
    'whatsappimage20231012at10.56.03.jpeg',
    '2023-10-12 10:35:18',
    0
  ),
  (
    154,
    'whatsappimage20231012at10.55.57.jpeg',
    '2023-10-12 10:35:18',
    0
  ),
  (
    155,
    'whatsappimage20231012at10.55.52.jpeg',
    '2023-10-12 10:35:18',
    0
  ),
  (
    156,
    'whatsappimage20231012at10.55.47.jpeg',
    '2023-10-12 10:35:18',
    0
  ),
  (
    157,
    'whatsappimage20231012at10.55.43.jpeg',
    '2023-10-12 10:35:18',
    0
  ),
  (
    158,
    'whatsappimage20231012at10.55.38.jpeg',
    '2023-10-12 10:35:18',
    0
  ),
  (
    159,
    'whatsappimage20231012at10.55.34.jpeg',
    '2023-10-12 10:35:18',
    0
  ),
  (
    160,
    'whatsappimage20231012at10.55.32.jpeg',
    '2023-10-12 10:35:18',
    0
  ),
  (
    161,
    'whatsappimage20231012at10.55.21.jpeg',
    '2023-10-12 10:35:18',
    0
  ),
  (
    162,
    'whatsappimage20231012at10.55.20.jpeg',
    '2023-10-12 10:35:18',
    0
  ),
  (
    163,
    'whatsappimage20231012at10.55.19.jpeg',
    '2023-10-12 10:35:18',
    0
  ),
  (
    164,
    'whatsappimage20231012at10.55.10.jpeg',
    '2023-10-12 10:35:18',
    0
  ),
  (
    165,
    'whatsappimage20231012at10.55.09.jpeg',
    '2023-10-12 10:35:18',
    0
  ),
  (
    166,
    'whatsappimage20231012at10.55.08.jpeg',
    '2023-10-12 10:35:18',
    0
  ),
  (
    171,
    'whatsappimage20231012at09.16.11.jpeg',
    '2023-10-13 09:39:24',
    110
  ),
  (
    172,
    'statandroy.jpg',
    '2023-10-13 11:56:50',
    111
  ),
  (173, 'statanosy.jpg', '2023-10-13 11:57:19', 112),
  (
    174,
    'statatsimoandrefana.jpg',
    '2023-10-13 11:57:45',
    113
  ),
  (
    175,
    'statplainte.jpg',
    '2023-10-13 11:58:23',
    114
  ),
  (
    176,
    'whatsappimage20231012at09.16.11.jpeg',
    '2023-10-13 13:26:43',
    117
  );

-- --------------------------------------------------------
--
-- Table structure for table `roles`
--
CREATE TABLE `roles` (
  `id` int NOT NULL,
  `nomrole` varchar(150) NOT NULL,
  `datecreation` datetime NOT NULL DEFAULT (now())
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

--
-- Dumping data for table `roles`
--
INSERT INTO
  `roles` (`id`, `nomrole`, `datecreation`)
VALUES
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
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

--
-- Dumping data for table `rubriques`
--
INSERT INTO
  `rubriques` (`id`, `nomrubrique`, `datecreation`, `resume`)
VALUES
  (1, 'Actualité', '2023-09-27 13:57:25', NULL),
  (2, 'Evenements', '2023-09-27 13:57:25', NULL),
  (3, 'Liens utiles', '2023-09-27 13:57:25', NULL),
  (
    4,
    'Photos et videos',
    '2023-09-27 13:57:25',
    NULL
  ),
  (5, 'Nous contacter', '2023-09-27 13:57:25', NULL),
  (6, 'Description', '2023-09-27 13:57:25', NULL),
  (
    7,
    'Objectifs et axes d\'intervetions',
    '2023-09-27 13:57:25',
    NULL
  ),
  (8, 'Composantes', '2023-09-27 13:57:25', NULL),
  (
    9,
    'Zones d\'interventions',
    '2023-09-27 13:57:25',
    NULL
  ),
  (
    10,
    'Contexte du sud',
    '2023-09-27 13:57:25',
    NULL
  ),
  (
    11,
    'Organisation institutionnelles',
    '2023-09-27 13:57:25',
    NULL
  ),
  (
    12,
    'Realisation par localite',
    '2023-09-27 13:57:25',
    NULL
  ),
  (
    13,
    'Realisation par composante',
    '2023-09-27 13:57:25',
    NULL
  ),
  (14, 'SISE', '2023-09-27 13:57:25', NULL),
  (15, 'Consultants', '2023-09-27 13:57:25', NULL),
  (16, 'Fournitures', '2023-09-27 13:57:25', NULL),
  (17, 'Services', '2023-09-27 13:57:25', NULL),
  (18, 'Travaux', '2023-09-27 13:57:25', NULL),
  (
    19,
    'Idees de contributions pour le sud',
    '2023-09-27 13:57:25',
    NULL
  ),
  (
    20,
    'Deposer une plainte',
    '2023-09-27 13:57:25',
    NULL
  ),
  (
    21,
    'Statistique de gestion des plaintes',
    '2023-09-27 13:57:25',
    NULL
  ),
  (
    22,
    'Composante1',
    '2023-09-27 13:57:25',
    'Resume composante 1'
  ),
  (
    23,
    'Composante2',
    '2023-09-27 13:57:25',
    'Resume composante 2'
  ),
  (
    24,
    'Composante3',
    '2023-09-27 13:57:25',
    'Resume composante 3'
  ),
  (
    25,
    'Composante4',
    '2023-09-27 13:57:25',
    'Resume composante 4'
  ),
  (
    26,
    'Composante5',
    '2023-09-27 13:57:25',
    'Resume composante 5'
  ),
  (27, 'Documentation', '2023-09-27 13:57:26', NULL),
  (
    28,
    'Interview du mois',
    '2023-10-05 07:19:39',
    NULL
  );

-- --------------------------------------------------------
--
-- Stand-in structure for view `userc`
-- (See below for the actual view)
--
CREATE TABLE `userc` (
  `datecreation` datetime,
  `email` varchar(150),
  `etat` int,
  `id` int,
  `idrole` int,
  `mdp` varchar(150),
  `nomrole` varchar(150)
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
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

--
-- Dumping data for table `users`
--
INSERT INTO
  `users` (
    `id`,
    `email`,
    `mdp`,
    `datecreation`,
    `idrole`,
    `etat`
  )
VALUES
  (
    1,
    'hathawayroot@gmail.com',
    '$2b$10$ESYxTyywjShr1hPVQaq8HeosRqVWecFFqfYQ8TpoPRsAjUTKDMoUe',
    '2023-09-20 04:07:17',
    1,
    0
  ),
  (
    2,
    'haingonirina73@gmail.com',
    '$2b$10$ESYxTyywjShr1hPVQaq8HeosRqVWecFFqfYQ8TpoPRsAjUTKDMoUe',
    '2023-09-20 04:08:22',
    1,
    0
  );

-- --------------------------------------------------------
--
-- Table structure for table `videos`
--
CREATE TABLE `videos` (
  `id` int NOT NULL,
  `nomvideo` varchar(150) NOT NULL,
  `datecreation` datetime NOT NULL DEFAULT (now()),
  `idgenerale` int DEFAULT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

--
-- Dumping data for table `videos`
--
INSERT INTO
  `videos` (`id`, `nomvideo`, `datecreation`, `idgenerale`)
VALUES
  (
    1,
    'vidoprsentationmionjo.mp4',
    '2023-10-10 13:51:47',
    0
  );

-- --------------------------------------------------------
--
-- Structure for view `generalec`
--
DROP TABLE IF EXISTS `generalec`;

CREATE ALGORITHM = UNDEFINED DEFINER = `u0cyg2xwdkkj0buh` @`%` SQL SECURITY DEFINER VIEW `generalec` AS
SELECT
  `g`.`id` AS `id`,
  `g`.`idrubrique` AS `idrubrique`,
  `g`.`idcategorie` AS `idcategorie`,
  `g`.`titre` AS `titre`,
  `g`.`titreen` AS `titreen`,
  `g`.`contenu` AS `contenu`,
  `g`.`contenuen` AS `contenuen`,
  `g`.`datelimit` AS `datelimit`,
  `g`.`datecreation` AS `datecreation`,
  `g`.`etat` AS `etat`,
  `r`.`nomrubrique` AS `nomrubrique`,
  `r`.`datecreation` AS `datecreationrubrique`,
  `c`.`nomcategorie` AS `nomcategorie`,
  `c`.`datecreation` AS `datecreationcategorie`
FROM
  (
    (
      `generales` `g`
      left join `rubriques` `r` on((`r`.`id` = `g`.`idrubrique`))
    )
    left join `categories` `c` on((`c`.`id` = `g`.`idcategorie`))
  );

-- --------------------------------------------------------
--
-- Structure for view `userc`
--
DROP TABLE IF EXISTS `userc`;

CREATE ALGORITHM = UNDEFINED DEFINER = `u0cyg2xwdkkj0buh` @`%` SQL SECURITY DEFINER VIEW `userc` AS
SELECT
  `u`.`id` AS `id`,
  `u`.`email` AS `email`,
  `u`.`mdp` AS `mdp`,
  `u`.`datecreation` AS `datecreation`,
  `u`.`idrole` AS `idrole`,
  `u`.`etat` AS `etat`,
  `r`.`nomrole` AS `nomrole`
FROM
  (
    `users` `u`
    join `roles` `r` on((`r`.`id` = `u`.`idrole`))
  );

--
-- Indexes for dumped tables
--
--
-- Indexes for table `bannieres`
--
ALTER TABLE
  `bannieres`
ADD
  PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE
  `categories`
ADD
  PRIMARY KEY (`id`);

--
-- Indexes for table `documents`
--
ALTER TABLE
  `documents`
ADD
  PRIMARY KEY (`id`),
ADD
  KEY `idx_documents` (`idgenerale`);

--
-- Indexes for table `generales`
--
ALTER TABLE
  `generales`
ADD
  PRIMARY KEY (`id`),
ADD
  KEY `idx_generales` (`titre`, `id`),
ADD
  KEY `fk_generales_rubriques` (`idrubrique`),
ADD
  KEY `fk_generales_categories` (`idcategorie`);

--
-- Indexes for table `ideerecus`
--
ALTER TABLE
  `ideerecus`
ADD
  PRIMARY KEY (`id`);

--
-- Indexes for table `photomois`
--
ALTER TABLE
  `photomois`
ADD
  PRIMARY KEY (`id`);

--
-- Indexes for table `photos`
--
ALTER TABLE
  `photos`
ADD
  PRIMARY KEY (`id`),
ADD
  KEY `idx_photos` (`idgenerale`);

--
-- Indexes for table `roles`
--
ALTER TABLE
  `roles`
ADD
  PRIMARY KEY (`id`);

--
-- Indexes for table `rubriques`
--
ALTER TABLE
  `rubriques`
ADD
  PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE
  `users`
ADD
  PRIMARY KEY (`id`),
ADD
  UNIQUE KEY `unq_users` (`email`),
ADD
  KEY `fk_users_roles` (`idrole`);

--
-- Indexes for table `videos`
--
ALTER TABLE
  `videos`
ADD
  PRIMARY KEY (`id`),
ADD
  KEY `idx_videos` (`idgenerale`);

--
-- AUTO_INCREMENT for dumped tables
--
--
-- AUTO_INCREMENT for table `bannieres`
--
ALTER TABLE
  `bannieres`
MODIFY
  `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE
  `categories`
MODIFY
  `id` int NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 9;

--
-- AUTO_INCREMENT for table `documents`
--
ALTER TABLE
  `documents`
MODIFY
  `id` int NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 20;

--
-- AUTO_INCREMENT for table `generales`
--
ALTER TABLE
  `generales`
MODIFY
  `id` int NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 122;

--
-- AUTO_INCREMENT for table `ideerecus`
--
ALTER TABLE
  `ideerecus`
MODIFY
  `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `photomois`
--
ALTER TABLE
  `photomois`
MODIFY
  `id` int NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 10;

--
-- AUTO_INCREMENT for table `photos`
--
ALTER TABLE
  `photos`
MODIFY
  `id` int NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 177;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE
  `roles`
MODIFY
  `id` int NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 3;

--
-- AUTO_INCREMENT for table `rubriques`
--
ALTER TABLE
  `rubriques`
MODIFY
  `id` int NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 29;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE
  `users`
MODIFY
  `id` int NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 4;

--
-- AUTO_INCREMENT for table `videos`
--
ALTER TABLE
  `videos`
MODIFY
  `id` int NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 2;

--
-- Constraints for dumped tables
--
--
-- Constraints for table `documents`
--
ALTER TABLE
  `documents`
ADD
  CONSTRAINT `fk_documents_generales` FOREIGN KEY (`idgenerale`) REFERENCES `generales` (`id`);

--
-- Constraints for table `generales`
--
ALTER TABLE
  `generales`
ADD
  CONSTRAINT `fk_generales_categories` FOREIGN KEY (`idcategorie`) REFERENCES `categories` (`id`),
ADD
  CONSTRAINT `fk_generales_rubriques` FOREIGN KEY (`idrubrique`) REFERENCES `rubriques` (`id`);

--
-- Constraints for table `photos`
--
ALTER TABLE
  `photos`
ADD
  CONSTRAINT `fk_photos_generales` FOREIGN KEY (`idgenerale`) REFERENCES `generales` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE
  `users`
ADD
  CONSTRAINT `fk_users_roles` FOREIGN KEY (`idrole`) REFERENCES `roles` (`id`);

--
-- Constraints for table `videos`
--
ALTER TABLE
  `videos`
ADD
  CONSTRAINT `fk_videos_generales` FOREIGN KEY (`idgenerale`) REFERENCES `generales` (`id`);

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;