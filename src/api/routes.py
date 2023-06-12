"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Perfil
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():
 
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/user', methods=['POST', 'GET'])
def new_user():
    body = request.json
    nuevo_usuario = User(body['email'], body['password'], body['user_name'])
    print(nuevo_usuario)

    db.session.add(nuevo_usuario)
    db.session.commit()

    return jsonify(nuevo_usuario.serialize()), 200

@api.route('/perfil', methods=['POST', 'GET'])
def new_perfil():
    body= request.json        # lo que viene del request como un diccionario de python
    nuevo_perfil= Perfil( body['name'], body['last_name'], body['phone'], body['age'], body['country'], body['state'], 1)

    print(nuevo_perfil) #Convertido a objeto de python

    db.session.add(nuevo_perfil) #Memoria ram de sql
    db.session.commit() #inserta en la base de datos de postgre

    return jsonify(nuevo_perfil.serialize()), 200 

    # return jsonify({ "probando, si se ejecuto": "si se ejecutoo!"}), 200    