# Docker-compose

Docker compose nám umožňuje zjednodušit ovládání skupin kontejnerů na dva jednoduché příkazy.

## Úkoly

1. Využití docker compose pro spuštění jednoduchého kontejneru obsahujícího alpine linux. Následně se dostat do terminálu tohoto kontejneru.
2. Vytvoření docker compose pro spuštění PostgreSQL a PgAdmin. Modifikujte přihlašovací údaje pro PostgreSQL a PgAdmin. Úspěšně se připojte na databázi pomocí PgAdmin a vašich přihlašovacích údajů.
3. Provést takové změny v předchozím příkladu aby se změny provedené v databázi a PgAdminu uložili. Otestovat pomocí SQL příkazů.
4. Vytvoření docker compose skládajícího se z PostgreSQL, Backendem(Alpine) a Frontendem (Alpine). Vytvoření dvou samostatných sítí, které propojí PostgreSQL s Backendem a Backend s Frontendem.
5. Zabezpečit citlivé údaje hesla a uživatelská jména...

## Potřebné příkazy

```shell
docker-compose up
```

```shell
docker-compose start
```

```shell
docker-compose stop
```

```shell
docker-compose down
```

```SQL
CREATE TABLE users (
    username VARCHAR(20),
    email VARCHAR(320),
    password VARCHAR(60)
);
```

```SQL
CREATE TABLE users (
    username VARCHAR(20),
    email VARCHAR(320),
    password VARCHAR(60)
);
```

```SQL
INSERT INTO users
VALUES 
(user1, user1@email.com, secret1),
(user2, user2@email.com, secret2)
;
```

```SQL
SELECT * FROM users;
```
