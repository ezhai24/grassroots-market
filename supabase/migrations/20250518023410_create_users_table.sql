CREATE TABLE public.users (
  id int NOT NULL PRIMARY KEY,
  email varchar(320) NOT NULL,
  password_hash varchar(255) NOT NULL,
  created_at timestamp NOT NULL,
  updated_at timestamp NOT NULL
);

-- DOWN MIGRATION
-- DROP TABLE public.users
