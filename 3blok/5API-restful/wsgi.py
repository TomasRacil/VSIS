from app import Flask_server


#create_app()
flask_server = Flask_server()

#print (app)
if __name__ == "__main__":
    flask_server.run()