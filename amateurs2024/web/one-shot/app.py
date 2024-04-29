from flask import Flask, request, make_response
import sqlite3
import os
import re

app = Flask(__name__)
db = sqlite3.connect(":memory:", check_same_thread=False)
flag = open("flag.txt").read()

# @app.route("/")
# def home():
#     return """
#     <h1>You have one shot.</h1>
#     <form action="/new_session" method="POST"><input type="submit" value="New Session"></form>
#     """

@app.route("/", methods=["GET"])
def new_session():
    id = os.urandom(8).hex()
    # id = "18c7312a0e8c156c"
    db.execute(f"CREATE TABLE table_{id} (password TEXT, searched INTEGER)")
    password = os.urandom(16).hex()
    # password = "6a6dbaffa87de4cb9d62c15e4361058c"
    print(f"id: {id}", flush=True)
    print(f"password: {password}", flush=True)
    db.execute(f"INSERT INTO table_{id} VALUES ('{password}', 0)")
    res = make_response(f"""
    <h2>Fragments scattered... Maybe a search will help?</h2>
    <form action="/search" method="POST">
        <input type="hidden" name="id" value="{id}">
        <input type="text" name="query" value="">
        <input type="submit" value="Find">
    </form>
""")
    res.status = 201

    return res

@app.route("/search", methods=["POST"])
def search():
    id = request.form["id"]
    if not re.match("[1234567890abcdef]{16}", id):
        return "invalid id"
    print(f"SELECT searched FROM table_{id}", flush=True)
    searched = db.execute(f"SELECT searched FROM table_{id}").fetchone()[0]
    if searched:
        return "you've used your shot."
    
    # db.execute(f"UPDATE table_{id} SET searched = 1")

    print(f"SELECT password FROM table_{id} WHERE password LIKE '%{request.form['query']}%'", flush=True)

    # Please inject
    query = db.execute(f"SELECT password FROM table_{id} WHERE password LIKE '%{request.form['query']}%'")
    print("".join([f"<li>{row[0][0]}</li>" for row in query.fetchall()]), flush=True)

    return f"""
    <h2>Your results:</h2>
    <ul>
    {"".join([f"<li>{row[0][0] + '*' * (len(row[0]) - 1)}</li>" for row in query.fetchall()])}
    </ul>
    <h3>Ready to make your guess?</h3>
    <form action="/guess" method="POST">
        <input type="hidden" name="id" value="{id}">
        <input type="text" name="password" placehoder="Password">
        <input type="submit" value="Guess">
    </form>
"""

@app.route("/guess", methods=["POST"])
def guess():
    id = request.form["id"]
    if not re.match("[1234567890abcdef]{16}", id):
        return "invalid id"
    result = db.execute(f"SELECT password FROM table_{id} WHERE password = ?", (request.form['password'],)).fetchone()
    if result != None:
        return flag
    
    db.execute(f"DROP TABLE table_{id}")
    return "You failed. <a href='/'>Go back</a>"

@app.errorhandler(500)
def ise(error):
    original = getattr(error, "original_exception", None)
    if type(original) == sqlite3.OperationalError and "no such table" in repr(original):
        return "that table is gone. <a href='/'>Go back</a>"
    return "Internal server error"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080, debug=True)
