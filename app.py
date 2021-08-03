from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/")
def index(name=None):
    return render_template('index.html', name=name)

@app.route("/pong")
def pong(name=None):
    return render_template('pong.html', name=name)

@app.route("/flappyghost")
def flappyghost(name=None):
    return render_template('flappyghost.html', name=name)

@app.route("/catch")
def catch(name=None):
    return render_template('catch.html', name=name)

@app.route("/pong2")
def pong2(name=None):
    return render_template('pong2.html', name=name)

@app.route("/newflap")
def newflap(name=None):
    return render_template('newflap.html', name=name)