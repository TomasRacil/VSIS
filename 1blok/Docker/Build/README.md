# Dockerfile

Docker nám umožňuje také vytvořit vlastní obraz, založený na již existujícíh obrazech. Abyhcom mohli náš obraz sestavit musíme prvně definovat na jakém obraze bude založen a následně čím má být tento obraz rozšířen.

## Ukázka vrstvení obrazů

![VM](https://image.slidesharecdn.com/jvmincontainer-171004234557/95/best-practices-for-developing-deploying-java-applications-with-docker-10-638.jpg?cb=1507160837)

## Úkoly

1. Vytvoření jednoduchého obrazu založenéhoho na alpine, který vypíšee 'hello world' na konzoli.
2. Vytvoření obrazu založeného na obrazu node, který spustí jednoduchou webovou stránku
3. Vytvoření obrazu založeného na obrazu python, který stáhne modul Flask a následně vytvoří webovou stránku.
4. Nahrání obrazu do veřejneho repozitář a jeho stažení.
5. Pomocí docker compose a docker build vytvořit základní infrastrukturu našeho budoucího IS frontend(React), backend(Flask), db(PostgreSQL).

## Potřebné příkazy

```shell
docker build -t imageName:version .
```

```shell
docker run --name ukol2 -p 80:80 ukol2
```

```shell
docker login -u "tomasracil" -p "heslo123"
```

```shell
docker push tomasracil/flask:0.1
```

```shell
docker run --name flask_downloaded -p 80:5000 -d tomasracil/flask:0.1
```
