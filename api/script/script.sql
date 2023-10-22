CREATE SCHEMA bjzwpqtvt9ff7nkuxrxs;

CREATE TABLE bannieres (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombanniere VARCHAR(150) NOT NULL,
    chiffre INT NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE categories (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nomcategorie VARCHAR(150) NOT NULL,
    datecreation DATETIME NOT NULL DEFAULT (now ())
) ENGINE = InnoDB AUTO_INCREMENT = 7 DEFAULT CHARSET = utf8;

CREATE TABLE ideerecus (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    contenu LONGTEXT NOT NULL,
    datecreation DATETIME NOT NULL DEFAULT (now ()),
    descriptif MEDIUMTEXT
) ENGINE = InnoDB AUTO_INCREMENT = 3 DEFAULT CHARSET = utf8;

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nomrole VARCHAR(150) NOT NULL,
    datecreation DATETIME NOT NULL DEFAULT (now ())
) ENGINE = InnoDB AUTO_INCREMENT = 3 DEFAULT CHARSET = utf8;

CREATE TABLE rubriques (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nomrubrique VARCHAR(150) NOT NULL,
    datecreation DATETIME NOT NULL DEFAULT (now ()),
    resume MEDIUMTEXT
) ENGINE = InnoDB AUTO_INCREMENT = 27 DEFAULT CHARSET = utf8;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(150) NOT NULL,
    mdp VARCHAR(150) NOT NULL,
    datecreation DATETIME NOT NULL DEFAULT (now ()),
    idrole INT NOT NULL,
    etat INT NOT NULL DEFAULT (0),
    CONSTRAINT unq_users UNIQUE (email),
    CONSTRAINT fk_users_roles FOREIGN KEY (idrole) REFERENCES roles (id) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 4 DEFAULT CHARSET = utf8;

CREATE INDEX fk_users_roles ON users (idrole);

CREATE TABLE generales (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idrubrique INT NOT NULL,
    idcategorie INT NOT NULL,
    titre VARCHAR(256),
    contenu LONGTEXT,
    datecreation DATETIME NOT NULL DEFAULT (now ()),
    etat INT NOT NULL DEFAULT (0),
    datelimit DATE,
    CONSTRAINT fk_generales_categories FOREIGN KEY (idcategorie) REFERENCES categories (id) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT fk_generales_rubriques FOREIGN KEY (idrubrique) REFERENCES rubriques (id) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 91 DEFAULT CHARSET = utf8;

CREATE INDEX idx_generales ON generales (titre, id);

CREATE INDEX fk_generales_rubriques ON generales (idrubrique);

CREATE INDEX fk_generales_categories ON generales (idcategorie);

CREATE TABLE photos (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nomphoto VARCHAR(150) NOT NULL,
    datecreation DATETIME NOT NULL DEFAULT (now ()),
    idgenerale INT,
    CONSTRAINT fk_photos_generales FOREIGN KEY (idgenerale) REFERENCES generales (id) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 5 DEFAULT CHARSET = utf8;

CREATE INDEX idx_photos ON photos (idgenerale);

CREATE TABLE videos (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nomvideo VARCHAR(150) NOT NULL,
    datecreation DATETIME NOT NULL DEFAULT (now ()),
    idgenerale INT,
    CONSTRAINT fk_videos_generales FOREIGN KEY (idgenerale) REFERENCES generales (id) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE INDEX idx_videos ON videos (idgenerale);

CREATE TABLE documents (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idgenerale INT,
    nomdocument VARCHAR(150) NOT NULL,
    typedocument VARCHAR(150) NOT NULL,
    datecreation DATETIME NOT NULL DEFAULT (CURRENT_TIMESTAMP),
    CONSTRAINT fk_documents_generales FOREIGN KEY (idgenerale) REFERENCES generales (id) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE INDEX idx_documents ON documents (idgenerale);

CREATE VIEW generalec AS
select
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
    `g`.`etatannonce` AS `etatannonce`,
    `g`.`nbdownnational` AS `nbdownnational`,
    `g`.`nbdowninter` AS `nbdowninter`,
    `g`.`titulairemarche` AS `titulairemarche`,
    `g`.`montantmarche` AS `montantmarche`,
    `r`.`nomrubrique` AS `nomrubrique`,
    `r`.`datecreation` AS `datecreationrubrique`,
    `c`.`nomcategorie` AS `nomcategorie`,
    `c`.`datecreation` AS `datecreationcategorie`
from
    (
        (
            `bjzwpqtvt9ff7nkuxrxs`.`generales` `g`
            left join `bjzwpqtvt9ff7nkuxrxs`.`rubriques` `r` on ((`r`.`id` = `g`.`idrubrique`))
        )
        left join `bjzwpqtvt9ff7nkuxrxs`.`categories` `c` on ((`c`.`id` = `g`.`idcategorie`))
    );

CREATE VIEW userc AS
select
    `u`.`id` AS `id`,
    `u`.`email` AS `email`,
    `u`.`mdp` AS `mdp`,
    `u`.`datecreation` AS `datecreation`,
    `u`.`idrole` AS `idrole`,
    `u`.`etat` AS `etat`,
    `r`.`nomrole` AS `nomrole`
from
    (
        `bjzwpqtvt9ff7nkuxrxs`.`users` `u`
        join `bjzwpqtvt9ff7nkuxrxs`.`roles` `r` on ((`r`.`id` = `u`.`idrole`))
    );