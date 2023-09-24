from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/cheese")
def cheese():
    return render_template("cheese.html")

@app.route("/matt")
def cheese():
    return render_template("cheese.html")

@app.route("/webMaker")
def cheese():
    return render_template("cheese.html")

app.run(host="0.0.0.0", port=80)
