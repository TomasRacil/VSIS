from ..db import db

class BaseModel(db.Model):
    __abstract__ = True
    uid = db.Column(db.Integer, primary_key=True)