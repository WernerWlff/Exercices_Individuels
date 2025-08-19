DROP TABLE IF EXISTS edusign;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email TEXT NOT NULL
);

INSERT INTO users (firstname, lastname, email) VALUES ('Ada', 'Lovelace', 'ada@test.fr');
INSERT INTO users (firstname, lastname, email) VALUES ('Beatrice', 'Worsley', 'beatrice@test.fr');
INSERT INTO users (firstname, lastname, email) VALUES ('Bella', 'Guerin', 'bella@test.fr');
INSERT INTO users (firstname, lastname, email) VALUES ('Barbara', 'Chase', 'barbara@test.fr');

CREATE TABLE edusign (
    edusign_id INTEGER PRIMARY KEY AUTOINCREMENT,
    created_at DATETIME NOT NULL,
    fk_id INTEGER,
    FOREIGN KEY (fk_id) REFERENCES users(user_id)
);

-- @block
--NIVEAU FACILE

-- 1. Sélectionner toutes les lignes de la table users
SELECT * FROM users;

--2. Sélectionner uniquement la ligne où le prénom est Ada dans la table
SELECT * FROM users
WHERE firstname = "Ada";

--3. Sélectionner les lignes dont la première lettre du prénom est un B dans la table users
SELECT * FROM users
WHERE firstname LIKE 'B%';

--4. Compter le nombre de ligne qu’il y a dans la table users
SELECT COUNT(*) FROM users;

--5. Compter le nombre de ligne dont la première lettre du prénom est un Bdans la table users
SELECT COUNT(*) FROM users
WHERE firstname LIKE 'B%';

--6. Afficher uniquement la colonne contenant le prénom de la table users.
SELECT firstname FROM users;