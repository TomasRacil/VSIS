# Druhý blok

V rámci druhého bloku se zaměříme na datábáze. Konkrétně pak na relační SQL databázi PostgreSQL a její obsluhu pomocí jazyka SQL.

## Databáze

Máme mnoho typů databází v závislosti na tom pro jaký typ dat jsou určeny jak jsou tyto data ukládána a nebo jak se obsluhují.

Typy databází:
| Typ           | Příklad   | Použití                      | Výhoda     | Nevýhoda        |
| :-----------: |:--------: | :--------------------------: | :--------: | :-------------: |
| key-value     | redis     | RAM caching                  | fast       | no queries      |
| wide column   | cassandra | storing historical data      | shema-less | no joins        |
| document      | mongo     | storing unstructurized data  | shema-less | no joins        |
| relational    | postgres  | storing structurized data    | ACID       | schema required |
| graph         | neo4j     | storing focused on relations | fast       | scalability     |
| search engine | lucene    | powering search engines      | fast       | no joins        |
| mulit-model   | fauna     | everywhere                   | everything | ...             |

## SQL

Pro obsluhu databází používáme dotazovací jazyky. V rámci relačních databází je využíváno SQL tedy structured query language. Samotný SQL se zkládá ze tří hlavních částí DDL data definition language, DML data manipulation language a DQL data query language.

### DDL

Slouží ke tvorbě a modifikaci struktur dabázového systému (schématu). Vytváření databází, tabulek, funkcí a triggeru. Např.:

```SQL
CREATE DROP ALTER RENAME 
```

### DML

Slouží k vkládání a úpravě dat, která ukládáme do databáze. Např.:

```SQL
INSERT UPDATE DELETE
```

### DQL

Slouží k výběru a čtení dat uložených v naší databázi. Např.:

```SQL
SELECT
```

## Model

Toto je model databáze na které budeme pracovat.
![ER diagram](http://vyuka.vojtaondryhal.cz/dbs/images/rdm-ebookstore.png)

## Úkoly

Pro ukázku SQL využijeme docker compose, který jsme vytvořili v předchozím bloku. Konkrétně toho, který se skládá z postgreSQL, pgAdmin4 a má zavedené perzistentní úložiště. Tento docker-compose je umístěn v tomto adresáři.

1. Jednoduché dotazy select (databa)
    1. Všechny autory.
    2. Autory, u kterých není vyplněno druhé jméno (middle_names).
    3. Autory, u kterých je vyplněno i druhé jméno (middle_names).
    4. Knihy, které mají aspoň 400 stran.
    5. Knihy, které mají počet stran mezi 200 a 400.
    6. Autory, u kterých příjmení začíná na R.
    7. Autory, u kterých v příjmení je na třetí pozici s (např. Musilová).
    8. Autory v abecedě po M.
2. Specifikace položek.
    1. Jméno a příjmení autorů spojeno v jednom sloupci.
    2. Příjmení a první písmeno ze jména u autorů (např. Valla T.).
3. Spojení
    1. Vyberte název knihy a název vydavatele.
    2. Vypište jméno a příjmení autora a název knihy. Setřiďte abecedně podle autora.
    3. Vypište všechny autory, kteří publikují ve vybraném nakladatelství.
4. Agregace
    1. Vypište průměrnou cenu knih.
    2. Vypište název nakladatele a průměrnou cenu knihy daného dodavatele.
    3. Vypište nakladatele a počet jejich knih.
    4. Vypište nakladatele, kteří mají aspoň dvě knihy.
5. Složitější dotazy
    1. Vypište všechny knihy, které jsou levnější než kniha s názvem "`Web Data Mining"'.
    2. Vypište všechny knihy, které jsou dražší než je průměrná cena knihy.
    3. Vypište všechny knihy, které jsou levnější než kniha s největším počtem stran.
    4. Vypište autory, kteří publikovali ve více než jednom nakladatelství.
    5. Který autor publikoval nejvíce knih (dopředu nevíme kolik to je knih)
    Jestliže je více autorů co publikovalo tento počet knih, zobrazte je všechny. Na výstupu uveďte dva sloupce. V prvním sloupci bude příjmení a jméno autora, v druhém počet knih.

6. Další úkoly

    1. Vytvoříme tabulku users, která bude zaznamenávat uživatelské údaje. (id, email (doménu a lokální část), username a password)
    2. Vytvoříme druhou tabulku, která bude zaznamenávat nějaké výsledky jednotlivých uživatelů. (userid, value)
    3. Vložíme hodnoty do tabulky users a tabulky results.
    4. Vložíme dodatečné udaje o jednotlivých osobách.
    5. Zobrazíme všechny záznamy v tabulkách.
    6. Změníme záznam v nějaké tabulce.
    7. Vytvořím view, které bude obsahovat celou emailovou adresu.
    8. Smažeme záznam v nějaké tabulce.
    9. Zobrazíme údaje o uživatelech a hodnotách uložených v tabulce results.
    10. Vytvoříme funkci která zkontorluje platnost emailové adresy.

## Potřebné příkazy

```SQL
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    local_part VARCHAR(64) NOT NULL UNIQUE,
    domain VARCHAR(255) NOT NULL,
    username VARCHAR(64) UNIQUE,
    password VARCHAR(60) NOT NULL
);
```

```SQL
CREATE TABLE IF NOT EXISTS results (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users (id) NOT NULL,
    value_numerical INTEGER,
    value_varchar VARCHAR(255),
    value_json JSON
);
```

```SQL
INSERT INTO users (local_part, domain, username, password) 
VALUES
( 'tomas.novak', 'email.com', 'tomasnov', '1234567890' ), 
( 'pepa.omacka', 'email.cz', 'pepaOM', '0987654321' ),
( 'radim.loucka', 'email.com', 'louradim', '1029384756' ),
( 'jakub.novy', 'email.au', 'novjak', '0192837465' )
;
```

```SQL
INSERT INTO results (user_id, value_numerical) 
VALUES
( 1, 123098), 
( 1, 57630),
( 2, 3456),
( 3, 2020)
;
INSERT INTO results (user_id, value_varchar) 
VALUES
( 1, 'nejaký text'), 
( 1, 'nejaký text 2'),
( 2, 'a text3'),
( 3, 'z text4')
;
INSERT INTO results (user_id, value_json) 
VALUES
( 1, '{ "some key": "some value", "items": {"product": "Beer","qty": 6}}'), 
( 1, '{ "other json": "one simple value" }'),
( 2, '{ "items": [{"product": "Beer","qty": 6},{"product": "Canned food","qty": 3}]}')
;
```

```SQL
SELECT * 
FROM users;
```

```SQL
UPDATE users
SET locla_part = 'tomas.racil', username= 'tomasracil'
WHERE id = 1;
```

```SQL
CREATE VIEW users_emails AS
SELECT id, concat(local_part,'@', domain) AS email
FROM users;
```

```SQL
DELETE 
FROM users 
WHERE id=4;
```

```SQL
SELECT *
FROM users
INNER JOIN results ON users.id=results.user_id
ORDER BY users.id ASC ;
```
