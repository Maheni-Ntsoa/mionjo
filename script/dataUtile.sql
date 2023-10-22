INSERT INTO
    categories (nomcategorie, datecreation)
VALUES
    ('Accueil', CURRENT_TIMESTAMP);

INSERT INTO
    categories (nomcategorie, datecreation)
VALUES
    ('A propos', CURRENT_TIMESTAMP);

INSERT INTO
    categories (nomcategorie, datecreation)
VALUES
    ('Activites', CURRENT_TIMESTAMP);

INSERT INTO
    categories (nomcategorie, datecreation)
VALUES
    ('Annonces', CURRENT_TIMESTAMP);

INSERT INTO
    categories (nomcategorie, datecreation)
VALUES
    ('Idee et plaintes', CURRENT_TIMESTAMP);

INSERT INTO
    categories (nomcategorie, datecreation)
VALUES
    ('Composantes', CURRENT_TIMESTAMP);

INSERT INTO
    categories (nomcategorie, datecreation)
VALUES
    ('Documentations', CURRENT_TIMESTAMP);

INSERT INTO
    ideerecus (contenu, datecreation, descriptif)
VALUES
    (
        'ceci est une idee pour le sud',
        '2023-09-26 05.45.52 AM',
        null
    );

INSERT INTO
    ideerecus (contenu, datecreation, descriptif)
VALUES
    (
        'ceci est une idee pour le sud',
        '2023-09-26 05.48.10 AM',
        null
    );

INSERT INTO
    ideerecus (contenu, datecreation, descriptif)
VALUES
    ('Voici le detail', '2023-09-27 02.37.01 AM', null);

INSERT INTO
    ideerecus (contenu, datecreation, descriptif)
VALUES
    ('detail', '2023-09-27 02.55.14 AM', null);

INSERT INTO
    ideerecus (contenu, datecreation, descriptif)
VALUES
    ('detail', '2023-09-27 02.59.48 AM', 'Desciptif');

INSERT INTO
    ideerecus (contenu, datecreation, descriptif)
VALUES
    (
        'asdfsadfsdfasfasfasda',
        '2023-09-27 03.04.56 AM',
        'dsfasdfasdfadfasd'
    );

INSERT INTO
    ideerecus (contenu, datecreation, descriptif)
VALUES
    (
        'Et voici le detail Et voici le detailEt voici le detailEt voici le detailEt voici le detailEt voici le detailEt voici le detailEt voici le detailEt voici le detailEt voici le detailEt voici le detailEt voici le detailEt voici le detailEt voici le detailEt voici le detail',
        '2023-09-27 03.34.41 AM',
        'Ceci est ma description pour l''idee'
    );

INSERT INTO
    ideerecus (contenu, datecreation, descriptif)
VALUES
    (
        'skd faksdf kjabs fabsdbkl',
        '2023-09-27 04.25.39 AM',
        'sdfsdfansdf'
    );

INSERT INTO
    roles (nomrole, datecreation)
VALUES
    ('SUPERADMIN', CURRENT_TIMESTAMP);

INSERT INTO
    rubriques (nomrubrique, datecreation, resume)
VALUES
    ('Actualité', CURRENT_TIMESTAMP, null);

INSERT INTO
    rubriques (nomrubrique, datecreation, resume)
VALUES
    ('Evenements', CURRENT_TIMESTAMP, null);

INSERT INTO
    rubriques (nomrubrique, datecreation, resume)
VALUES
    ('Liens utiles', CURRENT_TIMESTAMP, null);

INSERT INTO
    rubriques (nomrubrique, datecreation, resume)
VALUES
    ('Photos et videos', CURRENT_TIMESTAMP, null);

INSERT INTO
    rubriques (nomrubrique, datecreation, resume)
VALUES
    ('Nous contacter', CURRENT_TIMESTAMP, null);

INSERT INTO
    rubriques (nomrubrique, datecreation, resume)
VALUES
    ('Description', CURRENT_TIMESTAMP, null);

INSERT INTO
    rubriques (nomrubrique, datecreation, resume)
VALUES
    (
        'Objectifs et axes d''intervetions',
        CURRENT_TIMESTAMP,
        null
    );

