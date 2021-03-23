from .base import BaseModel
from ..db import db

class User(BaseModel):
    __tablename__ = 'users'
    username = db.Column(db.String(80), unique=True, nullable=True)
    local_part = db.Column(db.String(64),  nullable=False)
    domain = db.Column(db.String(255), nullable=False)
    password = db.Column(db.String(60),nullable=False)

    def __repr__(self):
        return f"<User(username='{self.username}', email='{self.local_part}@{self.domain}', nickname='{self.password}')>"