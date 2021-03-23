from flask import Flask
#from flask_cors import CORS 
#from flask_bcrypt import Bcrypt 
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api
#from flask_migrate import Migrate 

from .REST import add_resources
from .database import db

class Flask_server:

    api = Api()
    #bcrypt = Bcrypt()
    #migration=Migrate()

    def __init__(self):
        """Initialize the core server."""
        self.init_main_server()
        self.init_rest_api()
        self.init_db()

        self.api.init_app(self.flask)
        db.init_app(self.flask)
        
        #self.db.init_app(self.server)
        #self.api = rest_api.init_app(self.flask)

        #self.api.add_resource(HelloWorld,'/hell')
        #migration.init_app(app,db)
        #bcrypt.init_app(app)

    def init_main_server(self):
        self.flask = Flask(__name__, instance_relative_config=True)
        self.flask.config.from_object('instance.config.Config')

    def init_db(self):
        
        pass

    def init_rest_api(self):
        add_resources(self.api)
    
    def run(self):
        self.flask.run(host='0.0.0.0')