INSERT INTO
    rubriques (nomrubrique, datecreation, resume)
VALUES
    ('Composantes', CURRENT_TIMESTAMP, null);

INSERT INTO
    rubriques (nomrubrique, datecreation, resume)
VALUES
    ('Zones d''interventions', CURRENT_TIMESTAMP, null);

INSERT INTO
    rubriques (nomrubrique, datecreation, resume)
VALUES
    ('Contexte du sud', CURRENT_TIMESTAMP, null);

INSERT INTO
    rubriques (nomrubrique, datecreation, resume)
VALUES
    (
        'Organisation institutionnelles',
        CURRENT_TIMESTAMP,
        null
    );

INSERT INTO
    rubriques (nomrubrique, datecreation, resume)
VALUES
    (
        'Realisation par localite',
        CURRENT_TIMESTAMP,
        null
    );

INSERT INTO
    rubriques (nomrubrique, datecreation, resume)
VALUES
    (
        'Realisation par composante',
        CURRENT_TIMESTAMP,
        null
    );

INSERT INTO
    rubriques (nomrubrique, datecreation, resume)
VALUES
    ('SISE', CURRENT_TIMESTAMP, null);

INSERT INTO
    rubriques (nomrubrique, datecreation, resume)
VALUES
    ('Consultants', CURRENT_TIMESTAMP, null);

INSERT INTO
    rubriques (nomrubrique, datecreation, resume)
VALUES
    ('Fournitures', CURRENT_TIMESTAMP, null);

INSERT INTO
    rubriques (nomrubrique, datecreation, resume)
VALUES
    ('Services', CURRENT_TIMESTAMP, null);

INSERT INTO
    rubriques (nomrubrique, datecreation, resume)
VALUES
    ('Travaux', CURRENT_TIMESTAMP, null);

INSERT INTO
    rubriques (nomrubrique, datecreation, resume)
VALUES
    (
        'Idees de contributions pour le sud',
        CURRENT_TIMESTAMP,
        null
    );

INSERT INTO
    rubriques (nomrubrique, datecreation, resume)
VALUES
    ('Deposer une plainte', CURRENT_TIMESTAMP, null);

INSERT INTO
    rubriques (nomrubrique, datecreation, resume)
VALUES
    (
        'Statistique de gestion des plaintes',
        CURRENT_TIMESTAMP,
        null
    );

INSERT INTO
    rubriques (nomrubrique, datecreation, resume)
VALUES
    (
        'Composante1',
        CURRENT_TIMESTAMP,
        'Resume composante 1'
    );

INSERT INTO
    rubriques (nomrubrique, datecreation, resume)
VALUES
    (
        'Composante2',
        CURRENT_TIMESTAMP,
        'Resume composante 2'
    );

INSERT INTO
    rubriques (nomrubrique, datecreation, resume)
VALUES
    (
        'Composante3',
        CURRENT_TIMESTAMP,
        'Resume composante 3'
    );

INSERT INTO
    rubriques (nomrubrique, datecreation, resume)
VALUES
    (
        'Composante4',
        CURRENT_TIMESTAMP,
        'Resume composante 4'
    );

INSERT INTO
    rubriques (nomrubrique, datecreation, resume)
VALUES
    (
        'Composante5',
        CURRENT_TIMESTAMP,
        'Resume composante 5'
    );

INSERT INTO
    rubriques (nomrubrique, datecreation, resume)
VALUES
    ('Documentation', CURRENT_TIMESTAMP, null);

INSERT INTO
    users (email, mdp, datecreation, idrole, etat)
VALUES
    (
        'hathawayroot@gmail.com',
        '$2b$10$ESYxTyywjShr1hPVQaq8HeosRqVWecFFqfYQ8TpoPRsAjUTKDMoUe',
        '2023-09-20 04.07.17 AM',
        1,
        0
    );

INSERT INTO
    users (email, mdp, datecreation, idrole, etat)
VALUES
    (
        'haingonirina73@gmail.com',
        '$2b$10$ESYxTyywjShr1hPVQaq8HeosRqVWecFFqfYQ8TpoPRsAjUTKDMoUe',
        '2023-09-20 04.08.22 AM',
        1,
        0
    );