-- ebookstore.sql
-- LC DBS

-- DROP TABLE public.book;
-- DROP TABLE public.publisher;
-- DROP TABLE public.author;
-- DROP TABLE public.book_author;


CREATE TABLE public.author (
    uid serial PRIMARY KEY,
    first_name character varying(50),
    last_name character varying(50),
    middle_names character varying(50)
);

CREATE TABLE public.publisher
(
    uid serial PRIMARY KEY,
    name character varying(255),
    status smallint DEFAULT 0,
    "user" text,
    changed timestamp without time zone
);

CREATE TABLE public.book
(
    uid serial PRIMARY KEY,
    title character varying(255),
    published numeric(4,0),
    publisher_id integer REFERENCES public.publisher (uid),
    pages integer,
    isbn character(13),
    price numeric(9,2),
    reduced_price numeric(9,2)
);


CREATE TABLE public.book_author (
    book_id integer REFERENCES public.book (uid),
    author_id integer REFERENCES public.author (uid)
);


INSERT INTO public.publisher VALUES (1, 'CZ.NIC', 0, NULL, NULL);
INSERT INTO public.publisher VALUES (2, 'Addison-Wesley', 0, NULL, NULL);
INSERT INTO public.publisher VALUES (3, 'Packt Publishing', 0, NULL, NULL);
INSERT INTO public.publisher VALUES (4, 'Springer', 0, NULL, NULL);
INSERT INTO public.publisher VALUES (5, 'Cambridge University Press', 0, NULL, NULL);
INSERT INTO public.publisher VALUES (6, 'Vutium', 0, NULL, NULL);
INSERT INTO public.publisher VALUES (7, 'TEST', 0, NULL, NULL);
INSERT INTO public.publisher VALUES (8, 'NOVÝ ZÁZNAM', 0, NULL, NULL);
INSERT INTO public.publisher VALUES (10, 'POKUS', 1, NULL, NULL);
INSERT INTO public.publisher VALUES (11, 'ODEON', 0, NULL, NULL);


INSERT INTO public.author VALUES (1, 'Ramez', 'Elmasri', NULL);
INSERT INTO public.author VALUES (2, 'Shamkant', 'Navathe', 'B.');
INSERT INTO public.author VALUES (3, 'Martin', 'Mareš', NULL);
INSERT INTO public.author VALUES (4, 'Tomáš', 'Valla', NULL);
INSERT INTO public.author VALUES (5, 'Sebastian', 'Raschka', NULL);
INSERT INTO public.author VALUES (6, 'Bing', 'Liu', NULL);
INSERT INTO public.author VALUES (7, 'Jana', 'Musilová', NULL);
INSERT INTO public.author VALUES (8, 'Pavla', 'Musilová', NULL);
INSERT INTO public.author VALUES (9, 'Jayadevan', 'Maymala', NULL);


INSERT INTO public.book VALUES (1, 'Průvodce labyrintem algoritmů', 2017, 1, 490, '9788088168195', 560.00, NULL);
INSERT INTO public.book VALUES (2, 'Fundamentals of Database Systems', 2011, 2, 1200, '9780136086208', 2300.00, NULL);
INSERT INTO public.book VALUES (3, 'Python Machine Learning', 2015, 3, 456, '9781783555130', 690.00, NULL);
INSERT INTO public.book VALUES (4, 'Web Data Mining', 2011, 4, 624, '9783642194597', 580.00, NULL);
INSERT INTO public.book VALUES (5, 'Sentiment Analysis', 2015, 5, 381, '9781107017894', 440.00, NULL);
INSERT INTO public.book VALUES (6, 'Matematika pro porozumění a praxi I.', 2009, 6, 339, '9788021436312', 480.00, NULL);
INSERT INTO public.book VALUES (7, 'Matematika pro porozumění a praxi II.', 2012, 6, 697, '9788021440715', 650.00, NULL);
INSERT INTO public.book VALUES (8, 'PostgreSQL for Data Architects', 2015, 3, 247, '9781783288601', 1230.00, NULL);


INSERT INTO public.book_author VALUES (1, 3);
INSERT INTO public.book_author VALUES (1, 4);
INSERT INTO public.book_author VALUES (2, 1);
INSERT INTO public.book_author VALUES (2, 2);
INSERT INTO public.book_author VALUES (3, 5);
INSERT INTO public.book_author VALUES (4, 6);
INSERT INTO public.book_author VALUES (5, 6);
INSERT INTO public.book_author VALUES (6, 7);
INSERT INTO public.book_author VALUES (6, 8);
INSERT INTO public.book_author VALUES (7, 7);
INSERT INTO public.book_author VALUES (7, 8);
INSERT INTO public.book_author VALUES (8, 9);