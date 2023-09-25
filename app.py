from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import text

db = SQLAlchemy()

app = Flask(__name__)

db_name = 'website.db'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + db_name
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
db.init_app(app)

@app.route("/")
def index():
     try:
        db.session.query(text('1')).from_statement(text('SELECT 1')).all()
        return '<h1>It works.</h1>'
    except Exception as e:
        # e holds description of the error
        error_text = "<p>The error:<br>" + str(e) + "</p>"
        hed = '<h1>Something is broken.</h1>'
        return hed + error_text
    # return render_template("index.html")

@app.route("/cheese")
def cheese():
    return render_template("cheese.html")

@app.route("/matt")
def matt():
    return render_template("matt.html")

@app.route("/webMaker")
def webMaker():
    return render_template("webMaker.html")

app.run(host="0.0.0.0", port=80)
