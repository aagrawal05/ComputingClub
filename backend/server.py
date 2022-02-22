from flask import Flask

app = Flask(__name__)

@app.route("/api/join/", methods=['GET', 'POST'])
def join():
    #print("Hello, World")

@app.route("/api/register/", methods=['GET', 'POST'])
def register():
    #print("Hello, World")

@app.route("/api/login/", methods=['GET', 'POST'])
def login():
    #print("Hello, World")

@app.route("/api/compile/", methods=['POST'])
def compile():
    #print("Hello, World")

@app.route("/api/upload", methods=['POST'])
def upload():
    #print("Hello, World")

@app.route("/api/users", methods=['GET'])
def users():
    #print("Hello, World")

@app.route("/api/profile", methods=['GET'])
def profile():
    #print("Hello, World")

@app.route("/api/submission", methods=['GET'])
def submissions():
    #print("Hello, World")

