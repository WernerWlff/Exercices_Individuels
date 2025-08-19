-- DROP TABLE IF EXISTS users;
-- DROP TABLE IF EXISTS edusign;

-- -- First table created with drawsql
-- CREATE TABLE edusign (
--     edusign_id INTEGER PRIMARY KEY AUTOINCREMENT,
--     created_at DATETIME NOT NULL
-- );


-- CREATE TABLE users (
--     user_id INTEGER PRIMARY KEY AUTOINCREMENT,
--     firstname TEXT NOT NULL,
--     lastname TEXT NOT NULL,
--     email TEXT NOT NULL UNIQUE
-- );

-- -- Insert 4 famous in tech women into the tables
-- INSERT INTO users (firstname, lastname, email) VALUES ('Ada', 'Lovelace', 'ada@test.fr');
-- INSERT INTO users (firstname, lastname, email) VALUES ('Beatrice', 'Worsley', 'beatrice@test.fr');
-- INSERT INTO users (firstname, lastname, email) VALUES ('Bella', 'Guerin', 'bella@test.fr');
-- INSERT INTO users (firstname, lastname, email) VALUES ('Barbara', 'Chase', 'barbara@test.fr');

-- -- INSERT INTO edusign (edusign_firstname, edusign_lastname, edusign_email)
-- -- SELECT firstname, lastname, email FROM users

-- INSERT INTO edusign
-- SELECT * FROM users

-- @block
DROP TABLE IF EXISTS edusign;
DROP TABLE IF EXISTS users;

-- @block
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

-- @block
CREATE TABLE edusign (
    edusign_id INTEGER PRIMARY KEY AUTOINCREMENT,
    created_at DATETIME NOT NULL,
    fk_id INTEGER,
    FOREIGN KEY (fk_id) REFERENCES users(user_id)
);


--NIVEAU FACILE

-- @block
-- 1. Sélectionner toutes les lignes de la table users
SELECT * FROM users;

-- @block
--2. Sélectionner uniquement la ligne où le prénom est Ada dans la table
SELECT * FROM users
WHERE firstname = "Ada";

-- @block
--3. Sélectionner les lignes dont la première lettre du prénom est un B dans la table users
SELECT * FROM users
WHERE firstname LIKE 'B%';

-- @block
--4. Compter le nombre de ligne qu’il y a dans la table users
SELECT COUNT(*) FROM users;

-- @block
--5. Compter le nombre de ligne dont la première lettre du prénom est un Bdans la table users
SELECT COUNT(*) FROM users
WHERE firstname LIKE 'B%';

-- @block
--6. Afficher uniquement la colonne contenant le prénom de la table users.
SELECT firstname FROM users;