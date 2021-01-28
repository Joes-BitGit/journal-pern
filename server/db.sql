CREATE DATABASE journal;

CREATE TABLE entries (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  time DATE NOT NULL,
  location VARCHAR(180) NOT NULL,
  how INT NOT NULL CHECK(how >= 1 AND how <= 5),
  personal TEXT NOT NULL,
  professional TEXT NOT NULL,
  feel TEXT NOT NULL,
  goal_complete BOOLEAN NOT NULL DEFAULT FALSE
);

INSERT INTO entries(time, location,how,personal,professional,feel) 
VALUES ('January 8,1999', 'Los Angeles', 2, 'personally grateful for...', 'professionally grateful for...', 'what''s on your mind today?');

SELECT * FROM entries;

UPDATE entries SET time=$1, location=$2, how=$3, personal=$4, professional=$5, feel=$6 WHERE id=$7 returning *;

DELETE FROM entries WHERE id=$1;