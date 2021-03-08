# Docker command line

Command line utility dockeru poskytuje velké množství funkcí pro kontejnerizaci aplikací. Cílem této sekce je představit základní funkce a vysvětlit na nich principy dockeru.

## Úkoly

1. Spuštění prvního kontejneru hello-world
2. Stažení kontejneru alpine a spuštění v interaktivním módu
3. Vytvoření docker sítě pro propojení postgreSQL a PgAdmin
4. Spuštění kontejneru postgreSQL a spuštění v detach modu
5. Spuštění kontejneru PgAdmin
6. Přidání postgreSQL i PgAdmin do docker sítě
7. Propojení dockeru a PgAdmin
8. Odstranění postgres_test pgadmin_test alpine a sítě postgres_network

## Potřebné příkazy

```shell
docker --help
```

```shell
docker run hello-world
```

```shell
docker pull alpine:latest
```

```shell
docker run --help
```

```shell
docker run --name alpine_test -it alpine:latest
```

```shell
docker exec -ti alpine_test /bin/bash
```

```shell
docker attach alpine_test
```

```shell
docker network create postgres_network
```

```shell
docker run --name postgres_test -e POSTGRES_PASSWORD=secret -e POSTGRES_USER=postgres -d postgres
```

```shell
docker ps
```

```shell
docker ps -a
```

```shell
docker run --name pgadmin_test -e PGADMIN_DEFAULT_EMAIL=admin@email.com -e PGADMIN_DEFAULT_PASSWORD=secret -p 80:80 -d dpage/pgadmin4
```

```shell
docker network connect postgres_network postgres_test
```

```shell
docker network connect postgres_network pgadmin_test
```

```shell
docker network inspect postgres_network 
```

```shell
docker stop postgres_test pgadmin_test
```

```shell
docker start postgres_test pgadmin_test
```

```shell
docker rm postgres_test pgadmin_test alpine_test
```

```shell
docker network rm postgres_network
```
