from flask import Flask, request
from flask_restful import Resource, Api

app = Flask(__name__)

api = Api(app)

todos = {}

todos_json = []

osoby = []

class HelloWorld(Resource):
    def get(self):
        return {'hello': 'world'}

class TodoSimple(Resource):
    def get(self, id):
        return {id: todos[id]}

    def put(self, id):
        todos[id] = request.form['data']
        return {id: todos[id]}

    def post(self, id):
        todos[id] = request.form['data']
        return {id: todos[id]}

class TodoJson(Resource):
    def get(self, id):
        return todos_json[id]
    
    def post(self, id):
        todos_json.append(request.json)
        id= len(todos_json)-1
        return {id:todos_json[id]}


class Osoba(Resource):
    def post(self):
        sent_data=request.json
        osoby.append(sent_data)
        print(sent_data)
    def get(self):
        return osoby

api.add_resource(HelloWorld, '/')
api.add_resource(TodoSimple, '/todo/<int:id>')
api.add_resource(TodoJson, '/json/<int:id>')
api.add_resource(Osoba,'/osoba')

if __name__ == '__main__':
    app.run(debug=True)