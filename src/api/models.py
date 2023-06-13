from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    user_name = db.Column(db.String(30), unique=True, nullable=False)

    def __init__(self, email, password, user_name):
        self.email = email
        self.password = password
        self.user_name = user_name

    def serialize(self):
        return {
            "email": self.email,
            "user_name": self.user_name
        }

class Perfil(db.Model):
    __tablename__ = 'perfil'
    id = db.Column(db.Integer, primary_key=True)  
    name = db.Column(db.String(30), nullable= False)
    last_name = db.Column(db.String(30), nullable= False)
    phone = db.Column(db.String(30), nullable= False)
    age = db.Column(db.String(30), nullable= False)
    country = db.Column(db.String(30), nullable= False)
    state = db.Column(db.String(30), nullable= False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship('User',  backref='perfil')

    def __init__(self, name, last_name, phone, age, country, state, user):
        self.name = name
        self.last_name = last_name
        self.phone = phone
        self.age = age
        self.country = country
        self.state = state
        self.user = user

    def serialize(self):
        return{
            "name": self.name,
            "last_name": self.last_name,
            "user_id": self.user_id
        }

class Talent(db.Model):
    __tablename__='talent'
    id = db.Column(db.Integer, primary_key=True)
    talent_name = db.Column(db.String(100), nullable=False)
    practice_time = db.Column(db.String(20), nullable=False)
    about_you = db.Column(db.String(100), nullable=False)
    categories_talent = db.Column(db.String(100), nullable=False)
    range_talent = db.Column(db.String(100), nullable=False)
    perfil_id = db.Column(db.Integer, db.ForeignKey('perfil.id'), nullable=False)
    perfil = db.relationship('Perfil')

    def __init__(self, talent_name, practice_time, about_you, categories_talent, range_talent, perfil):
        self.talent_name = talent_name
        self.practice_time = practice_time
        self.about_you = about_you
        self.categories_talent = categories_talent
        self.range_talent = range_talent
        self.perfil = perfil

    def serialize(self):
        return{
            "talent_name" : self.talent_name,
            "about_you": self.about_you,
            "perfil_id": self.perfil_id
        }

class Categories(db.Model):
    __tablename__='categories'
    id = db.Column(db.Integer, primary_key=True)
    categorie_name = db.Column(db.String(100), nullable= False)
    talent_id = db.Column(db.Integer, db.ForeignKey('talent.id'), nullable=False)
    talent = db.relationship('Talent')

    def __init__(self, categorie_name, talent):
        self.categorie_name = categorie_name
        self.talent = talent

    def serialize(self):
        return{
            "categorie_name": self.categorie_name,
            "talent_id": self.talent_id
        }


class Talent_request(db.Model):
    __tablename__='talent_request'
    id = db.Column(db.Integer, primary_key=True)
    request = db.Column(db.Boolean, default=True)
    perfil_id = db.Column(db.Integer, db.ForeignKey('perfil.id'), nullable=False)
    perfil = db.relationship('Perfil')

    def __init__(self, request, perfil):
        self.request = request
        self.perfil = perfil

    def serialize(self):
        return {"request": self.request,
        "perfil_id": self.perfil_id
        }







    # def __repr__(self):
    #     return f'<User {self.email}>'

    # def serialize(self):
    #     return {
    #         "id": self.id,
    #         "email": self.email,
    #         # do not serialize the password, its a security breach
    #     }