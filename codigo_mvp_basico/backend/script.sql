CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    "name" VARCHAR(50),
    last_name VARCHAR(150) 
);

CREATE TABLE address (
    id SERIAL PRIMARY KEY,
    cep VARCHAR(16),
    "state" VARCHAR(150),
    district VARCHAR(150),
    street VARCHAR(150),
    "number" INT4,
    id_user INT4 REFERENCES "user"(id)
);

CREATE TABLE contact (
    id SERIAL PRIMARY KEY,
    cellphone VARCHAR(16),
    phone VARCHAR(16),
    email VARCHAR(150),
    id_user INT4 REFERENCES "user"(id)
);
