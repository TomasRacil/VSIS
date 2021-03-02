# Docker

Další část hodiny se bude zabývat problematikou kontejnerizace pomocí nástroje docker.

## Virtual machine vs Container

![VM](https://www.backblaze.com/blog/wp-content/uploads/2018/06/whats-the-diff-container-vs-vm.jpg)

## Úkoly command line

1. Spuštění prvního kontejneru hello-world
2. Stažení kontejneru alpine a spuštění v interaktivním módu
3. Vytvoření docker sítě pro propojení postgreSQL a PgAdmin
4. Spuštění kontejneru postgreSQL a spuštění v detach modu
5. Spuštění kontejneru PgAdmin
6. Přidání postgreSQL i PgAdmin do docker sítě
7. Propojení dockeru a PgAdmin
8. Odstranění postgres_test pgadmin_test alpine a sítě postgres_network

## Úkoly docker compose

1. Test

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
docker run -it alpine:latest
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
docker rm postgres_test pgadmin_test
```

```shell
docker network rm postgres_network
```
