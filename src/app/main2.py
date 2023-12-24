from flask import Flask, jsonify, request

import appli
import applir
import dbr

from flask_cors import CORS
import  db

app = Flask(__name__)
x="N"

CORS(app,resources={r"/*":{"origins":"*","methods":["GET","POST"]}})
@app.route("/can", methods=["POST"])
def fetch_try():

    try:

       ex= request.get_json()

       user = ex["user"]
       password=ex["password"]

       result = applir.check(user,password)
       if result=="Login Successful":
           print(appli.help(result,user))

       return jsonify({"result":result})

    except Exception as e:

        print("error")
print(x)

if __name__ == "__main__":
    dbr.create_tables()
    app.run(port=8008, debug=True, use_reloader=True)