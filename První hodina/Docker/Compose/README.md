# Docker-compose

Docker compose nám umožňuje zjednodušit ovládání skupin kontejnerů na dva jednoduché příkazy.

## Úkoly

1. Využití docker compose pro spuštění jednoduchého kontejneru obsahujícího alpine linux. Následně se dostat do terminálu tohoto kontejneru.
2. Vytvoření docker compose pro spuštění PostgreSQL a PgAdmin. Modifikujte přihlašovací údaje pro PostgreSQL a PgAdmin. Úspěšně se připojte na databázi pomocí PgAdmin a vašich přihlašovacích údajů.
3. Provést takové změny v předchozím příkladu aby se změny provedené v databázi a PgAdminu uložili uložili.
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