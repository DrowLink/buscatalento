from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    user_name = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)

class Perfil(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable= False)
    last_name= db.Column(db.String(50), nullable= False)
    phone=db.Column(db.String(30), nullable= True)
    edad=db.Column(db.Integer, nullable= False)
    state=db.Column(db.String(20), nullable= False)
    country=db.Column(db.String(20), nullable= False)
    user_id = db.Column(db.Integer, db.ForeignKey('User.id'))
    user = db.relationship(User)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }