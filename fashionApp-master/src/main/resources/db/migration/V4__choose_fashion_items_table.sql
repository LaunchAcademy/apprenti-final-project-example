CREATE TABLE style
(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255)
);

CREATE TABLE budget
(
     id SERIAL PRIMARY KEY NOT NULL,
     price INTEGER
);

CREATE TABLE brand
(
   id SERIAL PRIMARY KEY NOT NULL,
   name VARCHAR(255)
);
CREATE TABLE clothingType
(
   id SERIAL PRIMARY KEY NOT NULL,
   name VARCHAR(255)
);