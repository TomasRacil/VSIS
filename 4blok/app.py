from flask import Flask, request
from flask_restful import Resource, Api

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@db/postgres'



api = Api(app)

'''
@app.route('/')
def hello():
    return 'Hello World!'

if __name__ == '__main__':
    app.run()
'''


class HelloWorld(Resource):
    def get(self):
        return {'hello': 'world'}

todos = {}

class TodoSimple(Resource):
    def get(self, id):
        return {id: todos[id]}

    def put(self, id):
        todos[id] = request.form['data']
        return {id: todos[id]}

    def post(self, id):
        todos[id] = request.form['data']
        return {id: todos[id]}


api.add_resource(HelloWorld, '/')
api.add_resource(TodoSimple, '/todo/<int:id>')

if __name__ == '__main__':
    app.run(debug=True)
