from sqlalchemy import Column,Integer,String
from sqlalchemy.types import Date
from ..database import Base

class Users(Base):
    __tablename__ = "users"

    id = Column (Integer, Sequence('user_id_seq'), primary_key=True)
    username = Column (String(50))
    local_part= Column (String(64))
    domain = Column (String(254))
    passwords = Column (Integer)