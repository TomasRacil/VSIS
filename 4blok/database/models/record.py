from sqlalchemy import Column,Integer,String
from sqlalchemy.types import Date
from ..database import Base

class Record(Base):
    __tablename__ = "Records"

    id = Column (Integer, primary_key=True)
    date = Column (Date)
    country= Column (String)
    cases = Column (Integer)
    deaths = Column (Integer)
    recoveries = Column (Integer)