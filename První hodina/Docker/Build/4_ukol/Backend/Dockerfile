FROM python:3

COPY requirements.txt /tmp/

RUN pip install --requirement /tmp/requirements.txt

WORKDIR /usr/src/backend

ENV FLASK_APP=app.py
ENV DATABASE_URL=db
ENV DATABASE_PORT=5432
ENV DATABASE_NAME=postgres
ENV DATABASE_USER=postgres
ENV DATABASE_PASSWORD=secret
ENV BACKEND_URL=0.0.0.0
ENV FLASK_RUN_PORT=5000
ENV FLASK_ENV=production

COPY /app/ .

CMD [ "flask", "run", "--host=0.0.0.0"]