# První hodina

## 1. Git

Je zapotřebí [stáhnout](https://git-scm.com/downloads) a nainstalovat nejnovější verzi programu git pro váš OS. Také je potřeba se [zaregistrovat](https://github.com/join?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home) na GitHubu. Nakonec je potřeba správně nakonfigurovat vaši instalci git zadáním následujicích příkazů:

```shell
git config --global user.name "TomasRacil"
```

>TomasRacil nahraďte vašim uživatelským jménem použitým při registraci na github

```shell
git config --global user.email tomas.racil@unob.cz
```

>tomas.racil@unob.cz nahraďte emailem použitým při registraci na github

## 2. Docker

Je zapotřebí [stáhnout](https://www.docker.com/get-started) a nainstalovat nejnovější verzi programu docker pro váš OS.

## 3. VSCode

Je zapotřebí [stáhnout](https://code.visualstudio.com/) a nainstalovat nejnovější verzi programu VSCode pro váš OS.

Pro urychlení pozdější práce ...

```shell
docker pull alpine & docker pull dpage/pgadmin & docker pull node & docker pull postgres & docker pull python & docker pull mcr.microsoft.com/vscode/devcontainers/base & docker pull mcr.microsoft.com/vscode/devcontainers/python
``` 
